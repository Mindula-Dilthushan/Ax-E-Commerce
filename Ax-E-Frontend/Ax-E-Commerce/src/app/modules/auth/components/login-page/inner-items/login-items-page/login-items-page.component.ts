import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-items-page',
  templateUrl: './login-items-page.component.html',
  styleUrls: ['./login-items-page.component.scss']
})
export class LoginItemsPageComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email : new FormControl('',Validators.email),
      password : new FormControl('',[
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    })




  constructor() {
  }

  ngOnInit(): void {
  }

}
