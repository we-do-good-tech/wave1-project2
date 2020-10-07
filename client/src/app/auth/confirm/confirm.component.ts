import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmCode } from "src/app/interfaces/ConfirmCode";
import { AuthService } from "src/app/services/auth.service";
import { FormsService } from "../../services/forms/forms.service";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent {
  constructor(
    public formsService: FormsService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSendConfirmCode(form: NgForm): void {
    console.log(form);
    if (form.invalid) return;

    let code: string = "";
    for (const num in form.value) {
      code += form.value[num];
    }

    const codeToSend: ConfirmCode = {
      code: Number(code),
    };

    console.log(form.value);
    console.log(codeToSend);
    this.authService.confirmCode(codeToSend).subscribe((result) => {
      this.router.navigate(["main/teacher"]);
    });
  }

  onChange(event: any): void {
    let { value } = event.target;
    if (String(value).length > 1) {
      event.target.value = value.slice(1, 2);
    }
  }
}
