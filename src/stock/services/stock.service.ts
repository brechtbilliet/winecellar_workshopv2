import {Store} from "@ngrx/store";
import * as toastr from "toastr";
import {Injectable} from "@angular/core";
import {Response, Headers, RequestOptionsArgs, RequestOptions, Http} from "@angular/http";
import {Wine} from "../entities/Wine";
import {ApplicationState} from "../../statemanagement/state/ApplicationState";
import {API_URL} from "../../configuration";
import {Observable} from "rxjs";
import {
    DATA_WINES_REMOVE, DATA_WINES_UPDATE, DATA_WINES_UPDATE_RATE,
    DATA_WINES_UPDATE_STOCK, DATA_WINES_ADD_ALL, DATA_WINES_ADD
} from "../../statemanagement/actionTypes";

@Injectable()
export class StockService {
    constructor(private store: Store<ApplicationState>,
                private http: Http) {
    }

    add(wine: Wine): void {
        let result$ = this.http.post(`${API_URL}/wines`, wine, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
        result$.subscribe(resp => this.store.dispatch({type: DATA_WINES_ADD, payload: {wine: resp}}), resp => this.onError(resp));
    }

    update(_id: string, wine: Wine): void {
        this.store.dispatch({type: DATA_WINES_UPDATE, payload: {_id, wine}});
        this.http.put(`${API_URL}/wines/${_id}`, wine, this.authorizedHttpOptions()).subscribe(() => {
        }, this.onError);
    }

    remove(wine: Wine): void {
        this.store.dispatch({type: DATA_WINES_REMOVE, payload: {_id: wine._id}});
        this.http.delete(`${API_URL}/wines/${wine._id}`, this.authorizedHttpOptions()).subscribe(() => {
        }, this.onError);
    }

    load(): void {
        let result$ = this.http.get(`${API_URL}/wines`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
        result$.subscribe(wines => this.store.dispatch({type: DATA_WINES_ADD_ALL, payload: {wines}}), (resp: Response) => this.onError(resp));
    }

    fetchWine(id: string): Observable<Wine> {
        return this.http.get(`${API_URL}/wines/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    setRate(wine: Wine, myRating: number): void {
        let _id = wine._id;
        this.store.dispatch({type: DATA_WINES_UPDATE_RATE, payload: {_id, myRating}});
        let newWine: Wine = Object.assign({}, wine, {myRating: myRating});
        this.http.put(`${API_URL}/wines/${wine._id}`, newWine, this.authorizedHttpOptions()).subscribe(() => {
        }, this.onError);
    }

    setStock(wine: Wine, inStock: number): void {
        let _id = wine._id;
        this.store.dispatch({type: DATA_WINES_UPDATE_STOCK, payload: {_id, inStock}});
        let newWine: Wine = Object.assign({}, wine, {inStock: inStock});
        this.http.put(`${API_URL}/wines/${wine._id}`, newWine, this.authorizedHttpOptions()).subscribe(() => {
        }, this.onError);
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let state: ApplicationState;
        this.store.take(1).subscribe(s => state = s);
        let headers = new Headers({
            authorization: `Bearer ${state.data.authentication.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }

    private onError(resp: Response): void {
        toastr.error(resp.json().message);
    }
}