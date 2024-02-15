import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate() {
    localStorage.setItem('user', 'tmishra');
  }

  checkAuthentication() {
    const user = localStorage.getItem('user');
    return (user === 'tmishra');
  }
}
