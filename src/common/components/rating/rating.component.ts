import {Component} from "@angular/core";
@Component({
    selector: "rating",
    styles: [require("./rating.component.scss")],
    template: `
        <i class="fa fa-star rating"></i>
        <i class="fa fa-star rating"></i>
        <i class="fa fa-star rating"></i>
        <i class="fa fa-star rating"></i>
        <i class="fa fa-star rating"></i>
    `
})
export class RatingComponent {

}