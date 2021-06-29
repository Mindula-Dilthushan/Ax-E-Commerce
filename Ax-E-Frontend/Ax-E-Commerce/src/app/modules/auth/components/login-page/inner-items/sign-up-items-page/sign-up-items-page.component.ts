//Mindula Dilthushan
//Alpha X Software Company
//Ax E Commerce v1.0.0
// 21-06-29
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-items-page',
  templateUrl: './sign-up-items-page.component.html',
  styleUrls: ['./sign-up-items-page.component.scss']
})
export class SignUpItemsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.minLength(7),
        Validators.maxLength(20),
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.minLength(7),
        Validators.maxLength(20),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])
    })
}
