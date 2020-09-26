import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { HttpErrorMessagesComponent } from "./http-error-messages/http-error-messages.component";

@NgModule({
    declarations: [
        HeaderComponent,
        HttpErrorMessagesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HttpErrorMessagesComponent
    ]
})
export class SharedModule { }
