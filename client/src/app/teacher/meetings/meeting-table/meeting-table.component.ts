import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Report } from "src/app/interfaces/Report";
import { Student } from "src/app/interfaces/Student";
import { ReportsService } from "src/app/services/reports.service";
import { StudentsService } from 'src/app/services/students.service';


@Component({
    selector: "app-meeting-table",
    templateUrl: "./meeting-table.component.html",
    styleUrls: ["./meeting-table.component.scss"],
})
export class MeetingTableComponent implements OnInit, OnDestroy {
    students: Student[];
    reports: Report[];
    studentSelected: string;

    subStudents: Subscription;
    sunReports: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public reportsService: ReportsService,
        private studentsService: StudentsService) {
        this.students = [];
        this.reports = [];
    }

    ngOnInit(): void {
        this.subStudents = this.route.data.subscribe((result) => {
            this.students = result.students;
        });
        this.sunReports = this.route.data.subscribe((result) => {
            this.reports = result.reports;
            console.log(this.reports)
        });
    }


    onSelectStudent(event: any): void {
        this.studentSelected = event.target.value
    }


    getReportSignAgain(report: Report) {
        const student = this.students.find((s) => s.ticketNo === report.ticketNo);
        report.studentName = student.studentName;
        report.parentEmail = student.parentEmail;

        this.reportsService.setReport(report);
        this.router.navigate(["/main/teacher/meeting", report.ticketNo], {
            queryParams: {
                date: report.reportDate,
                time: report.reportStartTime
            }
        });
    }

    ngOnDestroy(): void {
        this.subStudents.unsubscribe();
        this.sunReports.unsubscribe();
    }
}
