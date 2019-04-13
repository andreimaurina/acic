import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaVagaPage } from './lista-vaga';

@NgModule({
  declarations: [
    ListaVagaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaVagaPage),
  ],
})
export class ListaVagaPageModule {}
