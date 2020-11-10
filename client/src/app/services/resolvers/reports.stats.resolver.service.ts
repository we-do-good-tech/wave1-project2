import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ReportStats } from 'src/app/interfaces/Report';
import { LoaderService } from '../loader.service';
import { ReportsService } from '../reports.service';


@Injectable({
    providedIn: 'root'
})
export class ReportsStatsResolverService implements Resolve<ReportStats> {

    constructor(private reportsService: ReportsService, private loaderService: LoaderService) { }

    resolve(): Observable<ReportStats> {
        this.loaderService.setStatus(true)
        return this.reportsService.getMountlyStats()
    }


}