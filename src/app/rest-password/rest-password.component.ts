import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../Shared/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  password_type:string='password';
  password_type1:string='password';
  password_shown:boolean=false;
  password_shown1:boolean=false;
  constructor(private fb:FormBuilder, private toster:ToastrService, private _serviceConfirmPass:RegisterService, private router:Router) { }

  ngOnInit() {
    this.fromData()
  }

  fromData(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password:['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
  
    if (this.registerForm.invalid) {return;}
    if(this.registerForm.value.password === this.registerForm.value.confirm_password)
    {
      const emails=this.registerForm.value.email;
      const pass=this.registerForm.value.password;
      console.log({emails,pass});
      this._serviceConfirmPass.updatePassword(this.registerForm.value)
      .subscribe(res=>{
        this.onReset()
        this.onShow('Password Changed')
        this.router.navigateByUrl('/login')
      }, error=>{
        this.onShow1(error.error)
      })
    }
    else{
      this.onShow1('Confirm password')
    }
  }
  onReset(){
    this.submitted=false;
    this.registerForm.reset()
  }
  onShow1(status){
    this.toster.warning(status,'incorrect')
  }
  onShow(status){
    this.toster.warning(status,'Successfully!')
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
  showPass1(){
    if(this.password_shown1){
        this.password_shown1=false;
        this.password_type1='password'
      }
    else{
      this.password_shown1=true;
      this.password_type1='text'
    }
  }
}
