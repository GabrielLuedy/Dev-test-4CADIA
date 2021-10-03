import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"sign_in",component:SidebarComponent},
  {path:"",component:LoginComponent},
{path:"register",component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
