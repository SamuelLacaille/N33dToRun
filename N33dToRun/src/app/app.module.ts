import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export const firebaseConfig = {
  apiKey: 'AIzaSyChhCLAMyvdu9VDIzuWvCa_2OHhiSwzkWY',
  authDomain: 'n33dtorun.firebaseapp.com',
  databaseURL: 'https://n33dtorun-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'n33dtorun',
  storageBucket: 'n33dtorun.appspot.com',
  messagingSenderId: '680482293948',
  appId: '1:680482293948:web:bb8e31e75fbce6181828b9'


  
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,],
  providers: [SplashScreen, StatusBar, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}




