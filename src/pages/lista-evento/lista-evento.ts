import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Evento } from '../../models/Evento';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {
  
  eventos = [];

  // ref = firebase.database().ref('evento/');
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public provedor: EventoProvider) {

  provedor.listar()
    .then(
      data => this.eventos = data
    );
   
  }

  novoEvento() {
    this.navCtrl.push('CadastroEventoPage');
  }
}
