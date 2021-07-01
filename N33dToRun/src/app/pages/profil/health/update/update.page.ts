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

    constructor(public formBuilder: FormBuilder, public afDB: AngularFireDatabase){}

    ngOnInit(){
      //  this.buildForm();
    }




    update() {
        this.afDB.list('sante/').push({
            poids: '73',
            taille: '174',
            groupeSanguin: 'A+',
            donneur: 'OUI',
            repas: '3',
            fastfood: '1',
            sport: '2',
            alcool: '3',
            tabac: '0',
            sommeil: '9',
            mobilité: 'marche',
        });

    }





/*
    buildForm(){
        this.updateForm = this.formBuilder.group({
            poids: ['', [Validators.required, Validators.min(0), Validators.max(250)]],
            tall: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            meal: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            fastFood: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            sportTime: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            tabac: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            alcool: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            slip: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            gsanguin: [''],
            buyMostImportant: [''],
            mobilityType: [''],
            organe: [],
        });
    }
<<<<<<< HEAD

    send(){
        let values = this.updateForm.value;
        let model = new UpdateModel(
            values['poids'],
            values['tall'],
            values['gsanguin'],
            values['organe'],
            values['meal'],
            values['fastFood'],
            values['sportTime'],
            values['tabac'],
            values['alcool'],
            values['slip'],
            values['buyMostImportant'],
            values['mobilityType'],
        );
    }
=======
*/
>>>>>>> 47e6ebfb91a61940b35ade37258a6258ca6d98f9


}