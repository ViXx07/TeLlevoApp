import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilChoferPageRoutingModule } from './perfil-chofer-routing.module';

import { PerfilChoferPage } from './perfil-chofer.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilChoferPageRoutingModule,
    ModuloModule
  ],
  declarations: [PerfilChoferPage]
})
export class PerfilChoferPageModule {}
