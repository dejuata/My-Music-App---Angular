import { AuthEffects } from './auth.effects';
import { RecommendedEffects } from './recommended.effects';
import { FavoriteEffects } from './favorite.effects';

export const EffectsArray: any[] = [ AuthEffects ]

export const CoreEffectsArray: any[] = [ RecommendedEffects, FavoriteEffects ]
