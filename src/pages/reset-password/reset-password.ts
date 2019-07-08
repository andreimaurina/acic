import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})

export class ResetPasswordPage {

  email: string =null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider,
    public alertCtrl: AlertController
    ) {
  }

  resetPassword() {
    if (this.email == null){
      let alert = this.alertCtrl.create();
      alert.setTitle('Erro');
      alert.setSubTitle('Nenhum e-mail informado.');
      alert.addButton('Ok');
      alert.present().then(() => {
      });
    } else {
      this.authservice.resetPassword(this.email).then((res: any) => {
        if (!res.code){
          this.navCtrl.pop();
          this.email=null;
        }else
          alert(res);
      })
    }
  
  }

}