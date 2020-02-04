import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Shared/login/login.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor(private _serviceLogin:LoginService) { }

  ngOnInit() {
  }

}
