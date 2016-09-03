import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {AboutModule} from "../about/index";
import {StockModule} from "../stock/index";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";
import {AuthenticationModule} from "../authentication/index";
@NgModule({
    imports: [BrowserModule, AboutModule, StockModule, routing, CommonLogicModule, AuthenticationModule],
    declarations: [ApplicationContainer],
    bootstrap: [ApplicationContainer]
})
export class AppModule {
}