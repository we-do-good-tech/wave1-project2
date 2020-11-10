import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-parent-signature-success',
    templateUrl: './parent-signature-success.component.html',
    styleUrls: ['./parent-signature-success.component.scss']
})
export class ParentSignatureSuccessComponent {

    constructor(private router: Router) { }

    // ngOnInit(): void { }

    onCloseTab() {
        this.router.navigate(['not-found'])
        // window.open('confirm-report/signature-success', '_self', '');
        // window.close();
    }

}
