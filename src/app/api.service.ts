import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api_url = 'http://127.0.0.1:8000/';

  loggedIn() {
    return !!localStorage.getItem('loogedIn');
  }

  getCurrentUser() {
   // return this.http.get(this.api_url + /get_current_user);
    return this.http.get(`${this.api_url}api/v1/get_current_user`);
  }
}
