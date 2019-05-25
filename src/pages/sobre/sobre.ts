import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  sobres = [];
  ref = firebase.database().ref('Sobre/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
    this.sobres = [];
    this.sobres = snapshotToArray(resp);
    });
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