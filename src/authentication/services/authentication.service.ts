import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Response, Http} from "@angular/http";
import {AuthenticationResult} from "../types/AuthenticationResult";
import {Account} from "../types/Account";
import {API_URL, LOCALSTORAGE_AUTH} from "../../configuration";
import * as toastr from "toastr";
import {Observable} from "rxjs/Rx";
import {ApplicationState} from "../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {
    DATA_AUTHENTICATION_SET_AUTHENTICATION,
    DATA_AUTHENTICATION_CLEAR_AUTHENTICATION
} from "../../statemanagement/actionTypes";
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private store: Store<ApplicationState>) {
    }

    authenticate(credentials: Credentials): Observable<AuthenticationResult> {
        return this.handleAuthenticationResult(
            this.http.post(`${API_URL}/authentication/login`, credentials).publishReplay(1).refCount().map(resp => resp.json())
        );
    }

    register(account: Account): Observable<AuthenticationResult> {
        return this.handleAuthenticationResult(
            this.http.post(`${API_URL}/authentication/register`, account).publishReplay(1).refCount().map(resp => resp.json())
        );
    }

    checkInitialAuthentication(): void {
        let localStorageObj = window.localStorage.getItem(LOCALSTORAGE_AUTH);
        if (localStorageObj) {
            let authenticationResult = JSON.parse(localStorageObj);
            // evil fix for bug in @ngrx/dev-tools
            // https://github.com/ngrx/store-devtools/issues/25
            setTimeout(() => {
                this.store.dispatch({type: DATA_AUTHENTICATION_SET_AUTHENTICATION, payload: authenticationResult});
            });
        }
    }

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch({type: DATA_AUTHENTICATION_CLEAR_AUTHENTICATION});
    }

    private handleAuthenticationResult(obs$: Observable<AuthenticationResult>): Observable<AuthenticationResult> {
        obs$.subscribe((authenticationResult: AuthenticationResult) => {
            window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(authenticationResult));
            toastr.success("successfully logged in!");
            this.store.dispatch({type: DATA_AUTHENTICATION_SET_AUTHENTICATION, payload: authenticationResult});
        }, (errorResponse: Response) => {
            toastr.error(errorResponse.json().error);
        });
        return obs$;
    }
}