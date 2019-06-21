import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaEventoPage } from '../lista-evento/lista-evento';
import { ListaServicoPage } from '../lista-servico/lista-servico';
import { ListaBeneficioPage } from '../lista-beneficio/lista-beneficio';
import { ListaVagaPage } from '../lista-vaga/lista-vaga';
import { SobrePage } from '../sobre/sobre';
import { ListaAssociadoPage } from '../lista-associado/lista-associado';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {

  admin = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider,
    public afAuth: AngularFireAuth,
    public iab: InAppBrowser
    ) {
    }
    
    ionViewWillEnter(){
      this.admin = this.authservice.logado();
    }

    direciona(local){
      switch(local){
        case(local = "A"):
          this.navCtrl.push(ListaAssociadoPage);
        break;
        case(local = "S"):
          this.navCtrl.push(ListaServicoPage);
        break;
        case(local = "E"):
          this.navCtrl.push(ListaEventoPage);
        break;
        case(local = "B"):
          this.navCtrl.push(ListaBeneficioPage);
        break;
        case(local = "V"):
          this.navCtrl.push(ListaVagaPage);
        break;
        case(local = "PS"):
          this.iab.create('https://forms.gle/gv5fyphWZf8Q2xrX9');
          // this.iab.create('https://docs.google.com/forms/d/1K4cGSJ9yrCEiQ-XO2DWm02bb_ABNfwDWW-K7Hs0L2y0/edit');
        break;
        case(local = "SO"):
          this.navCtrl.push(SobrePage);
        break;
        case(local = "L"):
          this.navCtrl.push(LoginPage);
        break;
      }
    }
  
    fazerLogout(){
      this.authservice.logout();
      this.navCtrl.push(MenuPage);
    }
  }