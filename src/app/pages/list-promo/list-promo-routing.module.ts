import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPromoPage } from './list-promo.page';

const routes: Routes = [
  {
    path: '',
    component: ListPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPromoPageRoutingModule {}
