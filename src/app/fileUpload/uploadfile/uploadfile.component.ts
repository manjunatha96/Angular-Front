import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

let baseUrl='http://localhost:1234/upload'
@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  fileToUpload: File = null;
  constructor(){}
  ngOnInit() {
  }
  
  handleFileInput(files: FileList) {
    console.log(files.item(0));
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    
}
upload(){


}
}
