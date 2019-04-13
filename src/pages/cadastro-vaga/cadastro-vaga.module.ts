import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroVagaPage } from './cadastro-vaga';

@NgModule({
  declarations: [
    CadastroVagaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroVagaPage),
  ],
})
export class CadastroVagaPageModule {}
