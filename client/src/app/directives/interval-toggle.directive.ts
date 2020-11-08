import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appIntervalToggle]'
})
export class IntervalToggleDirective {

    timerTogglePlaceholder: NodeJS.Timer

    constructor(private element: ElementRef) { }

    @Input('appIntervalToggle') className: string

    @HostListener('focus')
    intervalToggle(): void {
        this.clearInterval()
        this.timerTogglePlaceholder = setInterval(() => {
            this.element.nativeElement.classList.toggle(this.className)
        }, 500)
    }


    clearInterval(): void {
        clearInterval(this.timerTogglePlaceholder)
    }

}
