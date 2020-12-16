import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Epi4infoPage } from './epi4info.page';

const routes: Routes = [
  {
    path: '',
    component: Epi4infoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Epi4infoPageRoutingModule {}
