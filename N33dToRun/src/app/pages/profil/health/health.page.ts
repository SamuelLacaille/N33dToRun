import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
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
