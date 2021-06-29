import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home', icon: 'home' },
    { title: 'Profil', url: '/pages/profil', icon: 'person' },
    { title: 'Stats', url: '/pages/stats', icon: 'stats-chart' },
    { title: 'Map', url: '/pages/map', icon: 'map' },
    { title: 'Inscription', url: '/pages/inscription', icon: 'reader' },
    { title: 'Connexion', url: '/pages/connexion', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

  }


}
