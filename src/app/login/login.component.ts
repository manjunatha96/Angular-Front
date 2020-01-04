import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Shared/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _serviceLogin:LoginService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
  this.submitted = true;
  
  if (this.registerForm.invalid) {return;}
  
  console.log(this.registerForm.value)
  this._serviceLogin.postLogin(this.registerForm.value)
  .subscribe(res=>{
    console.log(res)    
  },error=>{
    console.log(error);
  })
  }
  
  onReset() {
  this.submitted = false;
  this.registerForm.reset();
  }

}
