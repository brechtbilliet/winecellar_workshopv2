import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AboutPageContainer} from "./containers/about-page/about-page.container";
import {CommonLogicModule} from "../common/index";

@NgModule({
    imports: [RouterModule, CommonModule, CommonLogicModule],
    declarations: [AboutPageContainer],
    exports: [AboutPageContainer]
})
export class AboutModule {
}

