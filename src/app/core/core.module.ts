import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from '@core/core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from '@core/components/pages/home/home.component';
import { HeaderComponent } from '@core/components/organisms/header/header.component';
import { FooterComponent } from '@core/components/organisms/footer/footer.component';
import { FavoritesComponent } from '@core/components/pages/favorites/favorites.component';
import { TrackListComponent } from '@core/components/organisms/track-list/track-list.component';
import { TrackCardComponent } from '@core/components/molecules/track-card/track-card.component';
import { RecommendedComponent } from '@core/components/pages/recommended/recommended.component';
import { TrackDetailComponent } from '@core/components/molecules/track-detail/track-detail.component';
import { TrackComponent } from '@core/components/pages/track/track.component';
import { SpotifyButtonComponent } from '@core/components/atoms/spotify-button/spotify-button.component';
import { TrackTableComponent } from '@core/components/molecules/track-table/track-table.component';
import { TrackTableRowComponent } from '@core/components/atoms/track-table-row/track-table-row.component';
import { FavoriteButtonComponent } from '@core/components/atoms/favorite-button/favorite-button.component';
import { TruncateStringPipe } from '@core/pipes/truncate-string.pipe';
import { FormatDurationPipe } from '@core/pipes/format-duration.pipe';
import { reducersCoreModule } from '@app/store/core.reducer';
import { CoreEffectsArray } from '@app/store/effects/index';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesComponent,
    TrackListComponent,
    TrackCardComponent,
    RecommendedComponent,
    TrackDetailComponent,
    TrackComponent,
    SpotifyButtonComponent,
    TrackTableComponent,
    TrackTableRowComponent,
    FavoriteButtonComponent,
    TruncateStringPipe,
    FormatDurationPipe
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('coreModule', reducersCoreModule),
    EffectsModule.forFeature( CoreEffectsArray ),
    CoreRoutingModule,
    FontAwesomeModule,
  ]
})
export class CoreModule { }
