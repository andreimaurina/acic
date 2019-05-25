import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servico } from '../../models/Servico';
import { ServicoProvider } from '../../providers/servico/servico';

/**
 * Generated class for the MostraServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    public provedor: ServicoProvider
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
