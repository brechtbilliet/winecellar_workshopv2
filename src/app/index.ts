import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {AboutModule} from "../about/index";
import {StockModule} from "../stock/index";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {rootReducer} from "../statemanagement/rootReducer";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
@NgModule({
    imports: [BrowserModule, AboutModule, StockModule, routing, CommonLogicModule, StoreModule.provideStore(rootReducer),
        StoreLogMonitorModule, StoreDevtoolsModule.instrumentStore({
        monitor: useLogMonitor({
            visible: false,
            position: "right"
        })
    })],
    declarations: [ApplicationContainer],
    bootstrap: [ApplicationContainer],
})
export class AppModule {
}