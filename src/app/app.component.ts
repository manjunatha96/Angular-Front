import { Component } from '@angular/core';
import { LoginService } from './Shared/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Register From';
  constructor(private _serviceLogin:LoginService){}

}
