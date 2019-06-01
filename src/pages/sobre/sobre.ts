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
  gravar(id){
    console.log(id);
    let newEvento = firebase.database().ref(`Sobre/${id}`);
    newEvento.update(this.sobres[0]);
    this.editando = false ; 
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