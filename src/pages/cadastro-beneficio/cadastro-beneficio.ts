import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Beneficio} from '../../models/Beneficio';
 
@IonicPage()
@Component({
  selector: 'page-cadastro-beneficio',
  templateUrl: 'cadastro-beneficio.html',
})
export class CadastroBeneficioPage {

  beneficio: Beneficio;
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.beneficio = new Beneficio();
    }
  }

  gravar() {
    if (!this.id) {
      let newBeneficio = firebase.database().ref('beneficio/').push();
      newBeneficio.set(this.beneficio); 
    }
    this.navCtrl.pop();
  }

}
