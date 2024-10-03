import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar módulo de Ionic
import { IonicModule } from '@ionic/angular';
// Importar componentes creados:
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MenuComponent } from '../menu/menu.component';

// Declarar y exportar los componentes:
@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],exports:[
    ToolbarComponent,
    MenuComponent
  ]
})
export class ModuloModule { }
