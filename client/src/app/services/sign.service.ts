import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Report } from '../interfaces/Report';
import { ReportsService } from './reports.service';

@Injectable({
    providedIn: 'root'
})
export class SignService {


    constructor(private http: HttpClient, private reportsService: ReportsService) { }


    verifyToken(token: string): Observable<Report> {
        return this.http.post<Report>('api/sign/verify/parent-token', { token: token })
            .pipe(
                tap((result) => {
                    if (result) {
                        this.reportsService.setReport(result)
                    }
                })
            )
    }
}
