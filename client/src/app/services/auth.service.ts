import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthLogInData } from '../interfaces/AuthLogInData';
import { ConfirmCode } from "../interfaces/ConfirmCode";
import { TeacherId } from "../interfaces/TeacherId";

@Injectable({
    providedIn: "root",
})
export class AuthService {

    private isLog: boolean;
    private isLogChange: BehaviorSubject<boolean>
    private token: string
    private tokenTimer: NodeJS.Timer


    constructor(private http: HttpClient, private router: Router) {
        this.isLog = false
        this.isLogChange = new BehaviorSubject<boolean>(this.isLog)
    }


    getToken(): string {
        return this.token
    }


    getIsLog(): boolean {
        return this.isLog
    }


    getIsLogChange(): Observable<boolean> {
        return this.isLogChange.asObservable()
    }


    getAuthData(): void {
        const authData = this.getSessionStorage()

        if (!authData) {
            // return this.clearLoginInfo()
            return
        }

        const now = new Date()
        const isValidTime = authData.expiresInDate.getTime() - now.getTime()

        console.log(isValidTime, 'IS TOKEN VALID TIME')

        if (isValidTime > 0) {
            this.token = authData.token
            this.isLog = true
            this.isLogChange.next(this.isLog)
            this.setTokenTimer(isValidTime / 1000)
        } else {
            this.clearLoginInfo()
        }
    }


    authTeacherId(teacherId: TeacherId): Observable<string> {
        return this.http.post<{
            message: string,
            token: string,
            confirmCodeExpire: number,
            tokenExpiresIn: number
        }>('api/auth/teacherId', teacherId)
            .pipe(
                map((result) => {
                    console.log(result)
                    if (result.token) {
                        this.token = result.token

                        const expiresIn = result.tokenExpiresIn

                        this.setTokenTimer(expiresIn)

                        const now = new Date()
                        const expiresInDate = new Date(now.getTime() + expiresIn * 1000)

                        this.saveSessionStorage(this.token, expiresInDate)
                    }
                    return result.message
                })
            )
    }


    confirmCode(code: ConfirmCode): Observable<string> {
        return this.http.post<{
            message: string,
            isLog: boolean,
        }>('api/auth/teacher/confirm-code', code)
            .pipe(
                map((result) => {
                    console.log(result)
                    this.isLog = result.isLog
                    this.isLogChange.next(this.isLog)
                    return result.message
                })
            )

    }


    resendConfirmCode(): Observable<string> {
        return this.http.get<{
            message: string,
            confirmCodeExpire: number
        }>('api/auth/new-confirm-code')
            .pipe(
                map((result) => {
                    console.log(result)
                    return result.message
                })
            )
    }


    private saveSessionStorage(token: string, expiresIn: Date): void {
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('expiresIn', expiresIn.toISOString())
    }


    private removeSessionStorage(): void {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('expiresIn')
    }


    private getSessionStorage(): AuthLogInData {
        const token = sessionStorage.getItem('token')
        const expiresInDate = sessionStorage.getItem('expiresIn')

        if (!token || !expiresInDate) {
            return
        }

        return {
            token: token,
            expiresInDate: new Date(expiresInDate)
        }

    }

    private clearLoginInfo(): void {
        this.token = null
        this.isLog = false
        this.isLogChange.next(this.isLog)
        this.router.navigate(['/'])
        clearTimeout(this.tokenTimer)
        this.removeSessionStorage()
    }



    private setTokenTimer(time: number): void {
        this.tokenTimer = setTimeout(() => {
            this.clearLoginInfo()
        }, time * 1000)
    }



}
