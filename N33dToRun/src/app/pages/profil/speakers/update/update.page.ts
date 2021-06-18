import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateModel } from 'src/app/models/update.model';

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

    send(){
        let values = this.updateForm.value;
        let model = new UpdateModel(
            values['name'],
            values['firstName'],
            values['old'],
            values['sex'],
            values['poids'],
            values['tall'],
            values['email'],
            values['password'],
            values['gsanguin'],
            values['tel'],
            values['contactNumber'],
            values['organe'],
        );
    }


}