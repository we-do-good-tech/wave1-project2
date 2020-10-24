import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { time } from "console";
import { Subscription } from "rxjs";
import { ReportStats } from "src/app/interfaces/Report";
import { conculatePresent } from "../../../services/helpers/present";

@Component({
  selector: "app-meeting-create-success",
  templateUrl: "./meeting-create-success.component.html",
  styleUrls: ["./meeting-create-success.component.scss"],
})
export class MeetingCreateSuccessComponent
  implements OnInit, OnDestroy, AfterViewInit {
  reporstStats: ReportStats;
  subReportsStats: Subscription;
  currentMount: number;
  //   progressStatus: string

  constructor(private route: ActivatedRoute) {
    this.currentMount = new Date().getMonth() + 1;
    // this.progressStatus = this.canculateStatus()
  }

  @ViewChild("progressTime") timeStatus: ElementRef;

  ngOnInit(): void {
    this.subReportsStats = this.route.data.subscribe((result) => {
      console.log(result);
      this.reporstStats = result.reportsStats;
    });
  }

  ngAfterViewInit(): void {
    const progressTime = this.timeStatus.nativeElement;
    const currentProgress = this.canculateStatus();

    progressTime.style.width = `${String(this.canculateStatus())}%`;
    // this.canculateStatus();
    // console.log(`${String(this.canculateStatus())}%`);
    console.log(currentProgress);
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
