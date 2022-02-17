import { createAction, props } from "@ngrx/store";
import { User } from '@app/models/user.model';

export const setToken = createAction(
  '[AUTH] SET TOKEN',
  props<{ token: string, expires: number }>()
)

export const loginSuccess = createAction(
  '[AUTH] LOGIN SUCCESS',
  props<{ user: User }>()
)

export const loginFailure = createAction(
  '[AUTH] LOGIN FAILURE',
  props<{ payload: any }>()
)

export const logout = createAction(
  '[AUTH] LOGOUT'
)
