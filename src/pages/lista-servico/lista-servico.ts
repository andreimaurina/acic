import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Servico} from '../../models/Servico'
import { CadastroServicoPage } from '../cadastro-servico/cadastro-servico';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {

  servicos = [];
  ref = firebase.database().ref('servico/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value',resp => {
      this.servicos = [];
      this.servicos = snapshotToArray(resp);
      console.log(this.servicos); 
    })
  }
  novoServico() {
    this.navCtrl.push('CadastroServicoPage');
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.codigo = childSnapshot.codigo;
      returnArr.push(item);
  });
  return returnArr;
}
