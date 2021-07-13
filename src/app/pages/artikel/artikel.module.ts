import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtikelPageRoutingModule } from './artikel-routing.module';

import { ArtikelPage } from './artikel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtikelPageRoutingModule
  ],
  declarations: [ArtikelPage]
})
export class ArtikelPageModule {}
