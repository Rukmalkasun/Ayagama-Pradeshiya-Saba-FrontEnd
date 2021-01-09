import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor() { }
  /* login(){
      return !!localStorage.getItem('token');
  }*/
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}
}
