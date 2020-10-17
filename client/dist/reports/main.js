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

/***/ "KN2u":
/*!***********************************************************************!*\
  !*** ./src/app/shared/signature-canvas/signature-canvas.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignatureCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureCanvasComponent", function() { return SignatureCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");



class SignatureCanvasComponent {
    constructor() {
    }
    ngOnInit() { }
    saveImage(blob) {
        // Do something with the blob.
        this.signatureImage = blob;
        console.log(blob);
    }
}
SignatureCanvasComponent.ɵfac = function SignatureCanvasComponent_Factory(t) { return new (t || SignatureCanvasComponent)(); };
SignatureCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignatureCanvasComponent, selectors: [["signature-canvas"]], decls: 2, vars: 3, consts: [[1, "sign"], [3, "showClearButton", "showDoneButton", "backgroundColor", "done"]], template: function SignatureCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-signature-pad", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("done", function SignatureCanvasComponent_Template_ng_signature_pad_done_1_listener($event) { return ctx.saveImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showClearButton", false)("showDoneButton", false)("backgroundColor", "white");
    } }, directives: [_ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_1__["SignaturePadComponent"]], styles: [".sign[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 80px;\n  border: 1px solid black;\n}\n\n.ng-signature-pad[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZ25hdHVyZS1jYW52YXMvc2lnbmF0dXJlLWNhbnZhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWduYXR1cmUtY2FudmFzL3NpZ25hdHVyZS1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbiB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5nLXNpZ25hdHVyZS1wYWQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "signature-canvas",
                templateUrl: "./signature-canvas.component.html",
                styleUrls: ["./signature-canvas.component.scss"],
            }]
    }], function () { return []; }, null); })();


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






class HttpErrorMessagesInterceptor {
    constructor(httpErrorMessagesService, loaderService) {
        this.httpErrorMessagesService = httpErrorMessagesService;
        this.loaderService = loaderService;
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
            // alert(errorMassge)
            this.httpErrorMessagesService.setMessage(error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
HttpErrorMessagesInterceptor.ɵfac = function HttpErrorMessagesInterceptor_Factory(t) { return new (t || HttpErrorMessagesInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
HttpErrorMessagesInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorMessagesInterceptor, factory: HttpErrorMessagesInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorMessagesInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesService"] }, { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, null); })();


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
    ngOnInit() {
    }
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
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error-messages/http-error-messages.component */ "guhu");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "OoyU");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony import */ var _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parent-signature/parent-signature.component */ "kZfI");
/* harmony import */ var _signature_canvas_signature_canvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signature-canvas/signature-canvas.component */ "KN2u");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-plus/signature-pad */ "byDL");












class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
        _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_8__["ParentSignatureComponent"],
        _signature_canvas_signature_canvas_component__WEBPACK_IMPORTED_MODULE_9__["SignatureCanvasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["HttpErrorMessagesComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                    _parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_8__["ParentSignatureComponent"],
                    _signature_canvas_signature_canvas_component__WEBPACK_IMPORTED_MODULE_9__["SignatureCanvasComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"]],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["HttpErrorMessagesComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
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
/* harmony import */ var _shared_http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/http-error-messages/http-error-messages.component */ "guhu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.getAuthData();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-http-error-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_http_error_messages_http_error_messages_component__WEBPACK_IMPORTED_MODULE_3__["HttpErrorMessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fff;\n  overflow: auto;\n  margin: 0;\n}\n\napp-http-error-messages[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYXBwLWh0dHAtZXJyb3ItbWVzc2FnZXMge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r305.message, " ");
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
HttpErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpErrorMessagesComponent, selectors: [["app-http-error-messages"]], decls: 2, vars: 1, consts: [[1, "userError"], ["class", "err  animate__animated animate__fadeInDown", 4, "ngIf"], [1, "err", "animate__animated", "animate__fadeInDown"], [1, "fas", "fa-sad-tear"]], template: function HttpErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _signature_canvas_signature_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signature-canvas/signature-canvas.component */ "KN2u");



class ParentSignatureComponent {
    constructor() {
        this.name = "angular";
    }
    ngOnInit() { }
}
ParentSignatureComponent.ɵfac = function ParentSignatureComponent_Factory(t) { return new (t || ParentSignatureComponent)(); };
ParentSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentSignatureComponent, selectors: [["app-parent-signature"]], decls: 39, vars: 0, consts: [[1, "parentSigantureContainer"], [1, "meetingTeacher"], [1, "meetingDateAndTime"], [1, "totalHours"], [1, "separator"], [1, "dateAndTime"], [1, "time"], [1, "date"], [1, "topicsAndActivities"], [1, "header"], [1, "topicsContent"], [1, "importantComments"], [1, "importantCommentsContent"], [1, "confirmCheckbox"], [1, "grid"], [1, "checkbox", "path"], ["type", "checkbox", "name", "comfirm"], ["viewBox", "0 0 21 21"], ["d", "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"], [1, "parentSignatureCnavas"], [1, "mainButton"]], template: function ParentSignatureComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "signature-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u05D0\u05D9\u05E9\u05D5\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_signature_canvas_signature_canvas_component__WEBPACK_IMPORTED_MODULE_1__["SignatureCanvasComponent"]], styles: [".parentSigantureContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  text-align: center;\n  height: 100vh;\n}\n\n.meetingNumber[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #4a4545;\n}\n\n.meetingTeacher[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #6dac18;\n}\n\n.meetingDateAndTime[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n}\n\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  background-color: #6dac18;\n}\n\n.totalHours[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n  display: flex;\n  flex-direction: column;\n}\n\n.totalHours[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6dac18;\n  margin-right: 10px;\n}\n\n.dateAndTime[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #6dac18;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #4a4545;\n  float: right;\n  padding-right: 15px;\n  margin: 0;\n}\n\n.topicsAndActivities[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.topicsContent[_ngcontent-%COMP%], .importantCommentsContent[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 80%;\n  border-radius: 5px;\n  overflow-y: auto;\n  float: right;\n  margin-right: 15px;\n  text-align: end;\n  overflow-y: auto;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.parentSignatureCnavas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  font-weight: bold;\n  color: #4a4545;\n  text-align: end;\n  text-align: inherit;\n}\n\n#signatureCanvas[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 70px;\n  border: 1px solid black;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: start;\n  display: flex;\n  margin-right: 15px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.confirmCheckbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border: #d1d6ee;\n  --border-hover: #bbc1e1;\n  --border-active: #35341e;\n  --tick: #fff;\n  position: relative;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  display: block;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  outline: none;\n  background: var(--background);\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: box-shadow 0.3s;\n  box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  --s: 2px;\n  --b: var(--border-hover);\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --b: var(--border-active);\n}\n\n.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: var(--stroke, var(--border-active));\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 21px;\n  height: 21px;\n  transform: scale(var(--scale, 1)) translateZ(0);\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --s: 2px;\n  transition-delay: 0.4s;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%] {\n  --a: 16.1 86.12;\n  --o: 102.22;\n}\n\n.checkbox.path[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dasharray: var(--a, 86.12);\n  stroke-dashoffset: var(--o, 86.12);\n  transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhcmVudC1zaWduYXR1cmUvcGFyZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7QUFXRjs7QUFUQTs7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFQQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVNGOztBQUpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0FBT0Y7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtBQVNGOztBQU5BO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVNGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFSRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkRBQUE7QUFVSjs7QUFUSTtFQUNFLFFBQUE7RUFDQSx3QkFBQTtBQVdOOztBQVRJO0VBQ0UseUJBQUE7QUFXTjs7QUFSRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFVSjs7QUFOTTtFQUNFLFFBQUE7RUFDQSxzQkFBQTtBQVFSOztBQVBRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFTVjs7QUFMSTtFQUNFLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5REFBQTtBQU9OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhcmVudC1zaWduYXR1cmUvcGFyZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnRTaWdhbnR1cmVDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5tZWV0aW5nTnVtYmVyIGg0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM0YTQ1NDU7XHJcbn1cclxuLm1lZXRpbmdUZWFjaGVyIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzZkYWMxODtcclxufVxyXG4ubWVldGluZ0RhdGVBbmRUaW1lIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnNlcGFyYXRvciB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkYWMxODtcclxufVxyXG4udG90YWxIb3VycyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmRhYzE4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udG90YWxIb3VycyBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5kYXRlQW5kVGltZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uZGF0ZUFuZFRpbWUgLnRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzZkYWMxODtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmRhdGVBbmRUaW1lIC5kYXRlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM2ZGFjMTg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNGE0NTQ1O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udG9waWNzQW5kQWN0aXZpdGllcyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4udG9waWNzQ29udGVudCxcclxuLmltcG9ydGFudENvbW1lbnRzQ29udGVudCB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAvLyAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5wYXJlbnRTaWduYXR1cmVDbmF2YXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucGFyZW50U2lnbmF0dXJlQ25hdmFzIHNpZ25hdHVyZS1jYW52YXMge1xyXG4gIC8vICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhcmVudFNpZ25hdHVyZUNuYXZhcyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0YTQ1NDU7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbn1cclxuI3NpZ25hdHVyZUNhbnZhcyB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLy8gICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNvbmZpcm1DaGVja2JveCB7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmNvbmZpcm1DaGVja2JveCBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uY29uZmlybUNoZWNrYm94IGxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAtLWJvcmRlcjogI2QxZDZlZTtcclxuICAtLWJvcmRlci1ob3ZlcjogI2JiYzFlMTtcclxuICAtLWJvcmRlci1hY3RpdmU6ICMzNTM0MWU7XHJcbiAgLS10aWNrOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbnB1dCxcclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIHZhcigtLXMsIDFweCkgdmFyKC0tYiwgdmFyKC0tYm9yZGVyKSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1zOiAycHg7XHJcbiAgICAgIC0tYjogdmFyKC0tYm9yZGVyLWhvdmVyKTtcclxuICAgIH1cclxuICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgIC0tYjogdmFyKC0tYm9yZGVyLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN2ZyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICBzdHJva2U6IHZhcigtLXN0cm9rZSwgdmFyKC0tYm9yZGVyLWFjdGl2ZSkpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zY2FsZSwgMSkpIHRyYW5zbGF0ZVooMCk7XHJcbiAgfVxyXG4gICYucGF0aCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgLS1zOiAycHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAmICsgc3ZnIHtcclxuICAgICAgICAgIC0tYTogMTYuMSA4Ni4xMjtcclxuICAgICAgICAgIC0tbzogMTAyLjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3ZnIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogdmFyKC0tYSwgODYuMTIpO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogdmFyKC0tbywgODYuMTIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDAuNnMsIHN0cm9rZS1kYXNob2Zmc2V0IDAuNnM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
    getIsLogChange() {
        return this.isLogChange.asObservable();
    }
    getAuthData() {
        const authData = this.getSessionStorage();
        if (!authData) {
            // return this.clearLoginInfo()
            return;
        }
        const now = new Date();
        const isValidTime = authData.expiresInDate.getTime() - now.getTime();
        console.log(isValidTime, 'IS TOKEN VALID TIME');
        if (isValidTime > 0) {
            this.token = authData.token;
            this.isLog = true;
            this.isLogChange.next(this.isLog);
            this.setTokenTimer(isValidTime / 1000);
        }
        else {
            this.clearLoginInfo();
        }
    }
    authTeacherId(teacherId) {
        return this.http.post('api/auth/teacherId', teacherId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            // console.log(result)
            if (result.token) {
                this.token = result.token;
                const expiresIn = result.tokenExpiresIn;
                this.setTokenTimer(expiresIn);
                const now = new Date();
                const expiresInDate = new Date(now.getTime() + expiresIn * 1000);
                this.saveSessionStorage(this.token, expiresInDate);
            }
            return result.message;
        }));
    }
    confirmCode(code) {
        return this.http.post('api/auth/teacher/confirm-code', code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            // console.log(result)
            this.isLog = result.isLog;
            this.isLogChange.next(this.isLog);
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
    saveSessionStorage(token, expiresIn) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('expiresIn', expiresIn.toISOString());
    }
    removeSessionStorage() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expiresIn');
    }
    getSessionStorage() {
        const token = sessionStorage.getItem('token');
        const expiresInDate = sessionStorage.getItem('expiresIn');
        if (!token || !expiresInDate) {
            return;
        }
        return {
            token: token,
            expiresInDate: new Date(expiresInDate)
        };
    }
    clearLoginInfo() {
        this.token = null;
        this.isLog = false;
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
/* harmony import */ var _services_guards_not_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guards/not-auth.guard */ "h+8V");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");







const routes = [
    {
        path: "",
        redirectTo: "auth/id",
        pathMatch: "full",
    },
    {
        path: "auth",
        loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthModule),
        canActivate: [_services_guards_not_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NotAuthGuard"]],
    },
    {
        path: "main",
        loadChildren: () => Promise.all(/*! import() | teacher-teacher-module */[__webpack_require__.e("common"), __webpack_require__.e("teacher-teacher-module")]).then(__webpack_require__.bind(null, /*! ./teacher/teacher.module */ "4+hN")).then((m) => m.TeacerModule),
    },
    {
        path: "parent-signature",
        component: _shared_parent_signature_parent_signature_component__WEBPACK_IMPORTED_MODULE_0__["ParentSignatureComponent"],
    },
    {
        path: "**",
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
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