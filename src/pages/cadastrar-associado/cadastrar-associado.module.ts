import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarAssociadoPage } from './cadastrar-associado';

@NgModule({
  declarations: [
    CadastrarAssociadoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarAssociadoPage),
  ],
})
export class CadastrarAssociadoPageModule {}
