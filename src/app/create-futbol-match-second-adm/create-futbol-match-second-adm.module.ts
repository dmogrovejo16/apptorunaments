import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFutbolMatchSecondAdmPageRoutingModule } from './create-futbol-match-second-adm-routing.module';

import { CreateFutbolMatchSecondAdmPage } from './create-futbol-match-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFutbolMatchSecondAdmPageRoutingModule
  ],
  declarations: [CreateFutbolMatchSecondAdmPage]
})
export class CreateFutbolMatchSecondAdmPageModule {}
