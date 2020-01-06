import { DesignationService } from './../Shared/designation/designation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _serviceRole:DesignationService, private toster:ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      role_name: ['', [Validators.required]]
  });
  }
  get f() { return this.registerForm.controls; }

    onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {return;}
  console.log(this.registerForm.value)
  this._serviceRole.postRole(this.registerForm.value)
  .subscribe(res=>{
     this.onshow('Saved')
     this.onReset()
     
  },error=>{
    console.log(error)    
  })
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
  }

  onshow(status){
    this.toster.success(status,'Successfully!',{
      timeOut:2000
    })
  }

}