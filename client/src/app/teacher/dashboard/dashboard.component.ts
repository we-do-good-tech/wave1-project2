import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    userName: string
    reportsLength: number
    subReports: Subscription

    constructor(
        private authService: AuthService,
        private loaderService: LoaderService,
        private route: ActivatedRoute,
        private reportsService: ReportsService) { }

    ngOnInit(): void {
        this.subReports = this.route.data
            .subscribe((result) => this.reportsLength = result.reports.length)

        this.loaderService.setStatus(false)
        this.reportsService.setReport(undefined)
        this.userName = this.authService.getUserName()
    }

    ngOnDestroy(): void {
        this.subReports.unsubscribe()
    }

}
