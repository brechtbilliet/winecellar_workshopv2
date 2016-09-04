import {RouterModule} from "@angular/router";
import {AuthenticatedGuard} from "../common/authenticated.guard";
import {EditStockPageContainer} from "../stock/containers/edit-stock-page/edit-stock-page.container";
import {AddStockPageContainer} from "../stock/containers/add-stock-page/add-stock-page.container";
import {StockPageContainer} from "../stock/containers/stock-page/stock-page.container";
import {AboutPageContainer} from "../about/containers/about-page/about-page.container";
import {AuthenticationContainer} from "../authentication/containers/authentication/authentication.container";
export const routes = [
    {path: "", redirectTo: "/stock", pathMatch: "full"},
    { path: "authentication", component: AuthenticationContainer},
    { path: "about", component: AboutPageContainer, canActivate: [AuthenticatedGuard] },
    { path: "stock", component: StockPageContainer, canActivate: [AuthenticatedGuard]},
    { path: "stock/add", component: AddStockPageContainer, canActivate: [AuthenticatedGuard]},
    { path: "stock/:id", component: EditStockPageContainer, canActivate: [AuthenticatedGuard]}
];
export const routing = RouterModule.forRoot(routes);
