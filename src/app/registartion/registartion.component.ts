import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import{ RegisterService } from '../Shared/register/register.service'
import { ToastrService } from 'ngx-toastr';
import { FileuploadsService } from '../Shared/fileupload/fileuploads.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  selectedFile: any;
  registerForm: FormGroup;
  submitted = false;
  role:any;
  fileToUpload: File = null;
  formData: FormData;
  constructor(private formBuilder: FormBuilder, private _regService:RegisterService,private toastr: ToastrService,private _serviceFileUpload:FileuploadsService,private route:Router) { }
  ngOnInit() {
    this.getDesigation();
    this.initForm();
}

clearFormData() {
  this.registerForm.reset();
}

showSuccess(status) {
  this.toastr.success(status, 'Registered', {
    timeOut: 2000
  });
}


initForm() {
  this.registerForm = this.formBuilder.group({
    first_name: ['', [Validators.required, Validators.minLength(5)]],
    last_name: ['', [Validators.required, Validators.minLength(5)]],
    gender: ['', Validators.required],
    Mobile_No: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role_id: ['', Validators.required],
    uploads:[File,Validators.required]
});
}

get f() { return this.registerForm.controls; }

handleFileInput(event) {
  this.selectedFile=event.target.files[0]
}

getDesigation(){
  this._regService.getDesigation()
  .subscribe(res => {
    this.role =res;
  });
}


onSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {return;}

this.formData = new FormData();
this.formData.append("uploads", this.selectedFile);
this.formData.append("first_name",this.registerForm.value.first_name); 
this.formData.append("last_name",this.registerForm.value.last_name);
this.formData.append("gender",this.registerForm.value.gender);
this.formData.append("Mobile_No",this.registerForm.value.Mobile_No);
this.formData.append("password",this.registerForm.value.password);
this.formData.append("email",this.registerForm.value.email);
this.formData.append("role_id",this.registerForm.value.role_id);
console.log(this.formData);


    this._regService.postRegistertation(this.formData)
    .subscribe(res=>{
      this.showSuccess('Successfully')
      this.onReset();
      this.route.navigateByUrl('/login')
      },
      error => {
        this.onshow1(error.error);
      })
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
  }
  onshow1(status){
    this.toastr.warning(status,'oops!',{
      timeOut:2000
    })
  }
}