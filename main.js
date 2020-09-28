(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robbertwolfs/git/bank-delen/digital-pdf-export-poc/src/main.ts */"zUnb");


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
/* harmony import */ var _delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delen/bd-donut-chart */ "Tjhh");



class AppComponent {
    constructor() {
        this.data = {
            'inner': [],
            'outer': [{
                    'id': 'OBLI',
                    'name': 'Obligaties',
                    'value': 387570.8,
                    'percentage': 39.66
                },
                {
                    'id': 'STOCK',
                    'name': 'Aandelen',
                    'value': 0,
                    'percentage': 0
                },
                {
                    'id': 'HYBRID',
                    'name': 'Hybriden',
                    'value': 194034.61,
                    'percentage': 19.86
                },
                {
                    'id': 'THERA',
                    'name': 'Thesaurie',
                    'value': 75165.46,
                    'percentage': 7.69
                },
                {
                    'id': 'ESTATE',
                    'name': 'Vastgoed',
                    'value': 6499.12,
                    'percentage': 0.67
                },
                {
                    'id': 'DIAMOND',
                    'name': 'Edelmetalen',
                    'value': 1739.66,
                    'percentage': 0.18
                },
                {
                    'id': 'DER',
                    'name': 'Derivaten',
                    'value': 753.18,
                    'percentage': 0.08
                }
            ]
        };
        this.config = {
            'hideTitle': false,
            'defaultTitle': 'Default title',
            'defaultSubtitle': 'Default subtitle',
            'deselectOnHoverOut': false,
            'subtitleFormatter': function (point) {
                return point.percentage.toFixed(2) + ' %';
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 153, vars: 2, consts: [[1, "page", "u-flex", "u-grid--h-space-around", "u-grid--v-center"], [1, "u-align--center"], ["src", "https://lh3.googleusercontent.com/proxy/SQPTbL4KwVx--cOrO5QlHEqrkJL89_faSzbiqbkNheThLccRIftYCXxfAjI7FbAm3lZ1QVbIclU-VfhhJ1HEjhuOU16szz5hjZD2dTafLfDdsVqeVbEiB0_IAJyIQWP-J4M8bPKidz8iZJ29HREEfao4", 1, "u-mb"], [1, "u-mb--s"], ["src", "https://www.spaargids.be/sparen/images/logos/delen.png"], [1, "page", "page--dark", "u-grid", "u-grid--v-center", "u-grid--h-center"], [1, "u-grid", "u-grid--padded", "u-8-12", "index-table"], [1, "index-table__row", "u-grid__cell", "u-12-12"], [1, "page"], [1, "page-break"], [1, "section"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 66 66"], ["fill", "none", "fill-rule", "evenodd", "stroke-width", "15", "transform", "translate(13 13)"], ["stroke-dasharray", "157 157", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(180 20.217 20.217)", 1, "demo-mifid__outer-circle"], ["stroke-dasharray", "21 137", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(-132 20.217 20.217)", 1, "demo-mifid__inner-circle"], ["stroke-dasharray", "39 121", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(-90 20.217 20.217)", 1, "demo-mifid__inner-circle"], ["stroke-dasharray", "47 95", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(-72 20.217 20.217)", 1, "demo-mifid__inner-circle"], ["stroke-dasharray", "47 78", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(-72 20.217 20.217)", 1, "demo-mifid__inner-circle"], ["stroke-dasharray", "51 55", "d", "M20.2169115,45.2169115 C34.0240303,45.2169115 45.2169115,34.0240303 45.2169115,20.2169115 C45.2169115,6.40979277 34.0240303,-4.78308848 20.2169115,-4.78308848 C6.40979277,-4.78308848 -4.78308848,6.40979277 -4.78308848,20.2169115 C-4.78308848,34.0240303 6.40979277,45.2169115 20.2169115,45.2169115 Z", "transform", "rotate(-62 20.217 20.217)", 1, "demo-mifid__inner-circle"], [1, "u-flex", "u-grid--padded"], [1, "u-12-12", "u-grid", "u-grid__cell"], [1, "u-9-12"], [1, "u-text--label"], [1, "u-text--value"], [1, "u-3-12"], [3, "data", "config"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Simulatie van uw vermogen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subtitle?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1 Introductie simulatietool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2 Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "8 Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "8 Subtopic subtopic subtopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "14 Subtopic subtopic subtopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "16 Subtopic subtopic subtopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "18 Subtopic subtopic subtopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "20 Subtopic subtopic subtopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "22 Topic topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24 Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Introductie simulatietool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Simulatie voor Auguste Rodin (rechtspersoon) voor het te investeren bedrag van XXX,XXX euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Opgemaakt op 17 september 2020 door Muriel Collard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Heeft u vragen over deze simulatie? Contacteer uw beheerder via +32 0 000 00 00. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Discretionair vermogensbeheer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " De missie van Delen Private Bank is fundamenteel duurzaam van aard: uw vermogen beschermen over de generaties heen. Gemoedsrust cre\u00EBren op lange termijn is de rode draad doorheen onze kerntaken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Met discretionair vermogensbeheer legt u het beheer van uw vermogen in de handen van experten die de financi\u00EBle en economische actualiteit van nabij opvolgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Wat mag u verwachten bij discretionair beheer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "U belegt uw vermogen in alle eenvoud en transparantie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Onze specialisten zetten uw vermogen slim aan het werk.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "U koppelt een mooi langetermijnrendement aan duurzame beleggingen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Onze experten speuren naar investeringskansen op lange termijn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "U volgt uw portefeuille op in de Delen app en Delen OnLine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Investeringsprofielen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Er zijn acht verschillende investeringsprofielen met elk ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Introductie simulatietool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Simulatie voor Auguste Rodin (rechtspersoon) voor het te investeren bedrag van XXX,XXX euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Opgemaakt op 17 september 2020 door Muriel Collard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Heeft u vragen over deze simulatie? Contacteer uw beheerder via +32 0 000 00 00. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Discretionair vermogensbeheer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " De missie van Delen Private Bank is fundamenteel duurzaam van aard: uw vermogen beschermen over de generaties heen. Gemoedsrust cre\u00EBren op lange termijn is de rode draad doorheen onze kerntaken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Met discretionair vermogensbeheer legt u het beheer van uw vermogen in de handen van experten die de financi\u00EBle en economische actualiteit van nabij opvolgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Wat mag u verwachten bij discretionair beheer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "U belegt uw vermogen in alle eenvoud en transparantie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Onze specialisten zetten uw vermogen slim aan het werk.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "U koppelt een mooi langetermijnrendement aan duurzame beleggingen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Onze experten speuren naar investeringskansen op lange termijn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "U volgt uw portefeuille op in de Delen app en Delen OnLine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Investeringsprofielen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Er zijn acht verschillende investeringsprofielen met elk ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Uw investeringsprofiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " U hebt gekozen voor het ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " investeringsprofiel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "De portefeuille bestaat vooral uit vastrentende effecten (zoals obligaties), maar bevat ook een beperkte positie in aandelen. De portefeuille bestaat vooral uit vastrentende effecten (zoals obligaties), maar bevat ook een beperkte positie in aandelen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Het aandelenrisico bedraagt maximaal 45% van de portefeuille. Ook hybride beleggingen (zoals eeuwigdurende obligaties), liquiditeiten en een beperkt aantal andere beleggingsproducten zoals vastgoedbeleggingen, edelmetalen en derivaten zijn mogelijk. De portefeuille kan ook opgebouwd zijn uit een belegging in een of meerdere beleggingsfondsen met deze kenmerken. De positie in aandelen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "kan leiden tot koersschommelingen. Toch zorgt de obligatiecomponent voor bescherming.kan leiden tot koersschommelingen. Toch zorgt de obligatiecomponent voor bescherming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Strategisch percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Aandelenrisico (30%-45%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "37,5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Laatste 10 jaar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Jaarlijks rendement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "3,3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Na 10 jaar werd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "100 EUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "138 EUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "bd-donut-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("config", ctx.config);
    } }, directives: [_delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_1__["BdDonutChartComponent"]], styles: ["[_nghost-%COMP%] {\n    min-height: 100%;\n    display: block;\n  }\n\n  .page[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    page-break-after: always;\n    min-height: 100vh;\n    width: 100vw;\n    padding: 50px;\n  }\n\n  .page[_ngcontent-%COMP%]:last-child {\n    page-break-after: auto;\n  }\n\n  .page--dark[_ngcontent-%COMP%] {\n    background-color: #28648a;\n  }\n\n  .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   .index-table__row[_ngcontent-%COMP%] {\n    border-bottom: 1px white solid;\n    padding: 20px 0;\n  }\n\n  .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:last-child, .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n\n  .page--dark[_ngcontent-%COMP%]   .index-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n\n  .page-break[_ngcontent-%COMP%] {\n  page-break-before: always;\n  margin-top: 50px;\n}\n\n  .section[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #eee;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 15px;\n}\n\n  .section[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n  .section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n}\n\n  .demo-mifid__outer-circle[_ngcontent-%COMP%] {\n    stroke: #28648a;\n}\n\n  .demo-mifid__inner-circle[_ngcontent-%COMP%] {\n    stroke: #b30a43;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztFQUVBO0VBQ0UsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBRUE7SUFDSSxlQUFlO0FBQ25COztFQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICA6aG9zdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5wYWdlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gIC5wYWdlOmxhc3QtY2hpbGQge1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XG4gIH1cblxuICAucGFnZS0tZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjQ4YTtcbiAgfVxuXG4gIC5wYWdlLS1kYXJrIC5pbmRleC10YWJsZSAuaW5kZXgtdGFibGVfX3JvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlIHNvbGlkO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuXG4gIC5wYWdlLS1kYXJrIC5pbmRleC10YWJsZSBoMyxcbiAgLnBhZ2UtLWRhcmsgLmluZGV4LXRhYmxlIGg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAucGFnZS0tZGFyayAuaW5kZXgtdGFibGUgaDM6bGFzdC1jaGlsZCxcbiAgLnBhZ2UtLWRhcmsgLmluZGV4LXRhYmxlIGg0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAucGFnZS0tZGFyayAuaW5kZXgtdGFibGUgaDM6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuXG4ucGFnZS1icmVhayB7XG4gIHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zZWN0aW9uICoge1xuICBmbGV4LWJhc2lzOiA1MCU7XG59XG5cbi5zZWN0aW9uIHN2ZyB7XG4gIGZsZXgtYmFzaXM6IDMwJTtcbn1cblxuLmRlbW8tbWlmaWRfX291dGVyLWNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjMjg2NDhhO1xufVxuXG4uZGVtby1taWZpZF9faW5uZXItY2lyY2xlIHtcbiAgICBzdHJva2U6ICNiMzBhNDM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delen/bd-donut-chart */ "Tjhh");
/* harmony import */ var _delen_bd_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delen/bd-utilities */ "+Pdv");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _delen_bd_utilities__WEBPACK_IMPORTED_MODULE_3__["BdUtilitiesModule"],
            _delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_2__["BdDonutChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _delen_bd_utilities__WEBPACK_IMPORTED_MODULE_3__["BdUtilitiesModule"],
        _delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_2__["BdDonutChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _delen_bd_utilities__WEBPACK_IMPORTED_MODULE_3__["BdUtilitiesModule"],
                    _delen_bd_donut_chart__WEBPACK_IMPORTED_MODULE_2__["BdDonutChartModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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