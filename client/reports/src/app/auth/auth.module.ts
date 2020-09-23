import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFocusDirective } from "../directives/input-focus.directive";




@NgModule({
    declarations: [
        IdComponent,
        ConfirmComponent,
        InputFocusDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
