import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'Firebase';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  sobres = [];
  editando = false;
  ref = firebase.database().ref('Sobre/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
    this.sobres = [];
    this.sobres = snapshotToArray(resp);
    });
  }
  editar(status){
this.editando = status;
  }
  gravar(){

    let newEvento = firebase.database().ref(`Sobre/${this.sobres[0].key}`);
    newEvento.update(this.sobres[0]);
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