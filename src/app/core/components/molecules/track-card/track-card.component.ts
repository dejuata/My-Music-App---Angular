import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@app/models/track.model';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input() track!: Track;

  // track = {
  //   id: '1',
  //   name: 'Desnúdate Mujer',
  //   name_short: 'Desnúdate Mujer',
  //   album: "Voy Pa'Encima",
  //   artists: 'Frankie Ruiz',
  //   duration: '4:47',
  //   image: 'https://i.scdn.co/image/ab67616d00001e021386b29ab009dd27c398d141',
  //   favorite: true
  // };

  constructor() { }

  ngOnInit(): void {
  }

  setFavorite() {
    console.log('click track', this.track.id)
    this.track.setFavorite(true);
    console.log('click track1', this.track)
  }

}
