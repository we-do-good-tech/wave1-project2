import { Component } from "@angular/core";
import { KeyboardService } from 'src/app/services/keyboard.service';

export interface KeyBoardKey {
    value: number | string,
    type: string
}

@Component({
    selector: "app-keyboard",
    templateUrl: "./keyboard.component.html",
    styleUrls: ["keyboard.component.scss"]
})
export class KeyboardComponent {
    keys: KeyBoardKey[] = [
        {
            value: 1,
            type: 'number'
        },
        {
            value: 2,
            type: 'number'
        },
        {
            value: 3,
            type: 'number'
        },
        {
            value: 4,
            type: 'number'
        },
        {
            value: 5,
            type: 'number'
        },
        {
            value: 6,
            type: 'number'
        },
        {
            value: 7,
            type: 'number'
        },
        {
            value: 8,
            type: 'number'
        },
        {
            value: 9,
            type: 'number'
        },
        {
            value: 'clear',
            type: 'string'
        },
        {
            value: 0,
            type: 'number'
        },
        {
            value: 'del_number',
            type: 'string'
        }
    ];

    constructor(private keyboardService: KeyboardService) { }

    onNumberClick(event: Event, key: string): void {
        event.preventDefault();
        this.keyboardService.emitKey(key);
    }
}