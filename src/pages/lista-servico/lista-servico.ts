import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {

  listaServico = [];
  servicos = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor : ServicoProvider
    ) {
  }
  
  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.servicos = data
    );
  }
  filtrarItens(searchbar) {
    this.servicos = this.listaServico;
    var q = searchbar.srcElement.value;
    if(!q) {
      return;
    }
    this.servicos = this.servicos.filter((v) => {
      if(v.nome && q) {
        if (v.nome.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  novoServico() {
    this.navCtrl.push('CadastroServicoPage');
  }

}

