import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisviajesChoferPageRoutingModule } from './misviajes-chofer-routing.module';

import { MisviajesChoferPage } from './misviajes-chofer.page';

import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisviajesChoferPageRoutingModule,
    ModuloModule
  ],
  declarations: [MisviajesChoferPage]
})
export class MisviajesChoferPageModule {}
