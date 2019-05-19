import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from '../../models/Evento';
import { EventoProvider } from '../../providers/evento/evento';

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
