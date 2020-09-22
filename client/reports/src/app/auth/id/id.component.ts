import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  idForm: FormGroup;
  inputType: string = 'password';

  constructor(public formsService: FormsService) {
  }

  ngOnInit() {
    this.idForm = this.formsService.getIdForm();
  }

  toggleVis() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }


}
