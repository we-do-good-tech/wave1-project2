import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
// (focus)="a.size=10" (blur)="a.size=1" (change)="a.size=1" style="z-index: 1000;"
// if (this.elementSelectedIndex > 0) {
//     this.containerElement.nativeElement[this.elementSelectedIndex].style.backgroundColor = 'white'
// }
// const selectedIndex = this.containerElement.nativeElement.selectedIndex
// if (selectedIndex === 0) return
// this.containerElement.nativeElement[selectedIndex].style.backgroundColor = '#f0ab0e'
// this.elementSelectedIndex = selectedIndex



@Directive({
    selector: '[appStyleElemetSelected]'
})
export class StyleElemetSelectedDirective implements OnInit {

    constructor(private containerElement: ElementRef) { }
    selecteds

    ngOnInit(): void {
        console.log(this.daynamicValue)
        if (this.selecteds) {
            this.selectedChange.emit(this.selecteds)
        }
    }

    @Input('appStyleElemetSelected') daynamicValue


    @Output('appStyleElemetSelectedChange') selectedChange = new EventEmitter()


    @HostBinding('value')
    get value() {
        return this.daynamicValue
    }

    @HostListener('click', ['$event'])
    selected(event: any) {
        console.log(event.target.value)
        this.daynamicValue = event.target.value
        this.selecteds = this.daynamicValue

        this.selectedChange.emit(this.daynamicValue)

    }






}
