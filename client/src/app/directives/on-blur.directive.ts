import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appOnBlur]'
})
export class OnBlurDirective implements OnInit {

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        this.element.nativeElement.blur()
        console.log('ON-BLUR', this.element.nativeElement)
    }

}
