import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        // console.log('NEXT: ', next)
        // console.log('STATE: ', state)
        const isLog = this.authService.getIsLog();
        console.log(isLog)
        if (isLog) {
            return true;
        }
        this.router.navigate(["/auth/user"]);
        return false;
    }
}

