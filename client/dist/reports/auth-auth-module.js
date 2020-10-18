(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "4c8v":
/*!***********************************************!*\
  !*** ./src/app/auth/email/email.component.ts ***!
  \***********************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/forms/forms.service */ "loD7");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "5dVO");
/* harmony import */ var _shared_http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http-error-messages/http-error-messages.component */ "guhu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_virtual_key__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/virtual-key */ "qSFG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");











function EmailComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D3\u05D5\u05D0\u05E8 \u05E9\u05D2\u05D5\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailComponent_div_12_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailComponent_div_12_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r625.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r625.errors.pattern);
} }
class EmailComponent {
    constructor(formsService, authService, router, loaderService) {
        this.formsService = formsService;
        this.authService = authService;
        this.router = router;
        this.loaderService = loaderService;
    }
    ngOnInit() {
    }
    onSendEmail(form) {
        if (form.invalid)
            return;
        // console.log(form.value.teacherEmail)
        this.loaderService.setStatus(true);
        this.authService.authTeacherEmail(form.value.teacherEmail).subscribe((result) => {
            this.router.navigate(['/auth/confirm']);
        });
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 18, vars: 5, consts: [[1, "wrapper"], [1, "logo", "animate_animated", "animate_flipInX"], ["src", "../../../assets/Group 1764.svg", "alt", ""], [3, "ngSubmit"], ["form", "ngForm"], [1, "input-group"], ["for", "teacherEmail"], [1, "idInput"], ["id", "id-a", "required", "", "type", "email", "ngModel", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "name", "teacherEmail", "placeholder", "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9", 1, "form-control", 3, "ngClass"], ["teacherEmail", "ngModel"], ["class", "errorsContainer", 4, "ngIf"], [1, "loginButton"], ["src", "../../../assets/Group 1789.svg", "alt", ""], [1, "mainButton", 3, "disabled"], [1, "errorsContainer"], ["class", "error-validate-form-message", 4, "ngIf"], [1, "error-validate-form-message"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r629 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r629); const _r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSendEmail(_r624); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailComponent_div_12_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-loader");
    } if (rf & 2) {
        const _r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.formsService.displayClass(_r625.control));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.formControlStatus(_r625.control));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabledButton", _r624.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r624.invalid);
    } }, directives: [_shared_http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorMessagesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _directives_virtual_key__WEBPACK_IMPORTED_MODULE_7__["VirtualKeyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  height: 80%;\n  margin: 0 auto;\n  align-items: center;\n  direction: rtl;\n}\n\n.wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2699fb;\n  font-weight: bold;\n}\n\n.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2699fb;\n  text-align: center;\n  font-weight: 600;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 70px;\n  width: 60%;\n  height: 150px;\n  justify-content: space-between;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin: 35px auto auto auto;\n}\n\nform[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\n.errorsContainer[_ngcontent-%COMP%] {\n  grid-template: 1fr/3fr;\n}\n\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #040404;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #c9c2bc4d;\n}\n\n.idInput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.loginButton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 52px;\n}\n\n.loginButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44%;\n  margin-left: 50%;\n}\n\n.error[_ngcontent-%COMP%] {\n  height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9lbWFpbC9lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBREE7RUFHRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBRUUsc0JBQUE7QUFFRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZW1haWwvZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcbi53cmFwcGVyIGgzIHtcclxuICBjb2xvcjogIzI2OTlmYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud3JhcHBlciBwIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMyNjk5ZmI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLndlbGNvbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgbWFyZ2luOiAzNXB4IGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxufVxyXG4uZXJyb3JzQ29udGFpbmVyIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gM2ZyO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgLy8gbWFyZ2luOiA2NXB4IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMDQwNDA0O1xyXG59XHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljMmJjNGQ7XHJcbn1cclxuLmlkSW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW5CdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDUycHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiBpbWcge1xyXG4gIHdpZHRoOiA0NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGhlaWdodDogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email',
                templateUrl: './email.component.html',
                styleUrls: ['./email.component.scss']
            }]
    }], function () { return [{ type: src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__["FormsService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "5Se4":
/*!*********************************************!*\
  !*** ./src/app/auth/auth.routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email/email.component */ "4c8v");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm/confirm.component */ "IhYR");






const routes = [
    {
        path: 'email',
        component: _email_email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"]
    },
    {
        path: 'confirm',
        component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "7BlV":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: InputFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFocusDirective", function() { return InputFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InputFocusDirective {
    constructor(formElement) {
        this.formElement = formElement;
    }
    check() {
        setTimeout(() => {
            const input = this.formElement.nativeElement.querySelector('.ng-invalid');
            if (input) {
                input.focus();
            }
        }, 0);
    }
}
InputFocusDirective.ɵfac = function InputFocusDirective_Factory(t) { return new (t || InputFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InputFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InputFocusDirective, selectors: [["", "appInputFocus", ""]], hostBindings: function InputFocusDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputFocusDirective_input_HostBindingHandler() { return ctx.check(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appInputFocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { check: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "IhYR":
/*!***************************************************!*\
  !*** ./src/app/auth/confirm/confirm.component.ts ***!
  \***************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forms/forms.service */ "loD7");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "5dVO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/focus.directive */ "7BlV");
/* harmony import */ var _directives_virtual_key__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/virtual-key */ "qSFG");
/* harmony import */ var _shared_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/keyboard/keyboard.component */ "tJXs");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");











class ConfirmComponent {
    constructor(formsService, authService, router, loaderService) {
        this.formsService = formsService;
        this.authService = authService;
        this.router = router;
        this.loaderService = loaderService;
    }
    ngOnInit() { }
    onSendConfirmCode(form) {
        console.log(form);
        if (form.invalid)
            return;
        let code = "";
        for (const num in form.value) {
            code += form.value[num];
        }
        const codeToSend = {
            code: Number(code),
        };
        // console.log(form.value);
        // console.log(codeToSend);
        this.authService.confirmCode(codeToSend).subscribe((result) => {
            form.resetForm();
            this.router.navigate(["main/teacher"]);
        });
    }
    onChange(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            event.target.value = value.slice(1, 2);
        }
    }
    onResendConfirmCode() {
        this.authService.resendConfirmCode().subscribe((result) => {
            console.log(result);
            alert(result);
        });
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 25, vars: 1, consts: [[1, "confirmWrapper"], [1, "m-3"], ["appInputFocus", "", 1, "m-3", 3, "ngSubmit"], ["form", "ngForm"], [1, "smsCode"], ["id", "num-a", "required", "", "type", "number", "pattern", "^\\d{1}$", "name", "first", "autofocus", "", "ngModel", "virtualkey", 3, "input"], ["one", "ngModel"], ["id", "num-b", "required", "", "type", "number", "pattern", "^\\d{1}$", "name", "second", "required", "", "ngModel", "virtualkey", 3, "input"], ["two", "ngModel"], ["id", "num-c", "required", "", "type", "number", "pattern", "^\\d{1}$", "name", "third", "ngModel", "virtualkey", 3, "input"], ["three", "ngModel"], ["id", "num-d", "required", "", "type", "number", "pattern", "^\\d{1}$", "name", "fourth", "ngModel", "virtualkey", 3, "input"], ["four", "ngModel"], [1, "codeError", "animate__animated", "animate__headShake"], ["id", "btn-confirm", "type", "submit", 1, "mainButton", 3, "disabledButton", "disabled"], [3, "click"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        const _r665 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E0\u05E9\u05DC\u05D7 \u05DE\u05E1\u05E8\u05D5\u05DF, \u05E0\u05D0 \u05D4\u05D6\u05D9\u05E0\u05D5 \u05D4\u05E7\u05D5\u05D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ConfirmComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r665); const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSendConfirmCode(_r660); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConfirmComponent_Template_input_input_6_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConfirmComponent_Template_input_input_8_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConfirmComponent_Template_input_input_10_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConfirmComponent_Template_input_input_12_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05E7\u05D5\u05D3 \u05E9\u05D2\u05D5\u05D9, \u05E0\u05E1\u05D4 \u05E9\u05E0\u05D9\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u05E9\u05DC\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Expire Time: 2 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_small_click_22_listener() { return ctx.onResendConfirmCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05DC\u05D0 \u05D4\u05D2\u05D9\u05E2 \u05E7\u05D5\u05D3, \u05E9\u05DC\u05D7 \u05DE\u05D7\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-loader");
    } if (rf & 2) {
        const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r660.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _directives_focus_directive__WEBPACK_IMPORTED_MODULE_6__["InputFocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _directives_virtual_key__WEBPACK_IMPORTED_MODULE_7__["VirtualKeyDirective"], _shared_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_8__["KeyboardComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.confirmWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  margin-top: -50px;\n}\n\n.confirmWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.codeError[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #d1372a;\n  direction: rtl;\n  font-size: 12px;\n  position: relative;\n  width: 100%;\n  background-color: gray;\n}\n\nspan[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@-webkit-keyframes errorEnter {\n  from {\n    left: 0;\n  }\n  to {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n@keyframes errorEnter {\n  from {\n    left: 0;\n  }\n  to {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.confirmWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .smsCode[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 70%;\n  margin: auto;\n  align-items: center;\n}\n\n.confirmWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .smsCode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  border-bottom: 2px solid black;\n  border-radius: 0;\n  outline: none;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n\n.confirmWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #4a4545;\n  font-weight: 600;\n}\n\n.confirmWrapper[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n  line-height: 12px;\n  margin: 10px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBR0Esc0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLE9BQUE7RUFDRjtFQUVBO0lBQ0UsU0FBQTtJQUNBLDJCQUFBO0VBQUY7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsT0FBQTtFQUNGO0VBRUE7SUFDRSxTQUFBO0lBQ0EsMkJBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbmZpcm1XcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxufVxyXG4uY29uZmlybVdyYXBwZXIgZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmNvZGVFcnJvciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjZDEzNzJhO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBhbmltYXRpb246IGVycm9yRW50ZXIgMXMgZWFzZS1pbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbGVmdDogNTAlO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbnNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC8vIGFuaW1hdGlvbjogZXJyb3JFbnRlciAxcyBlYXNlO1xyXG59XHJcbkBrZXlmcmFtZXMgZXJyb3JFbnRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy8gb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLy8gb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5jb25maXJtV3JhcHBlciBmb3JtIC5zbXNDb2RlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbmZpcm1XcmFwcGVyIGZvcm0gLnNtc0NvZGUgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvbmZpcm1XcmFwcGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzRhNDU0NTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jb25maXJtV3JhcHBlciBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-confirm",
                templateUrl: "./confirm.component.html",
                styleUrls: ["./confirm.component.scss"],
            }]
    }], function () { return [{ type: _services_forms_forms_service__WEBPACK_IMPORTED_MODULE_1__["FormsService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email/email.component */ "4c8v");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm/confirm.component */ "IhYR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_virtual_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/virtual-key */ "qSFG");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/focus.directive */ "7BlV");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing.module */ "5Se4");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");










class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_email_email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"],
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"],
        _directives_virtual_key__WEBPACK_IMPORTED_MODULE_5__["VirtualKeyDirective"],
        _directives_focus_directive__WEBPACK_IMPORTED_MODULE_6__["InputFocusDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _email_email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"],
                    _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"],
                    _directives_virtual_key__WEBPACK_IMPORTED_MODULE_5__["VirtualKeyDirective"],
                    _directives_focus_directive__WEBPACK_IMPORTED_MODULE_6__["InputFocusDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qSFG":
/*!*******************************************!*\
  !*** ./src/app/directives/virtual-key.ts ***!
  \*******************************************/
/*! exports provided: VirtualKeyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualKeyDirective", function() { return VirtualKeyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/keyboard.service */ "o4+B");




class VirtualKeyDirective {
    constructor(formInputElement, ngModel, keyboardService) {
        this.formInputElement = formInputElement;
        this.ngModel = ngModel;
        this.keyboardService = keyboardService;
    }
    ngOnInit() {
        this.keyboardService.onKeyPress().subscribe(key => {
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);
                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });
                this.formInputElement.nativeElement.dispatchEvent(event);
            }
        });
    }
    onFocus() {
        this.keyboardService.setElement(this.formInputElement.nativeElement);
    }
}
VirtualKeyDirective.ɵfac = function VirtualKeyDirective_Factory(t) { return new (t || VirtualKeyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__["KeyboardService"])); };
VirtualKeyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VirtualKeyDirective, selectors: [["", "ngModel", ""], ["", "virtualkey", ""]], hostBindings: function VirtualKeyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function VirtualKeyDirective_focus_HostBindingHandler() { return ctx.onFocus(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualKeyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngModel],[virtualkey]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"] }, { type: _services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__["KeyboardService"] }]; }, { onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["focus"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map