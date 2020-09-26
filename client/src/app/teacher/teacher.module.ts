import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from "./teacher.routing";



@NgModule({
    declarations: [TeacherMainComponent],
    imports: [
        CommonModule,
        SharedModule,
        TeacherRoutingModule
    ]
})
export class TeacerModule { }
