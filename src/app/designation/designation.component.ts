import { DesignationService } from './../Shared/designation/designation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Designation } from '../Shared/designation/designation.model';
import { log } from 'util';


@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  roleData:any;
  roleDeatils:any;
  nodata:any;
  constructor(private formBuilder: FormBuilder, private _serviceRole:DesignationService, private toster:ToastrService) { }

  ngOnInit() {
    this.regForm();
    this.onGet();
    this.roleDeatils=new  Designation();
  }

  regForm(){
    this.registerForm = this.formBuilder.group({
      role_name: ['', [Validators.required,Validators.minLength(5)]]
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit(id) {    
  this.submitted = true;
  if (this.registerForm.invalid) {return;}
      if(id==undefined){
        this._serviceRole.postRole(this.registerForm.value)
        .subscribe(res=>{
           this.onshow('Saved')
           this.onReset()
           this.onGet()
        },error=>{
          console.log(error)    
        })
      }
      else{
        this.onUpdate(id,this.registerForm.value)
      }

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

  onGet(){
    this._serviceRole.getRole()
    .subscribe(res=>{
      this.roleData=res;
      this.nodata=this.roleData.length;
    })
  }

  deleteInfo(user){
    this._serviceRole.deleteRole(user._id)
    .subscribe(res=>{
      this.onshow('Deleted')
      this.onReset()
      this.onGet()
    })
  }

  onGetById($event){
    this._serviceRole.getById($event.target.id)
    .subscribe(res=>{
      this.roleDeatils=res;
    })
  }

  onUpdate(id,data){
    this._serviceRole.updateRole(id, data)
    .subscribe(res=>{
      this.onshow('Updated');
      this.onReset()
      this.onGet()
    })
  }
}