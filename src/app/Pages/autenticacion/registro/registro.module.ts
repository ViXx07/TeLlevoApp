import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { RegisUsuComponent } from 'src/app/componentes/registros/regis-usu/regis-usu.component';
import { RegisChofComponent } from 'src/app/componentes/registros/regis-chof/regis-chof.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // O usa MatMomentDateModule si prefieres Moment.js
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



/* componentes: */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,

    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  declarations: [RegistroPage,RegisUsuComponent,RegisChofComponent]
})
export class RegistroPageModule {}
