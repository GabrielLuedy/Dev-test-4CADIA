import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    RouterModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule

  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WithdrawComponent
  ]
})
export class MainModule { }
