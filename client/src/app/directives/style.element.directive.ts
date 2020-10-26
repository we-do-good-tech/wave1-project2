import { Directive, DoCheck, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[styleElement]'
})
export class StyleElementDirective implements DoCheck {

    @Input() changeClass: string
    @Input() selector: string

    constructor(private element: ElementRef) { }

    ngDoCheck(): void {
        const element = this.element.nativeElement.querySelector(this.selector)
        element.classList.add(this.changeClass)
    }
}
