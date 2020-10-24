import { Component, OnInit } from '@angular/core';
import { UserName } from 'src/app/interfaces/TeacherId';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    userName: UserName

    constructor(
        private authService: AuthService,
        private loaderService: LoaderService,
        private reportsService: ReportsService) { }

    ngOnInit(): void {
        this.loaderService.setStatus(false)
        this.reportsService.setReport(undefined)
        this.userName = this.authService.getUserName()
    }

}
