import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { RestaurantServiceService } from 'src/app/trips/services/restaurant-service.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent implements OnInit {

  private ionicForm: FormGroup;
  isSumitted: boolean;
   constructor(public modalCtrl: ModalController,public alertController: AlertController, private formBuilder: FormBuilder,
    private restaurantService:RestaurantServiceService)
  {
    this.ionicForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      place: ['', [Validators.required /*,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')*/]],
      phoneNumber: ['', [Validators.required /* , Validators.pattern('[0-9]+$')*/]],
      description: ['', [Validators.required /* , Validators.pattern('[0-9]+$')*/]]
    });
  }
  get errorControl(){
    return this.ionicForm.controls;
      }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
}
submitbotton(){
  this.isSumitted = true;

  console.log(this.ionicForm.value)
  if (!this.ionicForm.valid)
  {
console.log('please provide all required value');
return false;
  }
  else{
    this.restaurantService.createRestaurant(this.ionicForm.value)
   .then((res) => {
     // Do something here
     window.alert("restaurant addéd")
   }).catch((error) => {
     window.alert(error.message)
   })
   
    console.log(this.ionicForm.value);
  }
}

}
