import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    
  }

}
