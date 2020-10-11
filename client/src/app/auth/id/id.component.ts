import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
    selector: 'app-id',
    templateUrl: './id.component.html',
    styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {

    constructor(
        private authService: AuthService,
        public formsService: FormsService,
        private router: Router
    ) { }

    ngOnInit(): void { }


    onSendId(form: NgForm): void {
        if (form.invalid) return;
        this.authService.authTeacherId(form.value).subscribe((result) => {
            this.router.navigate(['/auth/confirm'])
        })
    }





}
