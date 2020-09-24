import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/services/forms.service';

@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, AfterViewInit, OnDestroy {
    // confirmCodeForm: FormGroup

    // getFormControl: (form: FormGroup, controlName: string) => FormControl

    @ViewChild('form') myForm: NgForm

    // constructor(private formsService: FormsService) {
    //     this.getFormControl = this.formsService.getFormControl
    // }
    sub: Subscription
    ngOnInit(): void {
        // this.sub = this.myForm.form.valueChanges.subscribe((e) => {
        //     console.log(e)
        // })

        // this.confirmCodeForm = this.formsService.getConfirmCode()
    }

    // onSubmit(): void {
    //     if (this.confirmCodeForm.invalid) {
    //         return
    //     }
    //     let code = ''
    //     Object.values(this.confirmCodeForm.value).map((v) => code += v)
    //     alert(code)
    // }


    ngAfterViewInit(): void {
        // this.first.nativeElement.focus()
        this.sub = this.myForm.valueChanges.subscribe((e) => {


            console.log(e)
        })


    }


    // limitOneNumber(constrolName: string): void {
    //     const control = this.confirmCodeForm.get(constrolName)
    //     if (String(control.value).length > 1) {
    //         control.patchValue(
    //             String(control.value).slice(0, 1)
    //         )
    //         return
    //     }
    // }


    // ------------------------------------------------------------------------------------------------------------

    numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    f: string = ''
    s: string = ''
    t: string = ''

    onClickNumber(value) {
        // console.log(this.myForm.setValue({ first: value.value }))
        // this.myForm.patchValue({

        // })
        if (this.f === '' || this.f === null) {
            this.f = value.value

        }
        else if (this.s === '' || this.s === null) {
            this.s = value.value

        }
        else if (this.t === '' || this.t === null) {
            this.t = value.value

        }
    }


    checkNgForm(form: NgForm) {

        console.log(form.value)

    }


    onChange(event) {
        let { value } = event.target
        if (String(value).length > 1) {
            event.target.value = value.slice(0, 1)
            return
        }
    }


    ngOnDestroy() {
        this.sub.unsubscribe()
    }



}
