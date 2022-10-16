import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate() {
    const isUserAuth = sessionStorage.getItem('user');

    if(!isUserAuth) {
      alert("Nie jesteś zalogowany i zostaniesz przekierowany do strony logowania");
      this.router.navigate(['/login']);
    }

    return !!isUserAuth;
  }
}