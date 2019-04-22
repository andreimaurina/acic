import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feed-noticia',
  templateUrl: 'feed-noticia.html',
})
export class FeedNoticiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedNoticiaPage');
  }


  // converte(){
  //   var parseString = require('xml2js').parseString;
  //   var xml = "<root>Hello xml2js!</root>"
  //   parseString(xml, function (err, result) {
  //       console.dir(result);
  //   });
  // }
}

