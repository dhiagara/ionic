import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';  
import { BrowserModule } from '@angular/platform-browser';

import { HomePageRoutingModule } from './home-routing.module';
import { SigInComponent } from './sig-in/sig-in.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,SigInComponent,
  SignupComponent]
})
export class HomePageModule {}
