import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Servico} from '../../models/Servico';
import { ServicoProvider } from '../../providers/servico/servico';
 
@IonicPage()
@Component({
  selector: 'page-cadastro-servico',
  templateUrl: 'cadastro-servico.html',
})
export class CadastroServicoPage {

  servico: Servico;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: ServicoProvider,
    public alertCtrl : AlertController
    ) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.servico = new Servico();
    } else {
      this.chamaPorId(this.id);
    }
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
    .then(
      data => this.servico = data
    );
  }
  
  chamaGravar(id){
    this.provedor.gravar(this.servico,id).then(
      ()=>{
        let alert = this.alertCtrl.create();
        alert.setTitle('Gravado com sucesso!');
        alert.addButton({
          text: 'Ok',
          handler: data => {
            this.navCtrl.pop();
          }
        });
        alert.present().then(() => {
        });
      }
    )
  }
}


