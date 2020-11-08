import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appRemoveAttr]'
})
export class RemoveAttrDirective implements OnInit {

    @Input() appRemoveAttr: string
    @Input('elementName') elementName: string


    constructor(private parentElemet: ElementRef) {
    }

    ngOnInit() {
        // this.parentElemet.nativeElement[0].removeAttribute('placeholder')
    }

    @HostListener('click', ['$event'])
    onClick(event: any): void {
        const elements = this.parentElemet.nativeElement.querySelectorAll(this.elementName)

        elements.forEach((element: HTMLElement) => {
            if (element.id !== event.target.id) {
                element.removeAttribute(this.appRemoveAttr)
            }
        })


    }

}
