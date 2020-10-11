import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
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
    ): Observable<boolean | UrlTree> | boolean | UrlTree {
        const isLog = this.authService.getIsLog();
        console.log(isLog)
        // console.log(state)
        if (isLog) {
            // if (state.url === '/auth/id' || '/auth/confirm') {
            //     this.router.navigate(['/main'])
            //     return true
            // }
            return true;
        }

        this.router.navigate(["/auth/id"]);
        return false;
    }
}
