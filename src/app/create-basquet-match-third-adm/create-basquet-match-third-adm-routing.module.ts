import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBasquetMatchThirdAdmPage } from './create-basquet-match-third-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBasquetMatchThirdAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBasquetMatchThirdAdmPageRoutingModule {}
