import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ReportStats } from "src/app/interfaces/Report";
import { conculatePresent } from "../../../services/helpers/present";

@Component({
    selector: "app-meeting-create-success",
    templateUrl: "./meeting-create-success.component.html",
    styleUrls: ["./meeting-create-success.component.scss"],
})
export class MeetingCreateSuccessComponent implements OnInit, OnDestroy, AfterViewInit {
    reporstStats: ReportStats;
    subReportsStats: Subscription;
    currentMount: number;

    constructor(private route: ActivatedRoute) {
        this.currentMount = new Date().getMonth() + 1;
    }

    @ViewChild("progressTime") timeStatus: ElementRef;

    ngOnInit(): void {
        this.subReportsStats = this.route.data.subscribe((result) => {
            this.reporstStats = result.reportsStats;
            // console.log(result);
        });
    }

    ngAfterViewInit(): void {
        const progressTime = this.timeStatus.nativeElement;
        progressTime.style.width = `${String(this.canculateStatus())}%`;
    }


    ngOnDestroy(): void {
        this.subReportsStats.unsubscribe();
    }

    canculateStatus() {
        let limitHoures = this.reporstStats.limitHours;
        let hoursDone = this.reporstStats.totalHours.split(":")[0];
        return conculatePresent(Number(limitHoures), Number(hoursDone));
    }
}
