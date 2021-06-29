import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-month',
  templateUrl: './month.page.html',
  styleUrls: ['./month.page.scss'],
})
export class MonthPage implements OnInit {
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
