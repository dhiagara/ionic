
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { RestaurantServiceService } from 'src/app/trips/services/restaurant-service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  data :any ={
    name:'' ,
  place:'',
  phoneNumber:'',

  }
  
  params :any ;
  private ionicForm: FormGroup;
  isSumitted: boolean;
   constructor(public modalCtrl: ModalController,public alertController: AlertController, private formBuilder: FormBuilder,
    private restaurantService:RestaurantServiceService,
    public routt:ActivatedRoute)
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

  ngOnInit() {
    this.params=this.routt.snapshot.paramMap.get('id');
    //this.ionicForm.setValue=this.restaurantService.getRestaurantById(params)
   
    this.restaurantService.getRestaurantById(this.params).then(res=>{
      this.data=res
      console.log(res)
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
    this.restaurantService.updateRestaurant(this.ionicForm.value,this.params)
   .then((res) => {
     // Do something here
     window.alert("restaurant updated")
   }).catch((error) => {
     window.alert(error.message)
   })
   
    console.log(this.ionicForm.value);
  }
}

}
