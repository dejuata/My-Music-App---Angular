import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFavorites } from '@app/store/actions/favorite.actions';
import { Track } from '@app/models/track.model';
import { AppCoreModuleState, CoreModuleState } from '@app/store/core.reducer';
import { filter, map, Subscription } from 'rxjs';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  tracks: Track[] = [];
  loading: boolean = false;
  favoriteSubs: Subscription = new Subscription();

  constructor(
    private store: Store<AppCoreModuleState>,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.store.dispatch( loadFavorites() );

    // this.apiService.getFavoritesTracks().subscribe( res => console.log('service', res))

    this.favoriteSubs = this.store.select('coreModule')
      .pipe(
        map( (state: CoreModuleState) => state.favorites ),
        filter( favorites => favorites.loaded )
      )
      .subscribe( ({ tracks, loading }) => {
        this.tracks = tracks;
        this.loading = loading;
      } )
  }

  ngOnDestroy(): void {
    this.favoriteSubs.unsubscribe();
  }

}
