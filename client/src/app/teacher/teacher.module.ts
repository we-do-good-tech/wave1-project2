import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from "./teacher.routing";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { MeetingCreateSuccessComponent } from './meetings/meeting-create-success/meeting-create-success.component';
import { SingleMeetingComponent } from './meetings/single-meeting/single-meeting.component';
import { MeetingTableComponent } from './meetings/meeting-table/meeting-table.component';
import { MeetingTableItemComponent } from './meetings/meeting-table/meeting-table-item/meeting-table-item.component';



@NgModule({
    declarations: [
        TeacherMainComponent,
        DashboardComponent,
        CreateMeetingComponent,
        MeetingCreateSuccessComponent,
        SingleMeetingComponent,
        MeetingTableComponent,
        MeetingTableItemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeacherRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class TeacerModule { }
