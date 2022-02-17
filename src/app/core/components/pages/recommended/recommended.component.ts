import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';

import { Track } from '@app/models/track.model';
import { loadRecommended } from '@app/store/actions/recommended.actions';
import { AppCoreModuleState, CoreModuleState } from '@app/store/core.reducer';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  tracks: Track[] = [];
  loading: boolean = false;

  constructor(
    private store: Store<AppCoreModuleState>,
  ) { }

  ngOnInit(): void {

    this.loading = true;

    this.store.dispatch( loadRecommended() );

    this.store.select('coreModule')
      .pipe(
        map( (state: CoreModuleState) => state.recommended ),
        filter( recommended => recommended.loaded )
      )
      .subscribe( ({ tracks, loading }) => {
        this.tracks = tracks;
        this.loading = loading;
      } )

  }

}
