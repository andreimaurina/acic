import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
const config = {
  apiKey: "AIzaSyBnv2FDzNmV3Auz8FlHkkApsgujK6ASTXk",
  authDomain: "teste-c17e4.firebaseapp.com",
  databaseURL: "https://teste-c17e4.firebaseio.com",
  projectId: "teste-c17e4",
  storageBucket: "teste-c17e4.appspot.com",
  messagingSenderId: "872085547758"
};
firebase.initializeApp(config);

import { CadastrarAssociadoPage } from '../pages/cadastrar-associado/cadastrar-associado';
import { TabsPage } from '../pages/tabs/tabs';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { CadastroVagaPage } from '../pages/cadastro-vaga/cadastro-vaga';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }
}
