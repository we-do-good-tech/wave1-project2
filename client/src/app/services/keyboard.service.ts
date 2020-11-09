import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class KeyboardService {
    private inputElement: HTMLInputElement;
    private keyboardEvent: EventEmitter<string>;

    constructor() {
        this.keyboardEvent = new EventEmitter<string>();
    }


    onKeyPress(): Observable<string> {
        return this.keyboardEvent.asObservable();
    }

    emitKey(key: string): void {
        this.inputElement.focus();
        this.keyboardEvent.emit(key);
        this.inputElement.blur()
    }

    setElement(element: HTMLInputElement): void {
        this.inputElement = element;
    }


    setAttribute(attributeName: string, value: any): void {
        this.inputElement.setAttribute(attributeName, value)
    }


    removeAttribute(attributeName: string): void {
        this.inputElement.removeAttribute(attributeName)
    }


    createEvent(eventName: string): Event {
        const event = new Event(eventName, {
            bubbles: true,
            cancelable: true,
        })

        return event
    }



}