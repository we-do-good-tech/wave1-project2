import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';


const routes: Routes = [
    {
        path: 'teacher',
        component: TeacherMainComponent
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

export class TeacherRoutingModule { }