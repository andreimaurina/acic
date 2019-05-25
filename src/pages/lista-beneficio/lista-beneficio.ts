import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BeneficioProvider } from '../../providers/beneficio/beneficio';

@IonicPage()
@Component({
  selector: 'page-lista-beneficio',
  templateUrl: 'lista-beneficio.html',
})
export class ListaBeneficioPage {
  
  beneficios = [];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: BeneficioProvider,
    public alerCtrl: AlertController
    ) {
  }

  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.beneficios = data
    );
  }

  mostrarDados(id){
    this.navCtrl.push('MostraBeneficioPage',{id : id});
  }

  novoBeneficio() {
    this.navCtrl.push('CadastroBeneficioPage');
  }

  editar(id){
    this.navCtrl.push('CadastroBeneficioPage',{id: id});
  }

  excluir(id) {
    let alert = this.alerCtrl.create();
    alert.setTitle('Tem certeza que deseja excluir?');
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.provedor.excluir(id);
        this.chamaListar();
      }
    });
    alert.present().then(() => {
    });
  }

}
