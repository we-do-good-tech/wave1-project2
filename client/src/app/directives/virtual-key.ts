import { Directive, ElementRef, HostListener, OnInit, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
import { KeyboardService } from '../services/keyboard.service';
import { InputFocusDirective } from './focus.directive';


@Directive({
    selector: '[ngModel],[virtualkey]'
})
export class VirtualKeyDirective implements OnInit {

    constructor(
        private formInputElement: ElementRef,
        private ngModel: NgModel,
        private keyboardService: KeyboardService,
        @Optional() private appInputFocus: InputFocusDirective

    ) { }

    ngOnInit(): void {
        this.keyboardService.onKeyPress().subscribe((key) => {
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);
                const newEvent = this.keyboardService.createEvent('input')
                this.formInputElement.nativeElement.dispatchEvent(newEvent);
                this.keyboardService.removeAttribute('placeholder')
            }
        });
    }

    @HostListener("focus")
    onFocus(): void {
        console.log('FOCUS EVENT')
        if (this.appInputFocus) {
            this.keyboardService.setElement(this.formInputElement.nativeElement);
            this.keyboardService.setAttribute('placeholder', '|')
        } else {
            return
        }
    }


    @HostListener('click', ['$event'])
    onClick(event: any) {
        if (this.appInputFocus) {
            if (event.target.value) {
                this.ngModel.valueAccessor.writeValue(null)
                const newEvent = this.keyboardService.createEvent('input')
                this.formInputElement.nativeElement.dispatchEvent(newEvent);
                this.keyboardService.removeAttribute('placeholder')
            }
            this.formInputElement.nativeElement.blur()
        }
    }
}
