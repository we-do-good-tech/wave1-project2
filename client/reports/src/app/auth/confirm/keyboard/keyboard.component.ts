import { Component, EventEmitter } from "@angular/core";
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
    selector: "app-keyboard",
    templateUrl: "./keyboard.component.html",
    styleUrls: ["keyboard.component.css"]
})
export class KeyboardComponent {
    numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor(private keyboardService: KeyboardService) { }

    onNumberClick(e: Event, key: string): void {
        e.preventDefault();
        this.keyboardService.emitKey(key);
    }
}