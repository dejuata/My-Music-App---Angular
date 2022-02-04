import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { TrackListComponent } from './components/organisms/track-list/track-list.component';
import { TrackCardComponent } from './components/molecules/track-card/track-card.component';
import { RecommendedComponent } from './components/pages/recommended/recommended.component';
import { TrackDetailComponent } from './components/molecules/track-detail/track-detail.component';
import { TrackComponent } from './components/pages/track/track.component';
import { SpotifyButtonComponent } from './components/atoms/spotify-button/spotify-button.component';
import { TrackTableComponent } from './components/molecules/track-table/track-table.component';
import { TrackTableRowComponent } from './components/atoms/track-table-row/track-table-row.component';
import { FavoriteButtonComponent } from './components/atoms/favorite-button/favorite-button.component';


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
    FavoriteButtonComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
