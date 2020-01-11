import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Shared/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  password_type:string='password'
  password_shown:boolean=false;
  
  constructor(private formBuilder: FormBuilder, private _serviceLogin:LoginService,
  private route:Router,private toastr: ToastrService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  setTimeout(() => {
    console.log('logout');
    localStorage.removeItem('token')
    this.route.navigateByUrl('/login')
  }, 600000);
  }
  get f() { return this.registerForm.controls; }
  
  onShow(status){
    this.toastr.success(status,'Successfully!',{
      timeOut:2000
    })
  }

  onSubmit() {
  this.submitted = true;
  
  if (this.registerForm.invalid) {return;}
  this._serviceLogin.postLogin(this.registerForm.value)
  .subscribe(res=>{
    localStorage.setItem('token',res.token)
    this.route.navigateByUrl('/info')
    this.onShow('login')
  },error=>{
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
  showPass(){
    if(this.password_shown){
        this.password_shown=false;
        this.password_type='password'
      }
    else{
      this.password_shown=true;
      this.password_type='text'
    }
  }
 }
