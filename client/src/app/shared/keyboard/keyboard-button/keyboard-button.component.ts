import { Component, Input } from '@angular/core';
import { KeyBoardKey } from '../keyboard.component';

@Component({
    selector: 'app-keyboard-button',
    templateUrl: './keyboard-button.component.html',
    styleUrls: ['./keyboard-button.component.scss']
})
export class KeyboardButtonComponent {
    @Input() key: KeyBoardKey
}
