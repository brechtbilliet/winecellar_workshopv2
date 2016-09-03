import {Component, ViewEncapsulation} from "@angular/core";
@Component({
    selector: "collapsable-sidebar",
    styles: [require("./collapsable-sidebar.container.scss")],
    encapsulation: ViewEncapsulation.None,
    template: `
    <!-- set is-collapsed class when is collapsed-->
        <div class="collapsable-part">
            <button class="btn btn-primary btn-collapsable">
                <!--set fa-chevron-right when collapsed and fa-chevron-left when not collapsed-->
                <i class="fa fa-chevron-left"></i>
            </button>
            <!--remove when collapsed: hint *ngIf-->
            <ng-content></ng-content>
        </div>
    `
})
export class CollapsableSidebarContainer {
}