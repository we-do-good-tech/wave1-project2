import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFocusDirective } from "../directives/input-focus.directive";
import { KeyboardButtonComponent } from "./confirm/keyboard-button/keyboard-button.component";
import { ConfirmCodeInputComponent } from "./confirm/confirm-code-input/confirm-code-input.component";




@NgModule({
    declarations: [
        IdComponent,
        ConfirmComponent,
        InputFocusDirective,
        KeyboardButtonComponent,
        ConfirmCodeInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
