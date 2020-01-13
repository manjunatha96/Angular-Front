import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

let baseUrl='http://localhost:1234/upload'
@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  uploader:FileUploader = new FileUploader({url: baseUrl})
  attachmentList:any=[];
  constructor() { 
    this.uploader._onCompleteItem=(item:any, response:any, status:any,header:any)=>{
      this.attachmentList.push(JSON.parse(response))
    }
  }

  ngOnInit() {
  }
  onChange(event) {
    var files = event.srcElement.files;
    console.log(files);
  }
}
