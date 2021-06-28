import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginItemsPageComponent } from './components/login-page/inner-items/login-items-page/login-items-page.component';
import { SignUpItemsPageComponent } from './components/login-page/inner-items/sign-up-items-page/sign-up-items-page.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginItemsPageComponent,
    SignUpItemsPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
