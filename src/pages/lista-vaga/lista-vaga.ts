import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VagaProvider } from '../../providers/vaga/vaga';

@IonicPage()
@Component({
  selector: 'page-lista-vaga',
  templateUrl: 'lista-vaga.html',
})
export class ListaVagaPage {

  vagas = [];
  listaPadrao = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor: VagaProvider,
    public alerCtrl: AlertController,
    ) {
  }
  
  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.vagas = data
    );
  }

  mostrarDados(id){
    this.navCtrl.push('MostraVagaPage',{id : id});
  }


  filtrarItens(event) {
    var pesquisado = event.target.value;
    this.provedor.listar()
    .then(
      data => this.listaPadrao = data
    );
    this.vagas = this.listaPadrao.filter((v) => {
      if(v.nome && pesquisado) {
        if (v.nome.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
          return true;
        }
      }else{
        return this.vagas;
      }
    });
  }

}
