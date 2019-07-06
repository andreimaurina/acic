import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servico } from '../../models/Servico';
import { ServicoProvider } from '../../providers/servico/servico';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@IonicPage()
@Component({
  selector: 'page-mostra-servico',
  templateUrl: 'mostra-servico.html',
})
export class MostraServicoPage {
  
  servico: Servico;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: ServicoProvider,
    public iab : InAppBrowser
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.servico = data
    );
  }

}
