import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarAssociadoPage } from '../cadastrar-associado/cadastrar-associado';
import { ListaEventoPage } from '../lista-evento/lista-evento';
import { ListaServicoPage } from '../lista-servico/lista-servico';
import { ListaBeneficioPage } from '../lista-beneficio/lista-beneficio';
import { ListaVagaPage } from '../lista-vaga/lista-vaga';
import { SobrePage } from '../sobre/sobre';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  direciona(local){
    console.log(local)
    switch(local){
      case(local = "A"):
        this.navCtrl.push(CadastrarAssociadoPage);
      break;
      case(local = "S"):
        this.navCtrl.push(ListaServicoPage);
      break;
      case(local = "E"):
        this.navCtrl.push(ListaEventoPage);
      break;
      case(local = "B"):
        this.navCtrl.push(ListaBeneficioPage);
      break;
      case(local = "V"):
        this.navCtrl.push(ListaVagaPage);
      break;
      case(local = "SO"):
        this.navCtrl.push(SobrePage);
      break;
    }

  }

}
