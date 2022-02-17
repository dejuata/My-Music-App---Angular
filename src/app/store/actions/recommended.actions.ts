import { createAction, props } from "@ngrx/store";
import { Track } from '@app/models/track.model';

export const loadRecommended = createAction(
  '[RECOMMENDED] LOAD RECOMMENDED'
);

export const loadRecommendedSuccess = createAction(
  '[RECOMMENDED] LOAD RECOMMENDED SUCCESS',
  props<{ tracks: Track[]}>()
);

export const loadRecommendedError = createAction(
  '[RECOMMENDED] LOAD RECOMMENDED ERROR',
  props<{ payload: any}>()
);

export const cleanRecommended = createAction(
  '[RECOMMENDED] CLEAN RECOMMENDED',
)
