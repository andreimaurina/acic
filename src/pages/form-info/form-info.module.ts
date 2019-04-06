import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormInfoPage } from './form-info';

@NgModule({
  declarations: [
    FormInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormInfoPage),
  ],
})
export class FormInfoPageModule {}
