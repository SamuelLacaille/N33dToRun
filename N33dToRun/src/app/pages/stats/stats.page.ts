import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlaceService } from 'src/app/services/place.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
    private loaded: boolean = false;
    private places: Object;

    constructor(public placeService: PlaceService){}

    ngOnInit(){
        this.load();
    }

    load(){
        this.loaded = false;
    }
}
