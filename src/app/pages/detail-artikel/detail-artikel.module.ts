import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailArtikelPageRoutingModule } from './detail-artikel-routing.module';

import { DetailArtikelPage } from './detail-artikel.page';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailArtikelPageRoutingModule,
    RecaptchaModule
  ],
  declarations: [DetailArtikelPage]
})
export class DetailArtikelPageModule {}
