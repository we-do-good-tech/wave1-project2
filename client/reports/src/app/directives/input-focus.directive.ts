import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { KeyboardService } from '../services/keyboard.service';

@Directive({
    selector: '[ngModel]'
})
export class VirtualKeyDirective implements OnInit {
    /*@Input()
    index: number;*/

    constructor(
        private formElement: ElementRef,
        private ngModel: NgModel,
        private kbd: KeyboardService
    ) { }

    ngOnInit(): void {
        this.kbd.onKeyPress.subscribe(key => {
            if (document.activeElement === this.formElement.nativeElement) {
                setTimeout(() => {
                    this.ngModel.valueAccessor.writeValue(key);

                    const event = new Event('input', {
                        bubbles: true,
                        cancelable: true,
                    });

                    this.formElement.nativeElement.dispatchEvent(event);
                }, 0);
            }
        });

        /* this.kbd.onElementFocus.pipe(
             filter(index => this.index === index)
         ).subscribe(() => {
             this.formElement.nativeElement.focus();
         });*/
    }

    @HostListener("focus")
    onFocus(): void {
        this.kbd.setElem(this.formElement.nativeElement);
    }
}
