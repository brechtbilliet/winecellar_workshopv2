import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from "@angular/core";
import {Credentials} from "../../types/Credentials";
@Component({
    selector: "login",
    styles: [require("./login.component.scss")],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <form class="form-horizontal">
            <button type="button" (click)="onSubmit()" class="btn btn-primary btn-block btn-lg">
                <i class="fa fa-sign-in"></i>&nbsp;Sign in
            </button>
        </form>
`
})
export class LoginComponent {
    @Output() authenticate = new EventEmitter<Credentials>();
    @Input() isBusy: boolean;
    onSubmit(): void {
        this.authenticate.emit({login: "johndoe", password: "testtest"});
    }
}