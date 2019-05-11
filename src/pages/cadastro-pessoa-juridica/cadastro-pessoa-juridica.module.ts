import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPessoaJuridicaPage } from './cadastro-pessoa-juridica';

@NgModule({
  declarations: [
    CadastroPessoaJuridicaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPessoaJuridicaPage),
  ],
})
export class CadastroPessoaJuridicaPageModule {}
