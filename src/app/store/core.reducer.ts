import { Track } from '@app/models/track.model';
import { AppState } from '@app/store/app.reducer';
import { recommendedReducer } from '@app/store/reducers/recommended.reducer';
import { favoriteReducer } from '@app/store/reducers/favorite.reducer';
import { ActionReducerMap } from '@ngrx/store';



export interface TrackState {
  tracks: Track[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export interface CoreModuleState {
  recommended: TrackState,
  favorites: TrackState
}

export interface AppCoreModuleState extends AppState {
  coreModule: CoreModuleState
}

export const reducersCoreModule: ActionReducerMap<CoreModuleState> = {
  recommended: recommendedReducer,
  favorites: favoriteReducer
}
