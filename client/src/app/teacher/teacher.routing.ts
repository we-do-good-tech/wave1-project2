import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateMeetingComponent } from "./meetings/create-meeting/create-meeting.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MeetingCreateSuccessComponent } from "./meetings/meeting-create-success/meeting-create-success.component";
import { MeetingTableComponent } from "./meetings/meeting-table/meeting-table.component";
import { SingleMeetingComponent } from "./meetings/single-meeting/single-meeting.component";
import { TeacherMainComponent } from "./teacher-main/teacher-main.component";
import { SingleMeetingToOperationGuard } from '../services/guards/single-meeting-to-operation.guard';
import { StudentsResolverService } from '../services/resolvers/students.resolver.service';
import { ReportsResolverService } from '../services/resolvers/reports.resolver.service';
import { ReportsStatsResolverService } from "../services/resolvers/reports.stats.resolver.service";

const routes: Routes = [
    {
        path: "teacher",
        component: TeacherMainComponent,
        children: [
            {
                path: "",
                component: DashboardComponent,
                resolve: {
                    reports: ReportsResolverService
                }
            },
            {
                path: "create-meeting",
                component: CreateMeetingComponent,
                resolve: {
                    students: StudentsResolverService
                }
            },
            {
                path: "meeting-new",
                component: SingleMeetingComponent,
                canActivate: [SingleMeetingToOperationGuard]
            },
            {
                path: "meetings-table",
                component: MeetingTableComponent,
                resolve: {
                    students: StudentsResolverService,
                    reports: ReportsResolverService
                }
            },
            {
                path: "meeting/:ticketNo",
                component: SingleMeetingComponent,
                canActivate: [SingleMeetingToOperationGuard]
            },
            {
                path: "meeting-success",
                component: MeetingCreateSuccessComponent,
                canActivate: [SingleMeetingToOperationGuard],
                resolve: {
                    reportsStats: ReportsStatsResolverService
                }
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeacherRoutingModule { }
