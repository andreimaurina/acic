import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Beneficio } from '../../models/Beneficio';
import { BeneficioProvider } from '../../providers/beneficio/beneficio';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

/**
 * Generated class for the MostraBeneficioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostra-beneficio',
  templateUrl: 'mostra-beneficio.html',
})
export class MostraBeneficioPage {

  beneficio: Beneficio;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: BeneficioProvider,
    public iab : InAppBrowser
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.beneficio = data
    );
  }
  redirecionar(link){
    this.iab.create(link);
  }

}
