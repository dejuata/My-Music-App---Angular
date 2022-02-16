import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/pages/login/login.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { LoginButtonComponent } from './components/atoms/login-button/login-button.component';
import { RedirectComponent } from './components/pages/redirect/redirect.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoComponent,
    LoginButtonComponent,
    RedirectComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
