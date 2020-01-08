import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Designation } from './designation.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:1234'

  postRole(role):Observable<Designation>{
    return this.http.post<Designation>(`${this.baseUrl}/role/post`,role)
  }

  getRole():Observable<Designation>{
    return this.http.get<Designation>(`${this.baseUrl}/role/get`)
  }

  deleteRole(id):Observable<Designation>{
    return this.http.delete<Designation>(`${this.baseUrl}/role/delete/${id}`)
  }
 getById(id):Observable<Designation>{
    return this.http.get<Designation>(`${this.baseUrl}/role/get/${id}`)
 }

 updateRole(id,data):Observable<Designation>{
   return this.http.put<Designation>(`${this.baseUrl}/role/update/${id}`,data)
 }

}
