import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPromoPageRoutingModule } from './detail-promo-routing.module';

import { DetailPromoPage } from './detail-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPromoPageRoutingModule
  ],
  declarations: [DetailPromoPage]
})
export class DetailPromoPageModule {}
