import { Injectable } from '@angular/core';

import { Userinfo } from './userinfo.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:1234'
  postUserInfo(userinfo):Observable<Userinfo>{
    console.log('posting user info',userinfo);
    return this.http.post<Userinfo>(`${this.baseUrl}/info/post`,userinfo)
  }

  getUserInfo():Observable<Userinfo>{
    return this.http.get<Userinfo>(`${this.baseUrl}/info/get`)
  }

  deleteUserInfo(id):Observable<Userinfo>{
    return this.http.delete<Userinfo>(`${this.baseUrl}/info/delete/${id}`)
  }

  editUserInfo(id,target):Observable<Userinfo>{
    return this.http.put<Userinfo>(`${this.baseUrl}/info/update/${id}`,target)
  }
  getById(id):Observable<Userinfo>{
    return this.http.get<Userinfo>(`${this.baseUrl}/info/get/${id}`)
  }

}
