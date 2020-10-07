import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    }


    confirmCode(code: ConfirmCode): Observable<string> {
        return this.http.post<{ message: string, isLog: boolean }>('api/auth/teacher/confirm-code', code)
            .pipe(
                map((result) => {
                    console.log(result)
                    this.isLog = result.isLog
                    return result.message
                })
            )

    }


}
