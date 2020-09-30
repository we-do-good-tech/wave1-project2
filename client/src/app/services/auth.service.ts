import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmCode } from '../interfaces/ConfirmCode';
import { UserId } from '../interfaces/UserId';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLog: boolean = false;


    constructor(private http: HttpClient) { }

    checkUserId(userId: UserId): Observable<any> {
        return this.http.post<any>('fake/userId', userId)
            .pipe(
                tap((result) => {
                    console.log(result)
                    this.isLog = true;
                })
            )
    }


    confirmCode(code: ConfirmCode) { }


}
