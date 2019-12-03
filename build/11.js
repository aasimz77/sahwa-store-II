webpackJsonp([11],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thank_you__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThanksPageModule = /** @class */ (function () {
    function ThanksPageModule() {
    }
    ThanksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thank_you__["a" /* ThanksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thank_you__["a" /* ThanksPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
        })
    ], ThanksPageModule);
    return ThanksPageModule;
}());

//# sourceMappingURL=thank-you.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThanksPage = /** @class */ (function () {
    function ThanksPage(navCtrl, navParams, wooProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
    }
    ThanksPage.prototype.ionViewDidLoad = function () {
        this.order_id = this.navParams.get('order_id');
        console.log('order id: ' + this.order_id);
        this.title = (this.navParams.get('title') ? this.navParams.get('title') : "Your Order");
        if (this.order_id)
            this.getOrder();
    };
    ThanksPage.prototype.getOrder = function () {
        var _this = this;
        this.wooProvider.get('orders/' + this.order_id, 'nopaging').then(function (response) {
            console.log(response);
            _this.order = response;
        });
    };
    ThanksPage.prototype.thanksContinue = function () {
        this.navCtrl.pop();
    };
    ThanksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thank-you',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/thank-you/thank-you.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<ion-buttons start>\n      <button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n          <ion-icon name="arrow-forward"></ion-icon>\n          {{\'Back\' | translate }}\n      </button>\n\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ title | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div *ngIf="order">\n		<h2>{{ \'Your Order\' | translate }}</h2>\n\n		<ion-list>\n\n			<ion-item *ngFor="let item of order.line_items">\n				<p class="item-name">{{item.name}}</p>\n				<p class="item-total">{{item.total}}</p>\n			</ion-item>\n			<ion-item><strong>{{ \'Total:\' | translate }} {{order.total}}</strong></ion-item>\n			<ion-item><p>{{ \'Status:\' | translate }} {{order.status}}</p></ion-item>\n		</ion-list>\n\n	</div>\n\n	<button ion-button block (tap)="thanksContinue()">{{ \'Continue shopping\' | translate }}</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/thank-you/thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */]])
    ], ThanksPage);
    return ThanksPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ })

});
//# sourceMappingURL=11.js.map