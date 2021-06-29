import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
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
