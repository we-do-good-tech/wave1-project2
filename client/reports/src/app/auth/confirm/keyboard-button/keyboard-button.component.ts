import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-keyboard-button',
    templateUrl: './keyboard-button.component.html',
    styleUrls: ['./keyboard-button.component.scss']
})
export class KeyboardButtonComponent {

    @Input() number: number
    @Output() numberSelected: EventEmitter<number> = new EventEmitter<number>()

    onClickNumber(value) {
        this.numberSelected.emit(value)
    }

}
