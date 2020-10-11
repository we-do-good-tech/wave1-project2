import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class HttpErrorMessagesService {

    private errorMessage: string;
    private errorMessageChnage: Subject<string>;

    constructor() {
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

    clearMessage() {
        setTimeout(() => {
            this.errorMessage = '';
            this.errorMessageChnage.next(this.errorMessage);
        }, 5000);
    }


}
