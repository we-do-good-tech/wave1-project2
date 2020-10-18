import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualKeyDirective } from "../directives/virtual-key";
import { InputFocusDirective } from '../directives/focus.directive';
import { AuthRoutingModule } from "./auth.routing.module";
import { SharedModule } from '../shared/shared.module';
import { LimitInputDirective } from "../directives/limit-input.directive";

@NgModule({
    declarations: [
        EmailComponent,
        ConfirmComponent,
        VirtualKeyDirective,
        InputFocusDirective,
        LimitInputDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }
