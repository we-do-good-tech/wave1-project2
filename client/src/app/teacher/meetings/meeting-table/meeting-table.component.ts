import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { map } from 'rxjs/operators';
import { Report } from "src/app/interfaces/Report";
import { Student } from "src/app/interfaces/Student";
import { ReportsService } from "src/app/services/reports.service";
import { daysRange } from "../../../services/helpers/time.range";


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
    subReports: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private reportsService: ReportsService) {
        this.students = [];
        this.reports = [];
    }

    ngOnInit(): void {
        this.subStudents = this.route.data.subscribe((result) => {
            this.students = result.students;
        });

        this.subReports = this.reportsService.getReportsChange()
            .subscribe((result) => {
                // console.log('REPORTS CHANGE')
                this.reports = result;
                this.students.forEach((s) => {
                    let findReports = this.reports.find((r) => r.ticketNo == s.ticketNo)
                    if (findReports) {
                        s.hasReports = true
                    }
                })
                // console.log(this.reports)
            })
    }


    onSelectStudent(event: any): void {
        this.studentSelected = event.target.value
    }


    getReportSignAgain(report: Report): void {
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

    anableResendParentSign(date: string, rangeLimit: number): boolean {
        const now = new Date().getTime()
        const last = new Date(date).getTime()
        if (daysRange(now, last) < rangeLimit) {
            return true
        }
        return false
    }

    ngOnDestroy(): void {
        this.subStudents.unsubscribe();
        this.subReports.unsubscribe();
    }
}
