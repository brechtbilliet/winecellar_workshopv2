import {Component} from "@angular/core";
import {Account} from "../../types/Account";
import {Credentials} from "../../types/Credentials";
import {Router} from "@angular/router";
@Component({
    selector: "authentication",
    template: `
    <div class="container">
        <panel [header]="'You are not authenticated!'">
            <login *ngIf="curTab === 0" (authenticate)="login($event)" [isBusy]="isBusy$|async"></login>
            <register *ngIf="curTab === 1" (authenticate)="register($event)" [isBusy]="isBusy$|async"></register>
            <a href="javascript:void(0)" (click)="enableTab(1)" *ngIf="curTab===0">I don't have an account yet</a>
            <a href="javascript:void(0)" (click)="enableTab(0)" *ngIf="curTab===1">I have an account already</a>
        </panel>
    </div>
      `
})
export class AuthenticationContainer {
    curTab: number = 0;


    constructor(private router: Router) {
    }

    enableTab(tabIndex: number): void {
        this.curTab = tabIndex;
    }

    login(credentials: Credentials): void {
    }

    register(account: Account): void {
    }
}