import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
