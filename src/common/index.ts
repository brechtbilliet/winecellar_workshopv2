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
import {FormGroupTextareaComponent} from "./components/form/form-group-textarea/form-group-textarea.component";
import {FormGroupTextboxComponent} from "./components/form/form-group-textbox/form-group-textbox.component";
import {FormGroupPasswordComponent} from "./components/form/form-group-password/form-group-password.component";
import {FormGroupFooterComponent} from "./components/form/form-group-footer/form-group-footer.component";
import {FormGroupContentComponent} from "./components/form/form-group-content/form-group-content.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
    declarations: [NavbarComponent, DefaultPageComponent, MainComponent, NumberPickerComponent, PanelComponent, RatingComponent,
        SpinnerComponent, CollapsableSidebarContainer, FormGroupContentComponent, FormGroupFooterComponent, FormGroupPasswordComponent,
        FormGroupTextareaComponent, FormGroupTextboxComponent],
    exports: [NavbarComponent, DefaultPageComponent, MainComponent, NumberPickerComponent, PanelComponent, RatingComponent,
        SpinnerComponent, CollapsableSidebarContainer, FormGroupContentComponent, FormGroupFooterComponent, FormGroupPasswordComponent,
        FormGroupTextareaComponent, FormGroupTextboxComponent],
    providers: [AuthenticatedGuard]
})
export class CommonLogicModule {
}

