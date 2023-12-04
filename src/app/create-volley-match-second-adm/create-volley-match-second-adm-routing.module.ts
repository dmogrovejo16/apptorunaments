import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVolleyMatchSecondAdmPage } from './create-volley-match-second-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVolleyMatchSecondAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVolleyMatchSecondAdmPageRoutingModule {}
