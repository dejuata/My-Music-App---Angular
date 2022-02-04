import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {


  tracks = new Array(50)

  constructor() { }

  ngOnInit(): void {
  }

}
