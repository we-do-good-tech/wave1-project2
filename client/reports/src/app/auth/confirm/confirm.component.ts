import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmCode } from 'src/app/interfaces/ConfirmCode';
import { FormsService } from "../../services/forms.service";


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
    screen = screen;

    constructor(private formsService: FormsService) { }

    onSendConfirmCode(form: NgForm): void {
        console.log(form)
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
