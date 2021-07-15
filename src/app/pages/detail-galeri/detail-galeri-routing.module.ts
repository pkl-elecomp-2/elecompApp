import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailGaleriPage } from './detail-galeri.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGaleriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailGaleriPageRoutingModule {}
