import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Servico} from '../../models/Servico';
import { ServicoProvider } from '../../providers/servico/servico';
 
@IonicPage()
@Component({
  selector: 'page-cadastro-servico',
  templateUrl: 'cadastro-servico.html',
})
export class CadastroServicoPage {

  servico: Servico;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: ServicoProvider
    ) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.servico = new Servico();
    } else {
      this.chamaPorId(this.id);
    }
  }

  chamaPorId(id){
    this.provedor.listaPorId(id)
    .then(
      data => this.servico = data
    );
  }

  gravar() {
    if (!this.id) {
      let newServico = firebase.database().ref('Servicos/').push();
      newServico.set(this.servico); 
    }
    this.navCtrl.pop();
  }

}
