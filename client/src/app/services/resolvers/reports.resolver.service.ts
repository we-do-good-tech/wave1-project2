import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Report } from 'src/app/interfaces/Report';
import { ReportsService } from '../reports.service';


@Injectable({
    providedIn: 'root'
})
export class ReportsResolverService implements Resolve<Report[]> {

    constructor(private reportsService: ReportsService) { }

    resolve(): Observable<Report[]> {
        console.log('REPORTS RESOLVER START')
        return this.reportsService.getReportsNotConfirm()
    }


}
