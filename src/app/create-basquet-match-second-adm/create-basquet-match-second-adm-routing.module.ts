import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBasquetMatchSecondAdmPage } from './create-basquet-match-second-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBasquetMatchSecondAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBasquetMatchSecondAdmPageRoutingModule {}
