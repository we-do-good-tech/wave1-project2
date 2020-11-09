import { AfterViewInit, Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective implements OnInit {

    constructor(private formElement: ElementRef) { }


    ngOnInit(): void {
        this.formElement.nativeElement[0].focus()
        this.formElement.nativeElement[0].blur()
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
