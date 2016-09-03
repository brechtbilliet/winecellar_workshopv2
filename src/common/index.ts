import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {DefaultPageComponent} from "./components/default-page/default-page.component";
import {MainComponent} from "./components/main/main.component";
import {NumberPickerComponent} from "./components/number-picker/number-picker.component";
import {PanelComponent} from "./components/panel/panel.component";
import {RatingComponent} from "./components/rating/rating.component";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {AuthenticatedGuard} from "./authenticated.guard";
import {CollapsableSidebarContainer} from "./containers/collapsable-sidebar/collapsable-sidebar.container";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [NavbarComponent, DefaultPageComponent, MainComponent, NumberPickerComponent, PanelComponent, RatingComponent,
        SpinnerComponent, CollapsableSidebarContainer],
    exports: [NavbarComponent, DefaultPageComponent, MainComponent, NumberPickerComponent, PanelComponent, RatingComponent,
        SpinnerComponent, CollapsableSidebarContainer],
    providers: [AuthenticatedGuard]
})
export class CommonLogicModule {
}

