import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";
import {AddStockPageContainer} from "./containers/add-stock-page/add-stock-page.container";
import {EditStockPageContainer} from "./containers/edit-stock-page/edit-stock-page.container";

@NgModule({
    imports: [CommonModule, routing, CommonLogicModule],
    declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer]
})
export class StockModule {
}

