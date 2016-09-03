import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation, OnInit, OnDestroy} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {AppSandbox} from "../../app.sandbox";
@Component({
    selector: "application",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    providers: [Title],
    template: `        
        <navbar [account]="account$|async" (logout)="onLogout()" *ngIf="isAuthenticated$|async"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy$|async"></spinner>
        <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
           `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    isAuthenticated$ = this.sb.isAuthenticated$;
    account$ = this.sb.account$;
    isBusy$ = this.sb.isBusy$;

    private subscriptions: Array<Subscription> = [];
    constructor(private sb: AppSandbox, private router: Router){
    }

    onLogout(): void{
        this.router.navigate(["/authentication"]);
        this.sb.logout();
    }

    ngOnInit(): void {
        this.sb.checkInitialAuthentication();
        this.subscriptions.push(this.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.sb.loadWines();
            }
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}