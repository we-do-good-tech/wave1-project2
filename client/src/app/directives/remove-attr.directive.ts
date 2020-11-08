import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appRemoveAttr]'
})
export class RemoveAttrDirective implements OnInit {

    @Input('attrName') attrName: string
    @Input('elementName') elementName: string


    constructor(private parentElemet: ElementRef) {
    }

    ngOnInit() {

    }

    @HostListener('click', ['$event'])
    onClick(event: any): void {
        const elements = this.parentElemet.nativeElement.querySelectorAll(this.elementName)

        elements.forEach((element: HTMLInputElement) => {
            if (element.id !== event.target.id) {
                element.removeAttribute(this.attrName)
            }
        })


    }

}
