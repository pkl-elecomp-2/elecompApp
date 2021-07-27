import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPageRoutingModule } from './survey-routing.module';

import { SurveyPage } from './survey.page';

import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPageRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
