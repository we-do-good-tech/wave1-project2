import { OnInit, Directive, ElementRef, Input } from '@angular/core';


export interface ToggleData {
    className: string
    time: number
}

@Directive({
    selector: '[appIntervalToggle]'
})
export class IntervalToggleDirective implements OnInit {

    timerToggle: NodeJS.Timer

    constructor(private element: ElementRef) { }

    @Input('appIntervalToggle') toggleData: ToggleData

    ngOnInit() {
        this.clearInterval()
        this.timerToggle = setInterval(() => {
            this.element.nativeElement.classList.toggle(this.toggleData.className)
        }, this.toggleData.time)
    }

    clearInterval(): void {
        clearInterval(this.timerToggle)
    }

}
