import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associado } from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-mostra-associado',
  templateUrl: 'mostra-associado.html',
})
export class MostraAssociadoPage {

  associado: Associado;
  id = null;
  admin = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: AssociadoProvider,
    public auth: AuthProvider
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.admin = this.auth.logado();
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.associado = data
    );
  }

}
