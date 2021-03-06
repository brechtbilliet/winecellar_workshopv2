import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
@Component({
    selector: "panel",
    styles: [require("./panel.component.scss")],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{header}}</h3>
            </div>
            <div class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PanelComponent {
    @Input() header: string;
}