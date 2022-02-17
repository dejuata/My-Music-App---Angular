import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '@app/store/actions/auth.actions';
import { User } from '@app/models/user.model';
import { state } from '@angular/animations';

export interface AuthState {
  user: User,
  token: string,
  expires: number,
  logged: boolean,
  error: any
}

const initialState: AuthState = {
  user: User,
  token: '',
  expires: 0,
  logged: false,
  error: null
}

const _authReducer = createReducer(
  initialState,

  on(actions.setToken, (state, { token, expires }) => ({ ...state, token, expires  })),

  on(actions.loginSuccess, (state, { user }) => ({ ...state, user: { ...user }, logged: true })),

  on(actions.loginFailure, (state, { payload }) => ({ ...state, logged: false, error: payload })),

  on(actions.logout, (state) => ({ ...state, ...initialState }))

);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
