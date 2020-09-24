import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class KeyboardService {
    private _elem: HTMLInputElement;
    private _kbdEvent: EventEmitter<string>;

    get onKeyPress(): Observable<string> {
        return this._kbdEvent.asObservable();
    }
    constructor() {
        this._kbdEvent = new EventEmitter();
    }

    emitKey(key: string): void {
        this._elem.focus();
        this._kbdEvent.emit(key);
    }

    setElem(elem: HTMLInputElement): void {
        this._elem = elem;
    }
}