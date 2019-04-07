import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedNoticiaPage } from '../feed-noticia/feed-noticia';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedNoticiaPage;
  tab2Root = MenuPage;

  constructor() {

  }
}
