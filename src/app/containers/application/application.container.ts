import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation, OnInit, OnDestroy} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {Account} from "../../../authentication/types/Account";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {Router} from "@angular/router";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs/Rx";
@Component({
    selector: "application",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    providers: [Title],
    template: `        
        <navbar [account]="account" (logout)="onLogout()" *ngIf="isAuthenticated"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy"></spinner>
        <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
           `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    isAuthenticated: boolean;
    account: Account;
    isBusy: boolean = true;

    private subscriptions: Array<Subscription> = [];

    constructor(private store: Store<ApplicationState>, private authenticationService: AuthenticationService, private router: Router){
        this.subscriptions.push(this.store.subscribe((state: ApplicationState) => {
            this.isAuthenticated = state.data.authentication.isAuthenticated;
            this.account = state.data.authentication.account;
        }));
    }

    onLogout(): void{
        this.router.navigate(["/authentication"]);
        this.authenticationService.logout();
    }

    ngOnInit(): void {
        this.authenticationService.checkInitialAuthentication();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}