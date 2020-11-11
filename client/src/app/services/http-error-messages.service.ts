import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root'
})
export class HttpErrorMessagesService {

    private errorMessage: string;
    private errorMessageChnage: Subject<string>;
    private deleteMessageTime: number = 5

    constructor(private router: Router, private authService: AuthService) {
        this.errorMessage = '';
        this.errorMessageChnage = new Subject<string>();
    }


    getErrorMessageChnage(): Observable<string> {
        return this.errorMessageChnage.asObservable();
    }


    setMessage(message: string): void {
        this.errorMessage = message;
        this.errorMessageChnage.next(this.errorMessage);
        this.clearMessage();
    }

    clearMessage(): void {
        setTimeout(() => {
            this.errorMessage = '';
            this.errorMessageChnage.next(this.errorMessage);
        }, this.deleteMessageTime * 1000);
    }


    checkErrorMessage(error: HttpErrorResponse): void {
        let errorMassge: string = error.error.message;
        if (errorMassge === 'SERVER ERROR' || error.status >= 500) {
            this.router.navigate(['not-found'])
        }
        else if (error.status === 429 && error.statusText === "Too Many Requests") {
            this.router.navigate(['/not-found'])

        }
        else if (errorMassge === 'Unauthorized') {
            this.authService.clearLoginInfo()
            this.router.navigate(['/auth/user'])

        } else {
            this.setMessage(errorMassge);
        }
    }


}
