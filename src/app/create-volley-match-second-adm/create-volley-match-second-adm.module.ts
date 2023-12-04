import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVolleyMatchSecondAdmPageRoutingModule } from './create-volley-match-second-adm-routing.module';

import { CreateVolleyMatchSecondAdmPage } from './create-volley-match-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVolleyMatchSecondAdmPageRoutingModule
  ],
  declarations: [CreateVolleyMatchSecondAdmPage]
})
export class CreateVolleyMatchSecondAdmPageModule {}
