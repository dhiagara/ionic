import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../models/etudiant';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-creer-etudiant',
  templateUrl: './creer-etudiant.page.html',
  styleUrls: ['./creer-etudiant.page.scss'],
})
export class CreerEtudiantPage implements OnInit {
data: Etudiant;
  constructor(public apiService: ApiService, public router: Router) { 
this.data = new Etudiant();
   }



  ngOnInit() {
  }
submitForm(){
  this.apiService.creerEtudiant(this.data).subscribe((response) => {this.router.navigate(['liste-etudiant']);
})
}
}
