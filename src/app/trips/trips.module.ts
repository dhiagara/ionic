import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsPageRoutingModule } from './trips-routing.module';

import { TripsPage } from './trips.page';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsPageRoutingModule,
    
  ],
  declarations: [TripsPage,NavMenuComponent,HomeComponent]
})
export class TripsPageModule {}
