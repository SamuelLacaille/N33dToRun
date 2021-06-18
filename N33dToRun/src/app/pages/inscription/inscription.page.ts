import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationModel } from 'src/app/models/registration.model';

@Component({
  selector: 'app-pages',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class RegistrationPage implements OnInit {
    private registrationForm: FormGroup;

    constructor(public formBuilder: FormBuilder){}

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.registrationForm = this.formBuilder.group({
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
        let values = this.registrationForm.value;
        let model = new RegistrationModel(
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
