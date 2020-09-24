import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

    constructor() { }

    onSendConfirmCode(form: NgForm) {
        console.log(form.value)
    }

    onChange(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(1, 2);
        }
    }



}
