import {Action} from "@ngrx/store";
import {ApplicationContainerState} from "../../state/ContainersState";

let initialState: ApplicationContainerState = {
    isBusy: false
};

export function applicationReducer(state: ApplicationContainerState = initialState,
                                   action: Action): ApplicationContainerState {
   return null;
};