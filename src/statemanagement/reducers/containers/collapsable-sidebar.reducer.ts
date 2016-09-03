import {Action} from "@ngrx/store";
import {CollapsableSidebarContainerState} from "../../state/ContainersState";

let initialState: CollapsableSidebarContainerState = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: CollapsableSidebarContainerState = initialState,
                                          action: Action): CollapsableSidebarContainerState {
    return null;
};