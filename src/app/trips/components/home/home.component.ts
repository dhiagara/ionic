import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRestaurantComponent } from './add/add-restaurant/add-restaurant.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddRestaurantComponent,
      cssClass: 'my-custom-class',
  
    });
    return await modal.present();
  }

}
