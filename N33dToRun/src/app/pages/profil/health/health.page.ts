import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {


    poids:  string;
    taille:  string;
    groupeSanguin:  string;
    donneur:  string;
    repas:  string;
    fastfood:  string;
    sport:  string;
    alcool:  string;
    tabac:  string;
    sommeil:  string;
    mobilite:  string;
    sante:any[];

    constructor(
        private router: Router,
        private fireAuth: AngularFireAuth,
        public afDB: AngularFireDatabase


        
        ){this.onGetSante();}

    ngOnInit(){
      
    }

    

    onGetSante(){
        this.afDB.list('sante/').valueChanges()
      .subscribe(response => {
       // console.log(response);
        this.sante = response;
      })
    }
}
