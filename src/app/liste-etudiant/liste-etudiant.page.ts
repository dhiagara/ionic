import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../models/etudiant';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.page.html',
  styleUrls: ['./liste-etudiant.page.scss'],
})
export class ListeEtudiantPage implements OnInit {
  data: any;
   items = [5, 3, 6];
  constructor(public apiService: ApiService, public router: Router){
   }
  

  ngOnInit() {
    this.apiService.afficherListe().subscribe((response) => {
      this.data=response;
      this.data.forEach((element) => {
        let x= Math.round(Math.random()*100);
        element.im="https://picsum.photos/200/300?random=".concat(x.toString());  
      });
    });




  }

}
