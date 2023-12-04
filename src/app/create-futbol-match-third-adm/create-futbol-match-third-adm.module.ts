import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFutbolMatchThirdAdmPageRoutingModule } from './create-futbol-match-third-adm-routing.module';

import { CreateFutbolMatchThirdAdmPage } from './create-futbol-match-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFutbolMatchThirdAdmPageRoutingModule
  ],
  declarations: [CreateFutbolMatchThirdAdmPage]
})
export class CreateFutbolMatchThirdAdmPageModule {}
