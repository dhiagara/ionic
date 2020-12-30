import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/restaurant/edit/edit.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

import { TripsPage } from './trips.page';

const routes: Routes = [
  {
    path: '',
    component: TripsPage,
    children: [
      {
        path: 'restaurant',
        component: RestaurantComponent,
        // children :[
        //   {
        //     path : 'edit/:id',
        //     component :EditComponent
        //   }
        // ]
      },
    
        {
          path : 'edit/:id',
          component :EditComponent
        },
      {
        path: '',
        component: HomeComponent
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsPageRoutingModule {}
