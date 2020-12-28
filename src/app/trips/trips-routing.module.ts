import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

import { TripsPage } from './trips.page';

const routes: Routes = [
  {
    path: '',
    component: TripsPage
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsPageRoutingModule {}
