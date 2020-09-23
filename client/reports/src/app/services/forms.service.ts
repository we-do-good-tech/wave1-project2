import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private idForm: FormGroup;
  private confirmForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  getIdForm(): FormGroup {
    return this.idForm = this.fb.group({
      userId: [null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]]
    });
  }
  getConfirmForm(): FormGroup {
    return this.confirmForm = this.fb.group({
      userId: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]]
    });
  }


  getFormControl(controlName: string): FormControl {
    return this.idForm.get(controlName) as FormControl
  }

}
