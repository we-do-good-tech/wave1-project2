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


    focusOnElement(element: HTMLInputElement): void {
        element.focus()
    }


    onKeyPress(): Observable<string> {
        return this.keyboardEvent.asObservable();
    }

    emitKey(key: string): void {
        this.inputElement.focus();
        this.inputElement.removeAttribute('readonly')
        // this.inputElement.style.color = 'red'
        this.keyboardEvent.emit(key);
    }

    setElement(element: HTMLInputElement): void {
        this.inputElement = element;
    }
}