import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParentSignatureSuccessComponent } from './parent-signature-success/parent-signature-success.component';
import { ParentSignatureComponent } from './parent-signature/parent-signature.component';

const routes: Routes = [
    {
        path: '',
        component: ParentSignatureComponent
    },
    {
        path: 'signature-success',
        component: ParentSignatureSuccessComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SignatureRoutingModule { }