import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";

@NgModule({
    imports: [CommonModule],
    declarations: [StockPageContainer],
    exports: [StockPageContainer]
})
export class StockModule {
}

