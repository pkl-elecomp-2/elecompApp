import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiketPageRoutingModule } from './tiket-routing.module';

import { TiketPage } from './tiket.page';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiketPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [TiketPage]
})
export class TiketPageModule {}
