import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGaleriPageRoutingModule } from './list-galeri-routing.module';

import { ListGaleriPage } from './list-galeri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGaleriPageRoutingModule
  ],
  declarations: [ListGaleriPage]
})
export class ListGaleriPageModule {}
