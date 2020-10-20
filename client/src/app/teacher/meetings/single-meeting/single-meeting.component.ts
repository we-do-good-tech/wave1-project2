import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Report } from 'src/app/interfaces/Report';
import { MeetingsService } from 'src/app/services/meetings.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
    selector: 'app-single-meeting',
    templateUrl: './single-meeting.component.html',
    styleUrls: ['./single-meeting.component.scss']
})
export class SingleMeetingComponent implements OnInit {
    mode: string
    report: Report

    constructor(
        private route: ActivatedRoute,
        private teacherService: TeacherService,
        private meetingsService: MeetingsService
    ) { }

    ngOnInit(): void {
        this.report = this.meetingsService.getReportCreated()

        // this.route.url.subscribe((result) => {
        //     this.checkUrl(result)
        // })
    }


    onSendReport(): void {
        if (this.report) {
            this.teacherService.createReport(this.report)
                .subscribe((result) => {
                    console.log(result)
                })
        }
    }
    // checkUrl(paths: UrlSegment[]) { }





}
