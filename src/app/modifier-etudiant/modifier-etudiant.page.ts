import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { element } from 'protractor';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];

const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "age": "number",
}

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.page.html',
  styleUrls: ['./modifier-etudiant.page.scss'],
  
})
export class ModifierEtudiantPage implements OnInit {
  data: any=[];
    displayedColumns: string[] = ['name', 'email', 'age','$$edit'];
    dataSource = this.data;
    dataSchema = USER_SCHEMA;


  
 constructor(public apiService: ApiService, public router: Router){
  }
  ngOnInit() {
    this.dataSource = this.data;
    this.apiService.afficherListe().subscribe((response) => {
      this.data=response;
      console.log(this.data);
    })
  }
  updateForm(id,element){
    this.apiService.updateEtudiant(id,element).subscribe((response) => {
  })
  }
  deleteRow(id){
    this.data=this.data.filter(e=>e.id!==id)
    this.apiService.supprimerEtudiant(id).subscribe((response) => {
  })
}

}
