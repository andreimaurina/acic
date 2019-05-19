import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraEventoPage } from './mostra-evento';

@NgModule({
  declarations: [
    MostraEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraEventoPage),
  ],
})
export class MostraEventoPageModule {}
