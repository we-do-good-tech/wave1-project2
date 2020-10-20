import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MeetingsService } from '../meetings.service';

@Injectable({
    providedIn: 'root'
})
export class SingleMeetingToOperationGuard implements CanActivate {
    constructor(private meetingsService: MeetingsService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.meetingsService.getReportCreated()) {
            return true;
        }
        this.router.navigate(['/main/teacher'])
        return false
    }

}
