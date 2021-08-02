import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTiketPage } from './detail-tiket.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTiketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTiketPageRoutingModule {}
