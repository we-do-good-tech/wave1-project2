(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yonda\OneDrive\שולחן העבודה\projectSign\project_report_time\client\src\main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "neg"], ["src", "../../../assets/Group 1772.svg", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  text-align: center;\n  background: linear-gradient(to top, #6dac18, #d6f27b);\n  color: #ffffff;\n  padding: 10px;\n  box-shadow: 0 3px 6px #00000029;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNmRhYzE4LCAjZDZmMjdiKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XHJcbn1cclxuaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5dVO":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoaderService {
    constructor() {
        this.loadStatus = false;
        this.loadStatusChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.loadStatus);
    }
    getLoadStatus() {
        return this.loadStatusChange.asObservable();
    }
    setStatus(status) {
        this.loadStatus = status;
        this.loadStatusChange.next(this.loadStatus);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzTq":
/*!***********************************************************!*\
  !*** ./src/app/services/interceptors/auth.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "lGQG");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const token = this.authService.getToken();
        return next.handle(this.cloneToken(request, token));
    }
    cloneToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token
            }
        });
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "I4s0":
/*!***************************************************!*\
  !*** ./src/app/shared/exmple/exmple.component.ts ***!
  \***************************************************/
/*! exports provided: ExmpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExmpleComponent", function() { return ExmpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loader.service */ "5dVO");
/* harmony import */ var src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forms/forms.service */ "loD7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ExmpleComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExmpleComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D3\u05D5\u05D0\u05E8 \u05E9\u05D2\u05D5\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExmpleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExmpleComponent_div_10_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExmpleComponent_div_10_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r637.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r637.errors.pattern);
} }
class ExmpleComponent {
    constructor(loaderService, formsService) {
        this.loaderService = loaderService;
        this.formsService = formsService;
    }
    ngOnInit() {
    }
    onSendEmail(form) {
        if (form.invalid)
            return;
        console.log(form.value.teacherEmail);
        // this.loaderService.setStatus(true)
    }
}
ExmpleComponent.ɵfac = function ExmpleComponent_Factory(t) { return new (t || ExmpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"])); };
ExmpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExmpleComponent, selectors: [["app-exmple"]], decls: 15, vars: 5, consts: [[1, "container"], [1, "logo", "center-element"], ["src", "../../../assets/Group 1764.svg", "alt", ""], [3, "ngSubmit"], ["form", "ngForm"], [1, "input-email"], ["for", "teacherEmail", 1, "floating-right"], ["id", "id-a", "required", "", "type", "email", "ngModel", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "name", "teacherEmail", "placeholder", "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9", 1, "form-control", 3, "ngClass"], ["teacherEmail", "ngModel"], [4, "ngIf"], [1, "w-img", "floating-right"], ["src", "../../../assets/Group 1789.svg", "alt", "", 1, "pepole-img"], [1, "mainButton", 3, "disabled"], ["class", "error-validate-form-message", 4, "ngIf"], [1, "error-validate-form-message"]], template: function ExmpleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r641 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExmpleComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const _r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSendEmail(_r636); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExmpleComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.formsService.displayClass(_r637.control));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.formControlStatus(_r637.control));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabledButton", _r636.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r636.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".logo[_ngcontent-%COMP%] {\n  margin: 3rem;\n}\n\n.input-email[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.w-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.pepole-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2V4bXBsZS9leG1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxZQUFBO0FBQUQ7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZXhtcGxlL2V4bXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nbyB7XHJcbiBtYXJnaW46IDNyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1lbWFpbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcbi53LWltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wZXBvbGUtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExmpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exmple',
                templateUrl: './exmple.component.html',
                styleUrls: ['./exmple.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }, { type: src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }]; }, null); })();


/***/ }),

/***/ "Lu4x":
/*!******************************************************************************!*\
  !*** ./src/app/shared/keyboard/keyboard-button/keyboard-button.component.ts ***!
  \******************************************************************************/
/*! exports provided: KeyboardButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardButtonComponent", function() { return KeyboardButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KeyboardButtonComponent {
}
KeyboardButtonComponent.ɵfac = function KeyboardButtonComponent_Factory(t) { return new (t || KeyboardButtonComponent)(); };
KeyboardButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardButtonComponent, selectors: [["app-keyboard-button"]], inputs: { number: "number" }, decls: 3, vars: 1, consts: [[1, "num-keyboard"], [1, "key"]], template: function KeyboardButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.number);
    } }, styles: [".key[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #6dac18;\n  border-radius: 100%;\n  text-align: center;\n  line-height: 50px;\n  color: #fff;\n  flex: 33.333%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2tleWJvYXJkL2tleWJvYXJkLWJ1dHRvbi9rZXlib2FyZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2tleWJvYXJkL2tleWJvYXJkLWJ1dHRvbi9rZXlib2FyZC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5IHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkYWMxODtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbGV4OiAzMy4zMzMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keyboard-button',
                templateUrl: './keyboard-button.component.html',
                styleUrls: ['./keyboard-button.component.scss']
            }]
    }], null, { number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MOho":
/*!**************************************************************************!*\
  !*** ./src/app/services/interceptors/http-error-messages.interceptor.ts ***!
  \**************************************************************************/
/*! exports provided: HttpErrorMessagesInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorMessagesInterceptor", function() { return HttpErrorMessagesInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-error-messages.service */ "UvWv");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ "5dVO");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "lGQG");







class HttpErrorMessagesInterceptor {
    constructor(httpErrorMessagesService, loaderService, authServcie) {
        this.httpErrorMessagesService = httpErrorMessagesService;
        this.loaderService = loaderService;
        this.authServcie = authServcie;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((result) => {
            // console.log(result)
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            console.log(error.error.message);
            console.log(error);
            let errorMassge = error.error.message;
            if (error.statusText === "Too Many Requests") {
                errorMassge = error.error;
            }
            if (errorMassge === 'Unauthorize') {
                this.authServcie.clearLoginInfo();
            }
            // alert(errorMassge)
            this.httpErrorMessagesService.setMessage(error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
HttpErrorMessagesInterceptor.ɵfac = function HttpErrorMessagesInterceptor_Factory(t) { return new (t || HttpErrorMessagesInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
HttpErrorMessagesInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorMessagesInterceptor, factory: HttpErrorMessagesInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"] }, { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "OoyU":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() {
    }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-not-found",
                templateUrl: "./not-found.component.html",
                styleUrls: ["./not-found.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-messages/http-error-messages.component */ "guhu");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "OoyU");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony import */ var _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parent-signature/parent-signature.component */ "kZfI");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "tJXs");
/* harmony import */ var _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keyboard/keyboard-button/keyboard-button.component */ "Lu4x");
/* harmony import */ var _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exmple/exmple.component */ "I4s0");















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
        _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_9__["ParentSignatureComponent"],
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
        _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardButtonComponent"],
        _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_13__["ExmpleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
        _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardButtonComponent"],
        _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_13__["ExmpleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
                    _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_9__["ParentSignatureComponent"],
                    _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
                    _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardButtonComponent"],
                    _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_13__["ExmpleComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
                    _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_11__["KeyboardComponent"],
                    _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardButtonComponent"],
                    _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_13__["ExmpleComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(authService) {
        this.authService = authService;
        // this.authService.getAuthData()
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  min-height: 500px;\n  width: 100%;\n  background-color: #fff;\n  overflow: auto;\n  margin: 0;\n}\n\napp-http-error-messages[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYXBwLWh0dHAtZXJyb3ItbWVzc2FnZXMge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "UvWv":
/*!*********************************************************!*\
  !*** ./src/app/services/http-error-messages.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpErrorMessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorMessagesService", function() { return HttpErrorMessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HttpErrorMessagesService {
    constructor() {
        this.errorMessage = '';
        this.errorMessageChnage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getErrorMessageChnage() {
        return this.errorMessageChnage.asObservable();
    }
    setMessage(message) {
        this.errorMessage = message;
        this.errorMessageChnage.next(this.errorMessage);
        this.clearMessage();
    }
    clearMessage() {
        setTimeout(() => {
            this.errorMessage = '';
            this.errorMessageChnage.next(this.errorMessage);
        }, 5000);
    }
}
HttpErrorMessagesService.ɵfac = function HttpErrorMessagesService_Factory(t) { return new (t || HttpErrorMessagesService)(); };
HttpErrorMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorMessagesService, factory: HttpErrorMessagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xuht":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isLog = this.authService.getIsLog();
        if (isLog) {
            return true;
        }
        this.router.navigate(["/auth/email"]);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/interceptors/http-error-messages.interceptor */ "MOho");
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/interceptors/auth.interceptor */ "AzTq");
/* harmony import */ var _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/interceptors/loader.interceptor */ "f/nh");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpErrorMessagesInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_9__["LoaderInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"],
        ],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"]], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"],
                ],
                exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpErrorMessagesInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_9__["LoaderInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "f/nh":
/*!*************************************************************!*\
  !*** ./src/app/services/interceptors/loader.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ "5dVO");






class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
            if (result instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] || result instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                this.loaderService.setStatus(false);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.loaderService.setStatus(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "guhu":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/http-error-messages/http-error-messages.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HttpErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorMessagesComponent", function() { return HttpErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_error_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-error-messages.service */ "UvWv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HttpErrorMessagesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
<<<<<<< HEAD
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.message, " ");
=======
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.message, " ");
>>>>>>> 5d88d375bd5aca660e57092c4b8c6b36fcbe25e4
} }
class HttpErrorMessagesComponent {
    constructor(httpErrorMessages) {
        this.httpErrorMessages = httpErrorMessages;
    }
    ngOnInit() {
        this.httpErrorMessages.getErrorMessageChnage()
            .subscribe((message) => {
            console.log(message);
            this.message = message;
        });
    }
}
HttpErrorMessagesComponent.ɵfac = function HttpErrorMessagesComponent_Factory(t) { return new (t || HttpErrorMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["HttpErrorMessagesService"])); };
HttpErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpErrorMessagesComponent, selectors: [["app-http-error-messages"]], decls: 2, vars: 1, consts: [[1, "userError"], ["class", "err  animate__animated animate__headShake", 4, "ngIf"], [1, "err", "animate__animated", "animate__headShake"], [1, "fas", "fa-sad-tear"]], template: function HttpErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HttpErrorMessagesComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".idError[_ngcontent-%COMP%] {\n  font-weight: bold;\n  position: absolute;\n  left: 50%;\n  top: -5%;\n  transform: translateX(-50%);\n  transition: 0.5s;\n  z-index: -1;\n}\n\n.userError[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.errorActive[_ngcontent-%COMP%] {\n  top: 75px;\n}\n\n.userError[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.err[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 40px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: lightcoral;\n  color: #fff;\n  border-radius: 4px;\n  direction: rtl;\n  margin: 10px 0;\n}\n\n.fa-sad-tear[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\nh5[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0dHAtZXJyb3ItbWVzc2FnZXMvaHR0cC1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxTQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaHR0cC1lcnJvci1tZXNzYWdlcy9odHRwLWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkRXJyb3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAtNSU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnVzZXJFcnJvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5lcnJvckFjdGl2ZSB7XHJcbiAgdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udXNlckVycm9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uZmEtc2FkLXRlYXIge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5oNSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-http-error-messages',
                templateUrl: './http-error-messages.component.html',
                styleUrls: ['./http-error-messages.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["HttpErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "h+8V":
/*!***************************************************!*\
  !*** ./src/app/services/guards/not-auth.guard.ts ***!
  \***************************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isLog = this.authService.getIsLog();
        if (!isLog) {
            return true;
        }
        this.router.navigate(['/main/teacher']);
        return false;
    }
}
NotAuthGuard.ɵfac = function NotAuthGuard_Factory(t) { return new (t || NotAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotAuthGuard, factory: NotAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "copyRight"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2020, Mashlimim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  width: 100vw;\n  background: linear-gradient(to top, #6dac18, #d6f27b);\n  height: 61px;\n  position: relative;\n  margin-top: 10px;\n}\n\nfooter[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNmRhYzE4LCAjZDZmMjdiKTtcclxuICBoZWlnaHQ6IDYxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmZvb3RlciAuY29weVJpZ2h0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kZfI":
/*!***********************************************************************!*\
  !*** ./src/app/shared/parent-signature/parent-signature.component.ts ***!
  \***********************************************************************/
/*! exports provided: ParentSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentSignatureComponent", function() { return ParentSignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");



<<<<<<< HEAD
function ParentSignatureComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r688.signatureImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
=======
>>>>>>> 5d88d375bd5aca660e57092c4b8c6b36fcbe25e4
class ParentSignatureComponent {
    constructor() {
    }
    ngOnInit() { }
    // onSendSignature(): void {
    //     console.log(this.signatureImage);
    // }
    saveImage(blob) {
        // Do something with the blob.
        console.log("clil");
        this.signatureImage = blob;
        console.log(blob);
    }
    test(sp) {
        console.log("test");
        console.log(sp);
        sp.clearButtonClass = "colors";
        return sp;
    }
}
ParentSignatureComponent.ɵfac = function ParentSignatureComponent_Factory(t) { return new (t || ParentSignatureComponent)(); };
<<<<<<< HEAD
ParentSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentSignatureComponent, selectors: [["app-parent-signature"]], decls: 41, vars: 7, consts: [[1, "parentSigantureContainer"], [1, "meetingTeacher"], [1, "meetingDateAndTime"], [1, "totalHours"], [1, "separator"], [1, "dateAndTime"], [1, "time"], [1, "date"], [1, "topicsAndActivities"], [1, "header"], [1, "topicsContent"], [1, "importantComments"], [1, "importantCommentsContent"], [1, "confirmCheckbox"], [1, "grid"], [1, "checkbox", "path"], ["type", "checkbox", "name", "comfirm"], ["viewBox", "0 0 21 21"], ["d", "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"], [1, "parentSignatureCnavas"], [1, "sign"], [1, "pSignaturePad"], [3, "showClearButton", "showDoneButton", "format", "backgroundColor", "doneButtonClass", "doneButtonText", "done"], ["sp", ""], ["alt", "", 3, "src", 4, "ngIf"], ["alt", "", 3, "src"]], template: function ParentSignatureComponent_Template(rf, ctx) { if (rf & 1) {
=======
ParentSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentSignatureComponent, selectors: [["app-parent-signature"]], decls: 38, vars: 3, consts: [[1, "parentSigantureContainer"], [1, "meetingTeacher"], [1, "meetingDateAndTime"], [1, "totalHours"], [1, "separator"], [1, "dateAndTime"], [1, "time"], [1, "date"], [1, "topicsAndActivities"], [1, "header"], [1, "topicsContent"], [1, "importantComments"], [1, "importantCommentsContent"], [1, "confirmCheckbox"], [1, "grid"], [1, "checkbox", "path"], ["type", "checkbox", "name", "comfirm"], ["viewBox", "0 0 21 21"], ["d", "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"], [1, "parentSignatureCnavas"], [1, "sign"], [3, "showClearButton", "showDoneButton", "backgroundColor", "done"]], template: function ParentSignatureComponent_Template(rf, ctx) { if (rf & 1) {
>>>>>>> 5d88d375bd5aca660e57092c4b8c6b36fcbe25e4
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 - \u05D7\u05D5\u05E0\u05DB\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 01:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05E1\u05D4\"\u05DB \u05E9\u05E2\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 14:00-13:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 29/09/2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D5\u05E4\u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05E9\u05E2\u05DC\u05D5 \u05D1\u05DE\u05E4\u05D2\u05E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u05DB\u05D0\u05DF \u05D9\u05D9\u05E8\u05E9\u05DE\u05D5 \u05D4\u05E2\u05E8\u05D5\u05EA \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05DE\u05E4\u05D2\u05E9, \u05DE\u05D4 \u05E0\u05DC\u05DE\u05D3, \u05D1\u05D0\u05D9\u05D6\u05D4 \u05E9\u05DC\u05D1 \u05D4\u05D7\u05E0\u05D5\u05DA \u05D5\u05D4\u05D7\u05E0\u05D9\u05DA \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05D5\u05DE\u05D4 \u05D4\u05D9\u05D5 \u05EA\u05DB\u05E0\u05D9 \u05D4\u05DE\u05DD\u05D2\u05E9. \u05D4\u05D0\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D5\u05E4\u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05E9\u05E2\u05DC\u05D5 \u05D1\u05DE\u05E4\u05D2\u05E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05DB\u05D0\u05DF \u05D9\u05D9\u05E8\u05E9\u05DE\u05D5 \u05D4\u05E2\u05E8\u05D5\u05EA \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05DE\u05E4\u05D2\u05E9, \u05DE\u05D4 \u05E0\u05DC\u05DE\u05D3, \u05D1\u05D0\u05D9\u05D6\u05D4 \u05E9\u05DC\u05D1 \u05D4\u05D7\u05E0\u05D5\u05DA \u05D5\u05D4\u05D7\u05E0\u05D9\u05DA \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05D5\u05DE\u05D4 \u05D4\u05D9\u05D5 \u05EA\u05DB\u05E0\u05D9 \u05D4\u05DE\u05DD\u05D2\u05E9. \u05D4\u05D0\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05E7\u05E8\u05D0\u05EA\u05D9 \u05D5\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8 \u05D1\u05D7\u05EA\u05D9\u05DE\u05EA\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05E0\u05D0 \u05DC\u05D7\u05EA\u05D5\u05DD \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05E4\u05D2\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ng-signature-pad", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("done", function ParentSignatureComponent_Template_ng_signature_pad_done_38_listener($event) { return ctx.saveImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ParentSignatureComponent_img_40_Template, 1, 1, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showClearButton", false)("showDoneButton", true)("format", "base64")("backgroundColor", "white")("doneButtonClass", "padConfirmButton")("doneButtonText", "\u05D0\u05D9\u05E9\u05D5\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signatureImage);
    } }, directives: [_ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_1__["SignaturePadComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".parentSigantureContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  text-align: center;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n}\n\n.pSignaturePad[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border: 1px solid black;\n}\n\n.ng-signature-pad[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.meetingNumber[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #4a4545;\n}\n\n.meetingTeacher[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #6dac18;\n}\n\n.meetingDateAndTime[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n}\n\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  background-color: #6dac18;\n}\n\n.totalHours[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n  display: flex;\n  flex-direction: column;\n}\n\n.totalHours[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6dac18;\n  margin-right: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4a4545;\n  float: right;\n  padding-right: 15px;\n  margin: 0;\n}\n\n.topicsAndActivities[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.topicsContent[_ngcontent-%COMP%], .importantCommentsContent[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 80%;\n  border-radius: 5px;\n  overflow-y: auto;\n  float: right;\n  margin-right: 15px;\n  text-align: end;\n  overflow-y: auto;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  font-weight: bold;\n  color: #4a4545;\n  text-align: end;\n  text-align: inherit;\n}\n\n#signatureCanvas[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 70px;\n  border: 1px solid black;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: start;\n  display: flex;\n  margin-right: 15px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.colors[_ngcontent-%COMP%] {\n  background-color: red;\n  width: 200px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border: #d1d6ee;\n  --border-hover: #bbc1e1;\n  --border-active: #35341e;\n  --tick: #fff;\n  position: relative;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  display: block;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  outline: none;\n  background: var(--background);\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: box-shadow 0.3s;\n  box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  --s: 2px;\n  --b: var(--border-hover);\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --b: var(--border-active);\n}\n\n.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: var(--stroke, var(--border-active));\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 21px;\n  height: 21px;\n  transform: scale(var(--scale, 1)) translateZ(0);\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --s: 2px;\n  transition-delay: 0.4s;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%] {\n  --a: 16.1 86.12;\n  --o: 102.22;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dasharray: var(--a, 86.12);\n  stroke-dashoffset: var(--o, 86.12);\n  transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhcmVudC1zaWduYXR1cmUvcGFyZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFhRjs7QUFYQTtFQUNFLGFBQUE7QUFjRjs7QUFaQTs7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFWQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVlGOztBQVBBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0FBVUY7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBVEE7RUFDRSxpQkFBQTtBQVlGOztBQVRBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVlGOztBQVRBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBWUY7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVhFOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2REFBQTtBQWFKOztBQVpJO0VBQ0UsUUFBQTtFQUNBLHdCQUFBO0FBY047O0FBWkk7RUFDRSx5QkFBQTtBQWNOOztBQVhFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQWFKOztBQVRNO0VBQ0UsUUFBQTtFQUNBLHNCQUFBO0FBV1I7O0FBVlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVlWOztBQVJJO0VBQ0UsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlEQUFBO0FBVU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFyZW50LXNpZ25hdHVyZS9wYXJlbnQtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudFNpZ2FudHVyZUNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5zaWduIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ucFNpZ25hdHVyZVBhZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5uZy1zaWduYXR1cmUtcGFkIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWVldGluZ051bWJlciBoNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNGE0NTQ1O1xyXG59XHJcbi5tZWV0aW5nVGVhY2hlciBwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2ZGFjMTg7XHJcbn1cclxuLm1lZXRpbmdEYXRlQW5kVGltZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5zZXBhcmF0b3Ige1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZGFjMTg7XHJcbn1cclxuLnRvdGFsSG91cnMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzZkYWMxODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRvdGFsSG91cnMgc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uZGF0ZUFuZFRpbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmRhdGVBbmRUaW1lIC50aW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM2ZGFjMTg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5kYXRlQW5kVGltZSAuZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmRhYzE4O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzRhNDU0NTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRvcGljc0FuZEFjdGl2aXRpZXMge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLnRvcGljc0NvbnRlbnQsXHJcbi5pbXBvcnRhbnRDb21tZW50c0NvbnRlbnQge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLy8gICBtYXJnaW46IDEwcHggYXV0bztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ucGFyZW50U2lnbmF0dXJlQ25hdmFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnBhcmVudFNpZ25hdHVyZUNuYXZhcyBzaWduYXR1cmUtY2FudmFzIHtcclxuICAvLyAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wYXJlbnRTaWduYXR1cmVDbmF2YXMgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNGE0NTQ1O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG59XHJcbiNzaWduYXR1cmVDYW52YXMge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIC8vICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5jb25maXJtQ2hlY2tib3gge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5jb25maXJtQ2hlY2tib3ggc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmNvbmZpcm1DaGVja2JveCBsYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmNvbG9ycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLS1ib3JkZXI6ICNkMWQ2ZWU7XHJcbiAgLS1ib3JkZXItaG92ZXI6ICNiYmMxZTE7XHJcbiAgLS1ib3JkZXItYWN0aXZlOiAjMzUzNDFlO1xyXG4gIC0tdGljazogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW5wdXQsXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCB2YXIoLS1zLCAxcHgpIHZhcigtLWIsIHZhcigtLWJvcmRlcikpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC0tczogMnB4O1xyXG4gICAgICAtLWI6IHZhcigtLWJvcmRlci1ob3Zlcik7XHJcbiAgICB9XHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICAtLWI6IHZhcigtLWJvcmRlci1hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdmcge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgc3Ryb2tlOiB2YXIoLS1zdHJva2UsIHZhcigtLWJvcmRlci1hY3RpdmUpKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2NhbGUsIDEpKSB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuICAmLnBhdGgge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgIC0tczogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAgICAgJiArIHN2ZyB7XHJcbiAgICAgICAgICAtLWE6IDE2LjEgODYuMTI7XHJcbiAgICAgICAgICAtLW86IDEwMi4yMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN2ZyB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IHZhcigtLWEsIDg2LjEyKTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IHZhcigtLW8sIDg2LjEyKTtcclxuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSAwLjZzLCBzdHJva2UtZGFzaG9mZnNldCAwLjZzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showClearButton", true)("showDoneButton", true)("backgroundColor", "white");
    } }, directives: [_ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_1__["SignaturePadComponent"]], styles: [".parentSigantureContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  text-align: center;\n  height: 100vh;\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 80px;\n  border: 1px solid black;\n}\n\n.ng-signature-pad[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.meetingNumber[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #4a4545;\n}\n\n.meetingTeacher[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #6dac18;\n}\n\n.meetingDateAndTime[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n}\n\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  background-color: #6dac18;\n}\n\n.totalHours[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n  display: flex;\n  flex-direction: column;\n}\n\n.totalHours[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6dac18;\n  margin-right: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4a4545;\n  float: right;\n  padding-right: 15px;\n  margin: 0;\n}\n\n.topicsAndActivities[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.topicsContent[_ngcontent-%COMP%], .importantCommentsContent[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 80%;\n  border-radius: 5px;\n  overflow-y: auto;\n  float: right;\n  margin-right: 15px;\n  text-align: end;\n  overflow-y: auto;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  font-weight: bold;\n  color: #4a4545;\n  text-align: end;\n  text-align: inherit;\n}\n\n#signatureCanvas[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 70px;\n  border: 1px solid black;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: start;\n  display: flex;\n  margin-right: 15px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border: #d1d6ee;\n  --border-hover: #bbc1e1;\n  --border-active: #35341e;\n  --tick: #fff;\n  position: relative;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  display: block;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  outline: none;\n  background: var(--background);\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: box-shadow 0.3s;\n  box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  --s: 2px;\n  --b: var(--border-hover);\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --b: var(--border-active);\n}\n\n.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: var(--stroke, var(--border-active));\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 21px;\n  height: 21px;\n  transform: scale(var(--scale, 1)) translateZ(0);\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --s: 2px;\n  transition-delay: 0.4s;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%] {\n  --a: 16.1 86.12;\n  --o: 102.22;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dasharray: var(--a, 86.12);\n  stroke-dashoffset: var(--o, 86.12);\n  transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhcmVudC1zaWduYXR1cmUvcGFyZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7QUFXRjs7QUFUQTs7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFQQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVNGOztBQUpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0FBT0Y7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtBQVNGOztBQU5BO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVNGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFSRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkRBQUE7QUFVSjs7QUFUSTtFQUNFLFFBQUE7RUFDQSx3QkFBQTtBQVdOOztBQVRJO0VBQ0UseUJBQUE7QUFXTjs7QUFSRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFVSjs7QUFOTTtFQUNFLFFBQUE7RUFDQSxzQkFBQTtBQVFSOztBQVBRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFTVjs7QUFMSTtFQUNFLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5REFBQTtBQU9OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhcmVudC1zaWduYXR1cmUvcGFyZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnRTaWdhbnR1cmVDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5zaWduIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubmctc2lnbmF0dXJlLXBhZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm1lZXRpbmdOdW1iZXIgaDQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzRhNDU0NTtcclxufVxyXG4ubWVldGluZ1RlYWNoZXIgcCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNmRhYzE4O1xyXG59XHJcbi5tZWV0aW5nRGF0ZUFuZFRpbWUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc2VwYXJhdG9yIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRhYzE4O1xyXG59XHJcbi50b3RhbEhvdXJzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM2ZGFjMTg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi50b3RhbEhvdXJzIHNtYWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmRhdGVBbmRUaW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5kYXRlQW5kVGltZSAudGltZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNmRhYzE4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZGF0ZUFuZFRpbWUgLmRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzZkYWMxODtcclxufVxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0YTQ1NDU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50b3BpY3NBbmRBY3Rpdml0aWVzIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi50b3BpY3NDb250ZW50LFxyXG4uaW1wb3J0YW50Q29tbWVudHNDb250ZW50IHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8vICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnBhcmVudFNpZ25hdHVyZUNuYXZhcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5wYXJlbnRTaWduYXR1cmVDbmF2YXMgc2lnbmF0dXJlLWNhbnZhcyB7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGFyZW50U2lnbmF0dXJlQ25hdmFzIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzRhNDU0NTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxufVxyXG4jc2lnbmF0dXJlQ2FudmFzIHtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogNzBweDtcclxuICAvLyAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uY29uZmlybUNoZWNrYm94IHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uY29uZmlybUNoZWNrYm94IHNtYWxsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jb25maXJtQ2hlY2tib3ggbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tYm9yZGVyOiAjZDFkNmVlO1xyXG4gIC0tYm9yZGVyLWhvdmVyOiAjYmJjMWUxO1xyXG4gIC0tYm9yZGVyLWFjdGl2ZTogIzM1MzQxZTtcclxuICAtLXRpY2s6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGlucHV0LFxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgdmFyKC0tcywgMXB4KSB2YXIoLS1iLCB2YXIoLS1ib3JkZXIpKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLXM6IDJweDtcclxuICAgICAgLS1iOiB2YXIoLS1ib3JkZXItaG92ZXIpO1xyXG4gICAgfVxyXG4gICAgJjpjaGVja2VkIHtcclxuICAgICAgLS1iOiB2YXIoLS1ib3JkZXItYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICAgIHN0cm9rZTogdmFyKC0tc3Ryb2tlLCB2YXIoLS1ib3JkZXItYWN0aXZlKSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNjYWxlLCAxKSkgdHJhbnNsYXRlWigwKTtcclxuICB9XHJcbiAgJi5wYXRoIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgJjpjaGVja2VkIHtcclxuICAgICAgICAtLXM6IDJweDtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICAgICYgKyBzdmcge1xyXG4gICAgICAgICAgLS1hOiAxNi4xIDg2LjEyO1xyXG4gICAgICAgICAgLS1vOiAxMDIuMjI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiB2YXIoLS1hLCA4Ni4xMik7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiB2YXIoLS1vLCA4Ni4xMik7XHJcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgMC42cywgc3Ryb2tlLWRhc2hvZmZzZXQgMC42cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
>>>>>>> 5d88d375bd5aca660e57092c4b8c6b36fcbe25e4
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentSignatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-parent-signature",
                templateUrl: "./parent-signature.component.html",
                styleUrls: ["./parent-signature.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLog = false;
        this.isLogChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isLog);
    }
    getToken() {
        return this.token;
    }
    getIsLog() {
        return this.isLog;
    }
    getUserName() {
        return this.userName;
    }
    getIsLogChange() {
        return this.isLogChange.asObservable();
    }
    getAuthData() {
        const authData = this.getSessionStorage();
        if (!authData) {
            return this.clearLoginInfo();
            // return
        }
        const now = new Date();
        const isValidTime = authData.expiresInDate.getTime() - now.getTime();
        console.log(isValidTime, 'IS TOKEN VALID TIME');
        if (isValidTime > 0) {
            this.token = authData.token;
            this.userName = authData.userName;
            this.isLog = true;
            this.isLogChange.next(this.isLog);
            this.setTokenTimer(isValidTime / 1000);
        }
        else {
            this.clearLoginInfo();
        }
    }
    authTeacherEmail(teacherEmail) {
        return this.http.post('api/auth/teacherEmail', { teacherEmail: teacherEmail })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            if (result.token) {
                const expiresIn = result.tokenExpiresIn;
                this.token = result.token;
                this.userName = result.userName;
                this.setTokenTimer(expiresIn);
                const now = new Date();
                const expiresInDate = new Date(now.getTime() + expiresIn * 1000);
                this.saveSessionStorage(this.token, expiresInDate, this.userName);
            }
            return result.message;
        }));
    }
    confirmCode(code) {
        return this.http.post('api/auth/teacher/confirm-code', code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            // console.log(result)
            this.isAuth = true;
            this.isLog = result.isLog;
            this.isLogChange.next(this.isLog);
            sessionStorage.setItem('is-auth', JSON.stringify(this.isAuth));
            return result.message;
        }));
    }
    resendConfirmCode() {
        return this.http.get('api/auth/new-confirm-code')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            // console.log(result)
            return result.message;
        }));
    }
    saveSessionStorage(token, expiresIn, userName) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('expiresIn', expiresIn.toISOString());
        sessionStorage.setItem('user-name', JSON.stringify(userName));
    }
    removeSessionStorage() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expiresIn');
        sessionStorage.removeItem('user-name');
        sessionStorage.removeItem('is-auth');
    }
    getSessionStorage() {
        const token = sessionStorage.getItem('token');
        const expiresInDate = sessionStorage.getItem('expiresIn');
        const userName = JSON.parse(sessionStorage.getItem('user-name'));
        const isAuth = JSON.parse(sessionStorage.getItem('is-auth'));
        if (!token || !expiresInDate || !isAuth) {
            return;
        }
        return {
            token: token,
            expiresInDate: new Date(expiresInDate),
            userName: userName,
        };
    }
    clearLoginInfo() {
        this.token = null;
        this.isLog = false;
        this.userName = null;
        this.isLogChange.next(this.isLog);
        this.router.navigate(['/']);
        clearTimeout(this.tokenTimer);
        this.removeSessionStorage();
    }
    setTokenTimer(time) {
        this.tokenTimer = setTimeout(() => {
            this.clearLoginInfo();
        }, time * 1000);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "loD7":
/*!*************************************************!*\
  !*** ./src/app/services/forms/forms.service.ts ***!
  \*************************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormsService {
    constructor() {
    }
    formControlStatus(control) {
        if (control.invalid && (control.dirty || control.touched)) {
            return true;
        }
        return false;
    }
    displayClass(input) {
        return {
            'is-valid': input.valid,
            'is-invalid': input.touched && input.invalid
        };
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(); };
FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o4+B":
/*!**********************************************!*\
  !*** ./src/app/services/keyboard.service.ts ***!
  \**********************************************/
/*! exports provided: KeyboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardService", function() { return KeyboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KeyboardService {
    constructor() {
        this.keyboardEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onKeyPress() {
        return this.keyboardEvent.asObservable();
    }
    emitKey(key) {
        this.inputElement.focus();
        this.keyboardEvent.emit(key);
    }
    setElement(element) {
        this.inputElement = element;
    }
}
KeyboardService.ɵfac = function KeyboardService_Factory(t) { return new (t || KeyboardService)(); };
KeyboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyboardService, factory: KeyboardService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loader.service */ "5dVO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.loaderService.getLoadStatus().subscribe((result) => {
            console.log(result);
            this.isLoad = result;
        });
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loader", 4, "ngIf"], [1, "loader"], ["src", "../../../assets/loader_mashlimim.gif", "alt", ""]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nimg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "tJXs":
/*!*******************************************************!*\
  !*** ./src/app/shared/keyboard/keyboard.component.ts ***!
  \*******************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_keyboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/keyboard.service */ "o4+B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard-button/keyboard-button.component */ "Lu4x");





function KeyboardComponent_app_keyboard_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-keyboard-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_app_keyboard_button_1_Template_app_keyboard_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const number_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onNumberClick($event, number_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("number", number_r15);
} }
class KeyboardComponent {
    constructor(keyboardService) {
        this.keyboardService = keyboardService;
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    }
    onNumberClick(event, key) {
        event.preventDefault();
        this.keyboardService.emitKey(key);
    }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_keyboard_service__WEBPACK_IMPORTED_MODULE_1__["KeyboardService"])); };
KeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], decls: 2, vars: 1, consts: [[1, "keyboard"], [3, "number", "click", 4, "ngFor", "ngForOf"], [3, "number", "click"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardComponent_app_keyboard_button_1_Template, 1, 1, "app-keyboard-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtonComponent"]], styles: [".keyboard[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\napp-keyboard-button[_ngcontent-%COMP%] {\n  width: 33%;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7RUFFRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5Ym9hcmQge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAvLyAgIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbmFwcC1rZXlib2FyZC1idXR0b24ge1xyXG4gIC8vICAgZmxleDogMCAwIDMzLjMzMyU7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-keyboard",
                templateUrl: "./keyboard.component.html",
                styleUrls: ["keyboard.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_keyboard_service__WEBPACK_IMPORTED_MODULE_1__["KeyboardService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _shared_parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/parent-signature/parent-signature.component */ "kZfI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guards/auth.guard */ "Xuht");
/* harmony import */ var _services_guards_not_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/not-auth.guard */ "h+8V");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");








const routes = [
    {
        path: "",
        redirectTo: "auth/email",
        pathMatch: "full",
    },
    // {
    //     path: "",
    //     redirectTo: "x",
    //     pathMatch: "full",
    // },
    // {
    //     path: 'x', component: ExmpleComponent
    // },
    {
        path: "auth",
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthModule),
        canActivate: [_services_guards_not_auth_guard__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]],
    },
    {
        path: "main",
        loadChildren: () => __webpack_require__.e(/*! import() | teacher-teacher-module */ "teacher-teacher-module").then(__webpack_require__.bind(null, /*! ./teacher/teacher.module */ "4+hN")).then((m) => m.TeacerModule),
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "parent-signature",
        component: _shared_parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_0__["ParentSignatureComponent"],
    },
    {
        path: "**",
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map