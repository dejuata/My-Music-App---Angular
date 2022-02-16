import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs';
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
    return this.http.get<User>(`${environment.endpoints.me}`)
      .pipe(
        map( res => User.import(res) ),
        // Hacer algo para manejor de errores
        // catchError( async (err) => console.log('[ getUserInfo ]', err)),
      )
  }

  isAuth() {
    return this.store.select('auth')
      .pipe(
        map( state => state.logged)
      )
  }
}
