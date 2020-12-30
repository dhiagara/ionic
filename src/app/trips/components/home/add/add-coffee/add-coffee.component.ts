import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.scss'],
})
export class AddCoffeeComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
}
}
