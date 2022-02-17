import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap  } from 'rxjs';
import { loadRecommended, loadRecommendedSuccess, loadRecommendedError } from '@app/store/actions/recommended.actions';
import { ApiService } from '@core/services/api.service';


@Injectable()
export class RecommendedEffects {

  loadRecommended$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( loadRecommended ),
        mergeMap(
          () => this.apiService.getRecommendedTracks()
            .pipe(
              map( tracks => loadRecommendedSuccess({ tracks })),
              catchError( err => of( loadRecommendedError({ payload: err }) ))
            )
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
