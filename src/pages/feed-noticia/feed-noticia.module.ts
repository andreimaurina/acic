import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedNoticiaPage } from './feed-noticia';

@NgModule({
  declarations: [
    FeedNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedNoticiaPage),
  ],
})
export class FeedNoticiaPageModule {}
