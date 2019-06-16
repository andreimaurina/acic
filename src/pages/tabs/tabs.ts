import { Component } from '@angular/core';
import { FeedNoticiaPage } from '../feed-noticia/feed-noticia';
import { CadastrarAssociadoPage } from '../cadastrar-associado/cadastrar-associado';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedNoticiaPage;
  tab2Root = MenuPage;
  tab3Root = CadastrarAssociadoPage;

  constructor() {
  }
}
