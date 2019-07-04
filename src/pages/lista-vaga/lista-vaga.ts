import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VagaProvider } from '../../providers/vaga/vaga';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-lista-vaga',
  templateUrl: 'lista-vaga.html',
})
export class ListaVagaPage {

  vagas = [];
  listaPadrao = [];
  admin = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: VagaProvider,
    public alerCtrl: AlertController,
    public auth: AuthProvider
    ) {
  }

  ionViewWillEnter() {
    this.admin = this.auth.logado();
    this.chamaListar();
  }

  chamaListar() {
    this.provedor.listar()
    .then(
      data => this.vagas = data
    );
  }

  mostrarDados(id) {
    this.navCtrl.push('MostraVagaPage', { id: id });
  }

  novaVaga() {
    this.navCtrl.push('CadastroVagaPage');
  }

  editar(id) {
    this.navCtrl.push('CadastroVagaPage', { id: id });
  }

  excluir(id) {
    let alert = this.alerCtrl.create();
    alert.setTitle('Atenção!');
    alert.setSubTitle('Tem certeza que deseja excluir?');
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.provedor.excluir(id).then(
          ()=>{
            let alert = this.alerCtrl.create();
            alert.setTitle('Informação');
            alert.setSubTitle('Vaga excluída com sucesso!')
            alert.addButton({
              text: 'Ok',
              handler: data => {
                this.chamaListar();
              }
            });
            alert.present().then(() => {
            });
          }
        );
      }
    });
    alert.present().then(() => {
    });
  }

  filtrarItens(event) {
    var pesquisado = event.target.value;
    this.provedor.listar()
      .then(
        data => this.listaPadrao = data
      );
    this.vagas = this.listaPadrao.filter((v) => {
      if (v.nome && pesquisado) {
        if (v.nome.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1) {
          return true;
        }
      } else {
        return this.vagas;
      }
    });
  }

}