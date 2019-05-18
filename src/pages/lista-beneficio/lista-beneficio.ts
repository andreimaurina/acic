import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeneficioProvider } from '../../providers/beneficio/beneficio';

/**
 * Generated class for the ListaBeneficioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-beneficio',
  templateUrl: 'lista-beneficio.html',
})
export class ListaBeneficioPage {


  beneficios = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor : BeneficioProvider
    ) {
  }
  
  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.beneficios = data
    );
  }

  novoServico() {
    this.navCtrl.push('CadastroBeneficioPage');
  }
}

