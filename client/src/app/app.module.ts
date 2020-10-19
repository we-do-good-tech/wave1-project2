import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { HttpErrorMessagesInterceptor } from "./services/interceptors/http-error-messages.interceptor";
import { AuthInterceptor } from "./services/interceptors/auth.interceptor";
import { LoaderInterceptor } from "./services/interceptors/loader.interceptor";
import { SignaturePadModule } from "@ng-plus/signature-pad";




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
    ],
    exports: [SharedModule],
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
