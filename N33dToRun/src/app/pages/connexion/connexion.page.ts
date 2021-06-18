import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionModel } from 'src/app/models/connexion.model';

@Component({
  selector: 'app-pages',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnectionPage implements OnInit {
    private connectionForm: FormGroup;

    constructor(public formBuilder: FormBuilder){}

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.connectionForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(10)]],
        });
    }

    send(){
        let values = this.connectionForm.value;
        let model = new ConnectionModel(
            values['name'],
            values['firstName'],
            values['email'],
            values['password'],
        );
    }


}
