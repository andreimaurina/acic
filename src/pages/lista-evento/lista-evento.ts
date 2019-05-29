import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-lista-evento',
  templateUrl: 'lista-evento.html',
})
export class ListaEventoPage {
  
  eventos = [];
  admin = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: EventoProvider,
    public alerCtrl: AlertController,
    public auth: AuthProvider
    ) {
  }

  ionViewWillEnter(){
    this.admin = this.auth.logado();
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.eventos = data
    );
  }

  mostrarDados(id){
    this.navCtrl.push('MostraEventoPage',{id : id});
  }

  novoEvento() {
    this.navCtrl.push('CadastroEventoPage');
  }

  editar(id){
    this.navCtrl.push('CadastroEventoPage',{id: id});
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
