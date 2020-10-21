import { Component, OnInit } from '@angular/core';
import { UserName } from 'src/app/interfaces/TeacherId';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    userName: UserName

    constructor(private authService: AuthService, private loaderService: LoaderService, private meetingService: MeetingsService) { }

    ngOnInit(): void {
        this.loaderService.setStatus(false)
        this.meetingService.setReport(undefined)
        this.userName = this.authService.getUserName()
    }

}
