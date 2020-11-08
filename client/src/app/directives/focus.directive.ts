import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective implements AfterViewInit {

    constructor(private formElement: ElementRef) { }


    ngAfterViewInit(): void {
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


    @HostListener('click', ['$event'])
    onClick(event: any): void {
        const inputs = this.formElement.nativeElement.querySelectorAll('input')
        // console.log(event.target.id)
        this.formElement.nativeElement[event.target.id - 1].blur()
        inputs.forEach((element: HTMLInputElement) => {
            if (element.id !== event.target.id) {
                element.removeAttribute('placeholder')
            }
        })
    }
}
