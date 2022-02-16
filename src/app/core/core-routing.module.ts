import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@core/components/pages/home/home.component';
import { FavoritesComponent } from '@core/components/pages/favorites/favorites.component';
import { RecommendedComponent } from '@core/components/pages/recommended/recommended.component';
import { TrackComponent } from '@core/components/pages/track/track.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecommendedComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'track',
        component: TrackComponent
      },
      // {
      //   path: '**',
      //   redirectTo: ''
      // }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
