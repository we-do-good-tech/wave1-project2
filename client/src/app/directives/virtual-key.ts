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
            console.log('EMIT KEY')
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);

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
        console.log('FOCUS EVENT')
        console.log(this.formInputElement.nativeElement)
        this.keyboardService.setElement(this.formInputElement.nativeElement);
        // this.formInputElement.nativeElement.blur()
    }
}
