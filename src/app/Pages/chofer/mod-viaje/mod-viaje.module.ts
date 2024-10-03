import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModViajePageRoutingModule } from './mod-viaje-routing.module';

import { ModViajePage } from './mod-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModViajePageRoutingModule
  ],
  declarations: [ModViajePage]
})
export class ModViajePageModule {}
