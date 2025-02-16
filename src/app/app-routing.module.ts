import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


  const routes: Routes = [{path:'' , redirectTo:'reset-password',pathMatch:'full'},
    {path:'reset-password', component:ResetPasswordComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
