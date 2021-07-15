import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPromoPage } from './detail-promo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPromoPageRoutingModule {}
