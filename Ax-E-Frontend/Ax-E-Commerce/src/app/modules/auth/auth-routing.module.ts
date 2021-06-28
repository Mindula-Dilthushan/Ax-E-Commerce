import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/login',pathMatch:'full' },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
