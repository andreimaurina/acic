import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Evento } from '../../models/Evento';

/**
 * Generated class for the ListaEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {

  codigo = null;
  evento : Evento;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codigo = this.navParams.data.codigo;
      firebase.database().ref(`evento/${this.codigo}`).on('value', resp => {
        this.evento = snapshotToObject(resp);
      });
    }
  


    ionViewDidLoad() {
      console.log('ionViewDidLoad FormInfoPage');
    }
  }
  export const snapshotToObject = snapshot => {
    let item = snapshot.val();
    item.codigo = snapshot.codigo;
  
    return item;
  }