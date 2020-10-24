import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appStyleElemetSelected]'
})
export class StyleElemetSelectedDirective implements OnInit {

    elementSelectedIndex: number

    constructor(private containerElement: ElementRef) { }


    ngOnInit(): void {
    }


    @HostListener('click')
    selected() {
        if (this.elementSelectedIndex > 0) {
            this.containerElement.nativeElement[this.elementSelectedIndex].style.backgroundColor = 'white'
        }
        const selectedIndex = this.containerElement.nativeElement.selectedIndex
        if (selectedIndex === 0) return
        this.containerElement.nativeElement[selectedIndex].style.backgroundColor = '#f0ab0e'
        this.elementSelectedIndex = selectedIndex

    }


    // @HostListener('mouseover')
    // hover() {
    //     console.log(this.containerElement.nativeElement.length)

    //     for (let i = 0; i < this.containerElement.nativeElement.length; i++) {
    //         console.log(this.containerElement.nativeElement[i])
    //         this.containerElement.nativeElement[i].addEventListener('mouseover', () => {
    //         })
    //     }

    // }

}
