import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { Report } from 'src/app/interfaces/Report';
import { Student } from "src/app/interfaces/Student";


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

    constructor(private route: ActivatedRoute) {
        this.students = []
        this.reports = []
    }

    ngOnInit(): void {
        this.subStudents = this.route.data.subscribe((result) => { this.students = result.students })
        this.sunReports = this.route.data.subscribe((result) => { this.reports = result.reports })
    }


    ngOnDestroy(): void {
        this.subStudents.unsubscribe()
        this.sunReports.unsubscribe()
    }
}
