import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrChoferPageRoutingModule } from './qr-chofer-routing.module';

import { QrChoferPage } from './qr-chofer.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrChoferPageRoutingModule,
    ModuloModule
    
  ],
  declarations: [QrChoferPage]
})
export class QrChoferPageModule {}
