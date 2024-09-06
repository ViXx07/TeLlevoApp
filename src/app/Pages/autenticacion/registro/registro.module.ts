import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { RegisUsuComponent } from 'src/app/componentes/registros/regis-usu/regis-usu.component';
import { RegisChofComponent } from 'src/app/componentes/registros/regis-chof/regis-chof.component';





/* componentes: */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
  ],
  declarations: [RegistroPage,RegisUsuComponent,RegisChofComponent]
})
export class RegistroPageModule {}
