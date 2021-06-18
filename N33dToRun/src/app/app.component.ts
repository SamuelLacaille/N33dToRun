import { Component } from '@angular/core';
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
  constructor() {}
}
