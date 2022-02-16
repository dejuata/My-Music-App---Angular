import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap  } from 'rxjs';
import { setToken, loginSuccess, loginFailure } from '@app/store/actions/auth.actions';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  login$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( setToken ),
        mergeMap(
          () => this.authService.getUserInfo()
            .pipe(
              map( user => loginSuccess({ user })),
              tap(() => this.router.navigate(['/'])),
              catchError( err => of( loginFailure({ payload: err }) ))
            )
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

}
