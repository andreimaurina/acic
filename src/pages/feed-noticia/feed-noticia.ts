import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedNoticiaProvider }  from '../../providers/feed-noticia/feed-noticia';
import { LoadingController } from 'ionic-angular';
import { Network } from  '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';

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
    public network: Network,
    public navParams: NavParams,
    public provedor: FeedNoticiaProvider,
    public loadingController:LoadingController,
    public socialSharing: SocialSharing
    ) {
      //alert('testaConexao');
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('Testeeeeeeeeeeeeee de novoooooo');
        alert('Sem conexão à internet');
      });
      disconnectSubscription.unsubscribe();
  }

  verificaConexaoInternet() {
    
  }

  ionViewDidEnter(){
    
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

  compartilhar(link){
    this.socialSharing.share(link);
  }

}

