import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {

  @Input() favorite: boolean = false;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.favorite = !this.favorite;
    this.productClick.emit(this.favorite);
  }

}
