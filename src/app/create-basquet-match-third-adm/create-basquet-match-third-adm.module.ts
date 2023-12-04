import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBasquetMatchThirdAdmPageRoutingModule } from './create-basquet-match-third-adm-routing.module';

import { CreateBasquetMatchThirdAdmPage } from './create-basquet-match-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBasquetMatchThirdAdmPageRoutingModule
  ],
  declarations: [CreateBasquetMatchThirdAdmPage]
})
export class CreateBasquetMatchThirdAdmPageModule {}
