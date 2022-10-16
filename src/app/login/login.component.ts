import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signIn(): void {
    const userData = this.loginForm.value;
    this.loginService.loginUser(userData.userEmail, userData.password);
  }
}
