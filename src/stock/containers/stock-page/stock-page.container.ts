import {Component} from "@angular/core";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {Wine} from "../../entities/Wine";
import {StockService} from "../../services/stock.service";
import * as _ from "lodash";
@Component({
    selector: "stock-page",
    template: `    
        <default-page>
            <collapsable-sidebar class="hidden-sm hidden-xs">
                <favorite-wines (setStock)="onSetStock($event)" [wines]="favoriteWines$ | async">
                </favorite-wines>
            </collapsable-sidebar>
            <main>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="input-group">
                            <input type="text" class="form-control input-lg" [formControl]="searchCtrl"/>
                            <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <a class="btn btn-primary btn-lg btn-block" [routerLink]="['/stock/add']">
                            <i class="fa fa-plus-circle"></i>&nbsp;Add
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h2>
                            <i class="fa fa-user"></i>&nbsp;My wines
                            <span class="badge badge-primary">{{numberOfWines$|async}}</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <wine-results [wines]="matchingWines$|async"
                                      (remove)="onRemove($event)"
                                      (setRate)="onSetRate($event)"
                                      (setStock)="onSetStock($event)">
                        </wine-results>
                    </div>
                </div>
            </main>
        </default-page>
                     `
})
export class StockPageContainer {
    searchCtrl = new FormControl("");
    wines$ = this.store.select(state => state.data.wines);
    favoriteWines$ = this.wines$.map(wines => _.orderBy(wines, ["myRating"], ["desc"]));
    matchingWines$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.wines$,
        (term: string, wines: Array<Wine>) => {
            return wines.filter(wine => wine.name.toLowerCase().indexOf(term) > -1);
        });
    constructor(private store: Store<ApplicationState>, private stockService: StockService){

    }

    onRemove(wine: Wine): void {
        this.stockService.remove(wine);
    }

    onSetRate(item: {wine: Wine, value: number}): void {
        this.stockService.setRate(item.wine, item.value);
    }

    onSetStock(item: {wine: Wine, value: number}): void {
        this.stockService.setStock(item.wine, item.value);
    }
}
