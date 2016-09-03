import {Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Product} from "../../services/wineCom.service";
@Component({
    selector: "detail-wine-form",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <form [formGroup]="wineForm" class="form-horizontal col-sm-12" (ngSubmit)="onSubmit()">
            <wine-search [control]="wineForm.controls.name" (selectWine)="onSelectWine($event)"></wine-search>
            <form-group-textarea [label]="'Description'" [control]="wineForm.controls.description"
                                 [placeholder]="'Enter description'">
            </form-group-textarea>
            <form-group-textbox [label]="'Region'" [control]="wineForm.controls.region" [placeholder]="'Enter region'">
            </form-group-textbox>
            <form-group-textbox [label]="'Price'" [control]="wineForm.controls.price" [placeholder]="'Enter price'">
            </form-group-textbox>
            <form-group-content [label]="'Rating'">
                <rating [big]="true" [rating]="wine.myRating" (setRate)="setRate($event)"></rating>
            </form-group-content>
            <form-group-content [label]="'Number in stock'">
                <number-picker [amount]="wine.inStock" (setAmount)="setInStock($event)"></number-picker>
            </form-group-content>
            <div class="form-group has-feedback">
                <div class=" col-sm-offset-4 col-sm-8"><img src="{{wine.image}}" alt=""/></div>
            </div>
            <form-group-footer>
                <button type="submit" [disabled]="!wineForm.valid" class="btn btn-primary btn-lg">
                    <i class="fa fa-save"></i>&nbsp;Save wine
                </button>
                <a [routerLink]="['/stock']" class="btn btn-warning btn-lg"><i class="fa fa-undo"></i>&nbsp;Cancel</a>
            </form-group-footer>
        </form>
     `
})
export class DetailWineFormComponent implements OnInit {
    @Input() wine = new Wine();
    @Output() onSave = new EventEmitter<Wine>();

    constructor(private formBuilder: FormBuilder) {

    }

    wineForm: FormGroup;

    ngOnInit(): void {
        this.wineForm = this.formBuilder.group({
            name: [this.wine.name, Validators.required],
            description: [this.wine.description],
            region: [this.wine.region],
            price: [this.wine.price]
        });
    }

    onSubmit(): void {
        this.onSave.emit(Object.assign(this.wine, this.wineForm.value));
    }

    setRate(rate: number): void {
        this.wine.myRating = rate;
    }

    setInStock(inStock: number): void {
        this.wine.inStock = inStock;
    }

    onSelectWine(wine: Product): void {
        this.wineForm.setValue({
            name: wine.name,
            description: wine.description,
            price: wine.priceRetail,
            region: wine.appellation ? wine.appellation.region.name : ""
        });
        this.wine.image = wine.labels.length > 0 ? wine.labels[0].url : null;
    }
}