import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrChoferPageRoutingModule } from './qr-chofer-routing.module';

import { QrChoferPage } from './qr-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrChoferPageRoutingModule
  ],
  declarations: [QrChoferPage]
})
export class QrChoferPageModule {}
