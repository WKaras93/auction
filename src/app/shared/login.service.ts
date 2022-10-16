import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public loginUser(email: string, password: string) {
    sessionStorage.setItem('user', email);
  }
}
