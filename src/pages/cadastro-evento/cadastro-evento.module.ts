import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEventoPage } from './cadastro-evento';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEventoPage),
    BrMaskerModule
  ],
})
export class CadastroEventoPageModule {}
