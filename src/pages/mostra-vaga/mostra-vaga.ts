import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VagaProvider } from '../../providers/vaga/vaga';
import { Vaga } from '../../models/Vaga';

@IonicPage()
@Component({
  selector: 'page-mostra-vaga',
  templateUrl: 'mostra-vaga.html',
})
export class MostraVagaPage {

  vaga: Vaga;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: VagaProvider
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.vaga = data
    );
  }
  
}
