import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInformationComponent } from './user-information/user-information.component';
import { ToastrModule } from 'ngx-toastr';
import { DesignationComponent } from './designation/designation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { RegisterDeatilsComponent } from './registerDetails/register-deatils/register-deatils.component';
import { UploadfileComponent } from './fileUpload/uploadfile/uploadfile.component';
import { EmployeeAttenfanceComponent } from './employee-attenfance/employee-attenfance.component';
import { AfterLoginComponent } from './after-login/after-login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistartionComponent,
    LoginComponent,
    UserInformationComponent,
    DesignationComponent,
    RestPasswordComponent,
    RegisterDeatilsComponent,
    UploadfileComponent,
    EmployeeAttenfanceComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
