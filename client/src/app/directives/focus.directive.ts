import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }


    // @HostListener('blur')
    // setFirst() {

    //     const input = this.formElement.nativeElement.querySelector('.ng-invalid')
    //     input.removeAttribute('readonly')
    //     console.log(input)
    // }

    @HostListener('input')
    check() {
        setTimeout(() => {
            const input = this.formElement.nativeElement.querySelector('.ng-invalid')
            console.log(input)
            if (input) {
                input.focus();
                // input.blur()
                // input.setAttribute('readonly', 'readonly')
            }
        }, 0);
    }
}
