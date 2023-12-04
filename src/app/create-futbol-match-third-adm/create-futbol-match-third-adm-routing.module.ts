import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFutbolMatchThirdAdmPage } from './create-futbol-match-third-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFutbolMatchThirdAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFutbolMatchThirdAdmPageRoutingModule {}
