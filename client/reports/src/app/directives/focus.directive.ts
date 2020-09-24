import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }

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
