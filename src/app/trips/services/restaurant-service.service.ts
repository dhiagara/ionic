import { Route } from '@angular/compiler/src/core';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
  ) { }
  async createRestaurant(data){
    const userData = {
      place: data.place,
      phoneNumber: data.phoneNumber,
      name: data.name,
      description:data.description
      
    }
    const userRef= await this.afStore.collection(`restaurant`).add({
      userData
    });
    
    return userRef

  }
  async getAllRestaurant(){
    let rest :any=[]  ; 
     await this.afStore.firestore.collection(`restaurant`).get().then((querySnapshot) => { 
      
      querySnapshot.forEach((doc) => {
          
        rest.push(doc.data().userData)
           console.log('rest',doc.data().userData);
           
      })
   })
   console.log('rest',rest);
   return rest;
   
 
  }
  getRestaurantById(){
  }
  supprimerRestaurant(id){
    this.afStore.doc(`restaurant/${id}`).delete()

  }

}
