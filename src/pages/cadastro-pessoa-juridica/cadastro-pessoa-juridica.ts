import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro-pessoa-juridica',
  templateUrl: 'cadastro-pessoa-juridica.html',
})
export class CadastroPessoaJuridicaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPessoaJuridicaPage');
  }

}
