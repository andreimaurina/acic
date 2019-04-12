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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedNoticiaPage,
    MenuPage,
    CadastroEventoPage,
    ListaEventoPage,
    CadastrarAssociadoPage,
    MenuPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FeedNoticiaPage,
    MenuPage,
    CadastroEventoPage,
    ListaEventoPage,
    CadastrarAssociadoPage,
    MenuPage
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
