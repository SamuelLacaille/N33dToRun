import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Informations } from '../../../services/Informations';
import { InformationsService } from '../../../services/informations.service';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
    
    
    nom: string;
    prenom: string;
    email: string;
    Age: string;
    groupeSanguin: string;
    Donneur: string;
    poids: string;
    sexe: string;
    taille: string;
    telephone: string;
    informations:any[];
    constructor(
        private infosService: InformationsService,
        private router: Router,
        private fireAuth: AngularFireAuth,
        public afDB: AngularFireDatabase,


        
    ){this.onGetInformations();}

    ngOnInit(){
  
            
          
      
    }
    onGetInformations(){
        this.afDB.list('Informations/').valueChanges()
      .subscribe(response => {
       // console.log(response);
        this.informations = response;
      })
    }

    

  
}
