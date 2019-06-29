import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Vaga } from '../../models/Vaga';
import { VagaProvider } from '../../providers/vaga/vaga';

@IonicPage()
@Component({
  selector: 'page-cadastro-vaga',
  templateUrl: 'cadastro-vaga.html',
})
export class CadastroVagaPage {
  
  vaga: Vaga;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: VagaProvider,
    public alertCtrl : AlertController 
    ) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.vaga = new Vaga();
    } else {
      this.chamaPorId(this.id);
    }
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.vaga = data
    );
  }

  gravar(id){
    this.provedor.gravar(this.vaga,id).then(
      ()=>{
        let alert= this.alertCtrl.create();
        alert.setTitle('Informação');
        alert.setSubTitle('Vaga gravada com sucesso!');
        alert.addButton({
          text : 'ok',
          handler:data=> {
            this.navCtrl.pop();
          }
        });
        alert.present().then(() => {
        });
      }
    )
  }
}
