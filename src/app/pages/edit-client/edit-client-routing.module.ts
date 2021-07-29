import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientPage } from './edit-client.page';

const routes: Routes = [
  {
    path: '',
    component: EditClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClientPageRoutingModule {}
