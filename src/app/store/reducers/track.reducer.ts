import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '@app/store/actions/track.actions';
import { Track } from '@app/models/track.model';
import { AppState } from '@app/store/app.reducer';

export interface TrackState {
  tracks: Track[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export interface AppTrackState extends AppState {
  tracks: TrackState
}

const initialState: TrackState = {
  tracks: [],
  loaded: false,
  loading: false,
  error: null
}

const _trackReducer = createReducer(
  initialState,

  on(actions.loadTracks, state => ({ ...state, loading: true })),

  on(actions.loadTracksSuccess, (state, { tracks }) => ({ ...state, loading: false, loaded: true, tracks: [ ...tracks ] })),

  on(actions.loadTracksError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload })),

);

export function trackReducer(state: TrackState, action: Action) {
  return _trackReducer(state, action);
}
