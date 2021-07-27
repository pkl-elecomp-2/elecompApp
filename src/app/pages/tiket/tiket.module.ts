import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiketPageRoutingModule } from './tiket-routing.module';

import { TiketPage } from './tiket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiketPageRoutingModule
  ],
  declarations: [TiketPage]
})
export class TiketPageModule {}
