import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileuploadsService {

  constructor(private http:HttpClient, private router:Router) { }
  baseUrl='http://localhost:1234'


  uploadFile(file){
    return this.http.post(`${this.baseUrl}/file/post`,file)
  }

}
