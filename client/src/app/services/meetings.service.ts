import { Injectable } from '@angular/core';
import { Report } from '../interfaces/Report';

@Injectable({
    providedIn: 'root'
})
export class MeetingsService {

    private report: Report

    constructor() { }


    setReport(report: Report): void {
        this.report = { ...report }
    }


    getReportCreated(): Report {
        if (this.report) return this.report
        return undefined
    }

}
