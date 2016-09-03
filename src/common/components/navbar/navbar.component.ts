import {Component} from "@angular/core";
@Component({
    selector: "navbar",
    template: `
        <ul>
            <li><a [routerLink]="['/stock']">My wines</a></li>
            <li><a [routerLink]="['/about']" >About</a></li>
        </ul>
                   `
})
export class NavbarComponent {
}