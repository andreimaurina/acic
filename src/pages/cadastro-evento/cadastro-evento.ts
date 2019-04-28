import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Evento } from '../../models/Evento';

@IonicPage()
@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})
export class CadastroEventoPage {

  id = null;
  evento: Evento;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gravar(){
    if (!this.id) {
      let newEvento = firebase.database().ref('evento/').push();
      newEvento.set(this.evento);
    } else {
      let newEvento = firebase.database().ref(`evento/${this.id}`);
      newEvento.update(this.evento);
    }
    this.navCtrl.pop();
  }
}
