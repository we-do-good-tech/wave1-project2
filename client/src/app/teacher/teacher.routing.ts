import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateMeetingComponent } from "./meetings/create-meeting/create-meeting.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MeetingCreateSuccessComponent } from "./meetings/meeting-create-success/meeting-create-success.component";
import { MeetingTableComponent } from "./meetings/meeting-table/meeting-table.component";
import { SingleMeetingComponent } from "./meetings/single-meeting/single-meeting.component";
import { TeacherMainComponent } from "./teacher-main/teacher-main.component";

const routes: Routes = [
    {
        path: "teacher",
        component: TeacherMainComponent,
        children: [
            {
                path: "",
                component: DashboardComponent,
            },
            {
                path: "create-meeting",
                component: CreateMeetingComponent,
            },
            {
                path: "meetings-table",
                component: MeetingTableComponent,
            },
            {
                path: 'meeting/:id',
                component: SingleMeetingComponent
            },
            {
                path: 'meeting/:id/resend-sign',
                component: SingleMeetingComponent
            },
            {
                path: "meeting-seccess",
                component: MeetingCreateSuccessComponent,
            },
            {
                path: "meeting-summary",
                component: SingleMeetingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeacherRoutingModule { }
