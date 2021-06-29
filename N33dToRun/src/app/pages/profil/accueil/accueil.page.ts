import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { PlaceService } from 'src/app/services/place.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
    private loaded: boolean = false;
    private places: Object;

    constructor(){}

    ngOnInit(){
        this.load();
    }

    load(){
        this.loaded = false;
    }
}
