webpackJsonp([0],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageModule", function() { return CustomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_page__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ap_list_ap_list_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ap_slider_ap_slider_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_woo_list_component_woo_list_component_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_woo_cart_woo_cart_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_woo_account_woo_account_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_woo_slider_woo_slider_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_star_rating_star_rating_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ap_form_ap_form_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ap_iap_form_ap_iap_form_module__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CustomPageModule = /** @class */ (function () {
    function CustomPageModule() {
    }
    CustomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__["DynamicComponentModule"],
                __WEBPACK_IMPORTED_MODULE_5__components_ap_list_ap_list_module__["a" /* ApListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_ap_slider_ap_slider_module__["a" /* ApSliderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_woo_list_component_woo_list_component_module__["a" /* WooListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_woo_slider_woo_slider_module__["a" /* WooSliderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_woo_cart_woo_cart_module__["a" /* WooCartComponentModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_woo_account_woo_account_module__["a" /* WooAccountComponentModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_ap_form_ap_form_module__["a" /* ApFormModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_ap_iap_form_ap_iap_form_module__["a" /* ApIapFormModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ]
        })
    ], CustomPageModule);
    return CustomPageModule;
}());

//# sourceMappingURL=custom-page.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__star_rating__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StarRatingComponentModule = /** @class */ (function () {
    function StarRatingComponentModule() {
    }
    StarRatingComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__star_rating__["a" /* StarRatingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__star_rating__["a" /* StarRatingComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__star_rating__["a" /* StarRatingComponent */]
            ]
        })
    ], StarRatingComponentModule);
    return StarRatingComponentModule;
}());

//# sourceMappingURL=star-rating.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        console.log(this.rating);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarRatingComponent.prototype, "rating", void 0);
    StarRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'star-rating',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/star-rating/star-rating.html"*/'<div class="star-rating-wrap" *ngIf="rating && rating != \'0.00\'">\n    <div [ngClass]="rating >= 1 ? \'star-on\' : \'star-off\'">\n      <svg viewBox="5 0 30 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >\n        <path d="M17.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" />\n      </svg>\n    </div>\n    <div [ngClass]="rating >= 2 ? \'star-on\' : \'star-off\'">\n      <svg viewBox="5 0 30 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >\n        <path d="M17.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" />\n      </svg>\n    </div>\n    <div [ngClass]="rating >= 3 ? \'star-on\' : \'star-off\'">\n      <svg viewBox="5 0 30 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >\n        <path d="M17.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" />\n      </svg>\n    </div>\n    <div [ngClass]="rating >= 4 ? \'star-on\' : \'star-off\'">\n      <svg viewBox="5 0 30 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >\n        <path d="M17.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" />\n      </svg>\n    </div>\n    <div [ngClass]="rating >= 5 ? \'star-on\' : \'star-off\'">\n      <svg viewBox="5 0 30 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >\n        <path d="M17.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" />\n      </svg>\n    </div>\n</div>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/star-rating/star-rating.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());

//# sourceMappingURL=star-rating.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooSliderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__woo_slider__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WooSliderComponentModule = /** @class */ (function () {
    function WooSliderComponentModule() {
    }
    WooSliderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__woo_slider__["a" /* WooSliderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__woo_slider__["a" /* WooSliderComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__woo_slider__["a" /* WooSliderComponent */]
            ]
        })
    ], WooSliderComponentModule);
    return WooSliderComponentModule;
}());

//# sourceMappingURL=woo-slider.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * For reference: https://github.com/ionic-team/ionic/blob/master/core/src/components/slides/slides.tsx
 */
var WooSliderComponent = /** @class */ (function () {
    function WooSliderComponent(nav, navParams, wooProvider, storage, platform, toastCtrl, viewCtrl, network, translate, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.slidesPerView = "2";
        this.loading = false;
        this.categorySlider = false;
    }
    WooSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.route)
            return;
        if (this.route.indexOf('categories') >= 0) {
            this.categorySlider = true;
        }
        this.networkState = this.network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            // if offline, get posts from storage
            this.getStoredPosts();
        }
        else {
            this.loadPosts();
        }
        // set options based on input attributes
        if (this.slidesPerView) {
            this.slides.slidesPerView = this.slidesPerView;
        }
        if (this.loop === "true") {
            this.slides.loop = true;
        }
        if (this.freeMode === "true") {
            this.slides.freeMode = true;
        }
        if (this.effect) {
            this.slides.effect = this.effect;
        }
        if (this.paginationType) {
            this.slides.paginationType = this.paginationType;
        }
        if (this.spaceBetween) {
            this.slides.spaceBetween = this.spaceBetween;
        }
        setTimeout(function () {
            _this.cartIconEvent();
        }, 100);
    };
    // this is used to show the cart icon on custom page headers
    WooSliderComponent.prototype.cartIconEvent = function () {
        this.events.publish('show_cart_icon', true);
    };
    // get posts from storage when we are offline
    WooSliderComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_slides').then(function (posts) {
            if (posts) {
                _this.items = posts;
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    WooSliderComponent.prototype.loadPosts = function () {
        var _this = this;
        this.loading = true;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.wooProvider.get(this.route, '1').then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            console.log(items);
            _this.storage.set(_this.route.substr(-10, 10) + '_slides', items);
            // this is not working
            if (_this.pager === "false") {
                _this.slides.pager = false;
            }
            else {
                _this.slides.pager = true;
            }
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            console.error('Error getting posts', err);
            if (err.error && err.error.message) {
                _this.presentToast(err.error.message);
            }
            else {
                _this.translate.get('Error getting posts.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    WooSliderComponent.prototype.loadDetail = function (item) {
        if (this.preventClicks === "true")
            return;
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        if (item.type) {
            this.nav.push('WooDetail', {
                item: item
            }, opt);
        }
        else if (this.categorySlider) {
            // this is a list of categories, so we need to show category sub-items next
            this.nav.push('WooList', {
                route: 'products/categories/?parent=' + item.id
            }, opt);
        }
        else {
            this.nav.push('WooList', {
                route: 'products?category=' + item.id
            }, opt);
        }
    };
    WooSliderComponent.prototype.truncateString = function (string) {
        return string.substring(0, 50);
    };
    WooSliderComponent.prototype.getBtnText = function (item) {
        var txt;
        switch (item.type) {
            case "simple":
                txt = "Add to Cart";
                break;
            case "grouped":
                txt = "View Products";
                break;
            case "variable":
                txt = "Select Options";
                break;
            default:
                txt = "View Details";
        }
        return txt;
    };
    WooSliderComponent.prototype.productAction = function (item) {
        switch (item.type) {
            case "simple":
                this.addToCart(item);
                break;
            default:
                this.loadDetail(item);
        }
    };
    WooSliderComponent.prototype.addToCart = function (item) {
        var _this = this;
        this.presentToast(item.name + ' added to cart.');
        item.quantity = 1;
        item.product_id = item.id;
        this.wooProvider.addToCart(item).then(function (data) {
            _this.productAddSuccess(data, item);
        }).catch(function (e) {
            _this.productAddError(e);
            console.warn(e);
        });
    };
    WooSliderComponent.prototype.productAddSuccess = function (data, item) {
        var _this = this;
        this.storage.get('cart_count').then(function (count) {
            if (count) {
                count = parseInt(count) + 1;
            }
            else {
                count = 1;
            }
            _this.storage.set('cart_count', count);
            _this.events.publish('cart_change', count);
        });
    };
    WooSliderComponent.prototype.productAddError = function (e) {
        var msg;
        if (e.error && e.error.message) {
            msg = e.error.message;
        }
        else {
            msg = 'There was a problem, your item was not added to the cart.';
        }
        this.presentToast(msg);
    };
    WooSliderComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */])
    ], WooSliderComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "slidesPerView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "loop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "effect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "paginationType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "preventClicks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "freeMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooSliderComponent.prototype, "spaceBetween", void 0);
    WooSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'woo-slider',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-slider/woo-slider.html"*/'<div class="loading-squares" *ngIf="loading && route">\n <div class="loading-square">\n </div>\n <div class="loading-square" *ngIf="slidesPerView && slidesPerView >= 2">\n </div>\n <div class="loading-square" *ngIf="slidesPerView && slidesPerView >= 3">\n </div>\n <div class="loading-square" *ngIf="slidesPerView && slidesPerView >= 4">\n </div>\n</div>\n\n<ion-slides pager [ngClass]="{ \'category-slider\' : categorySlider }">\n\n	<ion-slide *ngFor="let item of items">\n		<ion-card>\n\n			<div (tap)="loadDetail(item)" class="card-featured-wrap">\n				<div *ngIf="item.images && item.images[0] && item.images[0].src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.images[0].src +\')\'}"></div>\n				<div *ngIf="item.image && item.image.src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.image.src +\')\'}"></div>\n				<div *ngIf="!item.image && !item.images" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(assets/woo-default.png)\'}"></div>\n			</div>\n\n	      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.above_title" [innerHTML]="item.appp.woo_list.above_title"></div>\n\n	      <ion-card-content>\n\n	        <div class="item-content">\n\n	        	<ion-card-title (tap)="loadDetail(item)" *ngIf="item.name">\n		          <h3 [innerHTML]="item.name"></h3>\n		        </ion-card-title>\n\n		        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_title" [innerHTML]="item.appp.woo_list.below_title"></div>\n\n		        <p *ngIf="item.price_html" class="product-price" [innerHTML]="item.price_html"></p>\n\n		        <p *ngIf="!item.price_html && item.price" class="product-price">{{item.price}}</p>\n\n		        <p *ngIf="item.description" (tap)="loadDetail(item)" [innerHTML]="truncateString(item.description)" class="product-description"></p>\n\n		        <button class="product-action" *ngIf="item.type" ion-button block small color="light" (tap)="productAction(item)">{{ getBtnText(item) | translate }}</button>\n\n		    </div>\n\n	      </ion-card-content>\n\n	      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_content" [innerHTML]="item.appp.woo_list.below_content"></div>\n\n	  </ion-card>\n\n	</ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-slider/woo-slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], WooSliderComponent);
    return WooSliderComponent;
}());

//# sourceMappingURL=woo-slider.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(38);
var http_1 = __webpack_require__(12);
var index_1 = __webpack_require__(442);
var Utils_1 = __webpack_require__(445);
var DYNAMIC_SELECTOR = 'DynamicComponent';
var DynamicComponentMetadata = (function () {
    function DynamicComponentMetadata(selector, template) {
        if (selector === void 0) { selector = DYNAMIC_SELECTOR; }
        if (template === void 0) { template = ''; }
        this.selector = selector;
        this.template = template;
    }
    return DynamicComponentMetadata;
}());
exports.DynamicComponentMetadata = DynamicComponentMetadata;
var DynamicComponent = (function () {
    function DynamicComponent(element, viewContainer, compiler, http) {
        this.element = element;
        this.viewContainer = viewContainer;
        this.compiler = compiler;
        this.http = http;
        this.destroyWrapper = false;
    }
    /**
     * @override
     */
    DynamicComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getComponentTypePromise().then(function (module) {
            _this.compiler.compileModuleAndAllComponentsAsync(module)
                .then(function (moduleWithComponentFactories) {
                if (_this.componentInstance) {
                    _this.componentInstance.destroy();
                }
                _this.componentInstance = _this.viewContainer.createComponent(
                // dynamicComponentClass factory is presented here
                moduleWithComponentFactories.componentFactories.find(function (componentFactory) {
                    return componentFactory.selector === DYNAMIC_SELECTOR
                        || componentFactory.componentType === _this.componentType;
                }));
                _this.applyPropertiesToDynamicComponent(_this.componentInstance.instance);
                // Remove wrapper after render the component
                if (_this.destroyWrapper) {
                    var el = _this.element.nativeElement;
                    if (Utils_1.Utils.isPresent(el.parentNode)) {
                        el.parentNode.removeChild(el);
                    }
                }
            });
        });
    };
    DynamicComponent.prototype.getComponentTypePromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (Utils_1.Utils.isPresent(_this.componentTemplate)) {
                resolve(_this.makeComponentModule(_this.componentTemplate));
            }
            else if (Utils_1.Utils.isPresent(_this.componentTemplateUrl)) {
                _this.loadRemoteTemplate(_this.componentTemplateUrl, resolve);
            }
            else {
                resolve(_this.makeComponentModule(null, _this.componentType));
            }
        });
    };
    DynamicComponent.prototype.loadRemoteTemplate = function (url, resolve) {
        var _this = this;
        var requestArgs = { withCredentials: true };
        if (Utils_1.Utils.isPresent(this.componentRemoteTemplateFactory)) {
            requestArgs = this.componentRemoteTemplateFactory.buildRequestOptions();
        }
        this.http.get(url, requestArgs)
            .subscribe(function (response) {
            if (response.status === 301 || response.status === 302) {
                var chainedUrl = response.headers.get('Location');
                console.info('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is:', chainedUrl);
                if (Utils_1.Utils.isPresent(chainedUrl)) {
                    _this.loadRemoteTemplate(chainedUrl, resolve);
                }
                else {
                    console.warn('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is empty. The process of redirect has stopped.');
                }
            }
            else {
                resolve(_this.makeComponentModule(Utils_1.Utils.isPresent(_this.componentRemoteTemplateFactory)
                    ? _this.componentRemoteTemplateFactory.parseResponse(response)
                    : response.text()));
            }
        }, function (response) {
            console.error('[$DynamicComponent][loadRemoteTemplate] Error response:', response);
            resolve(_this.makeComponentModule(''));
        });
    };
    DynamicComponent.prototype.makeComponentModule = function (template, componentType) {
        componentType = this.makeComponent(template, componentType);
        var componentModules = this.componentModules;
        var dynamicComponentModule = (function () {
            function dynamicComponentModule() {
            }
            dynamicComponentModule.decorators = [
                { type: core_1.NgModule, args: [{
                            declarations: [componentType],
                            imports: [common_1.CommonModule].concat(componentModules || [])
                        },] },
            ];
            /** @nocollapse */
            dynamicComponentModule.ctorParameters = [];
            return dynamicComponentModule;
        }());
        return dynamicComponentModule;
    };
    DynamicComponent.prototype.makeComponent = function (template, componentType) {
        var annotationsArray, componentDecorator;
        if (Utils_1.Utils.isPresent(componentType)) {
            annotationsArray = index_1.MetadataHelper.findAnnotationsMetaData(componentType, core_1.Component);
            if (annotationsArray.length) {
                componentDecorator = annotationsArray[0];
                Reflect.set(componentDecorator, 'selector', DYNAMIC_SELECTOR);
            }
        }
        var dynamicComponentClass = (function () {
            function dynamicComponentClass() {
            }
            dynamicComponentClass.decorators = [
                { type: core_1.Component, args: [componentDecorator || { selector: DYNAMIC_SELECTOR, template: template },] },
            ];
            /** @nocollapse */
            dynamicComponentClass.ctorParameters = [];
            return dynamicComponentClass;
        }());
        return dynamicComponentClass;
    };
    DynamicComponent.prototype.applyPropertiesToDynamicComponent = function (instance) {
        var _this = this;
        var metadataHolder = index_1.MetadataHelper.findPropertyMetadata(this, core_1.Input);
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var property = _a[_i];
            if (Reflect.has(metadataHolder, property)) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                Reflect.set(instance, property, Reflect.get(this, property));
            }
        }
        if (Utils_1.Utils.isPresent(this.componentInputData)) {
            var _loop_1 = function(property) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                var propValue = Reflect.get(this_1.componentInputData, property);
                var attributes = {};
                if (!Utils_1.Utils.isFunction(propValue)) {
                    attributes.set = function (v) { return Reflect.set(_this.componentInputData, property, v); };
                }
                attributes.get = function () { return Reflect.get(_this.componentInputData, property); };
                Reflect.defineProperty(instance, property, attributes);
            };
            var this_1 = this;
            for (var property in this.componentInputData) {
                _loop_1(property);
            }
        }
    };
    DynamicComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: DYNAMIC_SELECTOR,
                    template: ''
                },] },
    ];
    /** @nocollapse */
    DynamicComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.Compiler, },
        { type: http_1.Http, },
    ];
    DynamicComponent.propDecorators = {
        'componentType': [{ type: core_1.Input },],
        'componentTemplate': [{ type: core_1.Input },],
        'componentInputData': [{ type: core_1.Input },],
        'componentTemplateUrl': [{ type: core_1.Input },],
        'componentRemoteTemplateFactory': [{ type: core_1.Input },],
        'componentModules': [{ type: core_1.Input },],
    };
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=DynamicComponent.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.PROP_METADATA = 'propMetadata';
exports.ANNOTATIONS_METADATA = 'annotations';
function PropertyAnnotationFactory(annotationMetadata) {
    var Decorator = function (config) {
        return function (target, propertyKey) {
            var meta = Reflect.getOwnMetadata(exports.PROP_METADATA, target.constructor) || {};
            meta[propertyKey] = meta[propertyKey] || [];
            meta[propertyKey].push(Reflect.construct(annotationMetadata, [config]));
            Reflect.defineMetadata(exports.PROP_METADATA, meta, target.constructor);
        };
    };
    var Annotation = Decorator;
    Annotation.annotationMetadata = annotationMetadata;
    return Annotation;
}
exports.PropertyAnnotationFactory = PropertyAnnotationFactory;
//# sourceMappingURL=MetadataFactory.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ap_list__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApListComponentModule = /** @class */ (function () {
    function ApListComponentModule() {
    }
    ApListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */]
            ]
        })
    ], ApListComponentModule);
    return ApListComponentModule;
}());

//# sourceMappingURL=ap-list.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApSliderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ap_slider__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApSliderComponentModule = /** @class */ (function () {
    function ApSliderComponentModule() {
    }
    ApSliderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */]
            ]
        })
    ], ApSliderComponentModule);
    return ApSliderComponentModule;
}());

//# sourceMappingURL=ap-slider.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__woo_list_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WooListComponentModule = /** @class */ (function () {
    function WooListComponentModule() {
    }
    WooListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__woo_list_component__["a" /* WooListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__woo_list_component__["a" /* WooListComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__woo_list_component__["a" /* WooListComponent */]
            ]
        })
    ], WooListComponentModule);
    return WooListComponentModule;
}());

//# sourceMappingURL=woo-list-component.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCartComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_cart__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_woo_slider_woo_slider_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_star_rating_star_rating_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WooCartComponentModule = /** @class */ (function () {
    function WooCartComponentModule() {
    }
    WooCartComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_cart__["a" /* WooCartComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_cart__["a" /* WooCartComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_woo_slider_woo_slider_module__["a" /* WooSliderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__woo_cart__["a" /* WooCartComponent */]
            ]
        })
    ], WooCartComponentModule);
    return WooCartComponentModule;
}());

//# sourceMappingURL=woo-cart.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooAccountComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_account__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WooAccountComponentModule = /** @class */ (function () {
    function WooAccountComponentModule() {
    }
    WooAccountComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_account__["a" /* WooAccountComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_account__["a" /* WooAccountComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__woo_account__["a" /* WooAccountComponent */]
            ]
        })
    ], WooAccountComponentModule);
    return WooAccountComponentModule;
}());

//# sourceMappingURL=woo-account.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap_form__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApFormModule = /** @class */ (function () {
    function ApFormModule() {
    }
    ApFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ap_form__["a" /* ApForm */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ap_form__["a" /* ApForm */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ap_form__["a" /* ApForm */]
            ]
        })
    ], ApFormModule);
    return ApFormModule;
}());

//# sourceMappingURL=ap-form.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApIapFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap_iap_form__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApIapFormModule = /** @class */ (function () {
    function ApIapFormModule() {
    }
    ApIapFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ap_iap_form__["a" /* ApIapForm */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ap_iap_form__["a" /* ApIapForm */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ap_iap_form__["a" /* ApIapForm */]
            ]
        })
    ], ApIapFormModule);
    return ApIapFormModule;
}());

//# sourceMappingURL=ap-iap-form.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DynamicComponent_1 = __webpack_require__(424);
exports.DynamicComponent = DynamicComponent_1.DynamicComponent;
exports.DynamicComponentMetadata = DynamicComponent_1.DynamicComponentMetadata;
var DynamicComponentModule_1 = __webpack_require__(446);
exports.DynamicComponentModule = DynamicComponentModule_1.DynamicComponentModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MetadataHelper_1 = __webpack_require__(443);
exports.MetadataHelper = MetadataHelper_1.MetadataHelper;
var MetadataFactory_1 = __webpack_require__(425);
exports.PropertyAnnotationFactory = MetadataFactory_1.PropertyAnnotationFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils_1 = __webpack_require__(444);
var MetadataFactory_1 = __webpack_require__(425);
var MetadataHelper = (function () {
    function MetadataHelper() {
    }
    MetadataHelper.findAnnotationsMetaData = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.ANNOTATIONS_METADATA);
    };
    MetadataHelper.findPropertyMetadata = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.PROP_METADATA);
    };
    MetadataHelper.findMetadata = function (target, annotation, metadataName) {
        var annotationsSearch = target.constructor === Function;
        var metadataDefinition = Reflect.getMetadata(metadataName, annotationsSearch ? target : target.constructor);
        if (annotationsSearch) {
            return (metadataDefinition || []);
        }
        else {
            var annotationMetadataInstance_1;
            var annotationMetadataHolder_1 = {};
            if (Utils_1.Utils.isPresent(metadataDefinition)) {
                Reflect.ownKeys(metadataDefinition).forEach(function (propertyKey) {
                    var predicate = function (annotationInstance) {
                        var annotationMetadata = annotation.annotationMetadata;
                        return annotationInstance instanceof annotation // Angular2 annotations support
                            || (Utils_1.Utils.isPresent(annotationMetadata) && annotationInstance instanceof annotationMetadata);
                    };
                    if (annotationMetadataInstance_1 = metadataDefinition[propertyKey].find(predicate)) {
                        Reflect.set(annotationMetadataHolder_1, propertyKey, annotationMetadataInstance_1);
                    }
                });
            }
            return annotationMetadataHolder_1;
        }
    };
    return MetadataHelper;
}());
exports.MetadataHelper = MetadataHelper;
//# sourceMappingURL=MetadataHelper.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DynamicComponent_1 = __webpack_require__(424);
var DynamicComponentModule = (function () {
    function DynamicComponentModule() {
    }
    DynamicComponentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DynamicComponent_1.DynamicComponent
                    ],
                    exports: [
                        DynamicComponent_1.DynamicComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicComponentModule.ctorParameters = [];
    return DynamicComponentModule;
}());
exports.DynamicComponentModule = DynamicComponentModule;
//# sourceMappingURL=DynamicComponentModule.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_header_logo_header_logo__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_posts_posts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menus_menu_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__iframe_iframe__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_language_language_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_streaming_media_streaming_media__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_pdf_pdf__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ap_list_ap_list_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ap_slider_ap_slider_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_woo_list_component_woo_list_component_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_woo_slider_woo_slider_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_woo_cart_woo_cart_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_woo_account_woo_account_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_ap_form_ap_form_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_ap_iap_form_ap_iap_form_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_network_network_status_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























/*
 * Uses dynamic component creation, see https://github.com/apoterenko/angular2-dynamic-component
 */
var DynamicContext = /** @class */ (function () {
    function DynamicContext() {
    }
    DynamicContext.prototype.onChange = function () {
        //console.log(this.value)
    };
    return DynamicContext;
}());
/** Development mode only -- END */
/**
 * Customizable options for our
 * segments, media, language and login modals
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
var CustomPage = /** @class */ (function () {
    function CustomPage(navParams, nav, modalCtrl, renderer, elementRef, viewCtrl, platform, translate, storage, events, toastCtrl, headerLogoService, loginservice, loadingCtrl, postCtrl, globalvars, menuservice, languageservice, networkstatus, zone, analyticsservice, network, wooProvider, streamingMediaPlayer, pdfService) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.translate = translate;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.headerLogoService = headerLogoService;
        this.loginservice = loginservice;
        this.loadingCtrl = loadingCtrl;
        this.postCtrl = postCtrl;
        this.globalvars = globalvars;
        this.menuservice = menuservice;
        this.languageservice = languageservice;
        this.networkstatus = networkstatus;
        this.zone = zone;
        this.analyticsservice = analyticsservice;
        this.network = network;
        this.wooProvider = wooProvider;
        this.streamingMediaPlayer = streamingMediaPlayer;
        this.pdfService = pdfService;
        this.subscriptions = [];
        this.rtlBack = false;
        this.isRTL = false;
        this.extraModules = [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_16__components_ap_list_ap_list_module__["a" /* ApListComponentModule */], __WEBPACK_IMPORTED_MODULE_17__components_ap_slider_ap_slider_module__["a" /* ApSliderComponentModule */], __WEBPACK_IMPORTED_MODULE_18__components_woo_list_component_woo_list_component_module__["a" /* WooListComponentModule */], __WEBPACK_IMPORTED_MODULE_19__components_woo_slider_woo_slider_module__["a" /* WooSliderComponentModule */], __WEBPACK_IMPORTED_MODULE_20__components_woo_cart_woo_cart_module__["a" /* WooCartComponentModule */], __WEBPACK_IMPORTED_MODULE_21__components_woo_account_woo_account_module__["a" /* WooAccountComponentModule */], __WEBPACK_IMPORTED_MODULE_22__components_ap_form_ap_form_module__["a" /* ApFormModule */], __WEBPACK_IMPORTED_MODULE_23__components_ap_iap_form_ap_iap_form_module__["a" /* ApIapFormModule */]];
        this.show_segments = false;
        this.login_modal_open = false;
        this.show_header_logo = false;
        this.page = 1;
        this.use_dynamic = false;
        this.showCartIcon = false;
        this.showSearchIcon = false;
        this.toggleSearch = false;
        /** Development mode only -- START */
        this.inputData = {
            // anything that the template needs access to goes here
            user: this.loginservice.user,
            pages: this.getPages(),
            segments: this.getSegments(),
            platform: this.platform,
            language: this.languageservice.getLanguage(),
            customClasses: this.customClasses,
            customHeaderClasses: this.customHeaderClasses,
            isOffline: this.isOffline,
            isOnline: this.isOnline,
            pushPage: function (page) {
                _this.pushPage(page);
            },
            openPage: function (page) {
                _this.openPage(page);
            },
            back: function () {
                _this.back();
            },
            mediaModal: function (src, img, options) {
                if (img === void 0) { img = null; }
                _this.mediaModal(src, img, options);
            },
            updateData: function () {
                _this.updateData();
            },
            changeRTL: function (event, rtl) {
                _this.changeRTL(event, rtl);
            },
            showSegments: function (options) {
                _this.showSegments(options);
            },
            showLanguages: function (options) {
                _this.showLanguages(options);
            },
            loginModal: function (options) {
                _this.loginModal(options);
            },
            showDownloads: function (options) {
                _this.showDownloads(options);
            }
        };
        this.language = this.languageservice.language;
    }
    CustomPage.prototype.ngOnInit = function () {
        var _this = this;
        this.use_dynamic = this.globalvars.getUseDynamicPageModule();
        // Initial user settings
        this.user = this.loginservice.user;
        this.inputData.user = this.loginservice.user;
        // Updates to user settings
        this.subscriptions.push(this.loginservice.loginStatus().subscribe(function (user) {
            _this.user = user;
            /** Development mode only -- START */
            _this.inputData.user = user;
            /** Development mode only -- END */
        }));
        this.subscriptions.push(this.languageservice.languageStatus().subscribe(function (language) {
            _this.language = language;
        }));
        this.language = this.languageservice.language;
        this.initNetworkStatus();
        this.pagetitle = this.navParams.data.title;
        this.initIsRTL();
        if (this.navParams.data.is_home == true) {
            this.doLogo();
        }
        // kill vids on android
        if (this.platform.is('android')) {
            this.killVideos();
        }
        this.pages = this.getPages(); // not just pages: this is the whole myappp data
        this.menus = {
            side: this.getSideMenu(),
            tabs: this.getTabs()
        };
        this.segments = this.getSegments();
        var slug = this.navParams.data.slug;
        this.slug = slug;
        /** Development mode only -- START */
        // this.templateUrl = 'custom.html'
        this.templateUrl = 'build/' + slug + '.html?' + this.random(1, 999);
        /** Development mode only -- END */
        this.customClasses = 'custom-page page-' + this.slug;
        this.customHeaderClasses = 'header-' + this.slug;
        this.listener();
        this.wooEvents();
    };
    CustomPage.prototype.ionViewWillEnter = function () {
        if (this.slug) {
            this.analyticsservice.trackScreenView('CustomPage', this.slug);
        }
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        if (this.navParams.data.woo_page == 'cart' && this.navParams.data.is_nav_push !== true) {
            this.events.publish('cart_get_latest');
        }
    };
    CustomPage.prototype.ionSelected = function () {
        if (this.navParams.data.woo_page == 'cart') {
            this.events.publish('cart_get_latest');
        }
        else {
            this.events.publish('custom_page_tab_selected');
        }
    };
    CustomPage.prototype.listener = function () {
        // Listen for link clicks, open in in app browser
        this.listenFunc = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            if (event.target.href && event.target.href.indexOf('http') >= 0) {
                event.preventDefault();
                if (event.target.target && event.target.target) {
                    window.open(event.target.href, event.target.target);
                }
                else {
                    window.open(event.target.href, '_blank');
                }
            }
        });
    };
    CustomPage.prototype.wooEvents = function () {
        var _this = this;
        this.events.subscribe('show_cart_icon', function (data) {
            if (data) {
                _this.showCartIcon = true;
                _this.getCartCount();
            }
        });
        this.events.subscribe('cart_change', function (data) {
            if (data) {
                _this.cart_count = data;
            }
            else {
                _this.cart_count = null;
            }
        });
        this.events.subscribe('show_search_icon', function (data) {
            if (data && data.route) {
                setTimeout(function () {
                    _this.showSearchIcon = true;
                    _this.searchRoute = data.route;
                    _this.searchCard = data.card;
                });
            }
        });
    };
    // changes the back button transition direction if app is RTL
    CustomPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    CustomPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    // stop videos from playing when app is exited, required by Google
    CustomPage.prototype.killVideos = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            var frames = _this.elementRef.nativeElement.getElementsByTagName('iframe');
            var Vidsrc;
            var _loop_1 = function (i) {
                if (/youtube|wistia|vimeo/.test(frames[i].src)) {
                    Vidsrc = frames[i].src;
                    frames[i].src = '';
                    setTimeout(function () {
                        frames[i].src = Vidsrc;
                    }, 500);
                }
            };
            for (var i in frames) {
                _loop_1(i);
            }
        });
    };
    CustomPage.prototype.random = function (min, max) {
        if (min == null && max == null) {
            max = 1;
        }
        min = +min || 0;
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * ((+max || 0) - min + 1));
    };
    CustomPage.prototype.doLogo = function () {
        var _this = this;
        // check if logo file exists. If so, show it
        this.headerLogoService.checkLogo().then(function (data) {
            _this.show_header_logo = true;
            _this.header_logo_url = data;
        }).catch(function (e) {
            // no logo, do nothing
            //console.log(e)
        });
    };
    /**
     * Get side menu index by page slug
     */
    CustomPage.prototype.getMenuIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.menus.side);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    CustomPage.prototype.getTabIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.menus.tabs);
    };
    /**
     * Search both menus for a page
     *
     * @param page_slug
     */
    CustomPage.prototype.getPage = function (page_slug) {
        var _this = this;
        var menu_index;
        var page;
        menu_index = this.getMenuIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.side[menu_index];
        }
        menu_index = this.getTabIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.tabs[menu_index];
        }
        // otherwise . . .
        this.translate.get('Page not found').subscribe(function (text) {
            _this.presentToast(text);
        });
        return false;
    };
    /**
     * Adds a view on top of root view (w/ backbutton)
     *
     * @param page
     */
    CustomPage.prototype.pushPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && page.extra_classes.indexOf('tabs') >= 0) {
            this._openTab(page);
            return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page && page.extra_classes && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.loginModal({ title: page.title });
            return;
        }
        if (page.target === '_blank' && page.extra_classes && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        var root = this.getPageType(page);
        this.nav.push(root, page, opt);
    };
    /**
     * Set a root view
     *
     * @param page
     */
    CustomPage.prototype.openPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page && page.extra_classes && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.loginModal({ title: page.title });
            return;
        }
        if (page.extra_classes && page.extra_classes.indexOf('desktoptheme') >= 0) {
            var url = new URL(page.url);
            url.searchParams.append('appp_bypass', 'true');
            var iab = window.open(url.toString(), '_blank');
            return;
        }
        else if (page.target === '_blank' && page.extra_classes && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var root = this.getPageType(page);
        this.nav.setRoot(root, page);
    };
    /**
     * Opens a tab (global tab) from a custom page
     * @param {*} page
     */
    CustomPage.prototype._openTab = function (page) {
        // Get a list of the active child navigation.
        var activeNavigation = this.nav.getActiveChildNavs();
        // Get all tabs (assume the tab controller is the only child nav)
        var allTabs = activeNavigation[0];
        // Get the index of the tab that has the same page id, as the selected menu
        var tabIndex = allTabs._tabs.findIndex(function (tab) {
            return tab.rootParams.page_id === page.page_id;
        });
        // Select the tab using the tabIndex only if the same page_id exist
        if (tabIndex >= 0) {
            allTabs.select(tabIndex);
        }
        else {
            // If the tab with the same page_id does not exists push page
            this.pushPage(page);
        }
    };
    CustomPage.prototype.back = function () {
        this.nav.pop();
    };
    CustomPage.prototype.mediaModal = function (src, img, opt) {
        if (img === void 0) { img = null; }
        var data = { source: src, image: img };
        if (opt && opt.title) {
            data.title = opt.title;
        }
        var fileExt = src.split(".").pop();
        if (fileExt === "pdf") {
            this.handlePDF(src);
        }
        else {
            this.streamingMediaPlayer.start(data, null);
        }
    };
    CustomPage.prototype.handlePDF = function (src) {
        this.pdfService.openPdf(src);
    };
    CustomPage.prototype.updateData = function () {
        window.localStorage.removeItem('myappp');
        this.storage.remove('segments');
        this.events.publish('data:update', true);
    };
    CustomPage.prototype.changeRTL = function (event, rtl) {
        if (rtl) {
            this.platform.setDir('rtl', true);
            this.isRTL = true;
        }
        else {
            this.platform.setDir('ltr', true);
            this.isRTL = false;
        }
        this.storage.set('is_rtl', rtl);
    };
    CustomPage.prototype.initIsRTL = function () {
        var _this = this;
        this.storage.get('is_rtl').then(function (value) {
            _this.isRTL = (value === 'true');
        });
    };
    CustomPage.prototype.showSegments = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('PushSettings', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.showDownloads = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('DownloadList', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.showLanguages = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('LanguageSettings', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.loginModal = function (opt) {
        var _this = this;
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        this.login_modal = this.modalCtrl.create('LoginModal', params, {
            cssClass: css
        });
        this.login_modal.onDidDismiss(function (data) {
            _this.login_modal_open = false;
        });
        if (this.login_modal_open === false) {
            this.login_modal_open = true;
            this.login_modal.present();
        }
    };
    /**
   * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
   * @param extra_classes
   */
    CustomPage.prototype.yieldLogin = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) {
                return false;
            }
            else {
                this.loginModal();
                return true;
            }
        }
        return false;
    };
    CustomPage.prototype.getPages = function () {
        if (!this.pages) {
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            this.pages = data;
            var menu = [];
            // remove dividers
            if (data && data.menus && data.menus.items) {
                for (var _i = 0, _a = data.menus.items; _i < _a.length; _i++) {
                    var page = _a[_i];
                    if (page.extra_classes && page.extra_classes.indexOf('divider') >= 0) {
                        // skip
                        // console.log('skip', page)
                    }
                    else {
                        menu.push(page);
                    }
                }
                this.pages.menus.items = menu.slice();
            }
        }
        return this.pages;
    };
    CustomPage.prototype.getSegments = function () {
        if (!this.segments)
            this.segments = JSON.parse(window.localStorage.getItem('segments'));
        return this.segments;
    };
    CustomPage.prototype.getSideMenu = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        if (myappp && myappp.menus && myappp.menus.items)
            return myappp.menus.items;
        else
            return [];
    };
    CustomPage.prototype.getTabs = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        if (myappp && myappp.tab_menu && myappp.tab_menu.items)
            return myappp.tab_menu.items;
        else
            return [];
    };
    CustomPage.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    // duplicate in app.component.ts if any updates are made
    CustomPage.prototype.getPageType = function (page) {
        if (page.type === 'apppages' && page.page_type === 'list') {
            return 'PostList';
        }
        else if (page.type === 'apppages' && page.page_type === 'media-list') {
            return 'MediaList';
        }
        else if (page.type === 'apppages' && page.page_type === 'bp-list') {
            // maybe load profile page. It has type of bp-list even though it's not a bp-list page. Awkward I know.
            if (page.list_route === 'profile') {
                return 'BpProfilePage';
            }
            else if (page.list_route === 'messages') {
                return 'BpMessages';
            }
            else {
                return 'BpList';
            }
        }
        else if (page.type === 'apppages') {
            return this.getPageModuleName(page.page_id);
        }
        else if (page.url && page.type === 'custom' && !page.root) {
            return __WEBPACK_IMPORTED_MODULE_11__iframe_iframe__["a" /* Iframe */];
        }
        else {
            return null;
        }
    };
    CustomPage.prototype.showSpinner = function () {
        if (!this.spinner) {
            this.spinner = this.loadingCtrl.create();
            this.spinner.present();
        }
    };
    CustomPage.prototype.hideSpinner = function () {
        var _this = this;
        this.spinner.dismiss().then(function () {
            _this.spinner = null;
        });
    };
    CustomPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    CustomPage.prototype.initNetworkStatus = function () {
        var _this = this;
        this.isOffline = !this.networkstatus.currentStatus;
        this.isOnline = this.networkstatus.currentStatus;
        /** Development mode only -- START */
        this.inputData.isOffline = !this.networkstatus.currentStatus;
        this.inputData.isOnline = this.networkstatus.currentStatus;
        /** Development mode only -- END */
        this.subscriptions.push(this.networkstatus.networkStatus().subscribe(function (status) {
            // console.log('custom-page network status', status);
            _this.isOffline = !status;
            _this.isOnline = status;
            /** Development mode only -- START */
            _this.zone.run(function () {
                _this.inputData.isOffline = !status;
                _this.inputData.isOnline = status;
            });
            /** Development mode only -- END */
        }));
    };
    CustomPage.prototype.getCartCount = function () {
        var _this = this;
        // get cart count from storage, or hit API if we don't have it
        this.storage.get('cart_count').then(function (data) {
            if (data) {
                _this.cart_count = data;
            }
            else {
                _this.getCartFromAPI();
            }
        });
    };
    CustomPage.prototype.getCartFromAPI = function () {
        var _this = this;
        if (this.cart && this.cart.length)
            return;
        this.wooProvider.getCartContents().then(function (cart) {
            _this.cart = cart;
            _this.cart_count = (cart && typeof cart != 'string' && cart.cart_total ? cart.cart_total.cart_contents_count : '');
            // don't need to save count to storage, it's already saved in woo.ts
        });
    };
    CustomPage.prototype.showCart = function () {
        var cartPage = this.wooProvider.getWooPage('cart');
        if (!cartPage) {
            this.presentToast("No cart page set.");
            return;
        }
        cartPage.is_nav_push = true;
        var cartModule = this.getPageModuleName(cartPage.page_id);
        this.nav.push(cartModule, cartPage);
    };
    CustomPage.prototype.toggleSearchBar = function () {
        if (!this.toggleSearch) {
            this.toggleSearch = true;
        }
        else {
            this.toggleSearch = false;
        }
        this.content.resize();
    };
    CustomPage.prototype.doSearch = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // set to this.route so infinite scroll works
            var route = this.addQueryParam('products', 'search=' + val);
            console.log('woo search route = ' + route);
            this.nav.push('WooList', { route: route, search: true, card: this.searchCard });
        }
    };
    CustomPage.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    CustomPage.prototype.clearSearch = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CustomPage.prototype, "content", void 0);
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/custom-pages/custom-page.html"*/'<ion-header [ngClass]="customHeaderClasses">\n  <ion-navbar>\n    <ion-buttons start>\n      <button\n        *ngIf="rtlBack"\n        (click)="backRtlTransition()"\n        ion-button\n        class="custom-back-button"\n      >\n        <ion-icon name="arrow-forward"></ion-icon>\n        {{ "Back" | translate }}\n      </button>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo">{{ pagetitle | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button\n        ion-button\n        *ngIf="showSearchIcon"\n        class="search-button-header"\n        (click)="toggleSearchBar()"\n      >\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n      <button *ngIf="showCartIcon" ion-button (click)="showCart()">\n        <ion-icon name="cart"></ion-icon>\n        <ion-badge color="clear" item-end>{{ cart_count }}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar *ngIf="toggleSearch">\n    <ion-searchbar\n      placeholder="{{ \'Search\' | translate }}"\n      debounce="1000"\n      (ionInput)="doSearch($event)"\n      (ionClear)="clearSearch()"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf="!use_dynamic" [ngClass]="customClasses">\n  Content goes here\n</ion-content>\n<ion-content *ngIf="use_dynamic" [ngClass]="customClasses">\n  <DynamicComponent\n    *ngIf="templateUrl"\n    [componentTemplateUrl]="templateUrl"\n    [componentModules]="extraModules"\n    [componentInputData]="inputData"\n  ></DynamicComponent>\n\n  <div *ngIf="!templateUrl">Missing templateUrl</div>\n</ion-content>\n'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/custom-pages/custom-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_15__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_8__providers_menus_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_24__providers_network_network_status_service__["a" /* NetworkStatusService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_10__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */],
            __WEBPACK_IMPORTED_MODULE_14__providers_pdf_pdf__["a" /* PdfService */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom-page.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ApListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ApListComponent = /** @class */ (function () {
    function ApListComponent(nav, navParams, postService, loadingController, storage, toastCtrl, viewCtrl, platform, network, translate, events) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.postService = postService;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.card = false;
        this.favorites = false;
        this.infiniteScroll = false;
        this.refresh = false;
        this.hideEmpty = false;
        this.categories = false;
        this.categoryListDisplay = 'default';
        this.page = 1;
        this.loading = false;
        this.showItemsCss = 'show-list-items';
        this.events.subscribe('custom_page_tab_selected', function (data) {
            // listen for ionSelected events on the tab nav
            _this.getPosts();
        });
    }
    ApListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ApListComponent.prototype.getPosts = function () {
        if (this.route) {
            this.networkState = this.network.type;
            if (this.networkState === 'none' || this.networkState === 'unknown') {
                // if offline, get posts from storage
                this.getStoredPosts();
            }
            else {
                this.loadPosts();
            }
        }
    };
    // get posts from storage when we are offline
    ApListComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (posts) {
            if (posts) {
                _this.items = posts;
                _this.afterLoadItems();
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApListComponent.prototype.loadPosts = function () {
        var _this = this;
        this.loading = true;
        this.page = 1;
        if (!this.route || !this.page) {
            return;
        }
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            _this.afterLoadItems();
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', items);
            // load more right away
            if (_this.infiniteScroll)
                _this.loadMore(null);
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            console.error('Error getting posts', err);
            _this.translate.get('Error getting posts.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    ApListComponent.prototype.afterLoadItems = function () {
        if (this.items.length === 0 && this.hideEmpty) {
            this.showItemsCss = 'hide-empty-items';
        }
    };
    ApListComponent.prototype.loadDetail = function (item) {
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        this.nav.push('PostDetailsPage', {
            item: item
        }, opt);
    };
    // load the post list page for this category
    ApListComponent.prototype.loadCategory = function (item) {
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios')) {
            opt = { direction: 'back' };
        }
        var getRoute = this.route.split("?").shift();
        getRoute = getRoute.replace("categories", "posts?categories=") + item.id;
        this.nav.push('PostList', {
            title: item.name,
            list_route: getRoute,
            list_display: (this.card ? "card" : ""),
            favorites: this.favorites
        }, opt);
    };
    ApListComponent.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (!this.route || !this.page) {
            return;
        }
        this.page++;
        this.postService.load(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            for (var i = 0; i < length; ++i) {
                _this.items.push(items[i]);
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', _this.items);
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    ApListComponent.prototype.doRefresh = function () {
        this.loadPosts();
    };
    ApListComponent.prototype.addFav = function (slidingItem, item) {
        var _this = this;
        var inArray = false;
        for (var i = this.favoriteItems.length - 1; i >= 0; i--) {
            if (this.favoriteItems[i].id === item.id) {
                inArray = true;
                break;
            }
        }
        // Don't add duplicate favs
        if (inArray === false) {
            this.favoriteItems.push(item);
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favoriteItems);
            this.translate.get('Favorite added').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
        else {
            for (var i = this.favoriteItems.length - 1; i >= 0; i--) {
                if (this.favoriteItems[i].id === item.id) {
                    this.favoriteItems.splice(i, 1);
                    break;
                }
            }
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favoriteItems);
            // refresh the list
            if (this.favoriteItems.length) {
                this.items = this.favoriteItems;
            }
            else {
                this.showAll();
            }
            this.translate.get('Favorite Removed').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
        slidingItem.close();
    };
    ApListComponent.prototype.showFavorites = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_favorites').then(function (favorites) {
            if (favorites && favorites.length) {
                _this.favorites = favorites;
                _this.items = favorites;
            }
            else {
                _this.translate.get('No Favorites to show').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApListComponent.prototype.showAll = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (items) {
            _this.items = items;
        });
    };
    ApListComponent.prototype.truncateString = function (string) {
        return string.substring(0, 100);
    };
    ApListComponent.prototype.getBgImage = function (item) {
        if (item.featured_image_urls.large) {
            return item.featured_image_urls.large;
        }
        else if (item.featured_image_urls.medium) {
            return item.featured_image_urls.medium;
        }
        else {
            return '';
        }
    };
    ApListComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "favorites", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "hideEmpty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "categoryListDisplay", void 0);
    ApListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-list',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-list/ap-list.html"*/'<div class="list-loading-spinner" *ngIf="loading">\n  <ion-spinner name="bubbles"></ion-spinner>\n</div>\n\n<div *ngIf="refresh && !loading" class="list-refresher">\n  <ion-icon name="refresh" (tap)="doRefresh()"></ion-icon>\n  <span (tap)="doRefresh()">{{ "Refresh" | translate }}</span>\n</div>\n\n<div [ngClass]="showItemsCss">\n  <h3 *ngIf="title">{{ title | translate }}</h3>\n\n  <ion-list *ngIf="categories" class="category-list">\n    <ion-card (click)="loadCategory(item)" *ngFor="let item of items">\n      <ion-card-content>\n        <ion-card-title *ngIf="item.name">\n          <h2 [innerHTML]="item.name"></h2>\n        </ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf="card && !categories">\n    <ion-card (click)="loadDetail(item)" *ngFor="let item of items">\n      <div class="card-featured-wrap" *ngIf="item.featured_image_urls">\n        <div\n          class="card-featured-image"\n          *ngIf="getBgImage(item)"\n          [ngStyle]="{ \'background-image\': \'url(\' + getBgImage(item) + \')\' }"\n        ></div>\n      </div>\n\n      <div\n        *ngIf="\n          item.appp && item.appp.post_list && item.appp.post_list.above_title\n        "\n        [innerHTML]="item.appp.post_list.above_title"\n      ></div>\n\n      <ion-card-content>\n        <ion-card-title *ngIf="item.title && item.title.rendered">\n          <h2 [innerHTML]="item.title.rendered"></h2>\n        </ion-card-title>\n\n        <div\n          *ngIf="\n            item.appp && item.appp.post_list && item.appp.post_list.below_title\n          "\n          [innerHTML]="item.appp.post_list.below_title"\n        ></div>\n\n        <p\n          *ngIf="item.excerpt && item.excerpt.rendered"\n          [innerHTML]="truncateString(item.excerpt.rendered)"\n        ></p>\n\n        <div\n          class="item-content"\n          *ngIf="!item.excerpt && item.content.rendered"\n          [innerHTML]="truncateString(item.content.rendered)"\n        ></div>\n      </ion-card-content>\n\n      <div\n        *ngIf="\n          item.appp && item.appp.post_list && item.appp.post_list.below_content\n        "\n        [innerHTML]="item.appp.post_list.below_content"\n      ></div>\n    </ion-card>\n  </ion-list>\n\n  <ion-list *ngIf="!card && !categories">\n    <ion-item-sliding *ngFor="let item of items" #slidingItem>\n      <button ion-item (click)="loadDetail(item)">\n        <ion-avatar item-left *ngIf="item.featured_image_urls">\n          <img\n            *ngIf="\n              item.featured_image_urls && item.featured_image_urls.thumbnail\n            "\n            src="{{ item.featured_image_urls.thumbnail }}"\n          />\n          <img\n            *ngIf="\n              !item.featured_image_urls || !item.featured_image_urls.thumbnail\n            "\n            src="assets/default.png"\n          />\n        </ion-avatar>\n\n        <div\n          *ngIf="\n            item.appp && item.appp.post_list && item.appp.post_list.above_title\n          "\n          [innerHTML]="item.appp.post_list.above_title"\n        ></div>\n\n        <h2\n          *ngIf="item.title && item.title.rendered"\n          [innerHTML]="item.title.rendered"\n        ></h2>\n\n        <div\n          *ngIf="\n            item.appp && item.appp.post_list && item.appp.post_list.below_title\n          "\n          [innerHTML]="item.appp.post_list.below_title"\n        ></div>\n\n        <p\n          *ngIf="item.excerpt && item.excerpt.rendered"\n          [innerHTML]="truncateString(item.excerpt.rendered)"\n        ></p>\n\n        <div\n          class="item-content"\n          *ngIf="!item.excerpt && item.content.rendered"\n          [innerHTML]="truncateString(item.content.rendered)"\n        ></div>\n\n        <div\n          *ngIf="\n            item.appp &&\n            item.appp.post_list &&\n            item.appp.post_list.below_content\n          "\n          [innerHTML]="item.appp.post_list.below_content"\n        ></div>\n      </button>\n\n      <ion-item-options side="right" *ngIf="favorites">\n        <button ion-button color="primary" (click)="addFav(slidingItem, item)">\n          <ion-icon name="star-outline"></ion-icon>\n          {{ "Favorite" | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ng-content></ng-content>\n</div>\n\n<ion-infinite-scroll *ngIf="infiniteScroll" (ionInfinite)="loadMore($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-list/ap-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], ApListComponent);
    return ApListComponent;
}());

//# sourceMappingURL=ap-list.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * For reference: https://github.com/ionic-team/ionic/blob/master/core/src/components/slides/slides.tsx
 */
var ApSliderComponent = /** @class */ (function () {
    function ApSliderComponent(nav, navParams, postService, storage, platform, toastCtrl, viewCtrl, network, translate, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.postService = postService;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.card = false;
        this.hideEmpty = false;
        this.showSlidesCss = 'show-slides';
    }
    ApSliderComponent.prototype.ngAfterViewInit = function () {
        if (this.route) {
            this.networkState = this.network.type;
            if (this.networkState === 'none' || this.networkState === 'unknown') {
                // if offline, get posts from storage
                this.getStoredPosts();
            }
            else {
                this.loadPosts();
            }
        }
        // set options based on input attributes
        if (this.slidesPerView) {
            this.slides.slidesPerView = this.slidesPerView;
        }
        if (this.loop === "true") {
            this.slides.loop = true;
        }
        if (this.freeMode === "true") {
            this.slides.freeMode = true;
        }
        if (this.effect) {
            this.slides.effect = this.effect;
        }
        if (this.paginationType) {
            this.slides.paginationType = this.paginationType;
        }
        if (this.spaceBetween) {
            this.slides.spaceBetween = this.spaceBetween;
        }
    };
    // get posts from storage when we are offline
    ApSliderComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_slides').then(function (posts) {
            if (posts) {
                _this.items = posts;
                _this.afterLoadItems();
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApSliderComponent.prototype.afterLoadItems = function () {
        if (this.items.length === 0 && this.hideEmpty) {
            this.showSlidesCss = 'hide-slides';
        }
    };
    ApSliderComponent.prototype.loadPosts = function () {
        var _this = this;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(this.route, '1').then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            _this.afterLoadItems();
            _this.storage.set(_this.route.substr(-10, 10) + '_slides', items);
            // this is not working
            if (_this.pager === "false") {
                _this.slides.pager = false;
            }
            else {
                _this.slides.pager = true;
            }
        }).catch(function (err) {
            console.error('Error getting posts', err);
            _this.translate.get('Error getting posts.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    ApSliderComponent.prototype.loadDetail = function (item) {
        if (this.preventClicks === "true")
            return;
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        this.nav.push('PostDetailsPage', {
            item: item
        }, opt);
    };
    ApSliderComponent.prototype.truncateString = function (string) {
        return string.substring(0, 50);
    };
    ApSliderComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */])
    ], ApSliderComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "slidesPerView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "loop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "effect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "paginationType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "preventClicks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "freeMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "spaceBetween", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApSliderComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApSliderComponent.prototype, "hideEmpty", void 0);
    ApSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-slider',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-slider/ap-slider.html"*/'<div [ngClass]="showSlidesCss">\n	<h3 *ngIf="title">{{ title | translate }}</h3>\n\n\n<ion-slides *ngIf="!card" pager>\n\n	<ion-slide *ngFor="let item of items" [ngStyle]="{\'background-image\': \'url(\' + ( item.featured_image_urls.large ? item.featured_image_urls.large : item.featured_image_urls.medium ) + \')\'}" (click)="loadDetail(item)">\n\n		<h3 class="item-title" *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h3>\n\n		<div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.item_content" [innerHTML]="item.appp.post_list.item_content"></div>\n\n	</ion-slide>\n\n</ion-slides>\n\n<ion-slides *ngIf="card" pager>\n\n	<ion-slide *ngFor="let item of items" (click)="loadDetail(item)">\n\n		<ion-card>\n		  \n		  <div class="card-featured-wrap" *ngIf="item.featured_image_urls">\n		    <img *ngIf="item.featured_image_urls.large" src="{{item.featured_image_urls.large}}">\n		    <img *ngIf="!item.featured_image_urls.large && item.featured_image_urls.medium" src="{{item.featured_image_urls.medium}}">\n		  </div>\n\n		  <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n		  <ion-card-content>\n\n		    <ion-card-title *ngIf="item.title && item.title.rendered">\n		      <h2 [innerHTML]="item.title.rendered"></h2>\n		    </ion-card-title>\n\n		    <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n		    <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n		    <div class="item-content" *ngIf="!item.excerpt && item.content.rendered" [innerHTML]="truncateString( item.content.rendered )"></div>\n\n		  </ion-card-content>\n\n		</ion-card>\n\n	</ion-slide>\n\n</ion-slides>\n\n	<ng-content></ng-content>\n</div>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-slider/ap-slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], ApSliderComponent);
    return ApSliderComponent;
}());

//# sourceMappingURL=ap-slider.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WooListComponent = /** @class */ (function () {
    function WooListComponent(nav, navParams, wooProvider, loadingController, storage, toastCtrl, viewCtrl, platform, network, translate, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.card = true;
        this.infiniteScroll = false;
        this.refresh = false;
        this.wishlist = false;
        this.hideToolbar = false;
        this.hideSearch = false;
        // super confusing way to add a class of "has-toolbar" when there is a toolbar
        this.chkToolbar = true;
        this.page = 1;
        this.loading = false;
    }
    WooListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.hideToolbar) {
            // don't add has-toolbar class
            this.chkToolbar = false;
        }
        if (this.route) {
            this.networkState = this.network.type;
            if (this.networkState === 'none' || this.networkState === 'unknown') {
                // if offline, get posts from storage
                this.getStoredPosts();
            }
            else {
                this.loadProducts(this.route);
            }
            this.getCategories();
        }
        else if (this.wishlist) {
            this.getWishlist();
        }
        if (!this.hideSearch) {
            this.searchIconEvent();
        }
        setTimeout(function () {
            _this.cartIconEvent();
        });
    };
    // this is used to show the cart icon on custom page headers
    WooListComponent.prototype.cartIconEvent = function () {
        this.events.publish('show_cart_icon', true);
    };
    WooListComponent.prototype.searchIconEvent = function () {
        this.events.publish('show_search_icon', { route: this.route, card: this.card });
    };
    // get posts from storage when we are offline
    WooListComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_woo').then(function (posts) {
            if (posts) {
                _this.items = posts;
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    WooListComponent.prototype.loadProducts = function (route) {
        var _this = this;
        if (this.wishlist) {
            this.getWishlist();
            return;
        }
        this.loading = true;
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.wooProvider.get(route, this.page).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            console.log(items);
            _this.storage.set(_this.route.substr(-10, 10) + '_woo', items);
            // load more right away
            if (_this.infiniteScroll)
                _this.loadMore(null);
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            if (err.error && err.error.message) {
                _this.presentToast(err.error.message);
            }
            else {
                _this.translate.get('Error getting posts.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
            console.error('Error getting posts', err);
        });
    };
    WooListComponent.prototype.getCategories = function () {
        var _this = this;
        if (this.route.indexOf('categories') >= 0) {
            return;
        }
        var params = '';
        if (this.categoryParams) {
            params = '&' + this.categoryParams;
        }
        this.wooProvider.get('products/categories?per_page=50' + params, null).then(function (categories) {
            // Loads posts from WordPress API
            _this.categories = categories;
            // set category name in dropdown
            if (_this.route.indexOf('category') >= 0) {
                var catId_1 = _this.getUrlParam(_this.route, 'category=');
                setTimeout(function () {
                    _this.category = catId_1;
                }, 100);
            }
        }).catch(function (err) {
            console.warn('Error getting categories', err);
        });
    };
    WooListComponent.prototype.categoryChanged = function () {
        var route = this.addQueryParam('products', 'category=' + this.category);
        this.loadProducts(route);
        this.items = [];
    };
    WooListComponent.prototype.getWishlist = function () {
        var _this = this;
        this.storage.get('woo_saved_items').then(function (items) {
            if (items && items.length) {
                _this.items = items;
            }
            else {
                _this.presentToast('No items to show.');
            }
        });
    };
    WooListComponent.prototype.removeSavedItem = function (item) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id === item.id) {
                this.items.splice(i, 1);
                break;
            }
        }
        this.storage.set('woo_saved_items', this.items);
    };
    WooListComponent.prototype.doRefresh = function (event) {
        this.loadProducts(this.route);
    };
    WooListComponent.prototype.loadDetail = function (item) {
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        if (item.type) {
            this.nav.push('WooDetail', {
                item: item
            }, opt);
        }
        else if (this.route.indexOf('categories') >= 0) {
            this.nav.push('WooList', {
                route: 'products/categories/?parent=' + item.id
            }, opt);
        }
        else {
            this.nav.push('WooList', {
                route: 'products?category=' + item.id
            }, opt);
        }
    };
    WooListComponent.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.wooProvider.get(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            for (var i = 0; i < length; ++i) {
                _this.items.push(items[i]);
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_woo', _this.items);
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    WooListComponent.prototype.getBtnText = function (item) {
        var txt;
        switch (item.type) {
            case "simple":
                txt = "Add to Cart";
                break;
            case "grouped":
                txt = "View Products";
                break;
            case "variable":
                txt = "Select Options";
                break;
            default:
                txt = "View Details";
        }
        return txt;
    };
    WooListComponent.prototype.productAction = function (item) {
        switch (item.type) {
            case "simple":
                this.addToCart(item);
                break;
            default:
                this.loadDetail(item);
        }
    };
    WooListComponent.prototype.addToCart = function (item) {
        var _this = this;
        this.presentToast(item.name + ' added to cart.');
        item.quantity = 1;
        item.product_id = item.id;
        console.log(item);
        this.wooProvider.addToCart(item).then(function (data) {
            _this.productAddSuccess(data, item);
        }).catch(function (e) {
            _this.productAddError(e);
            console.warn(e);
        });
    };
    WooListComponent.prototype.productAddSuccess = function (data, item) {
        var _this = this;
        this.storage.get('cart_count').then(function (count) {
            if (count) {
                count = parseInt(count) + 1;
            }
            else {
                count = 1;
            }
            _this.storage.set('cart_count', count);
            _this.events.publish('cart_change', count);
        });
    };
    WooListComponent.prototype.productAddError = function (e) {
        var msg;
        if (e.error && e.error.message) {
            msg = e.error.message;
        }
        else {
            msg = 'There was a problem, your item was not added to the cart.';
        }
        this.presentToast(msg);
    };
    WooListComponent.prototype.truncateString = function (string) {
        return string.substring(0, 100);
    };
    // get category ID from url string
    WooListComponent.prototype.getUrlParam = function (url, param) {
        console.log('url param ' + url, param);
        return url.split(param).pop();
    };
    WooListComponent.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    WooListComponent.prototype.getBgImage = function (item) {
        if (item.featured_image_urls.large) {
            return item.featured_image_urls.large;
        }
        else if (item.featured_image_urls.medium) {
            return item.featured_image_urls.medium;
        }
    };
    WooListComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooListComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WooListComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "wishlist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "hideToolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "hideSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WooListComponent.prototype, "categoryParams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.has-toolbar'),
        __metadata("design:type", Boolean)
    ], WooListComponent.prototype, "chkToolbar", void 0);
    WooListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'woo-list',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-list-component/woo-list-component.html"*/'<div class="loading-squares" *ngIf="loading">\n <div class="loading-square">\n </div>\n <div class="loading-square">\n </div>\n <div class="loading-square">\n </div>\n <div class="loading-square">\n </div>\n</div>\n\n<div *ngIf="refresh && !loading" class="list-refresher">\n  <ion-icon name="refresh" (tap)="doRefresh()"></ion-icon>\n  <span>{{ \'Refresh\' | translate }}</span>\n</div>\n\n<ion-toolbar class="woo-list-toolbar" color="light" *ngIf="!hideToolbar && !wishlist && !loading">\n\n  <ion-item no-lines *ngIf="categories" id="favorites-toolbar" color="light">\n\n    <ion-select [(ngModel)]="category" (ionChange)="categoryChanged()" placeholder="{{ \'Category\' | translate }}">\n\n      <ion-option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name | translate }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n</ion-toolbar>\n\n<ion-list *ngIf="card && card != \'false\'">\n\n    <ion-card *ngFor="let item of items">\n\n      <div (tap)="loadDetail(item)" class="card-featured-wrap" *ngIf="item.images || item.image">\n        <div *ngIf="item.images && item.images[0] && item.images[0].src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.images[0].src +\')\'}"></div>\n        <div *ngIf="item.image && item.image.src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.image.src +\')\'}"></div>\n        <div *ngIf="!item.image && !item.images" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(assets/woo-default.png)\'}"></div>\n      </div>\n\n      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.above_title" [innerHTML]="item.appp.woo_list.above_title"></div>\n\n      <ion-card-content>\n\n        <ion-card-title *ngIf="item.name" (tap)="loadDetail(item)">\n          <h2 [innerHTML]="item.name"></h2>\n        </ion-card-title>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_title" [innerHTML]="item.appp.woo_list.below_title"></div>\n\n        <p (tap)="loadDetail(item)" *ngIf="item.price_html" class="product-price" [innerHTML]="item.price_html"></p>\n\n        <p (tap)="loadDetail(item)" *ngIf="!item.price_html && item.price" class="product-price">{{ item.price }}</p>\n\n        <p *ngIf="item.description" (tap)="loadDetail(item)" [innerHTML]="truncateString(item.description)" class="product-description"></p>\n\n        <star-rating *ngIf="!wishlist" [rating]="item.average_rating"></star-rating>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_content" [innerHTML]="item.appp.woo_list.below_content"></div>\n\n      </ion-card-content>\n\n      <ion-item *ngIf="wishlist">\n\n        <button item-start class="product-action-wishlist" ion-button clear (tap)="productAction(item)">{{ getBtnText(item) | translate }}</button>\n\n        <button ion-button item-end icon-start color="danger" clear (tap)="removeSavedItem(item)"><ion-icon name="close-circle"></ion-icon> {{ \'Remove\' | translate }}</button>\n\n      </ion-item>\n\n    </ion-card>\n\n</ion-list>\n\n<ion-list *ngIf="card == \'false\'">\n\n	<ion-item *ngFor="let item of items">\n\n      <button ion-button item-end *ngIf="wishlist" icon-only color="danger" clear (tap)="removeSavedItem(item)"><ion-icon name="close-circle"></ion-icon></button>\n\n      <ion-thumbnail class="product-thumbnail" (tap)="loadDetail(item)" item-start *ngIf="item.images">\n        <img *ngIf="item.images[0] && item.images[0].src" src="{{item.images[0].src}}">\n        <img *ngIf="!item.images[0]" src="assets/woo-default.png">\n      </ion-thumbnail>\n\n      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.above_title" [innerHTML]="item.appp.woo_list.above_title"></div>\n\n      <h2 (tap)="loadDetail(item)" *ngIf="item.name" [innerHTML]="item.name"></h2>\n\n      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_title" [innerHTML]="item.appp.woo_list.below_title"></div>\n\n      <p (tap)="loadDetail(item)" *ngIf="item.price_html" class="product-price" [innerHTML]="item.price_html"></p>\n\n      <p (tap)="loadDetail(item)" *ngIf="!item.price_html && item.price" class="product-price">{{ item.price }}</p>\n\n      <p *ngIf="item.description" (tap)="loadDetail(item)" [innerHTML]="truncateString(item.description)" class="product-description"></p>\n\n      <star-rating *ngIf="!wishlist" [rating]="item.average_rating"></star-rating>\n\n      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_content" [innerHTML]="item.appp.woo_list.below_content"></div>\n\n    </ion-item>\n\n</ion-list>\n\n<ion-infinite-scroll *ngIf="infiniteScroll" (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-list-component/woo-list-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], WooListComponent);
    return WooListComponent;
}());

//# sourceMappingURL=woo-list-component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WooCartComponent = /** @class */ (function () {
    function WooCartComponent(navCtrl, navParams, storage, viewCtrl, events, wooProvider, toastCtrl, loadingCtrl, platform, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.wooProvider = wooProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.iab = iab;
        this.cart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadingItems = false;
        events.subscribe('cart_change', function (count) {
            _this.cart_count = count;
        });
        this.wooProvider.getCurrencySymbol().then(function (symbol) {
            _this.currencySymbol = symbol;
        });
        events.subscribe('cart_get_latest', function (data) {
            _this.cart.emit(true);
            _this.getCartContents();
        });
    }
    WooCartComponent.prototype.ngOnInit = function () {
        // tells the custom page to get the cart
        this.cart.emit(true);
        this.getCartContents();
    };
    WooCartComponent.prototype.getCartContents = function () {
        var _this = this;
        this.loadingItems = true;
        this.wooProvider.getCartContents().then(function (response) {
            if (typeof response === 'string') {
                _this.cartEmpty = response;
                _this.cart_total = null;
                _this.products = [];
            }
            else {
                _this.products = response.products;
                _this.cart_total = response.cart_total.cart_contents_total;
                _this.cart_count = response.cart_total.cart_contents_count;
            }
            // any time a cart item is changed we get here, so publish cart count event here
            _this.events.publish('cart_change', _this.cart_count);
            console.log(response);
        }).catch(function (e) {
            console.warn(e);
        }).then(function () {
            _this.loadingItems = false;
        });
    };
    WooCartComponent.prototype.clearCart = function () {
        var _this = this;
        this.showSpinner();
        this.wooProvider.clearCart().then(function (response) {
            _this.hideSpinner();
            _this.products = [];
            _this.cart_total = 0;
            _this.storage.set('cart_count', 0);
            _this.events.publish('cart_change', 0);
            _this.cartEmpty = "Cart is empty.";
        }).catch(function (e) { return console.warn(e); });
    };
    WooCartComponent.prototype.removeItem = function (item) {
        var _this = this;
        // small delay otherwise it feels too jumpy
        setTimeout(function () {
            // we remove the item right away, before the API call. It gets added back if there is an error.
            for (var i = _this.products.length - 1; i >= 0; i--) {
                if (_this.products[i].product_id === item.product_id) {
                    _this.products.splice(i, 1);
                    break;
                }
            }
            _this.cart_total = "Calculating...";
            _this.presentToast("Item removed.");
        }, 200);
        this.wooProvider.removeItem(item).then(function (response) {
            // success
            console.log(response);
        }).catch(function (e) {
            _this.presentToast("Could not remove item.");
            console.warn(e);
        }).then(function () {
            // update totals
            _this.getCartContents();
        });
    };
    WooCartComponent.prototype.increment = function (item) {
        item.quantity = parseInt(item.quantity) + 1;
        this.quantityChanged(item);
    };
    WooCartComponent.prototype.decrement = function (item) {
        item.quantity = parseInt(item.quantity) - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
        else {
            this.quantityChanged(item);
        }
    };
    WooCartComponent.prototype.quantityChanged = function (item) {
        var _this = this;
        console.log(item);
        this.wooProvider.updateItem(item, item.quantity).then(function (response) {
            _this.presentToast(response);
            // update totals
            _this.getCartContents();
        }).catch(function (e) {
            _this.presentToast("Could not update item.");
            console.warn(e);
        });
    };
    WooCartComponent.prototype.openCheckout = function () {
        var item = window.localStorage.getItem('myappp');
        var url = JSON.parse(item).wordpress_url;
        this.createBrowser(url + 'checkout');
    };
    WooCartComponent.prototype.loadDetail = function (item) {
        var _this = this;
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        // The cart only has limited details of the product, so we need to get the full thing from the API.
        this.wooProvider.get("products/" + item.product_id + "/", '').then(function (response) {
            var product = response;
            if (response && product.id == item.product_id) {
                _this.navCtrl.push('WooDetail', {
                    item: response
                }, opt);
            }
            else {
                _this.presentToast("Product not found.");
            }
        });
    };
    WooCartComponent.prototype.createBrowser = function (url) {
        var _this = this;
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            alert('Redirecting, please try from a device for a better checkout experience.');
            window.open(url + '?appcommerce=1', '_blank');
            return;
        }
        this.browser = this.iab.create(url + '?appcommerce=1&appp_bypass=true', '_blank', 'location=yes,toolbarcolor=#ffffff,navigationbuttoncolor=#444444,closebuttoncolor=#444444');
        this.browserSubscription1 = this.browser.on('exit').subscribe(function (data) {
            console.log('browser closed', data);
            // update cart in case items were changed on site
            _this.getCartContents();
            _this.browserCleanup(data);
            // this.orderComplete()
        });
        this.browserSubscription2 = this.browser.on('loadstart').subscribe(function (event) {
            console.log('loadstart', event);
            _this.maybeCompleteCheckout(event);
        });
    };
    // get order ID from url (woocommerce)
    WooCartComponent.prototype.getOrderId = function (url) {
        var order_id = '';
        if (url.indexOf('order_id') >= 0) {
            // get order ID param
            if (url.indexOf('cmd=_cart') >= 0) {
                url = decodeURIComponent(url);
            }
            var url2 = new URL(url);
            order_id = (url2.searchParams.get("order_id") ? url2.searchParams.get("order_id") : null);
        }
        else if (url.indexOf('order-received') >= 0) {
            // get order ID from url
            // this regex might fail if there are numbers in the url
            order_id = /(\/[0-9]+\/)/g.exec(url)[0];
            order_id = order_id.replace(/\//g, "");
        }
        return order_id;
    };
    WooCartComponent.prototype.maybeCompleteCheckout = function (event) {
        if (event.url.indexOf('order-received') >= 0 && event.url.indexOf('paypal.com') === -1) {
            this.order_id = this.getOrderId(event.url);
            this.browser.close();
            this.browserCleanup(null);
            // send to order complete page
            this.orderComplete();
        }
    };
    WooCartComponent.prototype.orderComplete = function () {
        console.log('order complete');
        // TODO: if order is unsuccessful don't clear cart...
        this.clearCart();
        this.browserSubscription1.unsubscribe();
        this.browserSubscription2.unsubscribe();
        // get empty cart page out of history
        this.navCtrl.pop();
        // send to order complete page
        var acctPage = this.wooProvider.getWooPage('account');
        if (!acctPage) {
            this.presentToast('No account page set.');
            return;
        }
        var acctModule = this.getPageModuleName(acctPage.page_id);
        // tack on order_id to display order confirmation
        acctPage.order_id = this.order_id;
        this.navCtrl.push(acctModule, acctPage);
    };
    WooCartComponent.prototype.shopPage = function () {
        var shop = this.wooProvider.getWooPage('shop');
        if (!shop) {
            this.presentToast('No shop page set.');
            return;
        }
        var shopModule = this.getPageModuleName(shop.page_id);
        this.navCtrl.setRoot(shopModule, shop);
    };
    WooCartComponent.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    WooCartComponent.prototype.browserCleanup = function (data) {
        console.log('browser closed', data);
        this.browserSubscription1.unsubscribe();
        this.browserSubscription2.unsubscribe();
        this.browser = null;
    };
    WooCartComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooCartComponent.prototype.showSpinner = function () {
        // create only one spinner
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                showBackdrop: false,
                dismissOnPageChange: false
            });
            this.loading.present();
        }
    };
    WooCartComponent.prototype.hideSpinner = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WooCartComponent.prototype, "cart", void 0);
    WooCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'woo-cart',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-cart/woo-cart.html"*/'<div class="loading-squares" *ngIf="loadingItems">\n <div class="loading-square">\n </div>\n <div class="loading-square">\n </div>\n</div>\n\n<div *ngIf="!products?.length && !loadingItems" class="empty-cart">\n  <p>{{ cartEmpty }}</p>\n  <button ion-button block (tap)="shopPage()">{{ \'Go to Shop\' | translate }}</button>\n</div>\n\n<div padding class="cart-top">\n\n  <h3 *ngIf="cart_total" class="cart-total">\n    {{ \'Cart total:\' | translate }} <span *ngIf="currencySymbol" class="currency-symbol" [innerHTML]="currencySymbol"></span>{{ cart_total }}\n  </h3>\n\n  <button ion-button class="checkout-btn" *ngIf="products?.length" full color="primary" (click)="openCheckout()" icon-end>\n        {{ \'Checkout\' | translate }}\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n</div>\n\n<ion-list class="post-list woocommerce" *ngIf="products">\n\n  <ion-item *ngFor="let item of products">\n\n  	<ion-thumbnail (tap)="loadDetail(item)" item-start *ngIf="item.product_image">\n      <img src="{{item.product_image}}" class="product-image">\n    </ion-thumbnail>\n\n		<h2 (tap)="loadDetail(item)" *ngIf="item.product_name" [innerHTML]="item.product_name"></h2>\n\n		<ion-grid>\n      <ion-row>\n        <ion-col col-4 class="product-price">\n          <p *ngIf="item.line_total">\n            <span *ngIf="currencySymbol" class="currency-symbol" [innerHTML]="currencySymbol"></span>{{ item.line_total | number : \'1.2-2\' }}\n          </p>\n        </ion-col>\n        <ion-col col-5 text-center class="product-quantity">\n\n            <ion-icon item-start name="remove-circle" (click)="decrement( item )"></ion-icon>\n            <span>{{ item.quantity }}</span>\n            <ion-icon item-end name="add-circle" (click)="increment( item )"></ion-icon>\n\n        </ion-col>\n        <ion-col class="product-remove" col-3  text-right (click)="removeItem(item)"><ion-icon name="close" color="danger"></ion-icon></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-item>\n\n  <ion-item *ngIf="cart_total">\n    <button ion-button icon-left color="light" (click)="clearCart()"><ion-icon name="trash"></ion-icon> {{ \'Clear Cart\' | translate }}</button>\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-cart/woo-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], WooCartComponent);
    return WooCartComponent;
}());

//# sourceMappingURL=woo-cart.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WooAccountComponent = /** @class */ (function () {
    function WooAccountComponent(navCtrl, navParams, wooProvider, storage, loadingCtrl, iab, toastCtrl, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        // add has-toolbar class for iPhone X fix
        this.classes = true;
        this.showOrdersBool = false;
        this.showAccountBool = false;
    }
    WooAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order_id = this.navParams.get('order_id');
        this.title = (this.navParams.get('title') ? this.navParams.get('title') : "Your Order");
        this.storage.get('user_login').then(function (login_data) {
            _this.login_data = login_data;
            if (_this.order_id) {
                _this.getOrder(_this.order_id);
            }
            else {
                _this.getCustomerOrders();
            }
        });
        this.listeners();
    };
    WooAccountComponent.prototype.listeners = function () {
        var _this = this;
        // set login data after modal login
        this.events.subscribe('user:login', function (data) {
            _this.login_data = data;
            _this.getCustomerOrders();
        });
        this.events.subscribe('user:logout', function (data) {
            _this.login_data = null;
        });
    };
    WooAccountComponent.prototype.getCustomerOrders = function () {
        if (this.login_data && this.login_data.user_id) {
            this.customer = this.login_data.user_id;
            this.getOrders('?customer=' + this.login_data.user_id + '&status=pending,processing,on-hold,completed,refunded,failed');
        }
        else {
            this.presentToast('Please login.');
            this.showLoginModal();
        }
    };
    WooAccountComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.showSpinner();
        this.wooProvider.get('orders/' + id, 'nopaging').then(function (response) {
            console.log(response);
            _this.orderConfirmation = response;
        }).catch(function (e) {
            console.warn(e);
        }).then(function () {
            _this.hideSpinner();
        });
    };
    WooAccountComponent.prototype.getOrders = function (param) {
        var _this = this;
        this.showOrdersBool = true;
        this.showSpinner();
        this.wooProvider.get('orders/' + param, 'nopaging').then(function (response) {
            console.log(response);
            _this.orders = response;
        }).catch(function (e) {
            console.warn(e);
        }).then(function () {
            _this.hideSpinner();
        });
    };
    WooAccountComponent.prototype.showOrders = function () {
        if (!this.login_data) {
            this.presentToast('Please login.');
            return;
        }
        this.showAccountBool = false;
        this.getOrders('?customer=' + this.login_data.user_id + '&status=pending,processing,on-hold,completed,refunded,failed');
    };
    WooAccountComponent.prototype.showAccount = function () {
        var _this = this;
        if (!this.login_data) {
            this.presentToast('Please login.');
            return;
        }
        this.showSpinner();
        this.showOrdersBool = false;
        this.showAccountBool = true;
        if (this.account) {
            this.hideSpinner();
            return;
        }
        this.wooProvider.get('customers/' + this.login_data.user_id, 'nopaging').then(function (response) {
            console.log(response);
            _this.account = response;
        }).catch(function (e) {
            console.warn(e);
        }).then(function () {
            _this.hideSpinner();
        });
        // sucks to do an extra http request, tried hard to avoid this
        this.wooProvider.getCustom('wp-json/appcommerce/v1/cart/misc').then(function (response) {
            if (response && response.account && response.account.url) {
                _this.accountUrl = response.account.url;
            }
        }).catch(function (e) {
            console.warn(e);
        });
    };
    WooAccountComponent.prototype.thanksContinue = function () {
        this.navCtrl.pop();
    };
    WooAccountComponent.prototype.iabLink = function (url) {
        this.iab.create(url, '_blank');
    };
    WooAccountComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooAccountComponent.prototype.showLoginModal = function () {
        this.loginModal = this.modalCtrl.create('LoginModal');
        this.loginModal.present();
    };
    WooAccountComponent.prototype.formatAvatar = function (url) {
        if (url.indexOf('https') >= 0) {
            return url;
        }
        else {
            return 'https:' + url;
        }
    };
    WooAccountComponent.prototype.showSpinner = function () {
        this.loading = this.loadingCtrl.create({
            showBackdrop: false,
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    WooAccountComponent.prototype.hideSpinner = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.has-toolbar'),
        __metadata("design:type", Object)
    ], WooAccountComponent.prototype, "classes", void 0);
    WooAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'woo-account',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-account/woo-account.html"*/'<ion-toolbar class="woo-account-toolbar" color="light">\n	<ion-grid>\n		<ion-row>\n			<ion-col text-center>\n				<button ion-button clear block (click)="showOrders()">{{ \'Orders\' | translate }}</button>\n			</ion-col>\n			<ion-col text-center>\n				<button ion-button clear block (click)="showAccount()">{{ \'Account\' | translate }}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-toolbar>\n\n<div class="woo-account-wrap" padding *ngIf="order_id || login_data">\n\n	<div *ngIf="order_id && !showOrdersBool && !showAccountBool">\n		<h2>{{ \'Your Order\' | translate }}</h2>\n\n		<ion-list *ngIf="orderConfirmation">\n\n			<ion-item *ngFor="let item of orderConfirmation.line_items">\n				<p class="item-name">{{item.name}}</p>\n				<p class="item-total">{{item.total}}</p>\n			</ion-item>\n			<ion-item>\n				<p><strong>{{ \'Total:\' | translate }} {{orderConfirmation.total}}</strong></p>\n				<p>{{ \'Status:\' | translate }} {{orderConfirmation.status}}</p>\n				<p>{{ \'Number:\' | translate }} {{orderConfirmation.number}}</p>\n			</ion-item>\n		</ion-list>\n\n	</div>\n\n	<div class="woo-orders" *ngIf="login_data && orders?.length && showOrdersBool">\n\n		<ion-list no-lines class="order-list" *ngFor="let order of orders">\n\n			<h4>{{ \'Order number:\' | translate }} {{order.number }}</h4>\n\n			<ion-item>\n				<p>{{ \'Order date:\' | translate }} {{order.date_created }}</p>\n				<p>{{ \'Order total:\' | translate }} {{order.total }}</p>\n				<p>{{ \'Order Status:\' | translate }} {{order.status}}</p>\n				<p>{{ \'Payment method:\' | translate }} {{ order.payment_method_title }}</p>\n			</ion-item>\n\n			<ion-item class="order-item" *ngFor="let item of order.line_items">\n				<p class="item-name"><strong>{{item.name}}</strong></p>\n				<p class="item-total">{{item.total}}</p>\n			</ion-item>\n\n		</ion-list>\n\n	</div>\n\n	<div class="account-details" *ngIf="login_data && showAccountBool">\n		<ion-list *ngIf="account">\n			<ion-item>\n				<button *ngIf="accountUrl" ion-button outline item-end  icon-start (click)="iabLink( accountUrl )"><ion-icon name="create"></ion-icon> {{ \'Edit Account\' | translate }}</button>\n				<ion-avatar item-start class="account-avatar">\n			      <img [src]="formatAvatar( account.avatar_url )" >\n			    </ion-avatar>\n				<h2>{{ account.first_name }} {{ account.last_name }}</h2>\n			</ion-item>\n			<ion-item>\n				{{ \'Email:\' | translate }} {{ account.email }}\n			</ion-item>\n			<ion-item *ngIf="account.billing.address_1 != \'\'">\n				<strong>{{ \'Billing Details\' | translate }}</strong>\n				<ion-item>\n					<p>{{ account.billing.address_1 }} {{ account.billing.address_2 }}</p>\n					<p>{{ account.billing.city }} {{ account.billing.state }} {{ account.billing.postcode }}</p>\n				</ion-item>\n			</ion-item>\n			<ion-item *ngIf="account.shipping.address_1 != \'\'">\n				<strong>{{ \'Shipping Details\' | translate }}</strong>\n				<ion-item>\n					<p>{{ account.shipping.address_1 }} {{ account.shipping.address_2 }}</p>\n					<p>{{ account.shipping.city }} {{ account.shipping.state }} {{ account.shipping.postcode }}</p>\n				</ion-item>\n			</ion-item>\n		</ion-list>\n	</div>\n\n</div>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/woo-account/woo-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], WooAccountComponent);
    return WooAccountComponent;
}());

//# sourceMappingURL=woo-account.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApForm = /** @class */ (function () {
    function ApForm(navCtrl, navParams, storage, viewCtrl, events, toastCtrl, loadingCtrl, platform, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.iab = iab;
        this.amount = false;
        this.email = true;
        this.firstName = false;
        this.lastName = false;
        this.message = false;
        this.currencySymbol = "$";
    }
    ApForm.prototype.ngAfterViewInit = function () {
        if (!this.url || this.url === '') {
            this.presentToast("No form URL set.");
        }
    };
    ApForm.prototype.submitForm = function (form) {
        var params = this.objToParams(form.value);
        var concat;
        // check if url already has a query param
        if (this.url.indexOf('?') > 0) {
            concat = '&';
        }
        else {
            concat = '?';
        }
        this.createBrowser(this.url + concat + params);
    };
    ApForm.prototype.createBrowser = function (url) {
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            alert('Redirecting, please try from a device for a better experience.');
            window.open(url, '_blank');
            return;
        }
        this.browser = this.iab.create(url, '_blank');
    };
    ApForm.prototype.objToParams = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    ApForm.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    ApForm.prototype.showSpinner = function () {
        // create only one spinner
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                showBackdrop: false,
                dismissOnPageChange: false
            });
            this.loading.present();
        }
    };
    ApForm.prototype.hideSpinner = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApForm.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApForm.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApForm.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApForm.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApForm.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApForm.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApForm.prototype, "currencySymbol", void 0);
    ApForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-form',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-form/ap-form.html"*/'<form (ngSubmit)="submitForm(apForm)" #apForm="ngForm">\n\n  <ion-list inset>\n\n    <ion-item *ngIf="amount" class="ap-form-amount">\n      <ion-label stacked>{{ \'Enter an amount\' | translate }}</ion-label>\n      <ion-input ngModel name="amount" type="text" placeholder="{{ currencySymbol + \'25\' | translate }}"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="firstName" class="ap-form-text">\n      <ion-label stacked>{{ \'First Name\' | translate }}</ion-label>\n      <ion-input ngModel name="first" type="text" placeholder="{{ \'First Name\' | translate }}"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="lastName" class="ap-form-text">\n      <ion-label stacked>{{ \'Last Name\' | translate }}</ion-label>\n      <ion-input ngModel name="last" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="email" class="ap-form-email">\n      <ion-label stacked>{{ \'Your Email\' | translate }}</ion-label>\n      <ion-input ngModel name="email" type="email"  autocomplete="true"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="message" class="ap-form-textarea">\n      <ion-label stacked>{{ \'Message\' | translate }}</ion-label>\n      <ion-textarea ngModel name="message"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n  \n  <div padding class="ap-form-submit">\n    <button ion-button type="submit" block>{{ \'Continue\' | translate }}</button>\n  </div>\n\n</form>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-form/ap-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ApForm);
    return ApForm;
}());

//# sourceMappingURL=ap-form.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApIapForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wplogin_wplogin__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inapppurchase_inapppurchase__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appads_appads__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApIapForm = /** @class */ (function () {
    function ApIapForm(navCtrl, navParams, storage, viewCtrl, events, toastCtrl, loadingCtrl, platform, iap, wplogin, translate, appads) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.iap = iap;
        this.wplogin = wplogin;
        this.translate = translate;
        this.appads = appads;
        this.email = true;
        this.firstName = false;
        this.lastName = false;
        this.currencySymbol = "$";
        this.removeAds = false;
        this.skipRegistration = false;
        this.isIos = false;
        this.listeners();
    }
    ApIapForm.prototype.listeners = function () {
        var _this = this;
        this.events.subscribe('user:login', function (login_data) {
            if (login_data) {
                _this.login_data = login_data;
            }
        });
        this.events.subscribe('user:logout', function (response) {
            _this.login_data = null;
        });
    };
    ApIapForm.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.productId && !this.productIdAndroid) {
            this.presentToast("Product ID is required.");
        }
        if (this.secret) {
            this.storage.set('iap_secret', this.secret);
        }
        if (this.opens) {
            this.storage.set('iap_open_count_user_setting', this.opens);
        }
        if (this.platform.is('ios')) {
            this.isIos = true;
        }
        this.storage.get('user_login').then(function (login_data) {
            if (login_data)
                _this.login_data = login_data;
        });
    };
    // If we have 2 product IDs, get the right one
    ApIapForm.prototype.getProductId = function () {
        if (this.productIdAndroid && this.platform.is('android')) {
            return this.productIdAndroid;
        }
        else {
            return this.productId;
        }
    };
    ApIapForm.prototype.submitForm = function (form) {
        var fields = form.value;
        console.log(fields);
        if (this.noLogin != 'true' && !fields.skipRegistration) {
            // only validate if fields are needed
            if (!this.login_data && !fields.username || !this.login_data && !fields.password || !fields.email) {
                this.presentToast('Please fill out all fields.');
                return;
            }
        }
        if (this.removeAds) {
            fields.removeAds = true;
        }
        if (this.login_data && this.login_data.user_id) {
            fields.user_id = this.login_data.user_id;
        }
        if (this.isSubscription != "false") {
            // are we restoring a purchase?
            if (fields.restore === true) {
                this.restoreSubscription(fields);
            }
            else {
                this.subscribe(fields);
            }
        }
        else {
            this.buyProduct(fields);
        }
    };
    ApIapForm.prototype.buyProduct = function (fields) {
        var _this = this;
        console.log('buyProduct', fields);
        var id = this.getProductId();
        if (fields.restore === true) {
            this.iap.restorePurchase(id, fields).then(function (result) {
                _this.presentToast('Purchase restored!');
                if (fields.removeAds === true) {
                    _this.removeAppAds();
                }
            }).catch(function (err) {
                _this.presentToast("There was a problem with your purchase " + err);
            });
        }
        else {
            this.iap.buy(id, fields).then(function (result) {
                _this.purchaseSuccess(result, fields);
            }).catch(function (err) {
                _this.presentToast("There was a problem with your purchase " + err);
            });
        }
    };
    ApIapForm.prototype.subscribe = function (fields) {
        var _this = this;
        console.log(fields);
        this.showSpinner();
        var productId = this.getProductId();
        this.iap.subscribe(productId).then(function (transactionId) {
            console.log('purchase transactionId', transactionId);
            _this.purchaseSuccess(transactionId, fields);
        }).catch(function (e) {
            console.warn(e);
            _this.translate.get(e).subscribe(function (text) {
                _this.presentToast(e);
            });
        }).then(function () {
            _this.hideSpinner();
        });
    };
    ApIapForm.prototype.restoreSubscription = function (fields) {
        var _this = this;
        var productId = this.getProductId();
        this.iap.restoreSubscription(productId).then(function (transactionId) {
            console.log(transactionId);
            // transactionID number if successful, false if no purchase to restore
            if (transactionId) {
                // log the user in after purchase
                _this.handleWpLogin(fields, null);
                if (fields.removeAds === true) {
                    _this.removeAppAds();
                }
            }
        }).catch(function (e) {
            console.warn(e);
            _this.translate.get(e).subscribe(function (text) {
                _this.presentToast(e);
            });
        });
    };
    ApIapForm.prototype.purchaseSuccess = function (transactionId, fields) {
        var _this = this;
        // in some cases we don't need to communicate with WP, like for removing ads
        if (this.noLogin === "true") {
            this.translate.get('Purchase successful, thank you!').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
        else {
            // log the user in after purchase
            this.handleWpLogin(fields, transactionId);
        }
        // maybe remove ads
        if (fields.removeAds === true) {
            this.removeAppAds();
        }
    };
    // send the data to WP
    // if the user doesn't exist, register them
    // log them in and add user meta of in_app_purchase = true
    ApIapForm.prototype.handleWpLogin = function (fields, transactionId) {
        var _this = this;
        // in some cases we don't need to communicate with WP, like for removing ads
        if (this.noLogin === "true") {
            return;
        }
        // this user does not want to be registered, but we still have to let them access the content
        if (fields.skipRegistration) {
            this.loginSuccess({ name: "Anonymous", email: "anonymous@anon.com", message: "" });
        }
        this.showSpinner();
        this.translate.get('Purchase successful! Logging you in...').subscribe(function (text) {
            _this.presentToast(text);
        });
        this.wplogin.iapRegisterLogIn(fields, transactionId).then(function (data) {
            console.log(data);
            _this.loginSuccess(data);
        }).catch(function (err) {
            console.warn(err);
            _this.presentToast('There was a problem, please contact support.');
        }).then(function () {
            _this.hideSpinner();
        });
    };
    ApIapForm.prototype.loginSuccess = function (login_data) {
        var _this = this;
        this.storage.set('user_login', login_data);
        this.events.publish('user:login', login_data);
        this.translate.get("Success! Please use the app menu to access your content.").subscribe(function (text) {
            _this.presentToast(text);
        });
    };
    ApIapForm.prototype.removeAppAds = function () {
        console.log('removing app ads');
        this.storage.set('purchased_ad_removal', true);
        this.appads.hideAll();
    };
    ApIapForm.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    ApIapForm.prototype.showSpinner = function () {
        // create only one spinner
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                showBackdrop: false,
                dismissOnPageChange: false
            });
            this.loading.present();
        }
    };
    ApIapForm.prototype.hideSpinner = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApIapForm.prototype, "productId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApIapForm.prototype, "productIdAndroid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApIapForm.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApIapForm.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApIapForm.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApIapForm.prototype, "currencySymbol", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ApIapForm.prototype, "isSubscription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ApIapForm.prototype, "opens", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApIapForm.prototype, "secret", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApIapForm.prototype, "removeAds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApIapForm.prototype, "noLogin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApIapForm.prototype, "skipRegistration", void 0);
    ApIapForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'in-app-purchase',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-iap-form/ap-iap-form.html"*/'<form (ngSubmit)="submitForm(iapForm)" #iapForm="ngForm">\n\n  <ion-list>\n\n    <ion-item *ngIf="firstName" class="ap-form-text">\n      <ion-label>{{ \'First Name\' | translate }}</ion-label>\n      <ion-input ngModel name="first" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="lastName" class="ap-form-text">\n      <ion-label>{{ \'Last Name\' | translate }}</ion-label>\n      <ion-input ngModel name="last" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="email && noLogin != \'true\'" class="ap-form-email">\n      <ion-label>{{ \'Your Email\' | translate }}</ion-label>\n      <ion-input ngModel name="email" type="email"  autocomplete="true"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!login_data && noLogin != \'true\'" class="ap-form-text">\n      <ion-label>{{ \'Username\' | translate }}</ion-label>\n      <ion-input ngModel name="username" type="text"  autocorrect="off" autocapitalize="none"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!login_data && noLogin != \'true\'" class="ap-form-text">\n      <ion-label>{{ \'Password\' | translate }}</ion-label>\n      <ion-input ngModel name="password" type="text"  autocorrect="off" autocapitalize="none"></ion-input>\n    </ion-item>\n    \n    <div class="ap-form-checkbox">\n      <input type="checkbox" ngModel name="restore" aria-checked="false" checked="false"> <label for="restore">{{ \'Restore purchase?\' | translate }}</label>\n    </div>\n\n  </ion-list>\n  \n  <div padding class="ap-form-submit">\n    <button ion-button type="submit" block>{{ \'Purchase\' | translate }}</button>\n  </div>\n\n  <p *ngIf="isIos && isSubscription != \'false\'" class="manage-subscriptions-link"><a href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions" target="_system">Manage subscription</a></p>\n\n  \n  <div class="ap-form-checkbox skip-registration" *ngIf="isIos">\n    <input type="checkbox" ngModel name="skipRegistration" aria-checked="false" checked="false"> <label for="skipRegistration">{{ \'Check to disable registering your name and email in our system. You may not be able to login to access your content.\' | translate }}</label>\n  </div>\n\n</form>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/ap-iap-form/ap-iap-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_inapppurchase_inapppurchase__["a" /* IAP */],
            __WEBPACK_IMPORTED_MODULE_3__providers_wplogin_wplogin__["a" /* WPlogin */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appads_appads__["a" /* AppAds */]])
    ], ApIapForm);
    return ApIapForm;
}());

//# sourceMappingURL=ap-iap-form.js.map

/***/ })

});
//# sourceMappingURL=0.js.map