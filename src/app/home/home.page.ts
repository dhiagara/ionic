import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup , FormBuilder , Validators} from "@angular/forms";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  io = {name:""};
   /*constructor(private router:Router)
 {
  }
  goToepiadministration(){
    this.router.navigate(['/epiadministration'])
  }*/
  private ionicForm: FormGroup;
  isSumitted: boolean;
   constructor(public alertController: AlertController, private router: Router, private formBuilder: FormBuilder)
  {
    this.ionicForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required /*,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')*/]],
      password: ['', [Validators.required /* , Validators.pattern('[0-9]+$')*/]]
    });
  }
  ngOnInt(){
  }
  get errorControl(){
return this.ionicForm.controls;
  }
  submitbotton(){
     this.isSumitted = true;

     if (!this.ionicForm.valid)
     {
console.log('please provide all required value');
return false;
     }
     else{
      alert("Bonjour Mr/Mme :"+this.io.name)
      this.router.navigateByUrl('/epiadministration');
       console.log(this.ionicForm.value);
     }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Hi Mr/Mme Veuillez connecter !',
      buttons: ['OK']
    });

    await alert.present();
  }
  /*submitbotton(){
    console.log(this.ionicForm.value  );
   }*/
  goToepiadministration(){
    this.router.navigateByUrl('/epiadministration');
  }
}
