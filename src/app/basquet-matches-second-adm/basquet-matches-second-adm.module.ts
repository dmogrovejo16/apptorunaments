import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesSecondAdmPageRoutingModule } from './basquet-matches-second-adm-routing.module';

import { BasquetMatchesSecondAdmPage } from './basquet-matches-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesSecondAdmPageRoutingModule
  ],
  declarations: [BasquetMatchesSecondAdmPage]
})
export class BasquetMatchesSecondAdmPageModule {}
