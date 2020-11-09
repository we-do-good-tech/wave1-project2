import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { KeyboardService } from '../services/keyboard.service';
import { IntervalToggleDirective } from "./interval-toggle.directive";

@Directive({
    selector: '[ngModel],[virtualkey]'
})
export class VirtualKeyDirective implements OnInit {

    timerTogglePlaceholder: NodeJS.Timer

    constructor(
        private formInputElement: ElementRef,
        private ngModel: NgModel,
        private keyboardService: KeyboardService,
        // private intervalToggle: IntervalToggleDirective
    ) { }

    ngOnInit(): void {

        this.keyboardService.onKeyPress().subscribe(key => {
            console.log('EMIT KEY')
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);

                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });

                this.formInputElement.nativeElement.dispatchEvent(event);
                this.keyboardService.removeAttribute('placeholder')
            }
        });
    }

    @HostListener("focus")
    onFocus(): void {
        console.log('FOCUS EVENT')
        // clearInterval(this.timerTogglePlaceholder)
        this.keyboardService.setElement(this.formInputElement.nativeElement);
        this.keyboardService.setAttribute('placeholder', '|')
        // this.timerTogglePlaceholder = setInterval(() => {
        //     this.formInputElement.nativeElement.classList.toggle('not-empty')
        //     console.log('INTERVAL')
        // }, 500)
    }


    @HostListener('click', ['$event'])
    onClick(event: any) {
        if (event.target.value) {
            this.ngModel.valueAccessor.writeValue(null)
            const newEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
            });

            this.formInputElement.nativeElement.dispatchEvent(newEvent);
        }
        this.formInputElement.nativeElement.blur()
    }
}
