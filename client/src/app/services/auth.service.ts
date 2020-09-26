import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserId } from '../interfaces/UserId';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    checkUserId(userId: UserId): Observable<any> {
        return this.http.post('demo/adress', userId)
    }
}
