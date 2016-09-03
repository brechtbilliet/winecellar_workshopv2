import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";
import {routing} from "./routes";
import {CommonLogicModule} from "../common/index";
import {AddStockPageContainer} from "./containers/add-stock-page/add-stock-page.container";
import {EditStockPageContainer} from "./containers/edit-stock-page/edit-stock-page.container";
import {StockService} from "./services/stock.service";
import {FavoriteWinesComponent} from "./components/favorite-wines/favorite-wines.component";
import {WineResultComponent} from "./components/wine-result/wine-result.component";
import {WineResultsComponent} from "./components/wine-results/wine-results.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailWineFormComponent} from "./components/detail-wine-form/detail-wine-form.component";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, routing, CommonLogicModule],
    declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer, FavoriteWinesComponent,
        WineResultComponent, WineResultsComponent, DetailWineFormComponent],
    providers: [StockService]
})
export class StockModule {
}

