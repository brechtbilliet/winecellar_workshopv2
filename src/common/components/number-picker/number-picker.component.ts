import {Component} from "@angular/core";
@Component({
    selector: "number-picker",
    styles: [require("./number-picker.component.scss")],
    template: `
        <button type="button" class="btn btn-primary btn-sm">
           <i class="fa fa-chevron-down"></i>
        </button>
       <span class="amount">5</span>
        <button type="button" class="btn btn-primary btn-sm">
            <i class="fa fa-chevron-up"></i>
        </button>
    `
})
export class NumberPickerComponent {

}