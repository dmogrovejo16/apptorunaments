import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVolleyMatchThirdAdmPageRoutingModule } from './create-volley-match-third-adm-routing.module';

import { CreateVolleyMatchThirdAdmPage } from './create-volley-match-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVolleyMatchThirdAdmPageRoutingModule
  ],
  declarations: [CreateVolleyMatchThirdAdmPage]
})
export class CreateVolleyMatchThirdAdmPageModule {}
