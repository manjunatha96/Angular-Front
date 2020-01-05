import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Designation } from  "../designation/designation.model"
import{ Register } from './register.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  baseUrl='http://localhost:1234'
  postRegistertation(register):Observable<Register>{
    console.log('register data',register)
    let authenticatedHeader = new HttpHeaders();
    authenticatedHeader = authenticatedHeader.set('X1-login', 'application/json');
    // token = authenticatedHeader.set('Con', 'application/json');
    
    return this.http.post<Register>( `${this.baseUrl}/register/post`,register)
  }

  getDesigation(): Observable<Designation>{
    return this.http.get<Designation>(`${this.baseUrl}/role/get`)
  }
}
