import { Injectable } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loadStatus: boolean
    private loadStatusChange: BehaviorSubject<boolean>

    constructor() {
        this.loadStatus = false
        this.loadStatusChange = new BehaviorSubject<boolean>(this.loadStatus)
    }


    getLoadStatusChange(): Observable<boolean> {
        return this.loadStatusChange.asObservable()
    }


    setStatus(status: boolean): void {
        this.loadStatus = status
        this.loadStatusChange.next(this.loadStatus)
    }
}
