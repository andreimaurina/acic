import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroBeneficioPage } from './cadastro-beneficio';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroBeneficioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroBeneficioPage),
    BrMaskerModule
  ],
})
export class CadastroBeneficioPageModule {}
