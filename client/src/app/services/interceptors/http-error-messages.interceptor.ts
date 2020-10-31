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
import { LoaderService } from "../loader.service";
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
                console.log(error.error.message);
                // console.log(error);
                let errorMassge: string = error.error.message;

                if (error.statusText === "Too Many Requests") {
                    errorMassge = error.error;
                }

                if (errorMassge === 'Unauthorize') {
                    this.authServcie.clearLoginInfo()
                    this.router.navigate(['/auth/email'])
                }

                // alert(errorMassge)

                this.httpErrorMessagesService.setMessage(error.error.message);

                return throwError(error);
            })
        );
    }
}
