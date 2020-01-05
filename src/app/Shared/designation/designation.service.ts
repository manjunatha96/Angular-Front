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

}
