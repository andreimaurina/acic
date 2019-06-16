import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associado } from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';

@IonicPage()
@Component({
  selector: 'page-mostra-associado-juridico',
  templateUrl: 'mostra-associado-juridico.html',
})
export class MostraAssociadoJuridicoPage {

  associado: Associado;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: AssociadoProvider
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.associado = data
    );
  }

}
