import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Evento } from '../../models/Evento';

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {
  
  eventos = [];
  ref = firebase.database().ref('evento/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
    this.eventos = [];
    this.eventos = snapshotToArray(resp);
    console.log(this.eventos);
    })
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad FormInfoPage');
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