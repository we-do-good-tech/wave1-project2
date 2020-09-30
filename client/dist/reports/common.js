(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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


/***/ })

}]);
//# sourceMappingURL=common.js.map