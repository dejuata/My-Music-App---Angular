import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuth()
      .pipe(
        tap( estado => {
          if (!estado) { this.router.navigate(['/auth/login']) }
        })
      )
  }

  canLoad(): Observable<boolean> {
    console.log('load')
    return this.authService.isAuth()
      .pipe(
        take(1),
        tap( estado => {
          if (!estado) { this.router.navigate(['/auth/login']) }
        })
      )

  }

}
