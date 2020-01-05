import { DesignationService } from './../Shared/designation/designation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _serviceRole:DesignationService) { }

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
    console.log(res)
  },error=>{
    console.log(error)    
  })
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
  }
}