import { DesignationComponent } from './designation/designation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { UserInformationComponent } from './user-information/user-information.component';


const routes: Routes = [
  { path: '', component: RegistartionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: UserInformationComponent },
  { path: 'designation', component:DesignationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
