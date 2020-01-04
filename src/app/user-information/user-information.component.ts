import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserinfoService } from '../Shared/userinfo/userinfo.service'
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _serviceUserInfo:UserinfoService) { }
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    Mobile_No: ['', [Validators.required, Validators.minLength(10)]],
    Address_line1: ['', Validators.required],
    Address_line2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    Postel_Code: ['', Validators.required]
});
}

get f() { return this.registerForm.controls; }

onSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {return;}
console.log(this.registerForm.value)

this._serviceUserInfo.postUserInfo(this.registerForm.value)
.subscribe(res =>{
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
