import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsService } from 'src/app/services/forms/forms.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-exmple',
    templateUrl: './exmple.component.html',
    styleUrls: ['./exmple.component.scss']
})
export class ExmpleComponent implements OnInit {

    constructor(private loaderService: LoaderService, public formsService: FormsService) { }

    ngOnInit(): void {
    }



    onSendEmail(form: NgForm): void {
        if (form.invalid) return;
        console.log(form.value.teacherEmail)
        // this.loaderService.setStatus(true)

    }

}
