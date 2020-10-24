import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Report, ReportStats } from "../interfaces/Report";

@Injectable({
    providedIn: "root",
})
export class ReportsService {
    private report: Report;
    private reports: Report[]
    private reportsStats: ReportStats

    constructor(private http: HttpClient) { }


    createReport(report: Report): Observable<{ message: string }> {
        return this.http.post<{ message: string }>('api/teacher/create-report', report)
            .pipe(
                tap(() => {
                    if (this.reports) {
                        this.reports.push(report)
                    }
                })
            )
    }


    getMountlyStats(): Observable<ReportStats> {
        // if (this.reportsStats) {
        //     return of(this.reportsStats)
        // }
        return this.http.get<ReportStats>('api/teacher/reports/stats')
    }


    getReportsNotConfirm(): Observable<Report[]> {
        // console.log(this.reports);
        if (this.reports) {
            return of(this.reports);
        }
        return this.http.get<Report[]>("api/teacher/reports-unconfirm")
            .pipe(
                tap((result) => {
                    // console.log(result);
                    this.reports = result;
                })
            );
    }


    setReport(report: Report): void {
        this.report = { ...report };
    }

    getReportCreated(): Report {
        if (this.report) return this.report;
        return undefined;
    }
}
