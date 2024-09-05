import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { Paso1Component } from 'src/app/componentes/registroUsu/paso1/paso1.component';
import { Paso2Component } from 'src/app/componentes/registroUsu/paso2/paso2.component';
import { Paso3Component } from 'src/app/componentes/registroUsu/paso3/paso3.component';



/* componentes: */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
  ],
  declarations: [RegistroPage,Paso1Component,Paso2Component,Paso3Component]
})
export class RegistroPageModule {}
