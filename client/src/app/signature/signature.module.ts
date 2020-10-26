import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { SignaturePadModule } from "@ng-plus/signature-pad";
import { SignatureRoutingModule } from "./signature.routing";
import { ParentSignatureComponent } from './parent-signature/parent-signature.component';
import { ParentSignatureSuccessComponent } from './parent-signature-success/parent-signature-success.component';


@NgModule({
    declarations: [
        ParentSignatureComponent,
        ParentSignatureSuccessComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SignaturePadModule,
        SignatureRoutingModule
    ]
})

export class SignatureModule { }