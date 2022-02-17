import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '@app/store/actions/recommended.actions';
import { TrackState } from '@app/store/core.reducer';


const initialState: TrackState = {
  tracks: [],
  loaded: false,
  loading: false,
  error: null
}

const _recommendedReducer = createReducer(
  initialState,

  on(actions.loadRecommended, state => ({ ...state, loading: true })),

  on(actions.loadRecommendedSuccess, (state, { tracks }) => ({ ...state, loading: false, loaded: true, tracks: [ ...tracks ] })),

  on(actions.loadRecommendedError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      error: payload.error
    }
  })),

  on(actions.cleanRecommended, state => ({ ...state, ...initialState }))

);

export function recommendedReducer(state: any , action: Action) {
  return _recommendedReducer(state, action);
}
