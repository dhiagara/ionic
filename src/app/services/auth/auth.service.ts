import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    console.log(token,token.length);
    // Check whether the token is expired and return
    // true or false
    if(!token){
      console.log("wa",token) ; 
    return false;
  }
 

    return true;
  }
}