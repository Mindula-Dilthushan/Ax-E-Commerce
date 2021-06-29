//Mindula Dilthushan
//Alpha X Software Company
//Ax E Commerce v1.0.0
// 21-06-28
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-items-page',
  templateUrl: './login-items-page.component.html',
  styleUrls: ['./login-items-page.component.scss']
})
export class LoginItemsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup(
    {
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])
    })

}
