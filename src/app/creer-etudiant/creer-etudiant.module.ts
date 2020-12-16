import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerEtudiantPageRoutingModule } from './creer-etudiant-routing.module';

import { CreerEtudiantPage } from './creer-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerEtudiantPageRoutingModule
  ],
  declarations: [CreerEtudiantPage]
})
export class CreerEtudiantPageModule {}
