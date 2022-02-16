import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap  } from 'rxjs';
import { loadTracks, loadTracksSuccess, loadTracksError } from '@app/store/actions/track.actions';
import { ApiService } from '@core/services/api.service';


@Injectable()
export class TrackEffects {

  loadTrack$ = createEffect(
    () => this.actions$
      .pipe(
        ofType( loadTracks ),
        mergeMap(
          () => this.apiService.getRecommendedTracks()
            .pipe(
              map( tracks => loadTracksSuccess({ tracks })),
              catchError( err => of( loadTracksError({ payload: err }) ))
            )
          // () => this.authService.getUserInfo()
          //   .pipe(
          //     map( user => loginSuccess({ user })),
          //     tap(() => this.router.navigate(['/'])),
          //     catchError( err => of( loginFailure({ payload: err }) ))
          //   )
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
