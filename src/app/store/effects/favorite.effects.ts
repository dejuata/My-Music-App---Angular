import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ApiService } from '@core/services/api.service';
import * as actions from '@app/store/actions/favorite.actions';


@Injectable()
export class FavoriteEffects {

  loadFavorite$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( actions.loadFavorites ),
        mergeMap(
          () => this.apiService.getFavoritesTracks()
            .pipe(
              map( tracks => actions.loadFavoritesSuccess({ tracks })),
              catchError( err => of( actions.loadFavoritesError({ payload: err }) ))
            )
        ),
      )
  );

  setFavorite$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( actions.setFavorite ),
        mergeMap(
          ( action ) => this.apiService.setFavoriteTrack( action.id )
            .pipe(
              map( () => actions.favoriteSuccess() ),
              catchError( err => of( actions.favoriteError({ payload: err }) ))
            )
        )
      )
  )

  removeFavorite$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( actions.removeFavorite ),
        mergeMap(
          ( action ) => this.apiService.removeFavoriteTrack( action.id )
            .pipe(
              map( () => actions.favoriteSuccess() ),
              catchError( err => of( actions.favoriteError({ payload: err }) ))
            )
        )
      )
  )


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
