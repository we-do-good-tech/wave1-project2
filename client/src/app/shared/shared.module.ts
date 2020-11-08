import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignaturePadModule } from "@ng-plus/signature-pad";

import { HeaderComponent } from "./header/header.component";
import { HttpErrorMessagesComponent } from "./http-error-messages/http-error-messages.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";
import { KeyboardButtonComponent } from './keyboard/keyboard-button/keyboard-button.component';
import { ExmpleComponent } from './exmple/exmple.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';

import { LimitInputDirective } from "../directives/limit-input.directive";
import { InputFocusDirective } from "../directives/focus.directive";
import { VirtualKeyDirective } from "../directives/virtual-key";
import { StyleElementDirective } from "../directives/style.element.directive";
import { StyleElemetSelectedDirective } from "../directives/style-elemet-selected.directive";
import { RemoveAttrDirective } from "../directives/remove-attr.directive";

import { FilterPipe } from "../services/pipes/filter.pipe";
import { HebrewMountNamePipe } from "../services/pipes/hebrew-mount-name.pipe";



@NgModule({
    declarations: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent,
        FooterComponent,
        LoaderComponent,
        KeyboardComponent,
        KeyboardButtonComponent,
        ExmpleComponent,
        VirtualKeyDirective,
        InputFocusDirective,
        LimitInputDirective,
        StyleElementDirective,
        RemoveAttrDirective,
        StyleElemetSelectedDirective,
        FilterPipe,
        HebrewMountNamePipe,
        MeetingInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SignaturePadModule,
        FormsModule,
    ],
    exports: [
        HeaderComponent,
        HttpErrorMessagesComponent,
        NotFoundComponent,
        FooterComponent,
        LoaderComponent,
        KeyboardComponent,
        KeyboardButtonComponent,
        ExmpleComponent,
        VirtualKeyDirective,
        InputFocusDirective,
        LimitInputDirective,
        StyleElementDirective,
        StyleElemetSelectedDirective,
        FilterPipe,
        HebrewMountNamePipe,
        MeetingInfoComponent,
        RemoveAttrDirective
    ],
})
export class SharedModule { }
