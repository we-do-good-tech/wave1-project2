import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HttpErrorMessagesService } from "../http-error-messages.service";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorMessagesInterceptor implements HttpInterceptor {
    constructor(
        private httpErrorMessagesService: HttpErrorMessagesService,
        private authServcie: AuthService,
        private router: Router
    ) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            tap((result) => {
                // console.log(result)
            }),
            catchError((error) => {
                console.log(error);
                // console.log(error);
                let errorMassge: string = error.error.message;
                if (error.error.message === 'SERVER ERROR' || error.status >= 500) {
                    this.router.navigate(['not-found'])
                    return throwError(error);
                }

                else if (error.status === 429 && error.statusText === "Too Many Requests") {
                    this.router.navigate(['/not-found'])
                    return throwError(error);
                }
                else if (errorMassge === 'Unauthorized') {
                    this.authServcie.clearLoginInfo()
                    this.router.navigate(['/auth/user'])
                    return throwError(error);
                } else {

                    this.httpErrorMessagesService.setMessage(error.error.message);

                    return throwError(error);
                }
            })
        );
    }
}
