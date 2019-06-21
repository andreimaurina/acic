import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, AlertController } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {
  
  listaServico = []
  servicos = [];
  admin = false;
  listaPadrao = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor : ServicoProvider,
    public alertCtrl : AlertController,
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
        data => this.servicos = data
        );
      }
      
      filtrarItens(event) {
        var pesquisado = event.target.value;
        this.provedor.listar()
        .then(
          data => this.listaPadrao = data
          );
          this.servicos = this.listaPadrao.filter((v) => {
            if(v.nome && pesquisado) {
              if (v.nome.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
                return true;
              }
            }else{
              return this.servicos;
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