import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Report } from 'src/app/interfaces/Report';
import { LoaderService } from '../loader.service';
import { ReportsService } from '../reports.service';


@Injectable({
    providedIn: 'root'
})
export class ReportsResolverService implements Resolve<Report[]> {

    constructor(private reportsService: ReportsService, private loaderService: LoaderService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Report[]> {
        this.loaderService.setStatus(true)
        return this.reportsService.getReportsNotConfirm()
    }


}
