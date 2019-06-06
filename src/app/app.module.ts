import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedNoticiaProvider } from '../providers/feed-noticia/feed-noticia';
import { FeedNoticiaPage } from '../pages/feed-noticia/feed-noticia';
import { MenuPage } from '../pages/menu/menu';
import { EventoProvider } from '../providers/evento/evento';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';
import { ListaAssociadoPage } from '../pages/lista-associado/lista-associado';
import { ListaBeneficioPage } from '../pages/lista-beneficio/lista-beneficio';
import { ListaServicoPage } from '../pages/lista-servico/lista-servico';
import { ListaVagaPage } from '../pages/lista-vaga/lista-vaga';
import { SobrePage } from '../pages/sobre/sobre';
import { HttpClientModule } from '@angular/common/http';
import { ServicoProvider } from '../providers/servico/servico';
import { VagaProvider } from '../providers/vaga/vaga';
import { BeneficioProvider } from '../providers/beneficio/beneficio';
import { AssociadoProvider } from '../providers/associado/associado';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { config } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { SobreProvider } from '../providers/sobre/sobre';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/pt-br';

@NgModule({
  declarations: [
    MyApp,
    FeedNoticiaPage,
    MenuPage,
    HomePage,
    TabsPage,
    ListaEventoPage,
    ListaAssociadoPage,
    ListaBeneficioPage,
    ListaServicoPage,   
    ListaVagaPage,
    SobrePage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    MomentModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedNoticiaPage,
    MenuPage,
    HomePage,
    TabsPage,
    ListaEventoPage,
    ListaAssociadoPage,
    ListaBeneficioPage,
    ListaServicoPage, 
    ListaVagaPage,
    SobrePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedNoticiaProvider,
    EventoProvider,
    ServicoProvider,
    VagaProvider,
    BeneficioProvider,
    AssociadoProvider,
    BeneficioProvider,
    AuthProvider,
    AngularFireAuth,
    SobreProvider,
    InAppBrowser

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
