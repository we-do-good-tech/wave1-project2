import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';



const routes: Routes = [
    {
        path: "",
        redirectTo: "auth/id",
        pathMatch: "full",
    },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "main",
        loadChildren: () =>
            import("./teacher/teacher.module").then((m) => m.TeacerModule),
        // canActivate: [AuthGuard]
    },
    {
        path: "**",
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
