import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Epi4infoPageRoutingModule } from './epi4info-routing.module';

import { Epi4infoPage } from './epi4info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Epi4infoPageRoutingModule
  ],
  declarations: [Epi4infoPage]
})
export class Epi4infoPageModule {}
