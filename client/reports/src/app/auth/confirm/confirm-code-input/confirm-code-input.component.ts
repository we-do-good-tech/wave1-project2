import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-confirm-code-input',
    templateUrl: './confirm-code-input.component.html',
    styleUrls: ['./confirm-code-input.component.scss']
})
export class ConfirmCodeInputComponent implements OnInit {

    @Input() name: string
    @Input() value: string

    ngOnInit() {
        console.log(this.value)
    }

    limitValue(event: any) {
        if (String(this.value).length > 1) {
            event.target.value = event.target.value.slice(0, 1)
            return
        }
    }

}
