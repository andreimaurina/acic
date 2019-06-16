import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobreProvider } from '../../providers/sobre/sobre';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  sobres = [];
  editando = false;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public provedor: SobreProvider
    ) {
  }

  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.sobres = data
    );
  }
}

