import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@app/models/track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @Input() tracks: Track[] = [];
  // tracks = new Array(50)

  constructor() {

  }

  ngOnInit(): void {
    // console.log('track-list', this.tracks)
  }

}
