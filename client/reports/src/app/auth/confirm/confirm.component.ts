import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/services/forms.service';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
    selector: 'app-register',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

    @ViewChild("second")
    private second: ElementRef;

    constructor(private kbd: KeyboardService) { }

    // index: number = 0;

    f: string = ''
    s: string = ''
    t: string = ''

    checkNgForm(form: NgForm) { }

    onChange(event) {
        let { value } = event.target;

        if (String(value).length > 1) {
            event.target.value = value.slice(0, 1);
        }


        //  this.second.nativeElement.focus();

        /* if (this.index < 3) {
             this.index++;
 
             this.kbd.setFocus(this.index);
         }*/
    }

    /* onFocus(index: number) {
         this.index = index;
     }*/
}
