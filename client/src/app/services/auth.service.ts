import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmCode } from '../interfaces/ConfirmCode';
import { TeacherId } from '../interfaces/TeacherId';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLog: boolean = false;


    constructor(private http: HttpClient) { }

    authTeacherId(teacherId: TeacherId): Observable<any> {
        return this.http.post<any>('api/auth/teacherId', teacherId)
            .pipe(
                tap((result) => {
                    console.log(result)
                    this.isLog = true;
                })
            )
    }


    confirmCode(code: ConfirmCode) { }


}
