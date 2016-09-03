import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {Router} from "@angular/router";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
@Component({
    selector: "application",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    providers: [Title],
    template: `        
        <navbar [account]="account$|async" (logout)="onLogout()" *ngIf="isAuthenticated$|async"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy"></spinner>
        <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
           `
})
export class ApplicationContainer implements OnInit {
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    account$ = this.store.select(state => state.data.authentication.account);
    isBusy: boolean = true;

    constructor(private store: Store<ApplicationState>, private authenticationService: AuthenticationService, private router: Router){
    }

    onLogout(): void{
        this.router.navigate(["/authentication"]);
        this.authenticationService.logout();
    }

    ngOnInit(): void {
        this.authenticationService.checkInitialAuthentication();
    }
}