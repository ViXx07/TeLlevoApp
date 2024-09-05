import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [Paso2Module],
  imports: [
    CommonModule,
    IonicModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule
  ],
  exports:[Paso2Module]
})
export class Paso2Module { 
}
