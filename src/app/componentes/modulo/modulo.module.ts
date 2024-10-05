import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar módulo de Ionic
import { IonicModule } from '@ionic/angular';
// Importar componentes creados:
import { ToolbarComponent } from '../toolbar/toolbar.component';



// Declarar y exportar los componentes:
@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],exports:[
    ToolbarComponent,
  ]
})
export class ModuloModule { }
