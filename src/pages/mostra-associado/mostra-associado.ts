import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associado } from '../../models/Associado';

/**
 * Generated class for the MostraAssociadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostra-associado',
  templateUrl: 'mostra-associado.html',
})
export class MostraAssociadoPage {

  
  associado: Associado;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
