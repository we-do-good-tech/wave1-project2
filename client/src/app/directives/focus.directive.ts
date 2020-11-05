import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }


    @HostListener('focus')
    setFirst() {
        const input = this.formElement.nativeElement.querySelector('.ng-invalid')
        input.blur()
    }

    @HostListener('input')
    check() {
        setTimeout(() => {
            const input = this.formElement.nativeElement.querySelector('.ng-invalid')
            if (input) {
                input.focus();
            }
        }, 0);
    }
}
