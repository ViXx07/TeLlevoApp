import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrPasajeroPage } from './qr-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: QrPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPasajeroPageRoutingModule {}
