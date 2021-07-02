import { Component, OnInit } from '@angular/core';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsMapTypeId,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    Environment
  } from '@ionic-native/google-maps';
  import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

 @Component({
   selector: 'app-map',
   templateUrl: './map.page.html',
   styleUrls: ['./map.page.scss'],
 })
 export class MapPage implements OnInit {
    map: GoogleMap;

     constructor(  public alertController: AlertController,
        public actionCtrl: ActionSheetController,
        private platform: Platform) 
        {  if (this.platform.is('cordova')) {
            this.loadMap();
          } }

     ngOnInit(){
        this.map = GoogleMaps.create('map_canvas', {});
      
     }

     loadMap() {
        Environment.setEnv({
            API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDwZJ-GxexyjzuvCT3CuqXjl4IbRmVM-Ls',
            API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDwZJ-GxexyjzuvCT3CuqXjl4IbRmVM-Ls'
        });
        this.map = GoogleMaps.create('map_canvas', {
            camera: {
                target: {
                    lat: 49.443232,
                    lng:1.099971
                },
                zoom: 12,
                tilt: 30
            }
        });
    }
   
 }
