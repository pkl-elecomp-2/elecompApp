import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiketPage } from './tiket.page';

const routes: Routes = [
  {
    path: '',
    component: TiketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiketPageRoutingModule {}
