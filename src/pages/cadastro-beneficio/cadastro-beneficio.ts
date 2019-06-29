import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Beneficio } from '../../models/Beneficio';
import { BeneficioProvider } from '../../providers/beneficio/beneficio';

@IonicPage()
@Component({
  selector: 'page-cadastro-beneficio',
  templateUrl: 'cadastro-beneficio.html',
})
export class CadastroBeneficioPage {

  beneficio: Beneficio;
  id = null;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: BeneficioProvider,
    public alertCtrl : AlertController
    ) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.beneficio = new Beneficio();
    } else {
      this.chamaPorId(this.id);
    }
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.beneficio = data
    );
  }

  chamaGravar(id){
    this.provedor.gravar(this.beneficio,id).then(
      ()=>{
        let alert= this.alertCtrl.create();
        alert.setTitle('Informação');
        alert.setSubTitle('Beneficio gravado com sucesso!');
        alert.addButton({
          text: 'ok',
          handler: data=> {
            this.navCtrl.pop();
          }
        });
        alert.present().then(() =>{   
        });
      }
    )
  }
}
