import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaBeneficioPage } from './lista-beneficio';

@NgModule({
  declarations: [
    ListaBeneficioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaBeneficioPage),
  ],
})
export class ListaBeneficioPageModule {}
