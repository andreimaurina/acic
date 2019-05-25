import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, AlertController } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {

  listaServico = []
  servicos = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor : ServicoProvider,
    public alertCtrl : AlertController
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

  mostraDados(id){
    this.navCtrl.push('MostraServicoPage',{id : id});
  }

  editar(id){
    this.navCtrl.push('CadastroServicoPage', {id : id});
  }

  excluir(id) {
    let alert = this.alertCtrl.create();
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

