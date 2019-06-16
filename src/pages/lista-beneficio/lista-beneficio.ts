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
  listaPadrao = [];

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

  filtrarItens(event) {
    var pesquisado = event.target.value;
    this.provedor.listar()
    .then(
      data => this.listaPadrao = data
    );
    this.beneficios = this.listaPadrao.filter((v) => {
      if(v.nome && pesquisado) {
        if (v.nome.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
          return true;
        }
      }else{
        return this.beneficios;
      }
    });
  }

}
