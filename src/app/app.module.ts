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
import { CadastrarAssociadoPage } from '../pages/cadastrar-associado/cadastrar-associado';

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
    EventoProvider

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
