import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBasquetMatchSecondAdmPageRoutingModule } from './create-basquet-match-second-adm-routing.module';

import { CreateBasquetMatchSecondAdmPage } from './create-basquet-match-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBasquetMatchSecondAdmPageRoutingModule
  ],
  declarations: [CreateBasquetMatchSecondAdmPage]
})
export class CreateBasquetMatchSecondAdmPageModule {}
