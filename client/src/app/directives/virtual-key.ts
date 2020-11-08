import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { KeyboardService } from '../services/keyboard.service';

@Directive({
    selector: '[ngModel],[virtualkey]'
})
export class VirtualKeyDirective implements OnInit {

    timerTogglePlaceholder: NodeJS.Timer

    constructor(
        private formInputElement: ElementRef,
        private ngModel: NgModel,
        private keyboardService: KeyboardService
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
                this.formInputElement.nativeElement.removeAttribute('placeholder')
            }
        });
    }

    @HostListener("focus")
    onFocus(): void {
        console.log('FOCUS EVENT')
        clearInterval(this.timerTogglePlaceholder)
        this.keyboardService.setElement(this.formInputElement.nativeElement);
        this.formInputElement.nativeElement.setAttribute('placeholder', '|')
        this.timerTogglePlaceholder = setInterval(() => {
            this.formInputElement.nativeElement.classList.toggle('not-empty')
        }, 500)
    }
}
