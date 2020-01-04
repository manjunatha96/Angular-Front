import { Injectable } from '@angular/core';

import { Login } from './login.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:1234'

  postLogin(login):Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}/login/post`,login)
  }
}
