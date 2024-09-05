import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P404PageRoutingModule } from './p404-routing.module';

import { P404Page } from './p404.page';
// Importar modulo para usar sus componentes 
import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P404PageRoutingModule,
    ModuloModule,
  ],
  declarations: [P404Page]
})
export class P404PageModule {}
