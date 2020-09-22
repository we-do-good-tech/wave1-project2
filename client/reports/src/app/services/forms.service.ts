import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private idForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  getIdForm(): FormGroup {
    return this.idForm = this.fb.group({
      userId: [null, [
        Validators.required,
        Validators.minLength(9)
      ]]
    });
  }


  getFormControl(controlName: string): FormControl {
    return this.idForm.get(controlName) as FormControl
  }

}
