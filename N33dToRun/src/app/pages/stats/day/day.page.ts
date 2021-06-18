import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlaceService } from 'src/app/services/place.service';


@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
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
