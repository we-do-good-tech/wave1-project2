import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
        console.log('REPORTS RESOLVER START')
        // this.loaderService.setStatus(true)
        return this.reportsService.getReportsNotConfirm()
        // .pipe(
        //     tap(() => {
        //         // console.log('REPORTS RESOLVER RESPONSE')
        //         this.loaderService.setStatus(false)
        //     })
        // )
    }


}
