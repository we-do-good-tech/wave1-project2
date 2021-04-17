import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from '../loader.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                tap((result) => {
                    // console.log('STOP LOAD')
                    this.stopLoader(result)
                }),
                catchError((error) => {
                    this.stopLoader(error)
                    return throwError(error)
                })
            )
    }


    private stopLoader(request: HttpEvent<unknown>): void {
        if (request instanceof HttpResponse || request instanceof HttpErrorResponse) {
            this.loaderService.setStatus(false)
        }
    }
}
