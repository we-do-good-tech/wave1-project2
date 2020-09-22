import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdComponent } from './id/id.component';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [IdComponent, ConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
