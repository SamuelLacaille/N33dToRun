import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonicModule, ToastController } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
  loginData = {
  email: '',
  password: ''
};
constructor(
  public toastController: ToastController,
  public afAuth: AngularFireAuth
) {  }

login() {
  this.afAuth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
  .then(auth => {
    console.log('utilisateur connecté');
  })
  .catch(err => {
    console.log('Erreur: ' + err);
    this.errorMail();
  });

  
}
signUp() {
  this.afAuth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
  .then(auth => {
    console.log('utilisateur connecté');
  })
  .catch(err => {
    console.log('Erreur: ' + err);
    this.errorMail();
  });
}

async errorMail() {
  const toast = await this.toastController.create({
    message: 'Email ou mot de passe incorrect',
    duration: 2000,
    position: 'top'
  });
  toast.present();
}

}
