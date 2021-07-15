import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMemberPage } from './detail-member.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMemberPageRoutingModule {}
