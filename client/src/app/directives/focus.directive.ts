import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }


    // @HostListener('focus')
    // setFirst() {
    //     this.formElement.nativeElement[0].setAttribute('readonly', 'readonly')
    // }

    @HostListener('input')
    check() {
        setTimeout(() => {
            const input = this.formElement.nativeElement.querySelector('.ng-invalid')
            if (input) {
                input.focus();
                input.blur()
            }
        }, 0);
    }
}
