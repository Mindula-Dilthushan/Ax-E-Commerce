import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {SignUpItemsPageComponent} from "./components/login-page/inner-items/sign-up-items-page/sign-up-items-page.component";
import {LoginItemsPageComponent} from "./components/login-page/inner-items/login-items-page/login-items-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/auth/login',pathMatch:'full' },
  { path: 'login', component: LoginPageComponent,
    children : [
      {
        path : '', component : LoginItemsPageComponent
      },
      {
        path : 'register', component : SignUpItemsPageComponent
      },
      {
        path : 'access', component : LoginItemsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
