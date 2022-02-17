import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Track } from '@app/models/track.model';
import { CoreModuleState } from '@app/store/core.reducer';
import { setFavorite } from '@app/store/actions/favorite.actions';
import { removeFavorite } from '../../../../store/actions/favorite.actions';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input() track!: Track;

  constructor(
    private store: Store<CoreModuleState>
  ) { }

  ngOnInit(): void {
  }

  setFavorite(favorite: boolean) {
    if ( favorite ) {
      this.store.dispatch( setFavorite({ id: this.track.id }));
    } else {
      this.store.dispatch( removeFavorite({ id: this.track.id }));
    }
  }

}
