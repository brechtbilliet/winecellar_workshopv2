import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class CommonLogicModule {
}

