import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarAssociadoPage } from './cadastrar-associado';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastrarAssociadoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarAssociadoPage),
    BrMaskerModule
  ],
})
export class CadastrarAssociadoPageModule {}