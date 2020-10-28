import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report, ReportStats } from "../interfaces/Report";
import { daysRange } from "../services/helpers/time.range"

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
        return this.http.get<ReportStats>('api/teacher/reports/stats')
    }


    getReportsNotConfirm(): Observable<Report[]> {
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


    resendParentSign(report: Report): Observable<string> {
        const reportInfo = {
            parentEmail: report.parentEmail,
            ticketNo: report.ticketNo,
            reportDate: report.reportDate,
            index: Number(report.index)
        }
        return this.http.post<{ message: string }>('api/teacher/resend/parent-sign', reportInfo)
            .pipe(
                map((result) => {
                    return result.message
                })
            )
    }


    setReport(report: Report): void {
        this.report = { ...report };
    }


    getReport(): Report {
        if (this.report) return this.report;
        return undefined;
    }


    anableResendParentSign(date: string | Date, rangeLimit: number): boolean {
        console.log(date)
        const now = new Date().getTime()
        const last = new Date(date).getTime()
        console.log(now, last)
        if (daysRange(now, last) < rangeLimit) {
            return true
        }
        return false
    }
}
