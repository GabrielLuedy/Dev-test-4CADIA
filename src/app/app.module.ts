import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';



 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,    
    MatMenuModule,   
    MatSliderModule,    
    MainModule,
    MatToolbarModule
  ],
  exports:[
    MatIconModule,    
    MatMenuModule,    
    MatSliderModule,   
    MainModule,
    MatToolbarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
