import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appInputFocus]'
})
export class InputFocusDirective {

    constructor(private formElement: ElementRef) { }


    @HostListener('focus')
    setFirst() {
        this.formElement.nativeElement[0].setAttribute('readonly', 'readonly')
    }

    @HostListener('input')
    check() {
        setTimeout(() => {
            let counter = 0
            const input = this.formElement.nativeElement.querySelector('.ng-invalid')
            if (input) {
                counter++
                console.log(counter, this.formElement.nativeElement[counter])
                input.focus();
                if (counter === 3) counter = 0
                this.formElement.nativeElement[counter].setAttribute('readonly', 'readonly')

            }
        }, 0);
    }
}
