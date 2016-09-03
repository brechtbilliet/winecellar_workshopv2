import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {AboutModule} from "../about/index";
import {StockModule} from "../stock/index";
@NgModule({
    imports: [BrowserModule, AboutModule, StockModule],
    declarations: [ApplicationContainer],
    bootstrap: [ApplicationContainer],
})
export class AppModule {
}