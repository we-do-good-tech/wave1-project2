import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { Report } from 'src/app/interfaces/Report';
import { Student } from "src/app/interfaces/Student";
import { MeetingsService } from 'src/app/services/meetings.service';


@Component({
    selector: "app-meeting-table",
    templateUrl: "./meeting-table.component.html",
    styleUrls: ["./meeting-table.component.scss"],
})
export class MeetingTableComponent implements OnInit, OnDestroy {

    students: Student[]
    reports: Report[]

    subStudents: Subscription
    sunReports: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private meetingsService: MeetingsService) {
        this.students = []
        this.reports = []
    }

    ngOnInit(): void {
        this.subStudents = this.route.data.subscribe((result) => { this.students = result.students })
        this.sunReports = this.route.data.subscribe((result) => { this.reports = result.reports })
    }


    getReportSignAgain(report: Report) {
        console.log(report)
        const findStudent = this.students.find((s) => s.ticketNo === report.ticketNo)
        report.studentName = findStudent.studentName
        this.meetingsService.setReport(report)
        this.router.navigate(['/main/teacher/meeting', report.ticketNo])
    }


    ngOnDestroy(): void {
        this.subStudents.unsubscribe()
        this.sunReports.unsubscribe()
    }
}
