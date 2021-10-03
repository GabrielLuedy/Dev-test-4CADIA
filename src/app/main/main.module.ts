import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    RouterModule,
    MatToolbarModule
  ],
  exports:[
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class MainModule { }
