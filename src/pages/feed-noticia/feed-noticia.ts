import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiaProvider }  from '../../providers/feed-noticia/feed-noticia';

@IonicPage()
@Component({
  selector: 'page-feed-noticia',
  templateUrl: 'feed-noticia.html',
})
export class FeedNoticiaPage {

  noticias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public provedor: FeedNoticiaProvider) {
    provedor.listar()
    .then(
      data => this.noticias = data
    );
  }
}

