import { createAction, props } from "@ngrx/store";
import { Track } from '@app/models/track.model';

export const loadTracks = createAction(
  '[TRACKS] LOAD TRACKS'
);

export const loadTracksSuccess = createAction(
  '[TRACKS] LOAD TRACKS SUCCESS',
  props<{ tracks: Track[]}>()
);

export const loadTracksError = createAction(
  '[TRACKS] LOAD TRACKS ERROR',
  props<{ payload: any}>()
);
