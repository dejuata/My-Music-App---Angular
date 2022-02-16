import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { getTokenFromUrl } from '@utils/getTokenFromUrl';
import { AppState } from '@app/store/app.reducer';
import { setToken } from '@app/store/actions/auth.actions';

@Component({
  selector: 'app-redirect',
  template: '',
})
export class RedirectComponent implements OnInit, OnDestroy  {

  fragmentSubscription: Subscription = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
  ) {

  }

  ngOnInit(): void {
    this.fragmentSubscription = this.activatedRoute.fragment
      .subscribe( fragment => {
        const { token, expires } = getTokenFromUrl(fragment);
        this.store.dispatch( setToken({ token, expires }) );
      })
  }

  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

}
