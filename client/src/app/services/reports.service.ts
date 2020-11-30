import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report, ReportStats } from "../interfaces/Report";
import { formatDate } from "../services/helpers/time.range"

@Injectable({
    providedIn: "root",
})
export class ReportsService {
    private report: Report;
    private reports: Report[]
    private reportsChange: BehaviorSubject<Report[]>
    private reportChange: BehaviorSubject<Report>


    constructor(private http: HttpClient, private router: Router) {
        this.reports = []
        this.report = null
        this.reportChange = new BehaviorSubject<Report>(this.report)
        this.reportsChange = new BehaviorSubject<Report[]>(this.reports)
    }


    getReportsChange(): Observable<Report[]> {
        return this.reportsChange.asObservable()
    }


    getReportChange(): Observable<Report> {
        return this.reportChange.asObservable()
    }


    createReport(report: Report): Observable<string> {
        return this.http.post<{
            message: string,
            index: number
        }>('api/teacher/create-report', report, { withCredentials: true })
            .pipe(
                map((result) => {
                    // console.log(result)
                    report.index = result.index
                    report.lastDateResendSignToParent = formatDate(new Date())
                    this.reports.push(report)
                    this.reportsChange.next([...this.reports])
                    // this.router.navigate(["/main/teacher/meeting-success"]);
                    return result.message
                })
            )
    }


    getMountlyStats(): Observable<ReportStats> {
        return this.http.get<ReportStats>('api/teacher/reports/stats', { withCredentials: true })
    }


    getReportsNotConfirm(): Observable<Report[]> {
        if (this.reports.length > 0) {
            return of(this.reports);
        }
        return this.http.get<Report[]>("api/teacher/reports-unconfirm", { withCredentials: true })
            .pipe(
                tap((result) => {
                    this.reports = result;
                    this.reportsChange.next([...this.reports])
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
        return this.http.post<{
            message: string
        }>('api/teacher/resend/parent-sign', reportInfo, { withCredentials: true })
            .pipe(
                map((result) => {
                    const findIndex = this.reports.findIndex((r) => r.index == report.index)
                    report.lastDateResendSignToParent = formatDate(new Date())
                    this.reports[findIndex] = report
                    this.reportsChange.next([...this.reports])
                    return result.message
                })
            )
    }


    setReport(report: Report): void {
        this.report = { ...report };
        this.reportChange.next(this.report)
    }


    getReport(): Report {
        return this.report || undefined
    }

}
