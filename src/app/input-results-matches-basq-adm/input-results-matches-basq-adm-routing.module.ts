import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputResultsMatchesBasqAdmPage } from './input-results-matches-basq-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InputResultsMatchesBasqAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputResultsMatchesBasqAdmPageRoutingModule {}
