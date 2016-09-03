import {RouterModule} from "@angular/router";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";
import {AddStockPageContainer} from "./containers/add-stock-page/add-stock-page.container";
import {EditStockPageContainer} from "./containers/edit-stock-page/edit-stock-page.container";
export const routes = [
    { path: "stock", component: StockPageContainer},
    { path: "stock/add", component: AddStockPageContainer},
    { path: "stock/:id", component: EditStockPageContainer}
];

export const routing = RouterModule.forChild(routes);
