import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionPageRoutingModule } from './connexion-routing.module';

import { ConnectionPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConnectionPageRoutingModule
  ],
  declarations: [ConnectionPage]
})
export class ConnectionPageModule {}
