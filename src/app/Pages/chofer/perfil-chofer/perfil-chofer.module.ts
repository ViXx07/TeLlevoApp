import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilChoferPageRoutingModule } from './perfil-chofer-routing.module';

import { PerfilChoferPage } from './perfil-chofer.page';
import { ViajesComponent } from 'src/app/componentes/viajes/viajes.component';
import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilChoferPageRoutingModule,
    ModuloModule,
    MatProgressSpinnerModule,
  ],
  declarations: [PerfilChoferPage,ViajesComponent]
})
export class PerfilChoferPageModule {}
