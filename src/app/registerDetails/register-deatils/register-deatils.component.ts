import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Shared/register/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-deatils',
  templateUrl: './register-deatils.component.html',
  styleUrls: ['./register-deatils.component.css']
})
export class RegisterDeatilsComponent implements OnInit {
  user:any;
  constructor(private _serviceReg:RegisterService, private toster:ToastrService) { }

  ngOnInit() {
    this.getRegisterInfo()
  }

  getRegisterInfo(){
    this._serviceReg.getRegisterData()
    .subscribe(res=>{
      this.user=res;
    })
  }
  deleteInfo(ur){
    if(confirm("Are you sure to delete this user!")) {
    this._serviceReg.deleteRegisterData(ur)
    .subscribe(res=>{
      this.getRegisterInfo()   
      this.onShow('Deleted')  
    })
  }
  }
  onShow(status){
    this.toster.success(status,'Successfully!')
  }
}
