import { BodyHomeComponent } from './main/body-home/body-home.component';
import { ExtractComponent } from './main/extract/extract.component';
import { WithdrawComponent } from './main/withdraw/withdraw.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "sign_in", component: BodyHomeComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "withdraw", component: WithdrawComponent},
  { path: "extract", component: ExtractComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
