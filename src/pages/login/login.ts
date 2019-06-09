import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { CadastroVagaPage } from '../cadastro-vaga/cadastro-vaga';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.pop();
      else
        alert(res);
    })
  }

  passwordreset(){
    this.navCtrl.push('ResetPasswordPage');
  }
}
