import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SuccesfullComponent } from './succesfull/succesfull.component';


  const routes: Routes = [{path:'' , redirectTo:'reset-password',pathMatch:'full'},
    {path:'reset-password', component:ResetPasswordComponent},
    {path:'succesfull', component:SuccesfullComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
