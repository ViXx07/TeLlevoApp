import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrChoferPage } from './qr-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: QrChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrChoferPageRoutingModule {}
