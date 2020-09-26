import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class FormsService {


    constructor() { }


    formControlStatus(control: FormControl): boolean {
        if (control.invalid && (control.dirty || control.touched)) {
            return true;
        }
        return false;
    }


    //  displayErrorMessage(control: FormControl): string {
    //     if (control.hasError('required')) {
    //         return 'This field is reqiured';
    //     }
    //     else if (control.hasError('minlength')) {
    //         return 'To short';
    //     }
    //     else if (control.hasError('pattern')) {
    //         return 'Invalid Pattern';
    //     }
    //     return '';
    // }

}
