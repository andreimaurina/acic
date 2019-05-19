import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Servico} from '../../models/Servico';
 
@IonicPage()
@Component({
  selector: 'page-cadastro-servico',
  templateUrl: 'cadastro-servico.html',
})
export class CadastroServicoPage {

  servico: Servico;
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.servico = new Servico();
    }
  }

  gravar() {
    if (!this.id) {
      let newServico = firebase.database().ref('Servicos/').push();
      newServico.set(this.servico); 
    }
    this.navCtrl.pop();
  }

}
