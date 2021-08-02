import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTiketPageRoutingModule } from './detail-tiket-routing.module';

import { DetailTiketPage } from './detail-tiket.page';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTiketPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailTiketPage]
})
export class DetailTiketPageModule {}
