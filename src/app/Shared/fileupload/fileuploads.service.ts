import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Fileuploads } from './fileuploads.model'
@Injectable({
  providedIn: 'root'
})
export class FileuploadsService {

  constructor(private http:HttpClient, private router:Router) { }
  baseUrl='http://localhost:1234'


  uploadFile(file):Observable<Fileuploads>{
    console.log('service',file);
    
    return this.http.post<Fileuploads>(`${this.baseUrl}/file/post`,file)
  }

}
