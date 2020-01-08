import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserinfoService } from '../Shared/userinfo/userinfo.service'
import { ToastrService } from 'ngx-toastr';
import { Userinfo } from '../Shared/userinfo/userinfo.model'
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  noUserDetails:any;
  users:any;
  userObj:any;
  constructor(private formBuilder: FormBuilder, private _serviceUserInfo:UserinfoService, private toster:ToastrService) { }
  ngOnInit() {
    this.regform()
    this.getInfo()
    this.userObj = new Userinfo();
}

regform(){
  this.registerForm = this.formBuilder.group({
    full_name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
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

onShow(status){
  this.toster.success(status,'Successfully!',{
    timeOut:2000
  })
}

onSubmit(id) {
this.submitted = true;
if (this.registerForm.invalid) {return;}
console.log(this.registerForm.value)
if(id !==undefined){
  this.editInfo(id,this.registerForm.value )
}else{
  this._serviceUserInfo.postUserInfo(this.registerForm.value)
  .subscribe(res =>{
    this.onShow('Stored')
    this.onReset()
    this.getInfo()
  },error=>{
    this.onshow1(error.error)    
  })
}
}
onReset() {
this.submitted = false;
this.registerForm.reset();
}

getInfo(){
  this._serviceUserInfo.getUserInfo()
  .subscribe(res=>{
       this.users=res;
       this.noUserDetails=this.users.length;
  })
}
 
deleteInfo(user){
  this._serviceUserInfo.deleteUserInfo(user._id)
  .subscribe(res=>{
    this.onShow('Deleted')
    this.onReset()
    this.getInfo()
  },error=>{
    this.onshow1(error.error)    
  })
}

editInfo(id,target){
 this._serviceUserInfo.editUserInfo(id,target)
 .subscribe(res=>{
   this.onShow('Updated')
   this.onReset()
   this.getInfo()
 },error=>{
  this.onshow1(error.error)    
}) 
}

getById($event){
  this._serviceUserInfo.getById($event.target.id)
  .subscribe(res=>{
    this.userObj=res;
  },error=>{
    this.onshow1(error.error)    
  })
}
onshow1(status){
  this.toster.warning(status,'oops!',{
    timeOut:2000
  })
}
clickMethod() {
  if(confirm("Are you sure to delete ")) {
    console.log("Implement delete functionality here");
  }
}
}
