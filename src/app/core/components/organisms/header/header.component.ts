import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '@app/store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  logoUrl: string = environment.logoUrl;
  name: string = '';
  userSubs: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('auth').subscribe( ({ user }) => this.name = user.name );
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

}
