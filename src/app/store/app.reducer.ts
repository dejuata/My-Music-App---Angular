import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from '@app/store/reducers/auth.reducer';


export interface AppState {
  auth: AuthState
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer
}
