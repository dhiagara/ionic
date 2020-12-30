import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  constructor(public restaurService :RestaurantServiceService) { }
 data ;
  ngOnInit() {
    this.restaurService.getAllRestaurant().then(actions=>{
      console.log('actions',actions)
      this.data=actions;
    })
    console.log(this.data)
  }
  supprimer(id){
    console.log(id);
    this.restaurService.supprimerRestaurant(id);
  }

  

}
