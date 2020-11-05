import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { KeyboardService } from '../services/keyboard.service';

@Directive({
    selector: '[ngModel],[virtualkey]'
})
export class VirtualKeyDirective implements OnInit {

    constructor(
        private formInputElement: ElementRef,
        private ngModel: NgModel,
        private keyboardService: KeyboardService
    ) { }

    ngOnInit(): void {

        this.keyboardService.onKeyPress().subscribe(key => {
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);

                this.formInputElement.nativeElement.blur()
                console.log(this.formInputElement.nativeElement)
                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });

                this.formInputElement.nativeElement.dispatchEvent(event);
            }
        });
    }

    @HostListener("focus")
    onFocus(): void {
        this.keyboardService.setElement(this.formInputElement.nativeElement);
    }
}
