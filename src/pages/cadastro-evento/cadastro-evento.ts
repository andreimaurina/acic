import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Evento } from '../../models/Evento';
import { EventoProvider } from '../../providers/evento/evento';
import * as moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})
export class CadastroEventoPage {
  
  evento: Evento;
  id = null;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provedor: EventoProvider,
    public alerCtrl : AlertController
    ) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.evento = new Evento();
    } else {
      this.chamaPorId(this.id);
    }
  }
  
  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.evento = data
    );
  }

  chamaGravar(id){
    var dataGravar = this.evento.data
    var DataAtual = moment().format('YYYY MM DD');
    var dataDepois = moment(dataGravar).isAfter(DataAtual)
    if(dataDepois){
      this.provedor.gravar(this.evento,id).then(
        ()=>{
            this.abrePopupConfirmacao();
        }
      )
      this.navCtrl.pop();
    } else {
      let alert = this.alerCtrl.create();
      alert.setTitle('Atenção!');
      alert.setSubTitle('A data do cadastro é anterior à atual! Deseja continuar?');
      alert.addButton('Cancelar');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          this.provedor.gravar(this.evento,id);
          this.navCtrl.pop();
        }
      });
      alert.present().then(() => {
      });
    }
  }

  abrePopupConfirmacao(){
    let alert= this.alerCtrl.create();
    alert.setTitle('Informação');
    alert.setSubTitle('Beneficio gravado com sucesso!');
    alert.addButton({
      text: 'ok',
      handler: data=> {
        this.navCtrl.pop();
      }
    });
    alert.present().then(() =>{   
    });
  }
}
