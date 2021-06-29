import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {
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
