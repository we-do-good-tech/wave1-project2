import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { KeyboardService } from '../services/keyboard.service';

@Directive({
    selector: '[ngModel]'
})
export class VirtualKeyDirective implements OnInit {

    constructor(
        private formElement: ElementRef,
        private ngModel: NgModel,
        private keyboardService: KeyboardService
    ) { }

    ngOnInit(): void {

        this.keyboardService.onKeyPress.subscribe(key => {
            if (document.activeElement === this.formElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);

                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });

                this.formElement.nativeElement.dispatchEvent(event);
            }
        });
    }

    @HostListener("focus")
    onFocus(): void {
        this.keyboardService.setElem(this.formElement.nativeElement);
    }
}
