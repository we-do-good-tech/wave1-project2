import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appLimitInput]'
})
export class LimitInputDirective {

    constructor(private inputElement: ElementRef) { }


    @HostListener('input', ['$event.target.value'])
    limit(value: string) {
        console.log(value)
        if (String(value).length > 1) {
            // value = value.slice(1, 2);
            value = '9'
        }
    }

}
