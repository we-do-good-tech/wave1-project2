import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-keyboard-button',
    templateUrl: './keyboard-button.component.html',
    styleUrls: ['./keyboard-button.component.scss']
})
export class KeyboardButtonComponent {
    @Input() number: number
}
