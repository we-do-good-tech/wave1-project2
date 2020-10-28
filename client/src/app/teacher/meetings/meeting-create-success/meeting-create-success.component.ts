import {
    Component,
    OnDestroy,
    OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { map } from 'rxjs/operators';
import { ReportStats } from "src/app/interfaces/Report";
import { conculatePresent } from "../../../services/helpers/present";

@Component({
    selector: "app-meeting-create-success",
    templateUrl: "./meeting-create-success.component.html",
    styleUrls: ["./meeting-create-success.component.scss"],
})
export class MeetingCreateSuccessComponent implements OnInit, OnDestroy {
    reporstStats: ReportStats;
    subReportsStats: Subscription;
    currentMount: number;
    progress: string

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.subReportsStats = this.route.data
            .pipe(
                map((result) => {
                    this.currentMount = new Date().getMonth() + 1;
                    this.reporstStats = result.reportsStats;
                    let limitHoures = this.reporstStats.limitHours;
                    let hoursDone = this.reporstStats.totalHours.split(":")[0];
                    return conculatePresent(Number(limitHoures), Number(hoursDone))
                })
            ).subscribe((result) => {
                console.log(result);
                this.progress = `${String(result)}%`
            });
    }


    ngOnDestroy(): void {
        this.subReportsStats.unsubscribe();
    }

}
