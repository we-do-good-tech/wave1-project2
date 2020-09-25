import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmCode } from 'src/app/interfaces/ConfirmCode';


@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

    constructor() { }

    onSendConfirmCode(form: NgForm) {
        if (form.invalid) return

        let code: string = ''
        for (const num in form.value) {
            code += form.value[num]
        }

        const codeToSend: ConfirmCode = {
            code: Number(code)
        }

        console.log(codeToSend)
    }

    onChange(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(1, 2);
        }
    }



}
