import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";
import {CommonLogicModule} from "../common/index";
import {AddStockPageContainer} from "./containers/add-stock-page/add-stock-page.container";
import {EditStockPageContainer} from "./containers/edit-stock-page/edit-stock-page.container";
import {StockService} from "./services/stock.service";
import {FavoriteWinesComponent} from "./components/favorite-wines/favorite-wines.component";
import {WineResultComponent} from "./components/wine-result/wine-result.component";
import {WineResultsComponent} from "./components/wine-results/wine-results.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailWineFormComponent} from "./components/detail-wine-form/detail-wine-form.component";
import {WineComService} from "./services/wineCom.service";
import {WineSearchContainer} from "./containers/wine-search/wine-search.container";
import {StockSandbox} from "./stock.sandbox";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, CommonLogicModule, RouterModule],
    declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer, FavoriteWinesComponent,
        WineResultComponent, WineResultsComponent, DetailWineFormComponent, WineSearchContainer],
    exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
    providers: [StockService, WineComService, StockSandbox]
})
export class StockModule {
}

