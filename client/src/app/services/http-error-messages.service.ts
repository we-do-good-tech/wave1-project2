import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// export interface HttpErrorMessage {
//     message: string
// }

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


    get getErrorMessage() {
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
