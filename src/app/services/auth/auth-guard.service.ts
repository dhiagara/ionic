import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user')==="null"||!localStorage.getItem('user')) {
      console.log(localStorage.getItem('user'))
      this.router.navigate(['home/signin']);
      return false;
    }
    return true;
  }
}