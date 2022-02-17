import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '@app/store/actions/favorite.actions';
import { TrackState } from '@app/store/core.reducer';
import { Track } from '@app/models/track.model';


const initialState: TrackState = {
  tracks: [],
  loaded: false,
  loading: false,
  error: null
}

const _favoriteReducer = createReducer(
  initialState,

  on(actions.loadFavorites, state => ({ ...state, loading: true })),

  on(actions.loadFavoritesSuccess, (state, { tracks }) => ({ ...state, loading: false, loaded: true, tracks: [ ...tracks ] })),

  on(actions.loadFavoritesError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload })),

  on(actions.setFavorite, (state, { id }) => {
    return {
      ...state,
      tracks: state.tracks.map( track => track.id === id ? Track.import(track, !track.favorite) : track )
    }
  }),

  on(actions.removeFavorite, (state, { id }) => {
    return {
      ...state,
      tracks: state.tracks.filter( track => track.id !== id )
    }
  }),

  on(actions.favoriteSuccess, state => ({ ...state })),

  on(actions.favoriteError, (state, { payload }) => ({ ...state, error: payload })),

  on(actions.cleanFavorite, state => ({ ...state, ...initialState })),
);

export function favoriteReducer(state: any, action: Action) {
  return _favoriteReducer(state, action);
}
