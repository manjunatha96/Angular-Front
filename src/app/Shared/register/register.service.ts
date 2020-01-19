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
    return this.http.post<Register>( `${this.baseUrl}/register/post`,register)
  }

  getDesigation(): Observable<Designation>{
    return this.http.get<Designation>(`${this.baseUrl}/role/get`)
  }

  updatePassword(passData):Observable<Register>{
    return this.http.put<Register>(`${this.baseUrl}/register/update_password`,passData)
  }

  getRegisterData():Observable<Register>{
    return this.http.get<Register>(`${this.baseUrl}/register/get`)
  }
  deleteRegisterData(id):Observable<Register>{
    return this.http.delete<Register>(`${this.baseUrl}/register/delete/${id}`)
  }
  downloadFile(id:string):Observable<Blob>{
    return this.http.get(`${this.baseUrl}/register/download/${id}`,{ responseType: "blob" })
  }
}
