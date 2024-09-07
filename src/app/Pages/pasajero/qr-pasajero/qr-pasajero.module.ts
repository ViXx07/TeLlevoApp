import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPasajeroPageRoutingModule } from './qr-pasajero-routing.module';

import { QrPasajeroPage } from './qr-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPasajeroPageRoutingModule
  ],
  declarations: [QrPasajeroPage]
})
export class QrPasajeroPageModule {}
