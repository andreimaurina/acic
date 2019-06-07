import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobreProvider } from '../../providers/sobre/sobre';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  sobres = [];
  admin = false;
  editando = false;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public provedor: SobreProvider,
     public auth: AuthProvider
    ) {
  }

  ionViewWillEnter(){
    this.admin = this.auth.logado();
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.sobres = data
    );
  }

  editar(status){
    this.editando = status;
  }

  gravar(id){
    this.provedor.gravar(this.sobres[0],id);
    this.editando = false ; 
  }
  
}

