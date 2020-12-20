import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
    selector: 'app-teacher-main',
    templateUrl: './teacher-main.component.html',
    styleUrls: ['./teacher-main.component.scss']
})
export class TeacherMainComponent implements OnInit {

    constructor(
        // private authService: AuthService,
        private reportsService: ReportsService,
        private loaderService: LoaderService,

    ) { }

    ngOnInit(): void {
        // console.log('TEACHER MAIN')
        this.reportsService.getReportsNotConfirm()
            .subscribe()
        this.loaderService.setStatus(false)

    }

}
