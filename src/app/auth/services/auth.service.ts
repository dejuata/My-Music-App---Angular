import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '@app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getUserInfo() {
    return this.http.get<User>(`${ environment.endpoints.me }`)
      .pipe(
        map( res => User.import( res ) )
      )
  }

  isAuth() {
    return this.store.select('auth')
      .pipe(
        map( state => state.logged )
      )
  }
}
