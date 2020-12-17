import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Etudiant } from '../models/etudiant';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-creer-etudiant',
  templateUrl: './creer-etudiant.page.html',
  styleUrls: ['./creer-etudiant.page.scss'],
})
export class CreerEtudiantPage implements OnInit {
data: Etudiant;
  constructor(public apiService: ApiService, public router: Router,public routt:ActivatedRoute) { 
this.data = new Etudiant();
   }



  ngOnInit() {
    let params=this.routt.snapshot.paramMap.get('id');
    console.log(this.routt.snapshot.paramMap.get('id'))
      this.apiService.trouverEtudiant_ID(params).subscribe((response)=>{
        console.log(response);
        this.data=response;
      })

    
  }
submitForm(){
  this.apiService.creerEtudiant(this.data).subscribe((response) => {this.router.navigate(['modifier-etudiant']);
})
}
}
