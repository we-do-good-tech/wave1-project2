import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormsValidatorsService {


    static limitDate(control: AbstractControl): ValidationErrors {
        let value = control.value
        console.log(value)


        return null
    }


}
