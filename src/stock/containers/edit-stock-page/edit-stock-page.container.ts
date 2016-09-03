import {Component} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
@Component({
    selector: "edit-stock-page",
    template: `
        <default-page>
            <main>
                <div class="row">
                    <div class="col-sm-12">
                        <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                    </div>
                </div>
                <div class="row" *ngIf="(editWine$|async)">
                    <detail-wine-form [wine]="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
                </div>
            </main>
        </default-page>
             `
})
export class EditStockPageContainer {
    id = this.route.snapshot.params["id"];
    editWine$ = this.stockService.fetchWine(this.id).publishLast().refCount();

    constructor(public stockService: StockService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    onSave(wine: Wine): void {
        this.stockService.update(this.id, wine);
        this.router.navigate(["/stock"]);
    }
}