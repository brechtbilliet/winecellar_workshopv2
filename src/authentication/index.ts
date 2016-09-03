import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthenticationContainer} from "./containers/authentication/authentication.container";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CommonLogicModule} from "../common/index";
import {routing} from "./routes";
import {AuthenticationService} from "./services/authentication.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AuthenticationSandbox} from "./authentication.sandbox";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule, HttpModule, CommonLogicModule, routing],
    declarations: [AuthenticationContainer, LoginComponent, RegisterComponent],
    exports: [AuthenticationContainer],
    providers: [AuthenticationService, AuthenticationSandbox]
})
export class AuthenticationModule {
}

