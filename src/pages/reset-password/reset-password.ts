import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})

export class ResetPasswordPage {

  email: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword() {
    this.authservice.resetPassword(this.email).then((res: any) => {
      if (!res.code){

      }else
        alert(res);
    })
  
  }

}
