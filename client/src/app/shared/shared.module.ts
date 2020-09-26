import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { HttpErrorMessagesComponent } from "./http-error-messages/http-error-messages.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent

    ]
})
export class SharedModule { }
