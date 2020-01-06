import { Injectable } from '@angular/core';

import { Login } from './login.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }
  baseUrl='http://localhost:1234'

  postLogin(login):Observable<Login>{
    console.log('register data',login)
    let authenticatedHeader = new HttpHeaders();
    authenticatedHeader = authenticatedHeader.set('X1-login', 'application/json');
    return this.http.post<Login>(`${this.baseUrl}/login/post`,login)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  loggedOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
