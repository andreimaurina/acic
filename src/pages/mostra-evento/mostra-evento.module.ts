import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraEventoPage } from './mostra-evento';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MostraEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraEventoPage),
    MomentModule
  ],
})
export class MostraEventoPageModule {}
