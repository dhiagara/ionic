import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpiadministrationPage } from './epiadministration.page';

const routes: Routes = [
  {
    path: '',
    component: EpiadministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpiadministrationPageRoutingModule {}
