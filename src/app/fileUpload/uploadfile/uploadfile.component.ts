import { FormGroup, FormBuilder } from '@angular/forms';
import { log } from 'util';
import { FileuploadsService } from './../../Shared/fileupload/fileuploads.service';
import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  formData: FormData;
  fileToUpload: File = null;
  registerForm: FormGroup;
  submitted = false;
  constructor(private _serviceFileUpload:FileuploadsService,private formBuilder: FormBuilder,private toster:ToastrService){}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      file: ['']
  });
  }
  
  handleFileInput(files: FileList) {
    this.formData = new FormData();
    this.formData.append("uploads",  files.item(0)); 
}
onSubmit(handleFileInput){
this._serviceFileUpload.uploadFile(this.formData)
.subscribe(res=>{
 this.onshow('File Uploaded') 
  this.onReset() 
},error => {
  this.onshow1(error.error);
})
}
onReset(){
  this.registerForm.reset()
}
onshow(status){
  this.toster.success(status,'Successfully',{
    timeOut:2000
  })
}
onshow1(status){
  this.toster.warning(status,'oops!',{
    timeOut:2000
  })
}
}
