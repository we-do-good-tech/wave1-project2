import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

    constructor() { }

    f: string = ''
    s: string = ''
    t: string = ''

    checkNgForm(form: NgForm) {
        console.log(`${this.f} ${this.s} ${this.t}`);
    }

    onChange(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(0, 1);
        }
    }



}
