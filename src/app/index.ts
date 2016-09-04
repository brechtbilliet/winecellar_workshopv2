import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {AboutModule} from "../about/index";
import {StockModule} from "../stock/index";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";
import {AuthenticationModule} from "../authentication/index";
import {rootReducer} from "../statemanagement/rootReducer";
import {StoreModule, Store} from "@ngrx/store";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RequestOptions, XHRBackend, Http} from "@angular/http";
import {CustomHttp} from "./customHttp";
import {ApplicationState} from "../statemanagement/state/ApplicationState";
import {AppSandbox} from "./app.sandbox";
import {RouterModule} from "@angular/router";
@NgModule({
    imports: [BrowserModule, AboutModule, StockModule, RouterModule, routing, CommonLogicModule, AuthenticationModule, StoreModule.provideStore(rootReducer),
        StoreLogMonitorModule, StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: "right"
            })
        })],
    declarations: [ApplicationContainer],
    bootstrap: [ApplicationContainer],
    providers: [AppSandbox, {
        provide: Http,
        useFactory: (backend: XHRBackend,
                     defaultOptions: RequestOptions,
                     store: Store<ApplicationState>) => new CustomHttp(backend, defaultOptions, store),
        deps: [XHRBackend, RequestOptions, Store]
    }]
})
export class AppModule {
}