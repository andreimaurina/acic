import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public provedor: BeneficioProvider
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
    this.provedor.gravar(this.beneficio,id);
    this.navCtrl.pop();
  }

}
