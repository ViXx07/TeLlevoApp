import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisviajesChoferPageRoutingModule } from './misviajes-chofer-routing.module';

import { MisviajesChoferPage } from './misviajes-chofer.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisviajesChoferPageRoutingModule,
    ModuloModule,
    MatProgressSpinnerModule,
  ],
  declarations: [MisviajesChoferPage]
})
export class MisviajesChoferPageModule {}
