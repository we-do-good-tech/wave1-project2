import { Component, OnInit } from '@angular/core';
import { UserName } from 'src/app/interfaces/TeacherId';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    userName: UserName

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.userName = this.authService.getUserName()
    }

}
