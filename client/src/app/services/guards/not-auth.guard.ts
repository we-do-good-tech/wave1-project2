import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(): Observable<boolean> | boolean {
        const token = this.authService.getToken()
        // console.log(isLog)
        if (token) {
            return true;
        }
        this.router.navigate(['/auth/email'])
        return false
    }

}
