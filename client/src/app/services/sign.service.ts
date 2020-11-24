import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report } from '../interfaces/Report';
import { ReportsService } from './reports.service';

@Injectable({
    providedIn: 'root'
})
export class SignService {

    private token: string


    constructor(private http: HttpClient, private reportsService: ReportsService) { }


    verifyToken(token: string): Observable<Report> {
        return this.http.post<Report>('api/sign/verify/parent-token', { token: token })
            .pipe(
                tap((result) => {
                    if (result) {
                        this.token = token
                        this.reportsService.setReport(result)
                    }
                })
            )
    }


    sendSign(singImageBase64: Blob): Observable<string> {
        return this.http.post<{
            message: string
        }>('api/sign/parent', { singImageBase64: singImageBase64, token: this.token })
            .pipe(
                map((result) => {
                    // console.log(result)
                    return result.message
                })
            )
    }
}
