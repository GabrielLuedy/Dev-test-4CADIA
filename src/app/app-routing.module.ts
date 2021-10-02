import { BodyComponent } from './modal/body/body.component';
import { NavbarComponent } from './modal/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"body",component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
