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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor: VagaProvider,
    public alerCtrl: AlertController
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

  novaVaga() {
    this.navCtrl.push('CadastroVagaPage');
  }

  editar(id){
    this.navCtrl.push('CadastroVagaPage',{id: id});
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
