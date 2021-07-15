import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMemberPageRoutingModule } from './detail-member-routing.module';

import { DetailMemberPage } from './detail-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMemberPageRoutingModule
  ],
  declarations: [DetailMemberPage]
})
export class DetailMemberPageModule {}
