import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { SignaturePadModule } from "@ng-plus/signature-pad";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from "./angular.material.module";

import { AppComponent } from "./app.component";

import { HttpErrorMessagesInterceptor } from "./services/interceptors/http-error-messages.interceptor";
import { AuthInterceptor } from "./services/interceptors/auth.interceptor";
import { LoaderInterceptor } from "./services/interceptors/loader.interceptor";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        SignaturePadModule,
        BrowserAnimationsModule,
        // NgbModule,
    ],
    exports: [
        SharedModule,
        AngularMaterialModule,
        // NgbModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorMessagesInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
