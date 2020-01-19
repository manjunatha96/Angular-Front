import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Shared/register/register.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'selenium-webdriver/http';
@Component({
  selector: 'app-register-deatils',
  templateUrl: './register-deatils.component.html',
  styleUrls: ['./register-deatils.component.css']
})
export class RegisterDeatilsComponent implements OnInit {
  user:any;
  // data:any;
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

  Download(ur:any){
    console.log(ur)    
    this._serviceReg.downloadFile(ur)
    .subscribe(dcos=>{
      console.log(dcos);
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
           window.navigator.msSaveOrOpenBlob(dcos);
           return;
      }
      const data = window.URL.createObjectURL(dcos);
      var link = document.createElement('a');
      link.href = data;
      link.download = "resume.pdf";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    })
  }
  onShow(status){
    this.toster.success(status,'Successfully!')
  }
}
