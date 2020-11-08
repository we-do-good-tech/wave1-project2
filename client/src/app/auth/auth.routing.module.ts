import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from "./email/email.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { NotAuthGuard } from '../services/guards/not-auth.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
        path: 'user',
        component: AuthComponent
    },
    // {
    //     // path: 'confirm',
    //     // component: ConfirmComponent,
    //     // // canActivate: [
    //     // //     NotAuthGuard
    //     // // ]
    // }
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