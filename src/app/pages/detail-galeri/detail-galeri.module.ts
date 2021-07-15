import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailGaleriPageRoutingModule } from './detail-galeri-routing.module';

import { DetailGaleriPage } from './detail-galeri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailGaleriPageRoutingModule
  ],
  declarations: [DetailGaleriPage]
})
export class DetailGaleriPageModule {}
