import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-teacher-main',
    templateUrl: './teacher-main.component.html',
    styleUrls: ['./teacher-main.component.scss']
})
export class TeacherMainComponent implements OnInit {

    constructor(private authService: AuthService) {
        // this.authService.getAuthData()
    }

    ngOnInit(): void {
        console.log('TEACHER MAIN')
    }

}
