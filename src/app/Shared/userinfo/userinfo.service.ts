import { Injectable } from '@angular/core';

import { Userinfo } from './userinfo.model'
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
baseUrl='http://localhost:1234'
  constructor(private http:HttpClient) { }

  postUserInfo(userinfo):Observable<Userinfo>{
    console.log('posting user info',userinfo);
    return this.http.post<Userinfo>(`${this.baseUrl}/info/post`,userinfo)
  }

}
