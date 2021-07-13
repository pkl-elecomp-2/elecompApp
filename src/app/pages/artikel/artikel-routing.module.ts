import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtikelPage } from './artikel.page';

const routes: Routes = [
  {
    path: '',
    component: ArtikelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtikelPageRoutingModule {}
