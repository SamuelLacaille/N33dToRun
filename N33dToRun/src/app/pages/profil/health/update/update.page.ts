import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateModel } from 'src/app/models/updateInfoS.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
    private updateForm: FormGroup;

    constructor(public formBuilder: FormBuilder){}

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.updateForm = this.formBuilder.group({
            poids: ['', [Validators.required, Validators.min(0), Validators.max(250)]],
            tall: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            meal: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            fastFood: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            sportTime: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            tabac: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            slip: ['', [Validators.required,  Validators.min(0), Validators.max(250)]],
            gsanguin: [''],
            buyMostImportant: [''],
            mobilityType: [''],
            organe: [],
        });
    }

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
            values['slip'],
            values['buyMostImportant'],
            values['mobilityType'],
        );
    }


}