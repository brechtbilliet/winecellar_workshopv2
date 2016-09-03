import {RouterModule} from "@angular/router";
import {AboutPageContainer} from "./containers/about-page/about-page.container";
export const routes = [
    { path: "about", component: AboutPageContainer }
];

export const routing = RouterModule.forChild(routes);
