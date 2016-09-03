import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AboutPageContainer} from "./containers/about-page/about-page.container";

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [AboutPageContainer],
    exports: [AboutPageContainer]
})
export class AboutModule {
}

