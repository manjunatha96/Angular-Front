import { DesignationComponent } from './designation/designation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { RegisterDeatilsComponent } from './registerDetails/register-deatils/register-deatils.component';
import { UploadfileComponent } from './fileUpload/uploadfile/uploadfile.component';
import { EmployeeAttenfanceComponent } from './employee-attenfance/employee-attenfance.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: UserInformationComponent },
  { path: 'designation', component:DesignationComponent},
  { path: 'registration',component:RegistartionComponent},
  { path:'forget_passwoed',component:RestPasswordComponent},
  { path:'Register-details',component:RegisterDeatilsComponent},
  { path:'upload', component:UploadfileComponent},
  {path:'Attendance', component:EmployeeAttenfanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
