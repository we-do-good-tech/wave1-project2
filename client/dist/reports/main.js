(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nirku\Desktop\development\big projects\project-reports\client\src\main.ts */"zUnb");


/***/ }),

/***/ "04Lv":
/*!********************************************!*\
  !*** ./src/app/services/portal.service.ts ***!
  \********************************************/
/*! exports provided: PortalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalService", function() { return PortalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortalService {
    constructor() {
        this.targets = new Map();
    }
    addTarget(targetName, viewContainer) {
        this.targets.set(targetName, viewContainer);
    }
    getTarget(targetName) {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
    attach(targetName, template) {
        var _a;
        (_a = this.getTarget(targetName)) === null || _a === void 0 ? void 0 : _a.createEmbeddedView(template);
    }
    clear(targetName) {
        var _a;
        (_a = this.getTarget(targetName)) === null || _a === void 0 ? void 0 : _a.clear();
    }
}
PortalService.ɵfac = function PortalService_Factory(t) { return new (t || PortalService)(); };
PortalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortalService, factory: PortalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1c1+":
/*!*******************************************************!*\
  !*** ./src/app/directives/style.element.directive.ts ***!
  \*******************************************************/
/*! exports provided: StyleElementDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleElementDirective", function() { return StyleElementDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StyleElementDirective {
    constructor(element, renderer, container) {
        this.element = element;
        this.renderer = renderer;
        this.container = container;
    }
    ngOnInit() {
        // const element = this.renderer.selectRootElement(this.selector)
        // console.log(element)
        // this.renderer.addClass(element, this.styleElement)
        const element = this.element.nativeElement.querySelector(this.selector);
        element.classList.add(this.styleElement);
    }
}
StyleElementDirective.ɵfac = function StyleElementDirective_Factory(t) { return new (t || StyleElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
StyleElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StyleElementDirective, selectors: [["", "styleElement", ""]], inputs: { styleElement: "styleElement", selector: "selector" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[styleElement]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { styleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['styleElement']
        }], selector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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


const _c0 = ["*"];
class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["id", "the-header"], ["src", "../../../assets/Group 1772.svg", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmhlYWRlciBoMSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, null); })();


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
    getLoadStatusChange() {
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
    constructor(formElement, render) {
        this.formElement = formElement;
        this.render = render;
    }
    ngOnInit() {
        this.formElement.nativeElement[0].focus();
        this.formElement.nativeElement[0].blur();
    }
    // ngAfterViewInit(): void {
    //     this.formElement.nativeElement[0].focus()
    //     this.formElement.nativeElement[0].blur()
    // }
    check() {
        this.focusAndBlur();
    }
    onClick() {
        this.focusAndBlur();
    }
    focusAndBlur() {
        setTimeout(() => {
            const input = this.formElement.nativeElement.querySelector('.ng-invalid');
            if (input) {
                input.focus();
                input.blur();
            }
        }, 0);
    }
}
InputFocusDirective.ɵfac = function InputFocusDirective_Factory(t) { return new (t || InputFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
InputFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InputFocusDirective, selectors: [["", "appInputFocus", ""]], hostBindings: function InputFocusDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputFocusDirective_input_HostBindingHandler() { return ctx.check(); })("click", function InputFocusDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appInputFocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { check: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "9+1k":
/*!*********************************************************!*\
  !*** ./src/app/directives/interval-toggle.directive.ts ***!
  \*********************************************************/
/*! exports provided: IntervalToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalToggleDirective", function() { return IntervalToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IntervalToggleDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.clearInterval();
        this.timerToggle = setInterval(() => {
            this.element.nativeElement.classList.toggle(this.toggleData.className);
        }, this.toggleData.time);
    }
    clearInterval() {
        clearInterval(this.timerToggle);
    }
}
IntervalToggleDirective.ɵfac = function IntervalToggleDirective_Factory(t) { return new (t || IntervalToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
IntervalToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IntervalToggleDirective, selectors: [["", "appIntervalToggle", ""]], inputs: { toggleData: ["appIntervalToggle", "toggleData"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntervalToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appIntervalToggle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { toggleData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appIntervalToggle']
        }] }); })();


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
        const token = this.authService.getToken() && sessionStorage.getItem('token');
        // console.log(token)
        return next.handle(this.cloneToken(request, token));
    }
    cloneToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
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

/***/ "C1a3":
/*!********************************************!*\
  !*** ./src/app/angular.material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");








class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                exports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DuIv":
/*!**********************************************************!*\
  !*** ./src/app/services/pipes/hebrew-mount-name.pipe.ts ***!
  \**********************************************************/
/*! exports provided: HebrewMountNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HebrewMountNamePipe", function() { return HebrewMountNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HebrewMountNamePipe {
    transform(value) {
        switch (value) {
            case 1:
                return "ינואר";
            case 2:
                return "פברואר";
            case 3:
                return "מרץ";
            case 4:
                return "אפריל";
            case 5:
                return "מאי";
            case 6:
                return "יוני";
            case 7:
                return "יולי";
            case 8:
                return "אוגוסט";
            case 9:
                return "ספטמבר";
            case 10:
                return "אוקטובר";
            case 11:
                return "נובמבר";
            case 12:
                return "דצמבר";
            default:
                break;
        }
    }
}
HebrewMountNamePipe.ɵfac = function HebrewMountNamePipe_Factory(t) { return new (t || HebrewMountNamePipe)(); };
HebrewMountNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "hebrewMountName", type: HebrewMountNamePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HebrewMountNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "hebrewMountName",
            }]
    }], null, null); })();


/***/ }),

/***/ "FxWV":
/*!*******************************************************!*\
  !*** ./src/app/directives/portal-attach.directive.ts ***!
  \*******************************************************/
/*! exports provided: PortalAttachDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalAttachDirective", function() { return PortalAttachDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/portal.service */ "04Lv");



class PortalAttachDirective {
    constructor(portalService, template) {
        this.portalService = portalService;
        this.template = template;
    }
    ngOnInit() {
        this.portalService.attach(this.targetName, this.template);
    }
    ngOnDestroy() {
        this.portalService.clear(this.targetName);
    }
}
PortalAttachDirective.ɵfac = function PortalAttachDirective_Factory(t) { return new (t || PortalAttachDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
PortalAttachDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PortalAttachDirective, selectors: [["", "appPortalAttach", ""]], inputs: { targetName: ["appPortalAttach", "targetName"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalAttachDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPortalAttach]'
            }]
    }], function () { return [{ type: _services_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { targetName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appPortalAttach']
        }] }); })();


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
ExmpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExmpleComponent, selectors: [["app-exmple"]], decls: 3, vars: 0, consts: [[1, "col-xs-12"], ["type", "text", "placeholder", "Choose date", "bsDatepicker", "", 1, "form-control"], [1, "container"]], template: function ExmpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  margin: 3rem;\n}\n\n.input-email[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.w-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.pepole-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleG1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxZQUFBO0FBQUQ7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiZXhtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvIHtcclxuIG1hcmdpbjogM3JlbTtcclxufVxyXG5cclxuLmlucHV0LWVtYWlsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLnctaW1ne1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnBlcG9sZS1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExmpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exmple',
                templateUrl: './exmple.component.html',
                styleUrls: ['./exmple.component.scss']
            }]
    }], function () { return [{ type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }, { type: src_app_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }]; }, null); })();


/***/ }),

/***/ "KY19":
/*!*********************************************!*\
  !*** ./src/app/services/reports.service.ts ***!
  \*********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_helpers_time_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/helpers/time.range */ "tocN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ReportsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.reports = [];
        this.report = null;
        this.reportChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.report);
        this.reportsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.reports);
    }
    getReportsChange() {
        return this.reportsChange.asObservable();
    }
    getReportChange() {
        return this.reportChange.asObservable();
    }
    createReport(report) {
        return this.http.post('api/teacher/create-report', report, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            // console.log(result)
            report.index = result.index;
            report.lastDateResendSignToParent = Object(_services_helpers_time_range__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date());
            this.reports.push(report);
            this.reportsChange.next([...this.reports]);
            // this.router.navigate(["/main/teacher/meeting-success"]);
            return result.message;
        }));
    }
    getMountlyStats() {
        return this.http.get('api/teacher/reports/stats', { withCredentials: true });
    }
    getReportsNotConfirm() {
        if (this.reports.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.reports);
        }
        return this.http.get("api/teacher/reports-unconfirm", { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((result) => {
            this.reports = result;
            this.reportsChange.next([...this.reports]);
        }));
    }
    resendParentSign(report) {
        const reportInfo = {
            studentName: report.studentName,
            parentEmail: report.parentEmail,
            ticketNo: report.ticketNo,
            reportDate: report.reportDate,
            index: Number(report.index),
        };
        return this.http.post('api/teacher/resend/parent-sign', reportInfo, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            const findIndex = this.reports.findIndex((r) => r.index == report.index);
            report.lastDateResendSignToParent = Object(_services_helpers_time_range__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date());
            this.reports[findIndex] = report;
            this.reportsChange.next([...this.reports]);
            return result.message;
        }));
    }
    setReport(report) {
        this.report = Object.assign({}, report);
        this.reportChange.next(this.report);
    }
    getReport() {
        return this.report || undefined;
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function KeyboardButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.key.value, " ");
} }
function KeyboardButtonComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("key_del", ctx_r14.key.value === "del_number");
} }
function KeyboardButtonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("key_clear", ctx_r15.key.value === "clear");
} }
class KeyboardButtonComponent {
}
KeyboardButtonComponent.ɵfac = function KeyboardButtonComponent_Factory(t) { return new (t || KeyboardButtonComponent)(); };
KeyboardButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardButtonComponent, selectors: [["app-keyboard-button"]], inputs: { key: "key" }, decls: 4, vars: 3, consts: [[1, "num-keyboard"], ["class", "key", 4, "ngIf"], [3, "key_del", 4, "ngIf"], [3, "key_clear", 4, "ngIf"], [1, "key"]], template: function KeyboardButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardButtonComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KeyboardButtonComponent_div_2_Template, 1, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KeyboardButtonComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key.type === "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key.value === "del_number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key.value === "clear");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".key_del[_ngcontent-%COMP%], .key_clear[_ngcontent-%COMP%], .key[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #6dac18;\n  font-size: 18px;\n  border-radius: 100%;\n  text-align: center;\n  line-height: 50px;\n  color: #fff;\n  flex: 33.333%;\n  font-weight: bold;\n}\n\n.key_clear[_ngcontent-%COMP%] {\n  background-color: #f3f2f2;\n  color: #e66666;\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.key_del[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n  display: none;\n}\n\n.fa-backspace[_ngcontent-%COMP%] {\n  font-size: 29px;\n  color: #5f5f5f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2V5Ym9hcmQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRUYiLCJmaWxlIjoia2V5Ym9hcmQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleV9kZWwsXHJcbi5rZXlfY2xlYXIsXHJcbi5rZXkge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRhYzE4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbGV4OiAzMy4zMzMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ua2V5X2NsZWFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYyO1xyXG4gIGNvbG9yOiByZ2IoMjMwLCAxMDIsIDEwMik7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5rZXlfZGVsIHtcclxuICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mYS1iYWNrc3BhY2Uge1xyXG4gIGZvbnQtc2l6ZTogMjlweDtcclxuICBjb2xvcjogcmdiKDk1LCA5NSwgOTUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keyboard-button',
                templateUrl: './keyboard-button.component.html',
                styleUrls: ['./keyboard-button.component.scss']
            }]
    }], null, { key: [{
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





class HttpErrorMessagesInterceptor {
    constructor(httpErrorMessagesService) {
        this.httpErrorMessagesService = httpErrorMessagesService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((result) => {
            // console.log(result, 'SUCCESS')
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            this.httpErrorMessagesService.checkErrorMessage(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
HttpErrorMessagesInterceptor.ɵfac = function HttpErrorMessagesInterceptor_Factory(t) { return new (t || HttpErrorMessagesInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"])); };
HttpErrorMessagesInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorMessagesInterceptor, factory: HttpErrorMessagesInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "NmU7":
/*!*****************************************************!*\
  !*** ./src/app/directives/remove-attr.directive.ts ***!
  \*****************************************************/
/*! exports provided: RemoveAttrDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAttrDirective", function() { return RemoveAttrDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RemoveAttrDirective {
    constructor(parentElemet) {
        this.parentElemet = parentElemet;
    }
    onClick(event) {
        const elements = this.parentElemet.nativeElement.querySelectorAll(this.elementName);
        elements.forEach((element) => {
            if (element.id !== event.target.id) {
                element.removeAttribute(this.appRemoveAttr);
            }
        });
    }
}
RemoveAttrDirective.ɵfac = function RemoveAttrDirective_Factory(t) { return new (t || RemoveAttrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RemoveAttrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RemoveAttrDirective, selectors: [["", "appRemoveAttr", ""]], hostBindings: function RemoveAttrDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveAttrDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { appRemoveAttr: "appRemoveAttr", elementName: "elementName" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveAttrDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appRemoveAttr]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appRemoveAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elementName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['elementName']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "Nvpg":
/*!***********************************************!*\
  !*** ./src/app/services/pipes/filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(itemsArray, filterBy, propery) {
        if (filterBy) {
            return itemsArray.filter((item) => {
                return item[propery] === filterBy;
            });
        }
        return itemsArray;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();


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
/* harmony import */ var _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-error-messages/http-error-messages.component */ "guhu");



class NotFoundComponent {
    constructor() {
    }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 8, vars: 0, consts: [[1, "notFoundContainer"], [1, "notFounsErrorMessage"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-http-error-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_1__["HttpErrorMessagesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
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
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http-error-messages/http-error-messages.component */ "guhu");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "OoyU");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony import */ var _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keyboard/keyboard-button/keyboard-button.component */ "Lu4x");
/* harmony import */ var _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exmple/exmple.component */ "I4s0");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "tJXs");
/* harmony import */ var _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meeting-info/meeting-info.component */ "lEVn");
/* harmony import */ var _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../directives/limit-input.directive */ "U4uh");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../directives/focus.directive */ "7BlV");
/* harmony import */ var _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../directives/virtual-key */ "qSFG");
/* harmony import */ var _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../directives/style.element.directive */ "1c1+");
/* harmony import */ var _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../directives/remove-attr.directive */ "NmU7");
/* harmony import */ var _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../directives/interval-toggle.directive */ "9+1k");
/* harmony import */ var _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../directives/on-blur.directive */ "tBqr");
/* harmony import */ var _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/pipes/filter.pipe */ "Nvpg");
/* harmony import */ var _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/pipes/hebrew-mount-name.pipe */ "DuIv");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../angular.material.module */ "C1a3");
/* harmony import */ var _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../directives/portal-target.directive */ "tZ+8");
/* harmony import */ var _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../directives/portal-attach.directive */ "FxWV");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_23__["AngularMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"],
        _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__["KeyboardButtonComponent"],
        _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__["ExmpleComponent"],
        _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__["VirtualKeyDirective"],
        _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["InputFocusDirective"],
        _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__["LimitInputDirective"],
        _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__["StyleElementDirective"],
        _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__["RemoveAttrDirective"],
        _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
        _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__["HebrewMountNamePipe"],
        _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__["MeetingInfoComponent"],
        _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__["IntervalToggleDirective"],
        _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__["OnBlurDirective"],
        _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__["PortalTargetDirective"],
        _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__["PortalAttachDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_23__["AngularMaterialModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"],
        _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__["KeyboardButtonComponent"],
        _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__["ExmpleComponent"],
        _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__["VirtualKeyDirective"],
        _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["InputFocusDirective"],
        _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__["LimitInputDirective"],
        _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__["StyleElementDirective"],
        _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
        _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__["HebrewMountNamePipe"],
        _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__["MeetingInfoComponent"],
        _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__["RemoveAttrDirective"],
        _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__["IntervalToggleDirective"],
        _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__["OnBlurDirective"],
        _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__["PortalTargetDirective"],
        _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__["PortalAttachDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                    _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"],
                    _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__["KeyboardButtonComponent"],
                    _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__["ExmpleComponent"],
                    _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__["VirtualKeyDirective"],
                    _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["InputFocusDirective"],
                    _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__["LimitInputDirective"],
                    _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__["StyleElementDirective"],
                    _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__["RemoveAttrDirective"],
                    _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
                    _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__["HebrewMountNamePipe"],
                    _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__["MeetingInfoComponent"],
                    _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__["IntervalToggleDirective"],
                    _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__["OnBlurDirective"],
                    _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__["PortalTargetDirective"],
                    _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__["PortalAttachDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_23__["AngularMaterialModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                    _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"],
                    _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__["KeyboardButtonComponent"],
                    _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__["ExmpleComponent"],
                    _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__["VirtualKeyDirective"],
                    _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["InputFocusDirective"],
                    _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__["LimitInputDirective"],
                    _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__["StyleElementDirective"],
                    _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
                    _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__["HebrewMountNamePipe"],
                    _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__["MeetingInfoComponent"],
                    _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__["RemoveAttrDirective"],
                    _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__["IntervalToggleDirective"],
                    _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__["OnBlurDirective"],
                    _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__["PortalTargetDirective"],
                    _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__["PortalAttachDirective"]
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__["CdkTextareaAutosize"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Dir"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatTextareaAutosize"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollable"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatCalendarHeader"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatOptgroup"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_6__["HttpErrorMessagesComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
    _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
    _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["KeyboardComponent"],
    _keyboard_keyboard_button_keyboard_button_component__WEBPACK_IMPORTED_MODULE_10__["KeyboardButtonComponent"],
    _exmple_exmple_component__WEBPACK_IMPORTED_MODULE_11__["ExmpleComponent"],
    _directives_virtual_key__WEBPACK_IMPORTED_MODULE_16__["VirtualKeyDirective"],
    _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["InputFocusDirective"],
    _directives_limit_input_directive__WEBPACK_IMPORTED_MODULE_14__["LimitInputDirective"],
    _directives_style_element_directive__WEBPACK_IMPORTED_MODULE_17__["StyleElementDirective"],
    _directives_remove_attr_directive__WEBPACK_IMPORTED_MODULE_18__["RemoveAttrDirective"],
    _meeting_info_meeting_info_component__WEBPACK_IMPORTED_MODULE_13__["MeetingInfoComponent"],
    _directives_interval_toggle_directive__WEBPACK_IMPORTED_MODULE_19__["IntervalToggleDirective"],
    _directives_on_blur_directive__WEBPACK_IMPORTED_MODULE_20__["OnBlurDirective"],
    _directives_portal_target_directive__WEBPACK_IMPORTED_MODULE_24__["PortalTargetDirective"],
    _directives_portal_attach_directive__WEBPACK_IMPORTED_MODULE_25__["PortalAttachDirective"]], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _services_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
    _services_pipes_hebrew_mount_name_pipe__WEBPACK_IMPORTED_MODULE_22__["HebrewMountNamePipe"]]);


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




// import { environment } from "../environments/environment.prod";
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.getAuthData();
        // console.log(environment)
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["app-http-error-messages[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1odHRwLWVycm9yLW1lc3NhZ2VzIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "U4uh":
/*!*****************************************************!*\
  !*** ./src/app/directives/limit-input.directive.ts ***!
  \*****************************************************/
/*! exports provided: LimitInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitInputDirective", function() { return LimitInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LimitInputDirective {
    constructor() {
    }
    limit(event) {
        let { value } = event.target;
        if (String(value).length > 1) {
            value = value.slice(1, 2);
            event.target.value = value;
        }
    }
}
LimitInputDirective.ɵfac = function LimitInputDirective_Factory(t) { return new (t || LimitInputDirective)(); };
LimitInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LimitInputDirective, selectors: [["", "appLimitInput", ""]], hostBindings: function LimitInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LimitInputDirective_input_HostBindingHandler($event) { return ctx.limit($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appLimitInput]'
            }]
    }], function () { return []; }, { limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");





class HttpErrorMessagesService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.deleteMessageTime = 2;
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
        }, this.deleteMessageTime * 1000);
    }
    checkErrorMessage(error) {
        let errorMassge = error.error.message;
        console.log(errorMassge);
        this.setMessage(errorMassge);
        if (errorMassge === 'SERVER ERROR' || error.status >= 500) {
            this.router.navigate(['not-found']);
            return;
        }
        else if (error.status === 429 && error.statusText === "Too Many Requests") {
            this.setMessage(errorMassge);
            this.router.navigate(['/not-found']);
            return;
        }
        else if (errorMassge === 'Unauthorized') {
            this.authService.clearLoginInfo();
            this.router.navigate(['/auth/user']);
            return;
        }
        else {
            this.setMessage(errorMassge);
        }
    }
}
HttpErrorMessagesService.ɵfac = function HttpErrorMessagesService_Factory(t) { return new (t || HttpErrorMessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HttpErrorMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorMessagesService, factory: HttpErrorMessagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


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
        // console.log('NEXT: ', next)
        // console.log('STATE: ', state)
        const isLog = this.authService.getIsLog();
        // console.log(isLog)
        if (isLog) {
            return true;
        }
        this.router.navigate(["/auth/user"]);
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
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular.material.module */ "C1a3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/interceptors/http-error-messages.interceptor */ "MOho");
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/interceptors/auth.interceptor */ "AzTq");
/* harmony import */ var _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/interceptors/loader.interceptor */ "f/nh");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/routing.service */ "sFxA");















// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpErrorMessagesInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__["LoaderInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        ],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ],
                exports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
                ],
                providers: [
                    _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_http_error_messages_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpErrorMessagesInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__["LoaderInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
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
            // console.log('STOP LOAD')
            this.stopLoader(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.stopLoader(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    stopLoader(request) {
        if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] || request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            this.loaderService.setStatus(false);
        }
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




function HttpErrorMessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.message);
} }
class HttpErrorMessagesComponent {
    constructor(httpErrorMessages, cdr) {
        this.httpErrorMessages = httpErrorMessages;
        this.cdr = cdr;
        this.message = '';
    }
    ngOnInit() {
        this.subErrorMessageChange = this.httpErrorMessages
            .getErrorMessageChnage()
            .subscribe((message) => {
            console.log(message);
            this.cdr.detectChanges();
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subErrorMessageChange.unsubscribe();
    }
}
HttpErrorMessagesComponent.ɵfac = function HttpErrorMessagesComponent_Factory(t) { return new (t || HttpErrorMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["HttpErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HttpErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpErrorMessagesComponent, selectors: [["app-http-error-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function HttpErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HttpErrorMessagesComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".codeError[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #d1372a;\n  direction: rtl;\n  font-size: 12px;\n  position: relative;\n  width: 100%;\n  font-size: 18px;\n}\n\nspan[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxodHRwLWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQUYiLCJmaWxlIjoiaHR0cC1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29kZUVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICNkMTM3MmE7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-http-error-messages",
                templateUrl: "./http-error-messages.component.html",
                styleUrls: ["./http-error-messages.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_http_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["HttpErrorMessagesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "i0SI":
/*!***********************************************!*\
  !*** ./src/app/services/guards/sign.guard.ts ***!
  \***********************************************/
/*! exports provided: SignGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignGuard", function() { return SignGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign.service */ "xfdA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class SignGuard {
    constructor(signServie, router) {
        this.signServie = signServie;
        this.router = router;
    }
    canActivate(next, state) {
        const token = state.url.split('/')[3];
        return this.signServie.verifyToken(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            if (result) {
                // console.log(result)
                return true;
            }
            this.router.navigate(['/not-found']);
            return false;
        }));
    }
}
SignGuard.ɵfac = function SignGuard_Factory(t) { return new (t || SignGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignGuard, factory: SignGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  width: 100vw;\n  background: linear-gradient(to top, #6dac18, #d6f27b);\n  height: 61px;\n  position: relative;\n  margin-top: 10px;\n}\n\nfooter[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM2ZGFjMTgsICNkNmYyN2IpO1xyXG4gIGhlaWdodDogNjFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuZm9vdGVyIC5jb3B5UmlnaHQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lEVn":
/*!***************************************************************!*\
  !*** ./src/app/shared/meeting-info/meeting-info.component.ts ***!
  \***************************************************************/
/*! exports provided: MeetingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingInfoComponent", function() { return MeetingInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class MeetingInfoComponent {
}
MeetingInfoComponent.ɵfac = function MeetingInfoComponent_Factory(t) { return new (t || MeetingInfoComponent)(); };
MeetingInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingInfoComponent, selectors: [["app-meeting-info"]], inputs: { report: "report" }, decls: 25, vars: 10, consts: [[1, "meetingInfoContainer"], [1, "meetingDateAndTime"], [1, "totalHours"], [1, "separator"], [1, "dateAndTime"], [1, "time"], [1, "date"], [1, "topicsAndActivities"], [1, "header"], [1, "topicsContent"], [1, "importantComments"], [1, "importantCommentsContent"]], template: function MeetingInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05E1\u05D4\"\u05DB \u05E9\u05E2\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D5\u05E4\u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05E9\u05E2\u05DC\u05D5 \u05D1\u05DE\u05E4\u05D2\u05E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u05D4\u05E2\u05E8\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.report == null ? null : ctx.report.studentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.report == null ? null : ctx.report.reportRangeTimne, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.report == null ? null : ctx.report.reportStartTime, "-", ctx.report == null ? null : ctx.report.reportEndTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, ctx.report == null ? null : ctx.report.reportDate, "dd-MM-yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.report == null ? null : ctx.report.reportActivitis, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.report == null ? null : ctx.report.reportComments, " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".meetingInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  text-align: center;\n  height: 100%;\n  overflow-y: auto;\n  margin-top: 15px;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: #6dac18;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.meetingTeacher[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #6dac18;\n  margin-top: 100px;\n}\n\n.meetingDateAndTime[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n}\n\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  background-color: #6dac18;\n}\n\n.totalHours[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n  display: flex;\n  flex-direction: column;\n}\n\n.totalHours[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6dac18;\n  margin-right: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4a4545;\n}\n\n.topicsContent[_ngcontent-%COMP%], .importantCommentsContent[_ngcontent-%COMP%] {\n  max-height: 150px;\n  width: 80%;\n  border-radius: 5px;\n  overflow-y: auto;\n  margin: 10px auto;\n  direction: rtl;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWV0aW5nLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7QUFNSjs7QUFKRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQU9KOztBQUxFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJFOztFQUVFLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFVSiIsImZpbGUiOiJtZWV0aW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVldGluZ0luZm9Db250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDUwdmggLSA2OHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbmg2e1xyXG4gIGNvbG9yOiAjNmRhYzE4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubWVldGluZ1RlYWNoZXIgcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmRhYzE4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIC5tZWV0aW5nRGF0ZUFuZFRpbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuc2VwYXJhdG9yIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRhYzE4O1xyXG4gIH1cclxuICAudG90YWxIb3VycyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNmRhYzE4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC50b3RhbEhvdXJzIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmRhdGVBbmRUaW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgLmRhdGVBbmRUaW1lIC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNmRhYzE4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuZGF0ZUFuZFRpbWUgLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzZkYWMxODtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNGE0NTQ1O1xyXG4gIH1cclxuICAudG9waWNzQ29udGVudCxcclxuICAuaW1wb3J0YW50Q29tbWVudHNDb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meeting-info',
                templateUrl: './meeting-info.component.html',
                styleUrls: ['./meeting-info.component.scss']
            }]
    }], null, { report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
        this.authProccess = false;
        this.authProccessChnage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.authProccess);
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
    getConfimCodeExpire() {
        return this.confirmCodeExpireTime;
    }
    getIsLogChange() {
        return this.isLogChange.asObservable();
    }
    getAuthProccessChange() {
        return this.authProccessChnage.asObservable();
    }
    getAuthData() {
        const authData = this.getSessionStorage();
        if (!authData) {
            return this.clearLoginInfo();
        }
        const now = new Date();
        const isValidTime = authData.expiresInDate.getTime() - now.getTime();
        console.log(isValidTime, "IS TOKEN VALID TIME");
        if (isValidTime > 0) {
            // console.log('IS LOG')
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
        return this.http
            .post("api/auth/teacherEmail", { teacherEmail: teacherEmail })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            if (result) {
                this.confirmCodeExpireTime = result.confirmCodeExpire;
                this.authProccess = true;
                this.authProccessChnage.next(this.authProccess);
            }
            return result.message;
        }));
    }
    confirmCode(code) {
        return this.http
            .post("api/auth/confirm-code", { code: code }, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.userName = result.userName;
            this.isLog = result.isLog;
            this.isLogChange.next(this.isLog);
            const expiresIn = result.tokenExpiresIn;
            this.token = result.token;
            this.setTokenTimer(expiresIn);
            const now = new Date();
            const expiresInDate = new Date(now.getTime() + expiresIn * 1000);
            this.saveSessionStorage(this.token, expiresInDate, this.userName);
            // setTimeout(() => {
            //     this.authProccess = false
            //     this.authProccessChnage.next(this.authProccess)
            // }, 1500);
            return result.message;
        }));
    }
    resendConfirmCode() {
        return this.http
            .get("api/auth/new-confirm-code", { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.confirmCodeExpireTime = result.confirmCodeExpire;
            return result.message;
        }));
    }
    // checkSession() {
    //     return this.http.get("api/auth/teacher/auth-session", { withCredentials: true })
    // }
    setAuthData(authResult) {
    }
    saveSessionStorage(token, expiresIn, userName) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("expiresIn", expiresIn.toISOString());
        sessionStorage.setItem("user-name", JSON.stringify(userName));
    }
    removeSessionStorage() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("expiresIn");
        sessionStorage.removeItem("user-name");
    }
    getSessionStorage() {
        const token = sessionStorage.getItem("token");
        const expiresInDate = sessionStorage.getItem("expiresIn");
        const userName = JSON.parse(sessionStorage.getItem("user-name"));
        if (!token || !expiresInDate) {
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
        clearTimeout(this.tokenTimer);
        this.removeSessionStorage();
    }
    setTokenTimer(time) {
        this.tokenTimer = setTimeout(() => {
            this.clearLoginInfo();
            this.router.navigate(["/auth/user"]);
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
        // console.log(control)
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
        this.inputElement.blur();
    }
    setElement(element) {
        this.inputElement = element;
    }
    setAttribute(attributeName, value) {
        this.inputElement.setAttribute(attributeName, value);
    }
    removeAttribute(attributeName) {
        this.inputElement.removeAttribute(attributeName);
    }
    createEvent(eventName) {
        const event = new Event(eventName, {
            bubbles: true,
            cancelable: true,
        });
        return event;
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
    constructor(loaderService, cdr) {
        this.loaderService = loaderService;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.subLoadStatusChange = this.loaderService.getLoadStatusChange()
            .subscribe((result) => {
            this.cdr.detectChanges();
            this.isLoad = result;
        });
    }
    ngOnDestroy() {
        this.subLoadStatusChange.unsubscribe();
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loader", 4, "ngIf"], [1, "loader"], ["src", "../../../assets/loader_mashlimim.gif", "alt", ""]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nimg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFFRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbmltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-loader",
                templateUrl: "./loader.component.html",
                styleUrls: ["./loader.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


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
/* harmony import */ var _focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focus.directive */ "7BlV");





class VirtualKeyDirective {
    constructor(formInputElement, ngModel, keyboardService, appInputFocus) {
        this.formInputElement = formInputElement;
        this.ngModel = ngModel;
        this.keyboardService = keyboardService;
        this.appInputFocus = appInputFocus;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.keyboardService.onKeyPress().subscribe((key) => {
            if (key === 'clear') {
                this.clear.emit();
            }
            if (document.activeElement === this.formInputElement.nativeElement) {
                this.ngModel.valueAccessor.writeValue(key);
                const newEvent = this.keyboardService.createEvent('input');
                this.formInputElement.nativeElement.dispatchEvent(newEvent);
                this.keyboardService.removeAttribute('placeholder');
            }
        });
    }
    onFocus() {
        // console.log('FOCUS EVENT')
        if (this.appInputFocus) {
            this.keyboardService.setElement(this.formInputElement.nativeElement);
            this.keyboardService.setAttribute('placeholder', '|');
        }
    }
    onClick(event) {
        if (this.appInputFocus) {
            // if (event.target.value) {
            //     this.ngModel.valueAccessor.writeValue(null)
            //     const newEvent = this.keyboardService.createEvent('input')
            //     this.formInputElement.nativeElement.dispatchEvent(newEvent);
            // }
            this.keyboardService.removeAttribute('placeholder');
            this.formInputElement.nativeElement.blur();
        }
    }
}
VirtualKeyDirective.ɵfac = function VirtualKeyDirective_Factory(t) { return new (t || VirtualKeyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__["KeyboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_focus_directive__WEBPACK_IMPORTED_MODULE_3__["InputFocusDirective"], 8)); };
VirtualKeyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VirtualKeyDirective, selectors: [["", "ngModel", ""], ["", "virtualkey", ""]], hostBindings: function VirtualKeyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function VirtualKeyDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("click", function VirtualKeyDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { clear: "clear" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualKeyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngModel],[virtualkey]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"] }, { type: _services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__["KeyboardService"] }, { type: _focus_directive__WEBPACK_IMPORTED_MODULE_3__["InputFocusDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["focus"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "sFxA":
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RoutingService {
    constructor(router) {
        this.router = router;
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "tBqr":
/*!*************************************************!*\
  !*** ./src/app/directives/on-blur.directive.ts ***!
  \*************************************************/
/*! exports provided: OnBlurDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBlurDirective", function() { return OnBlurDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OnBlurDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.blur();
    }
}
OnBlurDirective.ɵfac = function OnBlurDirective_Factory(t) { return new (t || OnBlurDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OnBlurDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnBlurDirective, selectors: [["", "appOnBlur", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBlurDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appOnBlur]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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



function KeyboardComponent_app_keyboard_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-keyboard-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_app_keyboard_button_1_Template_app_keyboard_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const key_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onNumberClick($event, key_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", key_r10);
} }
class KeyboardComponent {
    constructor(keyboardService) {
        this.keyboardService = keyboardService;
        this.keys = [
            {
                value: 1,
                type: 'number'
            },
            {
                value: 2,
                type: 'number'
            },
            {
                value: 3,
                type: 'number'
            },
            {
                value: 4,
                type: 'number'
            },
            {
                value: 5,
                type: 'number'
            },
            {
                value: 6,
                type: 'number'
            },
            {
                value: 7,
                type: 'number'
            },
            {
                value: 8,
                type: 'number'
            },
            {
                value: 9,
                type: 'number'
            },
            {
                value: 'clear',
                type: 'string'
            },
            {
                value: 0,
                type: 'number'
            },
            {
                value: 'del_number',
                type: 'string'
            }
        ];
    }
    onNumberClick(event, key) {
        event.preventDefault();
        this.keyboardService.emitKey(key);
    }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_keyboard_service__WEBPACK_IMPORTED_MODULE_1__["KeyboardService"])); };
KeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], decls: 2, vars: 1, consts: [[1, "keyboard"], [3, "key", "click", 4, "ngFor", "ngForOf"], [3, "key", "click"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardComponent_app_keyboard_button_1_Template, 1, 1, "app-keyboard-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
    } }, styles: [".keyboard[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\napp-keyboard-button[_ngcontent-%COMP%] {\n  width: 33%;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxrZXlib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6ImtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleWJvYXJkIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5hcHAta2V5Ym9hcmQtYnV0dG9uIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-keyboard",
                templateUrl: "./keyboard.component.html",
                styleUrls: ["keyboard.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_keyboard_service__WEBPACK_IMPORTED_MODULE_1__["KeyboardService"] }]; }, null); })();


/***/ }),

/***/ "tZ+8":
/*!*******************************************************!*\
  !*** ./src/app/directives/portal-target.directive.ts ***!
  \*******************************************************/
/*! exports provided: PortalTargetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalTargetDirective", function() { return PortalTargetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/portal.service */ "04Lv");



class PortalTargetDirective {
    constructor(portalService, viewContainer) {
        this.portalService = portalService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.portalService.addTarget(this.targetName, this.viewContainer);
    }
}
PortalTargetDirective.ɵfac = function PortalTargetDirective_Factory(t) { return new (t || PortalTargetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
PortalTargetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PortalTargetDirective, selectors: [["", "appPortalTarget", ""]], inputs: { targetName: ["appPortalTarget", "targetName"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalTargetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPortalTarget]'
            }]
    }], function () { return [{ type: _services_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { targetName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appPortalTarget']
        }] }); })();


/***/ }),

/***/ "tocN":
/*!************************************************!*\
  !*** ./src/app/services/helpers/time.range.ts ***!
  \************************************************/
/*! exports provided: timesRange, conculateRangeToTime, daysRange, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesRange", function() { return timesRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conculateRangeToTime", function() { return conculateRangeToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysRange", function() { return daysRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function timesRange(timeOne, timeTwo) {
    let start = timeOne.split(':');
    let end = timeTwo.split(':');
    let range = new Date(0, 0, 0, Number(end[0]), Number(end[1]), 0).getTime() - new Date(0, 0, 0, Number(start[0]), Number(start[1]), 0).getTime();
    return range;
}
function conculateRangeToTime(range) {
    let minutes = range / 1000 / 60;
    let hours = Math.floor(minutes / 60);
    let restMinutes = (minutes % 60);
    let finalHours = hours <= 9 ? `0${hours}` : hours;
    let finalMinutes = restMinutes <= 9 ? `0${restMinutes}` : restMinutes;
    return `${finalHours}:${finalMinutes}`;
}
function daysRange(timeOne, timeTwo) {
    let seconds = (timeOne - timeTwo) / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    return days;
}
function formatDate(date) {
    let day = String(new Date(date).getDate());
    let mount = String(new Date(date).getMonth() + 1);
    let year = String(new Date(date).getFullYear());
    day = day.length === 1 ? '0' + day : day;
    mount = mount.length === 1 ? '0' + mount : mount;
    return [year, mount, day].join('-');
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/guards/auth.guard */ "Xuht");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");
/* harmony import */ var _services_guards_sign_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/sign.guard */ "i0SI");



// import { NotAuthGuard } from "./services/guards/not-auth.guard";

// import { ExmpleComponent } from "./shared/exmple/exmple.component";



const routes = [
    {
        path: "",
        redirectTo: "auth/user",
        pathMatch: "full",
    },
    {
        path: "auth",
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthModule),
    },
    {
        path: "confirm-report",
        loadChildren: () => __webpack_require__.e(/*! import() | signature-signature-module */ "signature-signature-module").then(__webpack_require__.bind(null, /*! ./signature/signature.module */ "2M8t")).then((m) => m.SignatureModule),
        canActivate: [_services_guards_sign_guard__WEBPACK_IMPORTED_MODULE_4__["SignGuard"]]
    },
    {
        path: "main",
        loadChildren: () => __webpack_require__.e(/*! import() | teacher-teacher-module */ "teacher-teacher-module").then(__webpack_require__.bind(null, /*! ./teacher/teacher.module */ "4+hN")).then((m) => m.TeacerModule),
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: 'not-found',
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
    {
        path: "**",
        redirectTo: 'not-found',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xfdA":
/*!******************************************!*\
  !*** ./src/app/services/sign.service.ts ***!
  \******************************************/
/*! exports provided: SignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignService", function() { return SignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.service */ "KY19");





class SignService {
    constructor(http, reportsService) {
        this.http = http;
        this.reportsService = reportsService;
    }
    verifyToken(token) {
        return this.http.post('api/sign/verify/parent-token', { token: token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((result) => {
            if (result) {
                this.token = token;
                this.reportsService.setReport(result);
            }
        }));
    }
    sendSign(singImageBase64) {
        return this.http.post('api/sign/parent', { singImageBase64: singImageBase64, token: this.token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            // console.log(result)
            return result.message;
        }));
    }
}
SignService.ɵfac = function SignService_Factory(t) { return new (t || SignService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"])); };
SignService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignService, factory: SignService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"] }]; }, null); })();


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