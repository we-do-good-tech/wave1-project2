import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appLimitInputVal]'
})
export class LimitInputValDirective {
    constructor(private inputElemet: ElementRef) { }
}
