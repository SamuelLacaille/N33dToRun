import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { PlaceService } from 'src/app/services/place.service';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
    private places;
    private position: any = {
        coords: {
            latitude: 0,
            longitute: 0,
        }
    };

    constructor(public placeService: PlaceService) { }

    ngOnInit(){
        this.load();
        this.getPosition();
    }

    async getPosition(){
        this.position = await Geolocation.getCurrentPosition();
    }

    load(){
        this.placeService.getAll().subscribe( places => {
            this.places = places;
        }).add( () => {
        });
    }
}
