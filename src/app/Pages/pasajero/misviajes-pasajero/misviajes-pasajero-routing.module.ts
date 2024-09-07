import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisviajesPasajeroPage } from './misviajes-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: MisviajesPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisviajesPasajeroPageRoutingModule {}
