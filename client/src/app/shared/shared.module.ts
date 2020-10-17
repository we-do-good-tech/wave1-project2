import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { HttpErrorMessagesComponent } from "./http-error-messages/http-error-messages.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";
import { ParentSignatureComponent } from "./parent-signature/parent-signature.component";
import { SignaturePadModule } from "@ng-plus/signature-pad";
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardButtonComponent } from './keyboard/keyboard-button/keyboard-button.component';
import { ExmpleComponent } from './exmple/exmple.component';


@NgModule({
    declarations: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent,
        FooterComponent,
        LoaderComponent,
        ParentSignatureComponent,
        KeyboardComponent,
        KeyboardButtonComponent,
        ExmpleComponent
    ],
    imports: [CommonModule, RouterModule, SignaturePadModule, FormsModule],
    exports: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent,
        FooterComponent,
        LoaderComponent,
        KeyboardComponent,
        KeyboardButtonComponent,
        ExmpleComponent
    ],
})
export class SharedModule { }
