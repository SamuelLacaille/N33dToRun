import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { PlaceService } from 'src/app/services/place.service';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {
    clickSub: any;
    constructor(private localNotifications: LocalNotifications) {}
    simpleNotif() {
      this.localNotifications.schedule({
        id: 1,
        text: 'Vas faire du sport bg',
        trigger: { at: new Date(new Date().getTime() + 5000) },
        data: { secret: 'secret' }
      });
    }
}
