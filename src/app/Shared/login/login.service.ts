import { Injectable } from '@angular/core';

import { Login } from './login.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }
  baseUrl='http://localhost:1234'

  postLogin(login):Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}/login/post`,login)
  }

  loggedOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
