import {Component, Output, EventEmitter, Input} from "@angular/core";
import {Account} from "../../types/Account";
@Component({
    selector: "register",
    styles: [require("./register.component.scss")],
    template: `
        <div class="form-horizontal">
            <button type="button" class="btn btn-primary btn-block btn-lg" (click)="onSubmit()">
                <i class="fa fa-user"></i>&nbsp;Sign up
            </button>
        </div>
       `
})
export class RegisterComponent {
    @Output() authenticate = new EventEmitter<Account>();
    @Input() isBusy: boolean;

    onSubmit(): void {
        this.authenticate.emit({
            firstName: "Brecht",
            lastName: "Brecht",
            login: "test",
            password: "test"
        });
    }
}