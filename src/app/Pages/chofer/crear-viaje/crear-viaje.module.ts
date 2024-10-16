import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearViajePageRoutingModule } from './crear-viaje-routing.module';

import { CrearViajePage } from './crear-viaje.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearViajePageRoutingModule,
    ModuloModule,
    MatProgressSpinnerModule,
    
  ],
  declarations: [CrearViajePage]
})
export class CrearViajePageModule {}
