import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class KeyboardService {
    private inputElement: HTMLInputElement;
    private keyboardEvent: EventEmitter<string>;

    constructor() {
        this.keyboardEvent = new EventEmitter();
    }


    get onKeyPress(): Observable<string> {
        return this.keyboardEvent.asObservable();
    }

    emitKey(key: string): void {
        this.inputElement.focus();
        this.keyboardEvent.emit(key);
    }

    setElem(element: HTMLInputElement): void {
        this.inputElement = element;
    }
}