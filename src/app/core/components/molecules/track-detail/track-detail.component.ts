import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {

  track: Track = {
    id: '1',
    name: 'Desnúdate Mujer',
    name_short: 'Desnúdate Mujer',
    album: "Voy Pa'Encima",
    artists: 'Frankie Ruiz',
    duration: '4:47',
    image: 'https://i.scdn.co/image/ab67616d00001e021386b29ab009dd27c398d141',
    favorite: true,
  };


  constructor() {

  }

  ngOnInit(): void {
  }

}
