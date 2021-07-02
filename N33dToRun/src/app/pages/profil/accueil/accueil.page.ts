import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { PlaceService } from 'src/app/services/place.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
// export class AccueilPage implements OnInit {
//     poids:  string;
//     taille:  string;
//     groupeSanguin:  string;
//     donneur:  string;
//     repas:  string;
//     fastfood:  string;
//     // sport:  string;
//     alcool:  string;
//     name: string;
//     tabac:  string;
//     sommeil:  string;
//     mobilite:  string;
//     sante:any[];
//     test:any[];
//     informations:any[];

//     constructor(
//         private router: Router,
//         private fireAuth: AngularFireAuth,
//         public afDB: AngularFireDatabase


        
//         ){this.onGetSante();this.onGetInformations();}

//     ngOnInit(){
      
//     }

//     onGetSante(){
//         this.afDB.list('sante/').valueChanges()
//       .subscribe(response => {
//        console.log(response);
//         this.sante = response;
//       })
//     }
//     onGetInformations(){
//       this.afDB.list('Informations/').valueChanges()
//     .subscribe(response => {
//      console.log(response);
//       this.informations = response;
//     })
//   }
// }
export class AccueilPage  {
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
    
