import { AfterViewInit, Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }

    @HostListener('input')
    check() {
        const input = this.formElement.nativeElement.querySelector('.ng-invalid')
        if (input) {
            input.focus()
        }

        return
    }

}
