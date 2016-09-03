import {Component} from "@angular/core";
@Component({
    selector: "stock-page",
    template: `
        stock page
       <a [routerLink]="['/stock/add']">Add wine</a>
       <a [routerLink]="['/stock', 'dummyId']">Edit wine</a>
     `
})
export class StockPageContainer {

}
