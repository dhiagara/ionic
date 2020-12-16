import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpiadministrationPageRoutingModule } from './epiadministration-routing.module';

import { EpiadministrationPage } from './epiadministration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpiadministrationPageRoutingModule
  ],
  declarations: [EpiadministrationPage]
})
export class EpiadministrationPageModule {}
