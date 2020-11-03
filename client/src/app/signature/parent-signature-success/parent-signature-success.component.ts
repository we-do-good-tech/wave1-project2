import { Component } from '@angular/core';

@Component({
    selector: 'app-parent-signature-success',
    templateUrl: './parent-signature-success.component.html',
    styleUrls: ['./parent-signature-success.component.scss']
})
export class ParentSignatureSuccessComponent {

    window: Window

    constructor() { }

    // ngOnInit(): void { }


    onCloseTab() {

        window.open('confirm-report/signature-success', '_self', '');
        window.close();
    }

}
