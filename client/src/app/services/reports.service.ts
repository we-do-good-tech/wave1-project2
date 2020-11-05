import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
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
    private reportsStats: ReportStats
    private reportChange: BehaviorSubject<Report>

    constructor(private http: HttpClient) {
        this.reports = []
        this.report = null
        // this.reportChange = new BehaviorSubject<Report>(this.report)
        // this.getReportsNotConfirm()
        //     .pipe(
        //         map((result) => {
        //             this.reports = result
        //             this.reportsChange.next([...this.reports])
        //         })
        //     )
        //     .subscribe((result) => {
        //         console.log(result)
        //     })
    }


    getReportsChange(): Observable<Report[]> {
        return this.reportsChange.asObservable()
    }


    getReportChange(): Observable<Report> {
        return this.reportChange.asObservable()
    }


    getReporstLocal(): Report[] {
        if (this.reports) return this.reports
        return
    }


    createReport(report: Report): Observable<string> {
        console.log(this.reports)
        // parentEmail: "nirkuba199999@gmail.com"
        // reportActivitis: "s"
        // reportComments: "s"
        // reportDate: "2020-11-04"
        // reportEndTime: "08:40"
        // reportRangeTimne: "00:10"
        // reportStartTime: "08:30"
        // studentName: "יחזקאל (חזקי) דיסקין - לימודית"
        // ticketNo: "12"
        // console.log(report)
        // index: "9"
        // lastResendDateToParent: "2020-11-05"
        // reportActivitis: "SDA"
        // reportComments: "DAS"
        // reportDate: "2020-11-02"
        // reportEndTime: "08:50"
        // reportRangeTimne: "0:20:00"
        // reportStartTime: "08:30"
        // ticketNo: "13"
        return this.http.post<{ message: string, index: number }>('api/teacher/create-report', report)
            .pipe(
                map((result) => {
                    // report.index = result.index
                    // report.lastDateResendSignToParent = formatDate(new Date())
                    // console.log(result)
                    // this.reports.push(report)
                    this.reports = []
                    return result.message
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
        // console.log('HTTP CALL REPORTS START')
        return this.http.get<Report[]>("api/teacher/reports-unconfirm")
            .pipe(
                tap((result) => {
                    // console.log('HTTP CALL RESPONSE');
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
        // this.reportChange.next(this.report)
    }


    getReport(): Report {
        if (this.report) return this.report;
        return undefined;
    }

}
