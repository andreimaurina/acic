import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {
  
  eventos = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: EventoProvider
    ) {
  }

  ionViewDidLoad(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.eventos = data
    );
  }

  novoEvento() {
    this.navCtrl.push('CadastroEventoPage');
  }

  mostrar(id){
    console.log(id);
    this.navCtrl.push('CadastroEventoPage', {id: id});
  }

}
