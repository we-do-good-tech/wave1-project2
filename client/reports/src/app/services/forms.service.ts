import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormsService {

    private idForm: FormGroup;
    private confirmCodeForm: FormGroup

    constructor(private fb: FormBuilder) { }

    getIdForm(): FormGroup {
        return this.idForm = this.fb.group({
            userId: [null, [
                Validators.required,
                Validators.minLength(9)
            ]]
        });
    }


    getFormControl(form: FormGroup, controlName: string): FormControl {
        return form.get(controlName) as FormControl
    }

}
