import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {Account} from "../../../authentication/types/Account";
@Component({
    selector: "application",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    providers: [Title],
    template: `        
        <navbar [account]="account" (logout)="onLogout()"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy"></spinner>
        <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
        `
})
export class ApplicationContainer {
    account: Account = {
        firstName: "Brecht",
        lastName: "Billiet",
        login: "brechtbilliet"
    };
    isBusy: boolean = true;

    onLogout(): void{
        alert("log me out")
    }
}