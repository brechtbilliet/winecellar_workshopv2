import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Wine} from "../../entities/Wine";
import {StockService} from "../../services/stock.service";
@Component({
    selector: "add-stock-page",
    template: `
       <default-page>
            <main>
                <div class="row">
                    <div class="col-sm-12">
                        <h1><i class="fa fa-plus-circle"></i>&nbsp;Add wine</h1>
                    </div>
                </div>
                <div class="row">
                    <detail-wine-form (onSave)="onSave($event)"></detail-wine-form>
                </div>
            </main>
        </default-page>
  `
})
export class AddStockPageContainer {
    constructor(private stockService: StockService, private router: Router) {
    }

    onSave(wine: Wine): void {
        this.stockService.add(wine);
        this.router.navigate(["/stock"]);
    }
}