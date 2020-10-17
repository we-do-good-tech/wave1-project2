import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualKeyDirective } from "../directives/virtual-key";
import { KeyboardButtonComponent } from "./confirm/keyboard-button/keyboard-button.component";
import { KeyboardComponent } from "../auth/confirm/keyboard/keyboard.component";
import { InputFocusDirective } from '../directives/focus.directive';
import { AuthRoutingModule } from "./auth.routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EmailComponent,
        ConfirmComponent,
        VirtualKeyDirective,
        KeyboardButtonComponent,
        KeyboardComponent,
        InputFocusDirective
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
