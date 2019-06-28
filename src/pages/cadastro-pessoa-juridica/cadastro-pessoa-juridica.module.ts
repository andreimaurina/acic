import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPessoaJuridicaPage } from './cadastro-pessoa-juridica';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroPessoaJuridicaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPessoaJuridicaPage),
    BrMaskerModule
  ],
})
export class CadastroPessoaJuridicaPageModule {}
