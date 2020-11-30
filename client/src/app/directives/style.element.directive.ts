import { Directive, OnInit, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[styleElement]'
})
export class StyleElementDirective implements OnInit {

    @Input('styleElement') styleElement: string
    @Input() selector: string

    constructor(private element: ElementRef, private renderer: Renderer2, private container: ViewContainerRef) { }

    ngOnInit(): void {
        // const element = this.renderer.selectRootElement(this.selector)
        // console.log(element)
        // this.renderer.addClass(element, this.styleElement)
        const element = this.element.nativeElement.querySelector(this.selector)
        element.classList.add(this.styleElement)
    }
}
