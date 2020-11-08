import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective implements AfterViewInit {

    constructor(private formElement: ElementRef) { }


    ngAfterViewInit(): void {
        this.formElement.nativeElement[0].focus()
        this.formElement.nativeElement[0].removeAttribute('placeholder')
    }


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
