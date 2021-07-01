import { Injectable } from '@angular/core';
import { Informations } from '../services/Informations';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class InformationsService {
  infosListRef: AngularFireList<any>;
  infosRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }


   // Create
   createInfos(apt: Informations) {
    return this.infosListRef.push({
      dateDeNaissance: apt.dateDeNaissance,
      donneur: apt.donneur,
      email: apt.email,
      groupeSanguin: apt.groupeSanguin,
      prenom: apt.prenom,
      nom: apt.nom,
      poids: apt.poids,
      sexe: apt.sexe,
      taille: apt.taille,
      telephone: apt.telephone
    })
  }

  getInfos(id: string) {
    this.infosRef = this.db.object('/informations/' + id);
    return this.infosRef;
  }



  // Get List
  getInfosList() {
    this.infosListRef = this.db.list('/speakers');
    return this.infosListRef;
  }

    // Update
    updateInfos(id, apt: Informations) {
        return this.infosRef.update({
            dateDeNaissance: apt.dateDeNaissance,
            donneur: apt.donneur,
            email: apt.email,
            groupeSanguin: apt.groupeSanguin,
            prenom: apt.prenom,
            nom: apt.nom,
            poids: apt.poids,
            sexe: apt.sexe,
            taille: apt.taille,
            telephone: apt.telephone
        })
      }
// /pages/profil/speakers
        // Delete
  deleteBooking(id: string) {
    this.infosRef = this.db.object('/informations/' + id);
    this.infosRef.remove();
  }
}