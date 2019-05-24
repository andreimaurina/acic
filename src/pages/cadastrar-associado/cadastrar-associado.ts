import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Associado} from '../../models/Associado';

@IonicPage()
@Component({
  selector: 'page-cadastrar-associado',
  templateUrl: 'cadastrar-associado.html',
})
export class CadastrarAssociadoPage {
  id = null;
  associado: Associado;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.associado = new Associado();
    }
  }

}
