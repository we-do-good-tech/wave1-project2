import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appStyleElemetSelected]'
})
export class StyleElemetSelectedDirective {
    constructor(private containerElement: ElementRef) { }
}
