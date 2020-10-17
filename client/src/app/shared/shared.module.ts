import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { HttpErrorMessagesComponent } from "./http-error-messages/http-error-messages.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";
import { ParentSignatureComponent } from "./parent-signature/parent-signature.component";
import { SignatureCanvasComponent } from "./signature-canvas/signature-canvas.component";

import { SignaturePadModule } from "@ng-plus/signature-pad";

@NgModule({
  declarations: [
    HeaderComponent,
    HttpErrorMessagesComponent,
    NotFoundComponent,
    FooterComponent,
    LoaderComponent,
    ParentSignatureComponent,
    SignatureCanvasComponent,
  ],
  imports: [CommonModule, RouterModule, SignaturePadModule],
  exports: [
    HeaderComponent,
    HttpErrorMessagesComponent,
    NotFoundComponent,
    FooterComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
