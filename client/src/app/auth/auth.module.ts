import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth.routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { EmailComponent } from './email/email.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthComponent } from "./auth/auth.component";
import { AngularMaterialModule } from '../angular.material.module';


@NgModule({
    declarations: [
        EmailComponent,
        ConfirmComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule,
        AngularMaterialModule
    ]
})
export class AuthModule { }
