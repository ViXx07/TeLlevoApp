import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPasajeroPageRoutingModule } from './perfil-pasajero-routing.module';

import { PerfilPasajeroPage } from './perfil-pasajero.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPasajeroPageRoutingModule,
    ModuloModule
  ],
  declarations: [PerfilPasajeroPage]
})
export class PerfilPasajeroPageModule {}
