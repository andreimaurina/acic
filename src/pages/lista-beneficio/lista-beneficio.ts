import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BeneficioProvider } from '../../providers/beneficio/beneficio';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-lista-beneficio',
  templateUrl: 'lista-beneficio.html',
})
export class ListaBeneficioPage {
  
  beneficios = [];
  listaPadrao = [];
  admin = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: BeneficioProvider,
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
    alert.setTitle('Atenção!');
    alert.setSubTitle('Tem certeza que deseja excluir?');
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