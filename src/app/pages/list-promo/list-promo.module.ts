import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPromoPageRoutingModule } from './list-promo-routing.module';

import { ListPromoPage } from './list-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPromoPageRoutingModule
  ],
  declarations: [ListPromoPage]
})
export class ListPromoPageModule {}
