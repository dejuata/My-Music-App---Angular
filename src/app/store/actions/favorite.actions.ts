import { createAction, props } from "@ngrx/store";
import { Track } from '@app/models/track.model';

export const loadFavorites = createAction(
  '[FAVORITES] LOAD FAVORITES'
);

export const loadFavoritesSuccess = createAction(
  '[FAVORITES] LOAD FAVORITES SUCCESS',
  props<{ tracks: Track[]}>()
);

export const loadFavoritesError = createAction(
  '[FAVORITES] LOAD FAVORITES ERROR',
  props<{ payload: any}>()
);

export const setFavorite = createAction(
  '[FAVORITES] SET FAVORITE',
  props<{ id: string }>()
);

export const removeFavorite = createAction(
  '[FAVORITES] REMOVE FAVORITE',
  props<{ id: string }>()
);

export const favoriteSuccess = createAction(
  '[FAVORITES] SUCCESS FAVORITE',
);

export const favoriteError = createAction(
  '[FAVORITES] ERROR FAVORITE',
  props<{ payload: any}>()
);

export const cleanFavorite = createAction(
  '[FAVORITES] CLEAN FAVORITE',
);

