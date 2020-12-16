import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerEtudiantPage } from './creer-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: CreerEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerEtudiantPageRoutingModule {}
