import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';


@IonicPage()
@Component({
  selector: 'page-lista-vaga',
  templateUrl: 'lista-vaga.html',
})
export class ListaVagaPage {

  vagas = [];
  ref = firebase.database().ref('Vagas/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value',resp => {
      this.vagas = [];
      this.vagas = snapshotToArray(resp);
    });
  }

  novaVaga() {
    this.navCtrl.push('CadastroVagaPage');
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
}