import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appLimitInput]'
})
export class LimitInputDirective {

    constructor(private inputElement: ElementRef) { }


    @HostListener('input', ['$event'])
    limit(event: any) {
        let { value } = event.target
        if (String(value).length > 1) {
            value = value.slice(1, 2);
            event.target.value = value
        }
    }

}
