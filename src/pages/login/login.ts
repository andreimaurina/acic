import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  passwordType: string = 'password';
  passwordShown: boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider,
    public alertCtrl: AlertController
    ) {
    }
    
    public togglePassword(){
      if(this.passwordShown){
        this.passwordShown = false;
        this.passwordType = 'password';
      } else {
        this.passwordShown = true;
        this.passwordType = 'password';
      }
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
    
    signIn() {
      if (this.credentials.email == null){
        let alert = this.alertCtrl.create();
        alert.setTitle('Erro: e-mail não preenchido.');
        alert.addButton('Ok');
        alert.present().then(() => {
      });
      } else {
        if (this.credentials.password == null){
          let alert = this.alertCtrl.create();
          alert.setTitle('Erro: senha não preenchida.');
          alert.addButton('Ok');
          alert.present().then(() => {
        });
      } else {
          this.authservice.login(this.credentials).then((res: any) => {
          if (!res.code)
            this.navCtrl.pop();
          else
            alert(res);
          })
        }
      }
    }
    resetPassword(){
      this.navCtrl.push('ResetPasswordPage');
    }
  }