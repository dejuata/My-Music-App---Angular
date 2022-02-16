import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

import { Track } from '@app/models/track.model';
import { AppTrackState } from '@app/store/reducers';
import { loadTracks } from '@app/store/actions';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  tracks: Track[] = [];
  loading: boolean = false;

  constructor(
    private store: Store<AppTrackState>
  ) { }

  ngOnInit(): void {

    this.loading = true;

    this.store.dispatch( loadTracks() );

    this.store.select('tracks')
      .pipe(
        filter( state => state.loaded )
      )
      .subscribe( ({ tracks, loading }) => {
        this.tracks = tracks;
        this.loading = loading;
      } )

  }

}
