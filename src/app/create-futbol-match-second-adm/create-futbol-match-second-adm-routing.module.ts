import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFutbolMatchSecondAdmPage } from './create-futbol-match-second-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFutbolMatchSecondAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFutbolMatchSecondAdmPageRoutingModule {}
