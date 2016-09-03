import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {Account} from "../../../authentication/types/Account";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {Router} from "@angular/router";
@Component({
    selector: "application",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    providers: [Title],
    template: `        
        <navbar [account]="account" (logout)="onLogout()"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy"></spinner>
            `
})
export class ApplicationContainer {
    account: Account = {
        firstName: "Brecht",
        lastName: "Billiet",
        login: "brechtbilliet"
    };
    isBusy: boolean = true;

    constructor(private authenticationService: AuthenticationService, private router: Router){

    }

    onLogout(): void{
        this.router.navigate(["/authentication"]);
        this.authenticationService.logout();
    }
}