import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { ConfirmCode } from "src/app/interfaces/ConfirmCode";
import { AuthService } from "src/app/services/auth.service";
import { KeyboardService } from 'src/app/services/keyboard.service';
import { LoaderService } from "src/app/services/loader.service";
import { FormsService } from "../../services/forms/forms.service";

@Component({
    selector: "app-confirm",
    templateUrl: "./confirm.component.html",
    styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent implements AfterViewInit, OnDestroy {

    subFormChange: Subscription

    constructor(
        public formsService: FormsService,
        private authService: AuthService,
        private router: Router,
        private loaderService: LoaderService,
        private keyBoardService: KeyboardService

    ) { }

    @ViewChild('form') form: NgForm
    @ViewChild('first') firstInput: ElementRef


    ngAfterViewInit(): void {
        this.subFormChange = this.form.valueChanges.subscribe((result) => {
            if (this.form.valid) {
                let code: string = "";

                for (const num in this.form.value) {
                    code += this.form.value[num]
                }

                const codeToSend: ConfirmCode = {
                    code: code
                };

                this.loaderService.setStatus(true)
                this.authService.confirmCode(codeToSend).subscribe((result) => {
                    this.form.resetForm()
                    this.router.navigate(["main/teacher"]);
                }, () => {
                    this.form.resetForm()
                    this.keyBoardService.setElement(this.firstInput.nativeElement)
                });
            }
        })
    }


    onResendConfirmCode(): void {
        this.loaderService.setStatus(true)
        this.form.resetForm()
        this.keyBoardService.setElement(this.firstInput.nativeElement)
        this.authService.resendConfirmCode().subscribe((result) => {
            // console.log(result);
            alert('נשלח קוד חדש למייל')
        });
    }


    ngOnDestroy(): void {
        this.subFormChange.unsubscribe()
    }
}
