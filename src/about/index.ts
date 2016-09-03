import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AboutPageContainer} from "./containers/about-page/about-page.container";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";

@NgModule({
    imports: [RouterModule, CommonModule, routing, CommonLogicModule],
    declarations: [AboutPageContainer]
})
export class AboutModule {
}

