import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsPageRoutingModule } from './trips-routing.module';

import { TripsPage } from './trips.page';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AddCoffeeComponent } from './components/home/add/add-coffee/add-coffee.component';
import { AddRestaurantComponent } from './components/home/add/add-restaurant/add-restaurant.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { EditComponent } from './components/restaurant/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TripsPageRoutingModule,
    
  ],
  declarations: [TripsPage,NavMenuComponent,HomeComponent,AddCoffeeComponent,AddRestaurantComponent,RestaurantComponent,
    EditComponent]
})
export class TripsPageModule {}
