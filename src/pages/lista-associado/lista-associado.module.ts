import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAssociadoPage } from './lista-associado';

@NgModule({
  declarations: [
    ListaAssociadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAssociadoPage),
  ],
})
export class ListaAssociadoPageModule {}