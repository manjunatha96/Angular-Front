import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Shared/login/login.service';

@Component({
  selector: 'app-employee-attenfance',
  templateUrl: './employee-attenfance.component.html',
  styleUrls: ['./employee-attenfance.component.css']
})
export class EmployeeAttenfanceComponent implements OnInit {
  user:any
  constructor(private _servie:LoginService) { }

  ngOnInit() {
    this.gettingUserInfo()
  }
  gettingUserInfo(){
    this._servie.getLoginUserDeatils()
    .subscribe(res=>{
      this.user=res;
    })
  }
}
