import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { formatDate } from "../../services/helpers/time.range";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

    authProccess: boolean = false
    subAuthProccess: Subscription

    constructor(private authService: AuthService) {
        // console.log(formatDate(new Date()))
    }

    ngOnInit(): void {
        this.subAuthProccess = this.authService.getAuthProccessChange().subscribe((result) => this.authProccess = result)
    }

    ngOnDestroy(): void {
        this.subAuthProccess.unsubscribe()
    }

}
