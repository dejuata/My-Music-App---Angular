import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  token: string = '';

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.store.select('auth').subscribe( ({ token }) => this.token = token)

    let apiRequest =  request;

    if ( this.token ) {
      apiRequest = request.clone({
        url: `${ environment.baseUrl }/${ request.url }`,
        setHeaders: {
          authorization: `Bearer ${this.token}`
        }
      })
    }

    return next.handle(apiRequest).pipe(
      catchError( (err: HttpErrorResponse) => {
        if( err.status === 401 || err.status === 404) {
          this.router.navigate(['/auth/login'])
        }

        return throwError( err )
      })
    )
  }
}
