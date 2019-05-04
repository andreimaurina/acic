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
import { CadastrarAssociadoPage } from '../pages/cadastrar-associado/cadastrar-associado';
import { MenuPage } from '../pages/menu/menu';
import { EventoProvider } from '../providers/evento/evento';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';
import { ListaAssociadoPage } from '../pages/lista-associado/lista-associado';
import { ListaBeneficioPage } from '../pages/lista-beneficio/lista-beneficio';
import { CadastroBeneficioPage } from '../pages/cadastro-beneficio/cadastro-beneficio';
import { CadastroServicoPage } from '../pages/cadastro-servico/cadastro-servico';
import { ListaServicoPage } from '../pages/lista-servico/lista-servico';
import { ListaVagaPage } from '../pages/lista-vaga/lista-vaga';
import { CadastroVagaPage } from '../pages/cadastro-vaga/cadastro-vaga';
import { SobrePage } from '../pages/sobre/sobre';
import { m } from '@angular/core/src/render3';

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
    IonicModule.forRoot(MyApp)
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
