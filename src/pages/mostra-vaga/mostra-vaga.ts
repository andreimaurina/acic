import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VagaProvider } from '../../providers/vaga/vaga';
import { Vaga } from '../../models/Vaga';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-mostra-vaga',
  templateUrl: 'mostra-vaga.html',
})
export class MostraVagaPage {

  vaga: Vaga;
  id = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: VagaProvider,
    public socialSharing: SocialSharing
    ) {
      this.id = this.navParams.data.id;
  }

  ionViewDidLoad() {
    this.chamaPorId(this.id);
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.vaga = data
    );
  }

  candidatarSe(vagas/*message, subject, to*/){
    this.socialSharing.shareViaEmail (
      ('Olá, ' + '<br> <br>' +
      
      'Estou interessado na vaga: ' + '<br> <br>' + 
      
      'Vaga: ' + "'" + vagas.nome + "'" + '<br>' +  
      'Profissão: ' + "'" + vagas.profissao + "'" + '<br>' +
      '_____________________________'
      )/*corpo do e-mail*/,
      
      ('Interesse na Vaga: ' + vagas.nome/*assunto*/),
      vagas.email/*e-mail destinatário*/);
  }
  
}
