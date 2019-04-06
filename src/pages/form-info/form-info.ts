import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-form-info',
  templateUrl: 'form-info.html',
})
export class FormInfoPage {

  id = null;
  info: Info;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.info = new Info();
    } else {
      firebase.database().ref(`infos/${this.id}`).on('value', resp => {
        this.info = snapshotToObject(resp);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormInfoPage');
  }

  gravar() {
    if (!this.id) {
      let newInfo = firebase.database().ref('infos/').push();
      newInfo.set(this.info);
    } else {
      let newInfo = firebase.database().ref(`infos/${this.id}`);
      newInfo.update(this.info);
    }
    this.navCtrl.pop();
  }


}

export class Info {
  info_title: string;
  info_descripion: string;
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}