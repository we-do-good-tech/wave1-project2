import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReportStats } from 'src/app/interfaces/Report';
import { conculatePresent } from "../../../services/helpers/present";

@Component({
    selector: 'app-meeting-create-success',
    templateUrl: './meeting-create-success.component.html',
    styleUrls: ['./meeting-create-success.component.scss']
})
export class MeetingCreateSuccessComponent implements OnInit, OnDestroy, AfterViewInit {

    reporstStats: ReportStats
    sunReportsStats: Subscription
    currentMount: number

    constructor(private route: ActivatedRoute) {
        this.currentMount = new Date().getMonth() + 1
    }

    @ViewChild('bar') barStatus: ElementRef

    ngOnInit(): void {
        this.route.data.subscribe((result) => { console.log(result); this.reporstStats = result.reportsStats })

    }


    ngAfterViewInit(): void {
        const bar = this.barStatus.nativeElement
        // bar.style.width = "70%"
        console.log(bar)
        bar.style.backgroundColor = "red"
        this.canculateStatus()
    }


    ngOnDestroy(): void {
        this.sunReportsStats.unsubscribe()
    }


    canculateStatus() {
        let limitHoures = this.reporstStats.limitHours
        let hoursDone = this.reporstStats.totalHours.split(':')[0]
        let donePresent = conculatePresent(Number(limitHoures), Number(hoursDone))
        console.log(donePresent)
    }

}
