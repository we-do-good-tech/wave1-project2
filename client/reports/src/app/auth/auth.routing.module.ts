import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { IdComponent } from "./id/id.component";
import { ConfirmComponent } from "./confirm/confirm.component";

const routes: Routes = [
    {
        path: 'id',
        component: IdComponent
    },
    {
        path: 'confirm', component: ConfirmComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRoutingModule { }