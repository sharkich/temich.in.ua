(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root\">\n\n  <h1 *ngIf=\"!currentSchedule || !optimizedSchedule\">Almost loaded...</h1>\n\n  <div *ngIf=\"currentSchedule && optimizedSchedule\">\n\n    <app-svg-time-chart\n      *ngIf=\"currentSchedule\"\n      [title]=\"'Regular Schedule'\"\n      [timeRanges]=\"currentSchedule\"\n      [copyFrom]=\"optimizedSchedule\"\n      [copyFromTitle]=\"'Optimized'\"\n    ></app-svg-time-chart>\n\n    <hr>\n\n    <app-svg-time-chart\n      *ngIf=\"optimizedSchedule\"\n      [title]=\"'Optimized Schedule'\"\n      [timeRanges]=\"optimizedSchedule\"\n      [copyFrom]=\"currentSchedule\"\n      [copyFromTitle]=\"'Regular'\"\n    ></app-svg-time-chart>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-root {\n  padding: 20px 0;\n  min-width: 1860px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_range_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-range.service */ "./src/app/time-range.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(timeRangeService) {
        this.timeRangeService = timeRangeService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Get Init general Data from JSON
         */
        this.timeRangeService.getInitRegularSchedule()
            .then(function (timeRanges) {
            _this.currentSchedule = timeRanges;
        })
            .catch(function () {
            _this.currentSchedule = [];
        });
        /**
         * Get Init optimized Data from JSON
         */
        this.timeRangeService.getInitOptimizedSchedule()
            .then(function (timeRanges) {
            _this.optimizedSchedule = timeRanges;
        })
            .catch(function () {
            _this.optimizedSchedule = [];
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_range_service__WEBPACK_IMPORTED_MODULE_1__["TimeRangeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _svg_time_chart_svg_time_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg-time-chart/svg-time-chart.component */ "./src/app/svg-time-chart/svg-time-chart.component.ts");
/* harmony import */ var _time_range_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time-range.service */ "./src/app/time-range.service.ts");
/* harmony import */ var _dialog_create_new_schedule_dialog_create_new_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-create-new-schedule/dialog-create-new-schedule.component */ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.ts");
/* harmony import */ var _dialog_edit_time_range_dialog_edit_time_range_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-edit-time-range/dialog-edit-time-range.component */ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.ts");
/* harmony import */ var _svg_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg.service */ "./src/app/svg.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _svg_time_chart_svg_time_chart_component__WEBPACK_IMPORTED_MODULE_7__["SvgTimeChartComponent"],
                _dialog_create_new_schedule_dialog_create_new_schedule_component__WEBPACK_IMPORTED_MODULE_9__["DialogCreateNewScheduleComponent"],
                _dialog_edit_time_range_dialog_edit_time_range_component__WEBPACK_IMPORTED_MODULE_10__["DialogEditTimeRangeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
            ],
            providers: [
                _time_range_service__WEBPACK_IMPORTED_MODULE_8__["TimeRangeService"],
                _svg_service__WEBPACK_IMPORTED_MODULE_11__["SvgService"]
            ],
            entryComponents: [
                _dialog_create_new_schedule_dialog_create_new_schedule_component__WEBPACK_IMPORTED_MODULE_9__["DialogCreateNewScheduleComponent"],
                _dialog_edit_time_range_dialog_edit_time_range_component__WEBPACK_IMPORTED_MODULE_10__["DialogEditTimeRangeComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-dialog-create-new-schedule\">\n  <h1 mat-dialog-title>Create new {{data.title}}</h1>\n  <div mat-dialog-content>\n\n    <p>Erase current Schedule and Create New</p>\n\n    <mat-horizontal-stepper [linear]=\"true\" #stepper>\n\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Sleep & Work</ng-template>\n\n          <div class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Sleep from</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.sleep.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"sleepStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.sleep.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"sleepStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Sleep to</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.sleep.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"sleepEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.sleep.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"sleepEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Sleep duration</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.sleep.start.hour, formData.sleep.start.minutes, formData.sleep.end.hour, formData.sleep.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Work from</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.work.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"workStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.work.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"workStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Work to</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.work.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"workEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.work.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"workEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Work duration</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.work.start.hour, formData.work.start.minutes, formData.work.end.hour, formData.work.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n\n\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Transport</ng-template>\n\n          <div class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Way to work start</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToWork.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"wayToWorkStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToWork.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"wayToWorkStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Way to work end</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToWork.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"wayToWorkEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToWork.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"wayToWorkEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Duration to work</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.wayToWork.start.hour, formData.wayToWork.start.minutes, formData.wayToWork.end.hour, formData.wayToWork.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Way to home start</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToHome.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"wayToHomeStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToHome.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"wayToHomeStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Way to home end</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToHome.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"wayToHomeEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.wayToHome.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"wayToHomeEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Duration to home</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.wayToHome.start.hour, formData.wayToHome.start.minutes, formData.wayToHome.end.hour, formData.wayToHome.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <h5>\n            <button\n              (click)=\"onToggleChangeHeavyTraffic()\"\n              mat-raised-button>Change Heavy Traffic</button>\n          </h5>\n\n          <div\n            *ngIf=\"isChangeHeavyTraffic\"\n            class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Morning heavy traffic start</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToWork.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"trafficToWorkStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToWork.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"trafficToWorkStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Morning heavy traffic end</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToWork.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"trafficToWorkEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToWork.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"trafficToWorkEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Morning heavy traffic duration</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.trafficToWork.start.hour, formData.trafficToWork.start.minutes, formData.trafficToWork.end.hour, formData.trafficToWork.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <div\n            *ngIf=\"isChangeHeavyTraffic\"\n            class=\"table\">\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Evening heavy traffic start</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToHome.start.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"trafficToHomeStartHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToHome.start.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"trafficToHomeStartMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 40%\">\n              <h4>Evening heavy traffic end</h4>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToHome.end.hour\"\n                  placeholder=\"Hour\"\n                  formControlName=\"trafficToHomeEndHour\"\n                  required>\n                  <mat-option\n                    *ngFor=\"let hour of hours;\"\n                    [value]=\"hour\">\n                    {{hour}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-select\n                  [(value)]=\"formData.trafficToHome.end.minutes\"\n                  placeholder=\"Minutes\"\n                  formControlName=\"trafficToHomeEndMinutes\"\n                  required>\n                  <mat-option [value]=\"0\">00</mat-option>\n                  <mat-option [value]=\"15\">15</mat-option>\n                  <mat-option [value]=\"30\">30</mat-option>\n                  <mat-option [value]=\"45\">45</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div class=\"cel\" style=\"width: 20%\">\n              <h4>Evening heavy traffic duration</h4>\n              <div class=\"result\">\n                <strong>{{duration(formData.trafficToHome.start.hour, formData.trafficToHome.start.minutes, formData.trafficToHome.end.hour, formData.trafficToHome.end.minutes)}}</strong>\n              </div>\n            </div>\n\n          </div>\n\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button\n              mat-raised-button\n              color=\"primary\"\n              [mat-dialog-close]=\"formData\"\n              cdkFocusInitial>\n              Apply\n            </button>\n          </div>\n\n        </form>\n      </mat-step>\n\n    </mat-horizontal-stepper>\n\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <!--<button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>-->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-dialog-create-new-schedule .table {\n  display: flex; }\n\n.app-dialog-create-new-schedule .mat-form-field {\n  width: 100px; }\n"

/***/ }),

/***/ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.ts ***!
  \************************************************************************************/
/*! exports provided: DialogCreateNewScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateNewScheduleComponent", function() { return DialogCreateNewScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _time_range_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../time-range.service */ "./src/app/time-range.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Dialog from creating schedule
 */
var DialogCreateNewScheduleComponent = /** @class */ (function () {
    function DialogCreateNewScheduleComponent(timeRangeService, dialogRef, data, _formBuilder) {
        this.timeRangeService = timeRangeService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.formData = {
            sleep: {
                start: {
                    hour: 23,
                    minutes: 0
                },
                end: {
                    hour: 8,
                    minutes: 0
                }
            },
            work: {
                start: {
                    hour: 10,
                    minutes: 0
                },
                end: {
                    hour: 19,
                    minutes: 0
                }
            },
            wayToWork: {
                start: {
                    hour: 9,
                    minutes: 0
                },
                end: {
                    hour: 10,
                    minutes: 0
                }
            },
            wayToHome: {
                start: {
                    hour: 19,
                    minutes: 0
                },
                end: {
                    hour: 20,
                    minutes: 0
                }
            },
            trafficToWork: {
                start: {
                    hour: 7,
                    minutes: 30
                },
                end: {
                    hour: 10,
                    minutes: 30
                }
            },
            trafficToHome: {
                start: {
                    hour: 17,
                    minutes: 0
                },
                end: {
                    hour: 19,
                    minutes: 30
                }
            }
        };
        this.isChangeHeavyTraffic = false;
    }
    DialogCreateNewScheduleComponent.prototype.ngOnInit = function () {
        this.hours = this.timeRangeService.hours();
        this.firstFormGroup = this._formBuilder.group({
            sleepStartHour: [this.formData.sleep.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sleepStartMinutes: [this.formData.sleep.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sleepEndHour: [this.formData.sleep.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sleepEndMinutes: [this.formData.sleep.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workStartHour: [this.formData.work.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workStartMinutes: [this.formData.work.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workEndHour: [this.formData.work.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workEndMinutes: [this.formData.work.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            wayToWorkStartHour: [this.formData.wayToWork.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToWorkStartMinutes: [this.formData.wayToWork.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToWorkEndHour: [this.formData.wayToWork.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToWorkEndMinutes: [this.formData.wayToWork.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToHomeStartHour: [this.formData.wayToHome.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToHomeStartMinutes: [this.formData.wayToHome.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToHomeEndHour: [this.formData.wayToHome.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wayToHomeEndMinutes: [this.formData.wayToHome.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToWorkStartHour: [this.formData.trafficToWork.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToWorkStartMinutes: [this.formData.trafficToWork.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToWorkEndHour: [this.formData.trafficToWork.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToWorkEndMinutes: [this.formData.trafficToWork.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToHomeStartHour: [this.formData.trafficToHome.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToHomeStartMinutes: [this.formData.trafficToHome.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToHomeEndHour: [this.formData.trafficToHome.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trafficToHomeEndMinutes: [this.formData.trafficToHome.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DialogCreateNewScheduleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogCreateNewScheduleComponent.prototype.onToggleChangeHeavyTraffic = function () {
        this.isChangeHeavyTraffic = !this.isChangeHeavyTraffic;
    };
    DialogCreateNewScheduleComponent.prototype.duration = function (startH, startM, endH, endM) {
        return this.timeRangeService.duration(startH, startM, endH, endM);
    };
    DialogCreateNewScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-create-new-schedule',
            template: __webpack_require__(/*! ./dialog-create-new-schedule.component.html */ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.html"),
            styles: [__webpack_require__(/*! ./dialog-create-new-schedule.component.scss */ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_time_range_service__WEBPACK_IMPORTED_MODULE_3__["TimeRangeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DialogCreateNewScheduleComponent);
    return DialogCreateNewScheduleComponent;
}());



/***/ }),

/***/ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dialog-edit-time-range/dialog-edit-time-range.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-dialog-edit-time-range\">\n  <h1 mat-dialog-title>Edit Time Range{{data.timeRange.title}}</h1>\n  <div mat-dialog-content>\n\n    <form [formGroup]=\"firstFormGroup\">\n\n      <mat-form-field class=\"range-title\">\n        <input\n          matInput\n          placeholder=\"Title\"\n          [(value)]=\"formData.title\"\n          formControlName=\"title\">\n      </mat-form-field>\n\n      <div class=\"table\">\n\n        <div class=\"cel\" style=\"width: 40%\">\n          <h4>Time from</h4>\n          <mat-form-field>\n            <mat-select\n              [(value)]=\"formData.start.hour\"\n              placeholder=\"Hour\"\n              formControlName=\"startHour\"\n              required>\n              <mat-option\n                *ngFor=\"let hour of hours;\"\n                [value]=\"hour\">\n                {{hour}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select\n              [(value)]=\"formData.start.minutes\"\n              placeholder=\"Minutes\"\n              formControlName=\"startMinutes\"\n              required>\n              <mat-option [value]=\"0\">00</mat-option>\n              <mat-option [value]=\"15\">15</mat-option>\n              <mat-option [value]=\"30\">30</mat-option>\n              <mat-option [value]=\"45\">45</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"cel\" style=\"width: 40%\">\n          <h4>Time to</h4>\n          <mat-form-field>\n            <mat-select\n              [(value)]=\"formData.end.hour\"\n              placeholder=\"Hour\"\n              formControlName=\"endHour\"\n              required>\n              <mat-option\n                *ngFor=\"let hour of hours;\"\n                [value]=\"hour\">\n                {{hour}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select\n              [(value)]=\"formData.end.minutes\"\n              placeholder=\"Minutes\"\n              formControlName=\"endMinutes\"\n              required>\n              <mat-option [value]=\"0\">00</mat-option>\n              <mat-option [value]=\"15\">15</mat-option>\n              <mat-option [value]=\"30\">30</mat-option>\n              <mat-option [value]=\"45\">45</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"cel\" style=\"width: 20%\">\n          <h4>Duration</h4>\n          <div class=\"result\">\n            <strong>{{duration()}}</strong>\n          </div>\n        </div>\n\n      </div>\n\n      <mat-form-field class=\"range-kind\">\n        <mat-select\n          [(value)]=\"formData.kind\"\n          placeholder=\"Kind\"\n          formControlName=\"kind\"\n          required>\n          <mat-option value=\"blue\">Blue Color Range</mat-option>\n          <mat-option value=\"green\">Green Color Range</mat-option>\n          <mat-option value=\"yellow\">Yellow Color Range</mat-option>\n          <mat-option value=\"red\">Red Color Range</mat-option>\n\n          <!--<mat-option value=\"title\" disabled=\"disabled\">Title Range (Transport, Activities)</mat-option>-->\n          <!--<mat-option value=\"background\" disabled=\"disabled\">Background Range (Heavy traffic)</mat-option>-->\n\n          <mat-option value=\"work\" disabled=\"disabled\">Specific Range for Work</mat-option>\n          <mat-option value=\"sleep\" disabled=\"disabled\">Specific Range for Sleep</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"range-height\">\n        <mat-select\n          [(value)]=\"formData.height\"\n          placeholder=\"Height\"\n          formControlName=\"height\"\n          required>\n          <mat-option [value]=\"0\">Low</mat-option>\n          <mat-option [value]=\"1\">High</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    </form>\n\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [mat-dialog-close]=\"firstFormGroup\"\n      cdkFocusInitial>\n      OK\n    </button>\n\n    <div style=\"flex-grow: 1;\"></div>\n\n    <button\n      *ngIf=\"!data.isNew\"\n      mat-raised-button\n      color=\"warn\"\n      [mat-dialog-close]=\"{delete: true}\"\n      cdkFocusInitial>\n      Delete\n    </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dialog-edit-time-range/dialog-edit-time-range.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-dialog-edit-time-range .table {\n  display: flex; }\n  .app-dialog-edit-time-range .table .cel .mat-form-field {\n    width: 100px; }\n  .app-dialog-edit-time-range .range-title, .app-dialog-edit-time-range .range-kind {\n  width: 100%; }\n  .app-dialog-edit-time-range .delete-button {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dialog-edit-time-range/dialog-edit-time-range.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogEditTimeRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEditTimeRangeComponent", function() { return DialogEditTimeRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _time_range_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../time-range.model */ "./src/app/time-range.model.ts");
/* harmony import */ var _time_range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time-range.service */ "./src/app/time-range.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * Dialog for edit/create custom range
 */
var DialogEditTimeRangeComponent = /** @class */ (function () {
    function DialogEditTimeRangeComponent(timeRangeService, dialogRef, data, _formBuilder) {
        this.timeRangeService = timeRangeService;
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.formData = {
            title: 'New Time Range',
            start: {
                hour: 12,
                minutes: 30
            },
            end: {
                hour: 13,
                minutes: 15
            },
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_3__["TIME_RANGE_KIND"].blue,
            height: 0
        };
    }
    DialogEditTimeRangeComponent.prototype.ngOnInit = function () {
        this.hours = this.timeRangeService.hours();
        this.formData.title = this.data.timeRange.title;
        this.formData.start.hour = this.data.timeRange.hourStart;
        this.formData.start.minutes = this.data.timeRange.minutesStart;
        this.formData.end.hour = this.data.timeRange.hourEnd;
        this.formData.end.minutes = this.data.timeRange.minutesEnd;
        this.formData.kind = this.data.timeRange.kind;
        this.formData.height = this.data.timeRange.height;
        this.firstFormGroup = this._formBuilder.group({
            title: [this.formData.title],
            startHour: [this.formData.start.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startMinutes: [this.formData.start.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endHour: [this.formData.end.hour, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endMinutes: [this.formData.end.minutes, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            kind: [this.formData.kind, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: [this.formData.height, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Cnacel event
     */
    DialogEditTimeRangeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
     * Get duration string between times
     * @return {string}
     */
    DialogEditTimeRangeComponent.prototype.duration = function () {
        return this.timeRangeService.duration(this.formData.start.hour, this.formData.start.minutes, this.formData.end.hour, this.formData.end.minutes);
    };
    DialogEditTimeRangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-edit-time-range',
            template: __webpack_require__(/*! ./dialog-edit-time-range.component.html */ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.html"),
            styles: [__webpack_require__(/*! ./dialog-edit-time-range.component.scss */ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_time_range_service__WEBPACK_IMPORTED_MODULE_4__["TimeRangeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DialogEditTimeRangeComponent);
    return DialogEditTimeRangeComponent;
}());



/***/ }),

/***/ "./src/app/svg-time-chart/svg-time-chart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/svg-time-chart/svg-time-chart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-svg-time-chart\">\n  <div class=\"actions\">\n    <button (click)=\"onAddRange()\" mat-button color=\"primary\">\n      <i class=\"material-icons\">add_circle_outline</i>\n      Add Range\n    </button>\n    |\n    <button (click)=\"onDownloadImage()\" mat-button>\n      <i class=\"material-icons\">image</i>\n      Download Image\n    </button>\n    |\n    <button (click)=\"onDownloadData()\" mat-button>\n      <i class=\"material-icons\">save</i>\n      Download Data\n    </button>\n\n    <button (click)=\"onUploadData()\" mat-button>\n      <i class=\"material-icons\">input</i>\n      Import Data\n    </button>\n    <input\n      type=\"file\"\n      #uploadFile\n      [hidden]=\"true\"\n      accept=\".json\"\n      (change)=\"onUploadFile($event)\"/>\n\n    |\n    <button (click)=\"onCopyFrom()\" mat-button color=\"primary\">\n      <i class=\"material-icons\">file_copy</i>\n      Copy from {{copyFromTitle}}\n    </button>\n    <button (click)=\"onCreateNew()\" mat-button color=\"primary\">\n      <i class=\"material-icons\">create</i>\n      Create new\n    </button>\n    <button (click)=\"onClear()\" mat-button color=\"warn\">\n      <i class=\"material-icons\">clear</i>\n      Clear\n    </button>\n  </div>\n\n  <svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  xml:space=\"preserve\"\n  #svg\n  style=\"margin: 0 auto; padding: 20px 0; width: 2146px; height: 480px;\"\n  class=\"svg-time-chart\">\n\n  <defs>\n        <filter\n          [id]=\"'dashedBackground'+id\"\n          x=\"0\"\n          y=\"0\"\n          width=\"100%\"\n          height=\"100%\">\n            <feImage\n              xlink:href=\"http://app.absence.io/assets/images/absence_pattern.png\"\n              x=\"0\"\n              y=\"0\"\n              width=\"6\"\n              height=\"48\"\n              preserveAspectRatio=\"xMinYMin slice\"/>\n            <feTile\n              x=\"0\"\n              y=\"0\"\n              width=\"100%\"\n              height=\"100%\"/>\n            <feComposite\n              in2=\"SourceAlpha\"\n              operator=\"in\"/>\n            <feMerge>\n                <feMergeNode in=\"SourceGraphic\"/>\n                <feMergeNode/>\n            </feMerge>\n        </filter>\n  </defs>\n\n  <rect\n    class=\"background\"\n    x=\"0\"\n    y=\"0\"\n    [attr.width]=\"svgWidthFull\"\n    [attr.height]=\"svgHeightFull\"\n    style=\"fill: white;\" />\n\n  <g class=\"ranges\">\n\n    <g class=\"ranges\">\n\n      <g\n        *ngFor=\"let timeRange of timeRangesBackgrounds; index as i;\"\n        class=\"background-group\">\n          <rect\n            class=\"background\"\n            [attr.x]=\"rangeX(timeRange)\"\n            [attr.y]=\"svgMargin\"\n            [attr.width]=\"rangeWidth(timeRange)\"\n            [attr.height]=\"svgHeight\"\n            fill=\"#eee\"\n            [attr.filter]=\"'url(#dashedBackground' + id +')'\"\n          />\n        <g>\n          <text\n            class=\"background-title\"\n            [attr.x]=\"rangeTitleX(timeRange) - 4\"\n            [attr.y]=\"svgMargin + 20\"\n            text-anchor=\"middle\"\n            fill=\"#666\"\n            style=\"font-family: Arial, sans-serif; font-size: 8pt; font-weight: bold;\">\n            {{timeRange.title}}\n          </text>\n        </g>\n\n      </g>\n\n      <g\n        *ngFor=\"let timeRange of timeRangesColours; index as i;\"\n        (click)=\"onRangeSelect(timeRange)\"\n        class=\"color-group\">\n          <rect\n            class=\"color\"\n            [attr.x]=\"rangeX(timeRange)\"\n            [attr.y]=\"250 - rangeHeight(timeRange)\"\n            [attr.width]=\"rangeWidth(timeRange)\"\n            [attr.height]=\"rangeHeight(timeRange)\"\n            [attr.fill]=\"rangeColor(timeRange)\"/>\n          <text\n            class=\"color-title\"\n            [attr.x]=\"rangeTitleX(timeRange)\"\n            [attr.y]=\"rangeTitleY(timeRange)\"\n            text-anchor=\"end\"\n            [attr.transform]=\"'rotate(-90 ' + rangeTitleX(timeRange) + ',' + rangeTitleY(timeRange) + ')'\"\n            [attr.fill]=\"rangeColor(timeRange, 1)\"\n            style=\"font-family: Arial, sans-serif; font-size: 9pt; font-weight: bold;\">\n            {{timeRange.title}}\n            <tspan\n              *ngIf=\"duration(timeRange)\"\n              style=\"font-weight: normal; font-size: 8pt;\" fill=\"#eee\">(</tspan>\n            <tspan\n              *ngIf=\"duration(timeRange)\"\n              style=\"font-weight: normal; font-size: 8pt;\" fill=\"#999\">{{duration(timeRange)}}</tspan>\n            <tspan\n              *ngIf=\"duration(timeRange)\"\n              style=\"font-weight: normal; font-size: 8pt;\" fill=\"#eee\">)</tspan>\n          </text>\n      </g>\n\n      <g\n        *ngFor=\"let timeRange of timeRangesTitles; index as i;\"\n        class=\"title-group\">\n          <rect\n            class=\"title\"\n            [attr.x]=\"rangeX(timeRange)\"\n            [attr.y]=\"250\"\n            [attr.width]=\"rangeWidth(timeRange)\"\n            [attr.height]=\"30\"\n            [attr.fill]=\"rangeColor(timeRange)\"/>\n          <text\n            class=\"title-text\"\n            [attr.x]=\"rangeTitleX(timeRange) - 4\"\n            [attr.y]=\"270\"\n            text-anchor=\"middle\"\n            [attr.fill]=\"'#000'\"\n            style=\"font-family: Arial, sans-serif; font-size: 9pt; font-weight: bold;\">\n            {{timeRange.title}}\n          </text>\n          <line\n            class=\"title-left-line\"\n            [attr.x1]=\"rangeX(timeRange)\"\n            [attr.x2]=\"rangeX(timeRange)\"\n            y1=\"250\"\n            y2=\"295\"\n            stroke=\"rgba(0, 0,0, 1)\"\n            stroke-width=\"2px\"/>\n          <line\n            class=\"title-right-line\"\n            [attr.x1]=\"rangeX(timeRange) + rangeWidth(timeRange)\"\n            [attr.x2]=\"rangeX(timeRange) + rangeWidth(timeRange)\"\n            y1=\"250\"\n            y2=\"295\"\n            stroke=\"rgba(0, 0,0, 1)\"\n            stroke-width=\"2px\"/>\n      </g>\n\n    </g>\n\n  </g>\n\n  <g class=\"axises\">\n\n    <g\n      *ngFor=\"let hour of hours; index as i;\"\n      class=\"hour\">\n\n      <text\n        [attr.x]=\"svgMargin + hour * svgHourWidth\"\n        y=\"170\"\n        text-anchor=\"middle\"\n        style=\"font-family: Arial, sans-serif; color: #000; font-size: 9pt;\">\n        {{hour}}:00\n      </text>\n      <line\n        [attr.x1]=\"svgMargin + hour * svgHourWidth\"\n        [attr.x2]=\"svgMargin + hour * svgHourWidth\"\n        y1=\"180\"\n        y2=\"250\"\n        stroke=\"rgba(0, 0,0, 1)\"\n        stroke-width=\"2px\"/>\n      <line\n        [attr.x1]=\"svgMargin + hour * svgHourWidth + svgHalfWidth\"\n        [attr.x2]=\"svgMargin + hour * svgHourWidth + svgHalfWidth\"\n        y1=\"180\"\n        y2=\"250\"\n        stroke=\"rgba(0, 0,0, 1)\"/>\n      <line\n        [attr.x1]=\"svgMargin + hour * svgHourWidth + svgQuarterWidth\"\n        [attr.x2]=\"svgMargin + hour * svgHourWidth + svgQuarterWidth\"\n        y1=\"200\"\n        y2=\"250\"\n        stroke=\"rgba(0, 0,0, 1)\"/>\n      <line\n        [attr.x1]=\"svgMargin + hour * svgHourWidth + svgHalfWidth + svgQuarterWidth\"\n        [attr.x2]=\"svgMargin + hour * svgHourWidth + svgHalfWidth + svgQuarterWidth\"\n        y1=\"200\"\n        y2=\"250\"\n        stroke=\"rgba(0, 0,0, 1)\"/>\n\n    </g>\n\n    <g class=\"hour\">\n      <text\n        [attr.x]=\"svgMargin + 24 * svgHourWidth\"\n        y=\"170\"\n        text-anchor=\"middle\"\n        style=\"font-family: Arial, sans-serif; color: #000; font-size: 9pt;\">\n        24:00\n      </text>\n      <line\n        [attr.x1]=\"svgMargin + 24 * svgHourWidth\"\n        [attr.x2]=\"svgMargin + 24 * svgHourWidth\"\n        y1=\"180\"\n        y2=\"250\"\n        stroke=\"rgba(0, 0,0, 1)\"\n        stroke-width=\"2px\"/>\n    </g>\n\n  </g>\n\n  <g class=\"title\">\n    <text\n        x=\"40\"\n        y=\"60\"\n        text-anchor=\"start\"\n        style=\"font-family: Arial, sans-serif; color: #000; font-size: 20pt;\">\n      {{title}}\n    </text>\n  </g>\n\n  Sorry, your browser does not support inline SVG.\n</svg>\n\n  <div [hidden]=\"true\">\n    <canvas [width]=\"svgWidthFull\" [height]=\"svgHeightFull\" #canvas></canvas>\n    <img [width]=\"svgWidthFull\" [height]=\"svgHeightFull\" alt=\"\" #png/>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/svg-time-chart/svg-time-chart.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/svg-time-chart/svg-time-chart.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-svg-time-chart {\n  font-family: Arial, sans-serif;\n  font-size: 10pt;\n  color: #000; }\n  .app-svg-time-chart .actions {\n    margin-left: 30px; }\n  .app-svg-time-chart .actions button {\n      margin-right: 10px;\n      margin-left: 10px; }\n  .app-svg-time-chart .new-range {\n    margin: 10px 40px; }\n  .app-svg-time-chart .new-range button {\n      margin-left: 10px; }\n  .app-svg-time-chart .svg-time-chart .color-group .color, .app-svg-time-chart .svg-time-chart .color-group .color-title {\n    cursor: pointer; }\n  .app-svg-time-chart .svg-time-chart .color-group:hover .color, .app-svg-time-chart .svg-time-chart .color-group:hover .color-title {\n    opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/svg-time-chart/svg-time-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/svg-time-chart/svg-time-chart.component.ts ***!
  \************************************************************/
/*! exports provided: SvgTimeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgTimeChartComponent", function() { return SvgTimeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _time_range_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-range.model */ "./src/app/time-range.model.ts");
/* harmony import */ var _time_range_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../time-range.service */ "./src/app/time-range.service.ts");
/* harmony import */ var _svg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg.service */ "./src/app/svg.service.ts");
/* harmony import */ var _dialog_create_new_schedule_dialog_create_new_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-create-new-schedule/dialog-create-new-schedule.component */ "./src/app/dialog-create-new-schedule/dialog-create-new-schedule.component.ts");
/* harmony import */ var _dialog_edit_time_range_dialog_edit_time_range_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-edit-time-range/dialog-edit-time-range.component */ "./src/app/dialog-edit-time-range/dialog-edit-time-range.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Main SVG component for Schedule
 */
var SvgTimeChartComponent = /** @class */ (function () {
    function SvgTimeChartComponent(timeRangeService, svgService, dialog) {
        this.timeRangeService = timeRangeService;
        this.svgService = svgService;
        this.dialog = dialog;
    }
    SvgTimeChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = '' + Math.random();
        this.svgMargin = this.svgService.svgMargin;
        this.svgWidthFull = this.svgService.svgWidthFull;
        this.svgHourWidth = this.svgService.svgHourWidth;
        this.svgHalfWidth = this.svgService.svgHalfWidth;
        this.svgQuarterWidth = this.svgService.svgQuarterWidth;
        this.svgHeight = this.svgService.svgHeight;
        this.svgHeightFull = this.svgService.svgHeightFull;
        this.hours = this.timeRangeService.hours();
        this._initData();
        // For downloading
        this.png.nativeElement.onload = function () {
            return _this.svgService.downloadImageFinal(_this.canvas, _this.png, _this.title);
        };
    };
    /**
     * Dialog for create new Schedule
     */
    SvgTimeChartComponent.prototype.onCreateNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_create_new_schedule_dialog_create_new_schedule_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateNewScheduleComponent"], {
            width: '800px',
            data: {
                title: this.title
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            if (!result) {
                return;
            }
            _this.timeRanges.length = 0;
            _this.timeRanges = _this.timeRangeService.createSchedule(result);
            _this._initData();
        });
    };
    /**
     * Events handlers
     */
    /**
     * Dialog new range
     */
    SvgTimeChartComponent.prototype.onAddRange = function () {
        this.onRangeSelect(new _time_range_model__WEBPACK_IMPORTED_MODULE_2__["TimeRangeModel"](), true);
    };
    /**
     * Download Image
     */
    SvgTimeChartComponent.prototype.onDownloadImage = function () {
        this.svgService.downloadImageStart(this.svg, this.png);
    };
    /**
     * Download Data
     */
    SvgTimeChartComponent.prototype.onDownloadData = function () {
        this.timeRangeService.downloadData(this.timeRanges, this.title);
    };
    /**
     * Upload Data
     */
    SvgTimeChartComponent.prototype.onUploadData = function () {
        this.uploadFile.nativeElement.click();
    };
    /**
     * Upload Data
     * @param event
     * @return {boolean}
     */
    SvgTimeChartComponent.prototype.onUploadFile = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        if (files.length <= 0) {
            return false;
        }
        this.timeRangeService.uploadFile(files.item(0))
            .then(function (result) {
            _this.uploadFile.nativeElement.value = '';
            _this.timeRanges = result;
            _this._initData();
        });
    };
    /**
     * Clear schedule
     */
    SvgTimeChartComponent.prototype.onClear = function () {
        this.timeRanges.length = 0;
        this._initData();
    };
    /**
     * Dialog edit range
     * @param {TimeRangeModel} timeRange
     * @param {boolean} isNew
     */
    SvgTimeChartComponent.prototype.onRangeSelect = function (timeRange, isNew) {
        var _this = this;
        if (isNew === void 0) { isNew = false; }
        var dialogRef = this.dialog.open(_dialog_edit_time_range_dialog_edit_time_range_component__WEBPACK_IMPORTED_MODULE_6__["DialogEditTimeRangeComponent"], {
            width: '600px',
            data: {
                timeRange: timeRange,
                isNew: isNew
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            if (!result || result.invalid) {
                return;
            }
            if (result['delete']) {
                _this.timeRangeService.deleteRange(_this.timeRanges, timeRange);
                _this._initData();
                return;
            }
            _this.timeRangeService.editTimeRange(timeRange, result);
            if (isNew) {
                _this.timeRangeService.addRange(_this.timeRanges, timeRange);
                _this._initData();
            }
        });
    };
    /**
     * Get data from the copy
     */
    SvgTimeChartComponent.prototype.onCopyFrom = function () {
        this.timeRanges = this.timeRangeService.copyRange(this.copyFrom);
        this._initData();
    };
    /**
     * Update lists from timeRanges
     * @private
     */
    SvgTimeChartComponent.prototype._initData = function () {
        var _this = this;
        setTimeout(function () {
            _this.timeRangesColours = _this.timeRangeService.generalRangesFiler(_this.timeRanges);
            _this.timeRangesTitles = _this.timeRangeService.titleRangesFiler(_this.timeRanges);
            _this.timeRangesBackgrounds = _this.timeRangeService.backgroundRangesFiler(_this.timeRanges);
        });
    };
    /**
     * Helpers for data in SVG (serializers)
     */
    SvgTimeChartComponent.prototype.rangeHeight = function (timeRange) {
        return this.svgService.rangeHeight(timeRange);
    };
    SvgTimeChartComponent.prototype.rangeX = function (timeRange) {
        return this.svgService.rangeX(timeRange);
    };
    SvgTimeChartComponent.prototype.rangeWidth = function (timeRange) {
        return this.svgService.rangeWidth(timeRange);
    };
    SvgTimeChartComponent.prototype.rangeColor = function (timeRange, opacity) {
        if (opacity === void 0) { opacity = 0.8; }
        return this.svgService.rangeColor(timeRange, opacity);
    };
    SvgTimeChartComponent.prototype.rangeTitleX = function (timeRange) {
        return this.svgService.rangeTitleX(timeRange);
    };
    SvgTimeChartComponent.prototype.rangeTitleY = function (timeRange) {
        return this.svgService.rangeTitleY(timeRange);
    };
    SvgTimeChartComponent.prototype.duration = function (range) {
        return this.timeRangeService.durationRange(range);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgTimeChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SvgTimeChartComponent.prototype, "timeRanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SvgTimeChartComponent.prototype, "copyFrom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgTimeChartComponent.prototype, "copyFromTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", Object)
    ], SvgTimeChartComponent.prototype, "svg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], SvgTimeChartComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('png'),
        __metadata("design:type", Object)
    ], SvgTimeChartComponent.prototype, "png", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadFile'),
        __metadata("design:type", Object)
    ], SvgTimeChartComponent.prototype, "uploadFile", void 0);
    SvgTimeChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svg-time-chart',
            template: __webpack_require__(/*! ./svg-time-chart.component.html */ "./src/app/svg-time-chart/svg-time-chart.component.html"),
            styles: [__webpack_require__(/*! ./svg-time-chart.component.scss */ "./src/app/svg-time-chart/svg-time-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_range_service__WEBPACK_IMPORTED_MODULE_3__["TimeRangeService"],
            _svg_service__WEBPACK_IMPORTED_MODULE_4__["SvgService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SvgTimeChartComponent);
    return SvgTimeChartComponent;
}());



/***/ }),

/***/ "./src/app/svg.service.ts":
/*!********************************!*\
  !*** ./src/app/svg.service.ts ***!
  \********************************/
/*! exports provided: SvgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgService", function() { return SvgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_range_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-range.model */ "./src/app/time-range.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for SVG and UI of charts
 */
var SvgService = /** @class */ (function () {
    function SvgService() {
        this.svgMargin = 40;
        this.svgWidth = 1728;
        this.svgHeight = 400;
        this.rangeHeightNormal = 30; // height normal of range zone
        this.rangeHeightHigh = 40; // height high of range zone
        this.initSizes();
    }
    /**
     * Generate sizes
     * @param {number} svgWidth
     */
    SvgService.prototype.initSizes = function (svgWidth) {
        if (svgWidth) {
            this.svgWidth = svgWidth;
        }
        this.svgWidthFull = this.svgWidth + this.svgMargin * 2;
        this.svgHourWidth = Math.round(this.svgWidth / 24);
        this.svgHalfWidth = Math.round(this.svgHourWidth / 2);
        this.svgQuarterWidth = Math.round(this.svgHourWidth / 4);
        this.svgHeightFull = this.svgHeight + this.svgMargin * 2;
    };
    /**
     * Handle click event
     * @param {ElementRef} svg
     * @param {ElementRef} png
     */
    SvgService.prototype.downloadImageStart = function (svg, png) {
        var data = new XMLSerializer().serializeToString(svg.nativeElement);
        data = encodeURIComponent(data);
        png.nativeElement.src = 'data:image/svg+xml,' + data;
    };
    /**
     * Handle callback from loading image
     * @param {ElementRef} canvas
     * @param {ElementRef} png
     * @param {string} title
     */
    SvgService.prototype.downloadImageFinal = function (canvas, png, title) {
        // add img
        canvas.nativeElement
            .getContext('2d')
            .drawImage(png.nativeElement, 0, 0, this.svgWidthFull, this.svgHeightFull, 0, 0, this.svgWidthFull, this.svgHeightFull);
        // download
        var link = document.createElement('a');
        link.download = title + ".png";
        link.href = canvas.nativeElement.toDataURL();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    /**
     * Get height of range
     * @param {TimeRangeModel} timeRange
     * @return {number}
     */
    SvgService.prototype.rangeHeight = function (timeRange) {
        return timeRange.height ? this.rangeHeightHigh : this.rangeHeightNormal;
    };
    /**
     * Check range position
     * @param {TimeRangeModel} timeRange
     * @return {number}
     */
    SvgService.prototype.rangeX = function (timeRange) {
        var x = this.svgMargin + timeRange.hourStart * this.svgHourWidth;
        switch (timeRange.minutesStart) {
            case 45:
                x += this.svgQuarterWidth * 3;
                break;
            case 30:
                x += this.svgQuarterWidth * 2;
                break;
            case 15:
                x += this.svgQuarterWidth;
                break;
        }
        return x;
    };
    /**
     * Get range width
     * @param {TimeRangeModel} timeRange
     * @return {number}
     */
    SvgService.prototype.rangeWidth = function (timeRange) {
        var hourStart = timeRange.hourStart;
        var hourEnd = timeRange.hourEnd;
        if (hourStart > hourEnd) {
            hourStart = 24 - hourStart;
        }
        var quarters = (hourEnd * 4 + timeRange.minutesEnd / 15) - (hourStart * 4 + timeRange.minutesStart / 15);
        return Math.abs(quarters * this.svgQuarterWidth);
    };
    /**
     * Get color of range
     * @param {TimeRangeModel} timeRange
     * @param {number} opacity
     * @return {string}
     */
    SvgService.prototype.rangeColor = function (timeRange, opacity) {
        if (opacity === void 0) { opacity = 0.8; }
        switch (timeRange.kind) {
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].blue:
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].sleep:
                return "rgba(60, 160, 200, " + opacity + ")";
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red:
                return "rgba(255, 75, 140, " + opacity + ")";
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].green:
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].work:
                return "rgba(0, 200, 0, " + opacity + ")";
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].yellow:
                if (opacity === 1) {
                    return "rgba(240, 180, 30, 1)";
                }
                return "rgba(255, 230, 50, " + opacity + ")";
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title:
                if (opacity === 1) {
                    return "rgba(0, 0, 0, 1)";
                }
                if (timeRange.background === 'green') {
                    return "rgba(230, 250, 230, " + opacity + ")";
                }
                if (timeRange.background === 'transparent') {
                    return "rgba(255, 255, 255, " + opacity + ")";
                }
                return "rgba(230, 230, 230, " + opacity + ")";
            case _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].background:
                if (opacity === 1) {
                    return "rgba(0, 0, 0, 1)";
                }
                return "rgba(230, 230, 230, " + opacity + ")";
            default:
                return "rgba(230, 230, 230, " + opacity + ")";
        }
    };
    /**
     * Get Title position
     * @param {TimeRangeModel} timeRange
     * @return {number}
     */
    SvgService.prototype.rangeTitleX = function (timeRange) {
        return this.rangeX(timeRange) + Math.round(this.rangeWidth(timeRange) / 2) + 4;
    };
    /**
     * Get title position
     * @param {TimeRangeModel} timeRange
     * @return {number}
     */
    SvgService.prototype.rangeTitleY = function (timeRange) {
        return timeRange.height === 2 ? 75 : 290;
    };
    SvgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SvgService);
    return SvgService;
}());



/***/ }),

/***/ "./src/app/time-range.model.ts":
/*!*************************************!*\
  !*** ./src/app/time-range.model.ts ***!
  \*************************************/
/*! exports provided: TIME_RANGE_KIND, TimeRangeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_RANGE_KIND", function() { return TIME_RANGE_KIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRangeModel", function() { return TimeRangeModel; });
/**
 * Kinds for TimeRange
 */
var TIME_RANGE_KIND = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    title: 'title',
    background: 'background',
    work: 'work',
    sleep: 'sleep'
};
/**
 * Default value
 */
var DEFAULT_TIME_RANGE = {
    start: '00:00',
    end: '24:00',
    kind: TIME_RANGE_KIND.blue,
    title: 'New Range',
    height: 0
};
/**
 * Main Model
 */
var TimeRangeModel = /** @class */ (function () {
    function TimeRangeModel(data) {
        if (data === void 0) { data = DEFAULT_TIME_RANGE; }
        this.kind = data.kind;
        this.setStart(data.start);
        this.setEnd(data.end);
        this.title = data.title;
        this.height = +data.height;
        this.background = data.background;
    }
    TimeRangeModel.prototype.setStart = function (start) {
        if (start === void 0) { start = '0:0'; }
        this.start = start;
        var startTime = start.split(':');
        this._hourStart = +startTime[0];
        this._minutesStart = +startTime[1];
    };
    TimeRangeModel.prototype.setEnd = function (end) {
        if (end === void 0) { end = '24:00'; }
        this.end = end;
        var endTime = end.split(':');
        this._hourEnd = +endTime[0];
        this._minutesEnd = +endTime[1];
    };
    Object.defineProperty(TimeRangeModel.prototype, "hourStart", {
        get: function () {
            return this._hourStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRangeModel.prototype, "minutesStart", {
        get: function () {
            return this._minutesStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRangeModel.prototype, "hourEnd", {
        get: function () {
            return this._hourEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRangeModel.prototype, "minutesEnd", {
        get: function () {
            return this._minutesEnd;
        },
        enumerable: true,
        configurable: true
    });
    return TimeRangeModel;
}());



/***/ }),

/***/ "./src/app/time-range.service.ts":
/*!***************************************!*\
  !*** ./src/app/time-range.service.ts ***!
  \***************************************/
/*! exports provided: TimeRangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRangeService", function() { return TimeRangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_range_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-range.model */ "./src/app/time-range.model.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service for TimeRanges
 */
var TimeRangeService = /** @class */ (function () {
    function TimeRangeService(http) {
        this.http = http;
    }
    /**
     * Get init data from JSON
     * @return {Promise<TimeRangeModel[]>}
     */
    TimeRangeService.prototype.getInitRegularSchedule = function () {
        return this.http.get('./assets/regular-schedule.json')
            .toPromise()
            .then(function (res) {
            var result = res.json().map(function (obj) { return new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"](obj); });
            return result;
        });
    };
    /**
     * Get init data from JSON (Optomization)
     * @return {Promise<TimeRangeModel[]>}
     */
    TimeRangeService.prototype.getInitOptimizedSchedule = function () {
        return this.http.get('./assets/optimized-schedule.json')
            .toPromise()
            .then(function (res) {
            var result = res.json().map(function (obj) { return new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"](obj); });
            return result;
        });
    };
    /**
     * Create New Schedule
     * @param formData
     * @return {TimeRangeModel[]}
     */
    TimeRangeService.prototype.createSchedule = function (formData) {
        var result = [];
        // Sleep
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.sleep.start.hour + ":" + formData.sleep.start.minutes,
            end: formData.sleep.end.hour + ":" + formData.sleep.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].sleep,
            title: 'Sleep',
            height: 0
        }));
        // Wake up
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.sleep.end.hour + ":" + formData.sleep.end.minutes,
            end: formData.sleep.end.hour + ":" + formData.sleep.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].sleep,
            title: 'Wake up',
            height: 2
        }));
        // Fall asleep
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.sleep.start.hour + ":" + formData.sleep.start.minutes,
            end: formData.sleep.start.hour + ":" + formData.sleep.start.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].sleep,
            title: 'Fall asleep',
            height: 2
        }));
        // Heavy traffic on the way to work
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.trafficToWork.start.hour + ":" + formData.trafficToWork.start.minutes,
            end: formData.trafficToWork.end.hour + ":" + formData.trafficToWork.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].background,
            title: 'Heavy traffic on the way to work',
            height: 0
        }));
        // Heavy traffic on the way to home
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.trafficToHome.start.hour + ":" + formData.trafficToHome.start.minutes,
            end: formData.trafficToHome.end.hour + ":" + formData.trafficToHome.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].background,
            title: 'Heavy traffic on the way to home',
            height: 0
        }));
        // Way to work
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.wayToWork.start.hour + ":" + formData.wayToWork.start.minutes,
            end: formData.wayToWork.end.hour + ":" + formData.wayToWork.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red,
            title: '',
            height: 0
        }));
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.wayToWork.start.hour + ":" + formData.wayToWork.start.minutes,
            end: formData.wayToWork.end.hour + ":" + formData.wayToWork.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title,
            background: 'transparent',
            title: 'Transport',
            height: 0
        }));
        // Way to home
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.wayToHome.start.hour + ":" + formData.wayToHome.start.minutes,
            end: formData.wayToHome.end.hour + ":" + formData.wayToHome.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red,
            title: '',
            height: 0
        }));
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.wayToHome.start.hour + ":" + formData.wayToHome.start.minutes,
            end: formData.wayToHome.end.hour + ":" + formData.wayToHome.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title,
            background: 'transparent',
            title: 'Transport',
            height: 0
        }));
        // Work Starts
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.work.start.hour + ":" + formData.work.start.minutes,
            end: formData.work.start.hour + ":" + formData.work.start.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red,
            title: 'Work Starts',
            height: 2
        }));
        // Work Ends
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.work.end.hour + ":" + formData.work.end.minutes,
            end: formData.work.end.hour + ":" + formData.work.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red,
            title: 'Work Ends',
            height: 2
        }));
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.work.start.hour + ":" + formData.work.start.minutes,
            end: formData.work.end.hour + ":" + formData.work.end.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title,
            background: 'green',
            title: 'Activity at work',
            height: 0
        }));
        this._addRange(result, new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"]({
            start: formData.wayToHome.end.hour + ":" + formData.wayToHome.end.minutes,
            end: formData.sleep.start.hour + ":" + formData.sleep.start.minutes,
            kind: _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title,
            background: 'green',
            title: 'Activity at home',
            height: 0
        }));
        // Work Flow
        // this._addRange(result, new TimeRangeModel({
        //   start: `${formData.work.start.hour}:${formData.work.start.minutes}`,
        //   end: `${formData.work.end.hour}:${formData.work.end.minutes}`,
        //   kind: TIME_RANGE_KIND.work,
        //   title: 'Work Flow',
        //   height: 0
        // }));
        return result;
    };
    /**
     * Delete range from the list
     * @param {TimeRangeModel[]} ranges
     * @param {TimeRangeModel} timeRange
     */
    TimeRangeService.prototype.deleteRange = function (ranges, timeRange) {
        var index = ranges.findIndex(function (range) { return range === timeRange; });
        ranges.splice(index, 1);
    };
    /**
     * Edit range properties
     * @param {TimeRangeModel} timeRange
     * @param {FormGroup} form
     */
    TimeRangeService.prototype.editTimeRange = function (timeRange, form) {
        timeRange.title = form.controls['title'].value;
        timeRange.setStart(form.controls['startHour'].value + ":" + form.controls['startMinutes'].value);
        timeRange.setEnd(form.controls['endHour'].value + ":" + form.controls['endMinutes'].value);
        timeRange.kind = form.controls['kind'].value;
        timeRange.height = form.controls['height'].value;
    };
    /**
     * Add range to the list
     * @param {TimeRangeModel[]} ranges
     * @param {TimeRangeModel} timeRange
     */
    TimeRangeService.prototype.addRange = function (ranges, timeRange) {
        ranges.push(timeRange);
    };
    /**
     * Get copy of the list
     * @param {TimeRangeModel[]} ranges
     * @return {TimeRangeModel[]}
     */
    TimeRangeService.prototype.copyRange = function (ranges) {
        return [].concat(ranges);
    };
    /**
     * Filtering list by range kind
     * @param {TimeRangeModel[]} ranges
     * @return {TimeRangeModel[]}
     */
    TimeRangeService.prototype.generalRangesFiler = function (ranges) {
        return ranges.filter(function (timeRange) { return [
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].work,
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].sleep,
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].red,
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].green,
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].yellow,
            _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].blue,
        ].indexOf(timeRange.kind) !== -1; });
    };
    /**
     * Filtering list by title range kind
     * @param {TimeRangeModel[]} ranges
     * @return {TimeRangeModel[]}
     */
    TimeRangeService.prototype.titleRangesFiler = function (ranges) {
        return ranges.filter(function (timeRange) { return _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].title === timeRange.kind; });
    };
    /**
     * Filtering list by background range kind
     * @param {TimeRangeModel[]} ranges
     * @return {TimeRangeModel[]}
     */
    TimeRangeService.prototype.backgroundRangesFiler = function (ranges) {
        return ranges.filter(function (timeRange) { return _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TIME_RANGE_KIND"].background === timeRange.kind; });
    };
    /*
    Files
     */
    /**
     * Ganarate and download JSON from the list
     * @param {TimeRangeModel[]} timeRanges
     * @param {string} title
     */
    TimeRangeService.prototype.downloadData = function (timeRanges, title) {
        var link = document.createElement('a');
        link.download = title + ".json";
        link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(timeRanges));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    /**
     * Uploading and parse JSON file
     * @param {File} file
     * @return {Promise<any>}
     */
    TimeRangeService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var fr = new FileReader();
            fr.onload = function (e) {
                try {
                    var result = JSON.parse(e.target.result);
                    if (!result || !result.length) {
                        return [];
                    }
                    resolve(result.map(function (obj) { return new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"](obj); }));
                }
                catch (e) {
                    console.log('Error: Parsing JSON');
                    reject(e);
                }
            };
            fr.readAsText(file);
        });
    };
    /**
     * Get duration of TimeRange
     * @param {TimeRangeModel} range
     * @return {string}
     */
    TimeRangeService.prototype.durationRange = function (range) {
        return this.duration(range.hourStart, range.minutesStart, range.hourEnd, range.minutesEnd);
    };
    /**
     * Get duration between times
     * @param {number} startH
     * @param {number} startM
     * @param {number} endH
     * @param {number} endM
     * @return {string}
     */
    TimeRangeService.prototype.duration = function (startH, startM, endH, endM) {
        var _startM = startH * 60 + startM;
        var _endM = endH * 60 + endM;
        var _resM = _endM - _startM;
        if (_resM <= 0) {
            _resM += 24 * 60;
        }
        var resH = Math.floor(_resM / 60);
        var resM = _resM % 60;
        if (resH === 24) {
            return '';
        }
        if (resH === 0) {
            return resM + "m";
        }
        if (resM === 0) {
            return resH + "h";
        }
        return resH + "h " + resM + "m";
    };
    TimeRangeService.prototype.hours = function (length) {
        if (length === void 0) { length = 24; }
        return Array.from(Array(length).keys());
    };
    /*
    Private
     */
    /**
     * Add range to the list
     * @param {TimeRangeModel[]} ranges
     * @param {TimeRangeModel} timeRange
     * @private
     */
    TimeRangeService.prototype._addRange = function (ranges, timeRange) {
        if (timeRange.hourEnd < timeRange.hourStart) {
            var timeRangeBefore24 = new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"](timeRange);
            timeRangeBefore24.setEnd('24:00');
            ranges.push(timeRangeBefore24);
            var timeRangeAfter24 = new _time_range_model__WEBPACK_IMPORTED_MODULE_1__["TimeRangeModel"](timeRange);
            timeRangeAfter24.setStart('00:00');
            ranges.push(timeRangeAfter24);
        }
        else {
            ranges.push(timeRange);
        }
    };
    TimeRangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TimeRangeService);
    return TimeRangeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/temich/Projects/devchallenge-2018-schedule/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map