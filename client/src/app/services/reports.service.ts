import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report, ReportStats } from "../interfaces/Report";
// import { daysRange, formatDate } from "../services/helpers/time.range"

@Injectable({
    providedIn: "root",
})
export class ReportsService {
    private report: Report;
    private reports: Report[]
    private reportsStats: ReportStats

    constructor(private http: HttpClient) {
        this.reports = []
    }


    getReporstLocal(): Report[] {
        if (this.reports) return this.reports
        return
    }


    createReport(report: Report): Observable<{ message: string }> {
        return this.http.post<{ message: string }>('api/teacher/create-report', report)
            .pipe(
                tap(() => {
                    this.reports = []
                })
            )
    }


    getMountlyStats(): Observable<ReportStats> {
        return this.http.get<ReportStats>('api/teacher/reports/stats')
    }


    getReportsNotConfirm(): Observable<Report[]> {
        if (this.reports.length > 0) {
            return of(this.reports);
        }

        console.log('HTTP CALL REPORTS')
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
            studentName: report.studentName,
            parentEmail: report.parentEmail,
            ticketNo: report.ticketNo,
            reportDate: report.reportDate,
            index: Number(report.index),
        }
        return this.http.post<{ message: string }>('api/teacher/resend/parent-sign', reportInfo)
            .pipe(
                map((result) => {
                    this.reports = []
                    //UPDATE REPORTS LOCALY 
                    // report.lastDateResendSignToParent = formatDate(new Date())
                    // // console.log(report)
                    // // console.log(this.reports)
                    // const findIndex = this.reports.findIndex((r) => r.index == report.index)
                    // this.reports[findIndex] = report

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

}
