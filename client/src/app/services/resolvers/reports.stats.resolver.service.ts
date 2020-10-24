import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ReportStats } from 'src/app/interfaces/Report';
import { ReportsService } from '../reports.service';


@Injectable({
    providedIn: 'root'
})
export class ReportsStatsResolverService implements Resolve<ReportStats> {

    constructor(private reportsService: ReportsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ReportStats> {
        return this.reportsService.getMountlyStats()
    }


}