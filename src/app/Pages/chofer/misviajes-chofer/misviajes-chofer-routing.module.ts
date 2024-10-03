import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisviajesChoferPage } from './misviajes-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: MisviajesChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisviajesChoferPageRoutingModule {}
