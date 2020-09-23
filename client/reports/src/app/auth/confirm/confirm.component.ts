import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';

@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, AfterViewInit {
    confirmCodeForm: FormGroup

    getFormControl: (form: FormGroup, controlName: string) => FormControl

    @ViewChild('first') first: ElementRef

    constructor(private formsService: FormsService) {
        this.getFormControl = this.formsService.getFormControl
    }

    ngOnInit(): void {
        this.confirmCodeForm = this.formsService.getConfirmCode()
    }

    onSubmit(): void {
        if (this.confirmCodeForm.invalid) {
            return
        }
        let code = ''
        Object.values(this.confirmCodeForm.value).map((v) => code += v)
        alert(code)
    }


    ngAfterViewInit(): void {
        this.first.nativeElement.focus()
    }


    limitOneNumber(constrolName: string): void {
        const control = this.confirmCodeForm.get(constrolName)
        if (String(control.value).length > 1) {
            control.patchValue(
                String(control.value).slice(0, 1)
            )
            return
        }
    }

}
