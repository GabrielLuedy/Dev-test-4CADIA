import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule
  ],
  exports:[
    SidebarComponent,
    LoginComponent
  ]
})
export class MainModule { }
