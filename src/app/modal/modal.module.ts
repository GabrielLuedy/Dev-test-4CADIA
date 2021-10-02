import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
NavbarComponent,
BodyComponent
  ]
})
export class ModalModule { }
