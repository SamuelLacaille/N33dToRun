// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { PlaceModel } from '../models/place.model';
// import { NetworkStatus, Plugins } from '@capacitor/core';
// import { from, Observable } from 'rxjs';

// const { Storage } = Plugins;
// const { Network } = Plugins;

// @Injectable({
//     providedIn: 'root'
// })
// export class PlaceService {
//     private url: string = "http://192.168.0.16:3000/place";

//     constructor(public http: HttpClient){}

//     getAll(){
//         return new Observable(observer => {
//             Network.getStatus().then(status => {
//                 if( status.connected ){
//                     let observable = this.http.get(this.url);
//                     observable.subscribe(data => {
//                         Storage.set({
//                             key: 'data',
//                             value: JSON.stringify(data),
//                         });

//                         observer.next(data);
//                         observer.complete();
//                     });
                    
//                 }else{
//                     Storage.get({ key: 'data' }).then(data => {
//                         observer.next(data);
//                         observer.complete();
//                     });
//                 }
//             });
//         });
//     }

//     // getById(id: number){
//     //     return this.http.get(this.url + '/' + id);
//     // }

//     // add(place: PlaceModel){
//     //     return this.http.post<PlaceModel>(this.url, place);
//     // }

//     // async getNetwork(){
//     //     let status = await Network.getStatus();
//     //     return status;
//     // }
// }
