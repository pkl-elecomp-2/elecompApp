import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailArtikelPage } from './detail-artikel.page';

const routes: Routes = [
  {
    path: '',
    component: DetailArtikelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailArtikelPageRoutingModule {}
