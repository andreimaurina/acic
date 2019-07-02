import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiaProvider }  from '../../providers/feed-noticia/feed-noticia';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed-noticia',
  templateUrl: 'feed-noticia.html',
})
export class FeedNoticiaPage {

  noticias = [];
  loading : any;
  carregou = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: FeedNoticiaProvider,
    public loadingController:LoadingController
    ) {
  }

  ionViewDidLoad(){
    this.carregando();
    this.provedor.listar()
    .then(
      data => this.noticias = data.reverse()
    );
  }

  carregando(){
    this.loading = this.loadingController.create({ content: "Carregando...", duration: 1000 });
    this.loading.present();
  }

}

