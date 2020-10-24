import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router, UrlSegment } from "@angular/router";
import { Subscription } from "rxjs";
import { Report } from "src/app/interfaces/Report";
import { LoaderService } from "src/app/services/loader.service";
import { ReportsService } from "src/app/services/reports.service";
import { TeacherService } from "src/app/services/teacher.service";

@Component({
    selector: "app-single-meeting",
    templateUrl: "./single-meeting.component.html",
    styleUrls: ["./single-meeting.component.scss"],
})
export class SingleMeetingComponent implements OnInit, OnDestroy {
    mode: string = "new-report";
    report: Report;
    sunParams: Subscription;

    constructor(
        private route: ActivatedRoute,
        private reportsService: ReportsService,
        private router: Router,
        private loaderService: LoaderService
    ) { }

    ngOnInit(): void {
        this.report = this.reportsService.getReportCreated();
        // console.log(this.report);
        this.sunParams = this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has("ticketNo")) {
                this.mode = "resend-sign";
            }
        });
    }

    onSendReport(): void {
        if (this.report) {
            this.loaderService.setStatus(true);
            this.reportsService.createReport(this.report).subscribe((result) => {
                console.log(result);
                this.router.navigate(["/main/teacher/meeting-success"]);
            });
        }
    }

    onResendSign(): void {
        if (this.report) {
            alert("עוד לא עובד");
            return;
        }
    }

    ngOnDestroy(): void {
        this.sunParams.unsubscribe();
    }
}
