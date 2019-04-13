import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroBeneficioPage } from './cadastro-beneficio';

@NgModule({
  declarations: [
    CadastroBeneficioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroBeneficioPage),
  ],
})
export class CadastroBeneficioPageModule {}
