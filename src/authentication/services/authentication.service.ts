import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Response, Http} from "@angular/http";
import {AuthenticationResult} from "../types/AuthenticationResult";
import {Account} from "../types/Account";
import {API_URL, LOCALSTORAGE_AUTH} from "../../configuration";
import * as toastr from "toastr";
import {Observable} from "rxjs/Rx";
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
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

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
    }

    private handleAuthenticationResult(obs$: Observable<AuthenticationResult>): Observable<AuthenticationResult> {
        obs$.subscribe((result: AuthenticationResult) => {
            window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
            toastr.success("successfully logged in!");
        }, (errorResponse: Response) => {
            toastr.error(errorResponse.json().error);
        });
        return obs$;
    }
}