import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorMessagesService } from 'src/app/services/http-error-messages.service';

@Component({
    selector: 'app-http-error-messages',
    templateUrl: './http-error-messages.component.html',
    styleUrls: ['./http-error-messages.component.scss']
})
export class HttpErrorMessagesComponent implements OnInit {

    message: string

    constructor(private httpErrorMessages: HttpErrorMessagesService) { }

    ngOnInit(): void {
        this.httpErrorMessages.getErrorMessage
            .subscribe((message) => {
                this.message = message
            })

    }

}
