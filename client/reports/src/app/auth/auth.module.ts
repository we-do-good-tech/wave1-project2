import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualKeyDirective } from "../directives/input-focus.directive";
import { KeyboardButtonComponent } from "./confirm/keyboard-button/keyboard-button.component";
import { LimitInputValDirective } from "../directives/limit-input-val.directive";
import { KeyboardComponent } from "../auth/confirm/keyboard/keyboard.component";
import { InputFocusDirective } from '../directives/focus.directive';

@NgModule({
    declarations: [
        IdComponent,
        ConfirmComponent,
        VirtualKeyDirective,
        KeyboardButtonComponent,
        LimitInputValDirective,
        KeyboardComponent,
        InputFocusDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
