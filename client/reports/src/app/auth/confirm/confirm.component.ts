import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
    screen = screen;
    constructor() { }

    onSendConfirmCode(form: NgForm) {
        Array.from(document.getElementsByClassName('alert')).forEach(elem => elem.classList[elem.classList.contains('show') ? 'remove' : 'add']('show'))
        console.log(form.value)
    }

    onChange(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(1, 2);
        }
    }



}
