import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmCode } from 'src/app/interfaces/ConfirmCode';


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
    screen = screen;
    constructor() { }

    onSendConfirmCode(form: NgForm): void {
        if (form.invalid) return

        let code: string = ''
        for (const num in form.value) {
            code += form.value[num]
        }

        const codeToSend: ConfirmCode = {
            code: Number(code)
        }

        console.log(form.value)
        console.log(codeToSend)
        // אל תקח מהקודומנט ישירות 
        // Array.from(document.getElementsByClassName('alert')).forEach(elem => elem.classList[elem.classList.contains('show') ? 'remove' : 'add']('show'))
    }

    onChange(event: any): void {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(1, 2);
        }
    }



}
