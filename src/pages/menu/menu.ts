import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarAssociadoPage } from '../cadastrar-associado/cadastrar-associado';
import { ListaEventoPage } from '../lista-evento/lista-evento';

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
    if(local == "A"){
      this.navCtrl.push(CadastrarAssociadoPage);
    } else if (local == "S"){
        //this.navCtrl.push(CadastrarAssociadoPage);
    } else if (local == "E"){
        this.navCtrl.push(ListaEventoPage);
    } else if (local == "B"){
        //this.navCtrl.push(CadastrarAssociadoPage);
    } else if (local == "V"){
        //this.navCtrl.push(CadastrarAssociadoPage);
    } else {
        //this.navCtrl.push(CadastrarAssociadoPage);
    }
    
    // tentar alterar para switch case

  }

}
