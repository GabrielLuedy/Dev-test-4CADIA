import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

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
    MatToolbarModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports:[
    MatIconModule,    
    MatMenuModule,    
    MatSliderModule,   
    MainModule,
    MatToolbarModule,
    FlexLayoutModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
