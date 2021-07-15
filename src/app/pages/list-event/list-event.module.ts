import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventPageRoutingModule } from './list-event-routing.module';

import { ListEventPage } from './list-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEventPageRoutingModule
  ],
  declarations: [ListEventPage]
})
export class ListEventPageModule {}
