import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { Evento } from '../../models/Evento';

@IonicPage()
@Component({
  selector: 'page-mostra-evento',
  templateUrl: 'mostra-evento.html',
})
export class MostraEventoPage {
  
  evento: Evento;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: EventoProvider
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.evento = data
    );
  }

}
