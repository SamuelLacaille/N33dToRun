import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
    private updateForm: FormGroup;

    constructor(public formBuilder: FormBuilder,  public afDB: AngularFireDatabase){}

    ngOnInit(){
       // this.buildForm();
    }

    update() {
        this.afDB.list('Informations/').push({
            nom: 'LACAILLE',
            prenom: 'Samuel',
            Age: '24',
            sexe: 'Homme',
            poids: '73',
            taille: '174',
            email: 'samuel.lacaille@posware.fr',
            telephone: '0611449517',
            groupeSanguin: 'A+',
            Donneur: 'OUI'
        });

    }

  

}
 /*  buildForm(){
        this.updateForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            old: ['', [Validators.required, Validators.minLength(3)]],
            sex: ['', [Validators.required, Validators.minLength(3)]],
            poids: ['', [Validators.required, Validators.min(0), Validators.max(250)]],
            tall: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(10)]],
            tel: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            gsanguin: [''],
            organe: [],
        });
    }

   */
    


