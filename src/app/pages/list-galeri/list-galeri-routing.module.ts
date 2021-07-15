import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGaleriPage } from './list-galeri.page';

const routes: Routes = [
  {
    path: '',
    component: ListGaleriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGaleriPageRoutingModule {}
