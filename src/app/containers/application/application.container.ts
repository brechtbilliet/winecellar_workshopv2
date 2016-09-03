import {Title} from "@angular/platform-browser";
import {Component} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
@Component({
    selector: "application",
    providers: [Title],
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `
})
export class ApplicationContainer {
}