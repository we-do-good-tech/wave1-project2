import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FormsService } from 'src/app/services/forms.service';

@Component({
    selector: 'app-id',
    templateUrl: './id.component.html',
    styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
    idForm: FormGroup;
    inputType: string = 'password';
    getFormControl: (form: FormGroup, controlName: string) => FormControl

    constructor(public formsService: FormsService) {
        this.getFormControl = this.formsService.getFormControl

    }

    ngOnInit() {
        this.idForm = this.formsService.getIdForm();
    }

    toggleVis() {
        this.inputType = this.inputType === 'text' ? 'password' : 'text';
    }


}
