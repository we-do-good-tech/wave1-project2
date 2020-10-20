import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Report } from 'src/app/interfaces/Report';
import { Student } from 'src/app/interfaces/Student';
import { TeacherService } from '../teacher.service';

@Injectable({
    providedIn: 'root'
})
export class ReportsResolverService implements Resolve<Report[]> {

    constructor(private teacherService: TeacherService) { }


    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Report[]> {
        return this.teacherService.getReportsNotConfirm()
    }


}
