import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { faHeart, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '@app/store/app.reducer';
import { logout } from '@app/store/actions';
import { cleanRecommended } from '@app/store/actions/recommended.actions';
import { cleanFavorite } from '@app/store/actions/favorite.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faHeart = faHeart;
  faHome = faHome;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch( logout() );
    this.store.dispatch( cleanRecommended() );
    this.store.dispatch( cleanFavorite() );
    this.router.navigate(['/auth/login'])
  }

}
