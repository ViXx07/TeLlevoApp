import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisviajesPasajeroPageRoutingModule } from './misviajes-pasajero-routing.module';

import { MisviajesPasajeroPage } from './misviajes-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisviajesPasajeroPageRoutingModule
  ],
  declarations: [MisviajesPasajeroPage]
})
export class MisviajesPasajeroPageModule {}
