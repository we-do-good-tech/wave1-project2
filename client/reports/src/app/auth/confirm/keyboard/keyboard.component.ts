import { Component } from "@angular/core";
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
    selector: "app-keyboard",
    templateUrl: "./keyboard.component.html",
    styleUrls: ["keyboard.component.scss"]
})
export class KeyboardComponent {
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    constructor(private keyboardService: KeyboardService) { }

    onNumberClick(e: Event, key: string): void {
        // e.preventDefault();
        console.log(key)
        this.keyboardService.emitKey(key);
    }
}