import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import{ RegisterService } from '../Shared/register/register.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  role:any;

  constructor(private formBuilder: FormBuilder, private _regService:RegisterService,private toastr: ToastrService) { }
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
    role_id: ['', Validators.required]
});
}

get f() { return this.registerForm.controls; }

getDesigation(){
  this._regService.getDesigation()
  .subscribe(res => {
    this.role =res;
  });
}

onSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {return;}
console.log(this.registerForm.value)
    this._regService.postRegistertation(this.registerForm.value)
    .subscribe(res=>{
      this.showSuccess('Successfully')
      this.onReset();
      },
      error => {
        this.onshow1(error.error);
      }
    )
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