import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraAssociadoPage } from './mostra-associado';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MostraAssociadoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraAssociadoPage),
    MomentModule
  ],
})
export class MostraAssociadoPageModule {}
