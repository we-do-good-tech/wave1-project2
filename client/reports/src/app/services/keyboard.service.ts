import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { KeyboardAction } from '../interfaces/keyboard-action.interface';

@Injectable({
    providedIn: "root"
})
export class KeyboardService {
    private _elem: HTMLInputElement;
    private _kbdEvent: EventEmitter<string>;

    get onKeyPress(): Observable<string> {
        return this._kbdEvent.asObservable();

        /*.pipe(
            filter((action: KeyboardAction) => action.type === 1),
            map(action => action.key)
        )*/
    }

    /*  get onElementFocus(): Observable<number> {
          return this._kbdEvent.asObservable().pipe(
              filter((action: KeyboardAction) => action.type === 2),
              map(action => action.index)
          )
      }*/

    constructor() {
        this._kbdEvent = new EventEmitter();
    }

    emitKey(key: string): void {
        this._elem.focus();

        this._kbdEvent.emit(key);

        /* this._kbdEvent.emit({
             type: 1,
             key
         });*/
    }

    /* setFocus(index: number): void {
         this._kbdEvent.emit({
             type: 2,
             index
         });
     }*/

    setElem(elem: HTMLInputElement): void {
        this._elem = elem;
    }
}