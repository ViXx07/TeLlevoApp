import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePasajeroPageRoutingModule } from './home-pasajero-routing.module';

import { HomePasajeroPage } from './home-pasajero.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePasajeroPageRoutingModule,
    ModuloModule
  ],
  declarations: [HomePasajeroPage]
})
export class HomePasajeroPageModule {}
