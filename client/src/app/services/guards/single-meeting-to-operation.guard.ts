import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ReportsService } from '../reports.service';

@Injectable({
    providedIn: 'root'
})
export class SingleMeetingToOperationGuard implements CanActivate {
    constructor(private reportsService: ReportsService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.reportsService.getReportCreated()) {
            return true;
        }
        this.router.navigate(['/main/teacher'])
        return false
    }

}
