import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginForm = new FormGroup ({
    username: new FormControl(),
    password: new FormControl(),
  });


  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {

  }

  onLogin() {
    this.loginService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(
      a => {
        localStorage.setItem('token', a.access_token);
        this.loginService.isLoggedIn = true;
        this.errorMessage = '';
        this.router.navigate([this.loginService.redirectUrl]);
      },
      e => {
        localStorage.removeItem('token');
        this.errorMessage = e.json().error_description;
        this.loginService.isLoggedIn = false;
      }
    )

  }

}
