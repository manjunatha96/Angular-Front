import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import{ RegisterService } from '../Shared/register/register.service'
import { from } from 'rxjs';
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
    this.onCancel();
}

clearFormData() {
  this.registerForm.reset();
}

onCancel() {
  this.clearFormData();
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
      this.clearFormData();
      this.showSuccess('Successfully')
      console.log('success',res);
      },error => {
        this.handleError(error);
      })
}

private handleError(error) {
  const errors=error.error.errors[0].details
  this.toastr.error(errors, 'Oops!', {
    timeOut: 2000
  });
}

}