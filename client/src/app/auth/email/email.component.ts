import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsService } from 'src/app/services/forms/forms.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

    constructor(
        private authService: AuthService,
        public formsService: FormsService,
        private router: Router,
        private loaderService: LoaderService
    ) { }

    ngOnInit(): void {

    }


    onSendEmail(form: NgForm): void {
        if (form.invalid) return;
        // console.log(form.value.teacherEmail)
        this.loaderService.setStatus(true)
        this.authService.authTeacherEmail(form.value.teacherEmail).subscribe((result) => {
            this.router.navigate(['/auth/confirm'])
        })
    }





}
