import {Component} from "@angular/core";
@Component({
    selector: "stock-page",
    template: `        
        <default-page>
            <main>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="input-group">
                            <input type="text" class="form-control input-lg"/>
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
                            <span class="badge badge-primary">500</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <panel [header]="'Hi there'">
                            <number-picker [amount]="amount" (setAmount)="onSetAmount($event)"></number-picker>
                            <rating [rating]="rating" [big]="true" (setRate)="onSetRate($event)"></rating>
                        </panel>
                    </div>
                </div>
            </main>
        </default-page>
             `
})
export class StockPageContainer {
    amount = 5;
    rating = 3;

    onSetAmount(amount: number): void {
        this.amount = amount;
    }

    onSetRate(rating: number): void {
        this.rating = rating;
    }
}
