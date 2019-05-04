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

  evento: Evento;
  id = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.evento = new Evento();
    } 
  }

  gravar(){
    if (!this.id) {
      let newEvento = firebase.database().ref('evento/').push();
      newEvento.set(this.evento);
    }
    this.navCtrl.pop(); 
  }

}
