webpackJsonp([4],{

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WooDetailModule", function() { return WooDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_detail__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_woo_slider_woo_slider_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_star_rating_star_rating_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WooDetailModule = /** @class */ (function () {
    function WooDetailModule() {
    }
    WooDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_detail__["a" /* WooDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_detail__["a" /* WooDetail */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_woo_slider_woo_slider_module__["a" /* WooSliderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */]
            ],
        })
    ], WooDetailModule);
    return WooDetailModule;
}());

//# sourceMappingURL=woo-detail.module.js.map

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

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appdata_myappp_settings_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var WooDetail = /** @class */ (function () {
    function WooDetail(navCtrl, navParams, sanitizer, storage, toastCtrl, modalCtrl, wooProvider, events, elementRef, renderer, myapppsettings, socialSharing, translate, inAppBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.wooProvider = wooProvider;
        this.events = events;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.myapppsettings = myapppsettings;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.inAppBrowser = inAppBrowser;
        this.noResults = false;
        this.moreReviewsExist = false;
        this.itemAdded = false;
        this.productLoaded = false;
        if (!this.navParams.get('item'))
            return;
        this.loadProduct();
        events.subscribe('cart_change', function (count) {
            _this.cart_count = count;
        });
        // make sure cart count is always updated on initial load
        this.getCartFromAPI();
    }
    WooDetail.prototype.ionViewWillEnter = function () {
        this.getCartCount();
    };
    WooDetail.prototype.ionViewWillLeave = function () {
        this.resetOptions();
    };
    WooDetail.prototype.getCartCount = function () {
        var _this = this;
        this.storage.get('cart_count').then(function (data) {
            if (data) {
                _this.cart_count = data;
            }
        });
    };
    WooDetail.prototype.getCartFromAPI = function () {
        var _this = this;
        this.wooProvider.getCartContents().then(function (cart) {
            _this.cart_count = (cart && typeof cart != 'string' && cart.cart_total ? cart.cart_total.cart_contents_count : 0);
            // don't need to save count to storage, it's already saved in woo.ts
        }).catch(function (e) {
            console.warn(e);
        });
    };
    WooDetail.prototype.loadProduct = function () {
        var _this = this;
        this.selectedItem = this.navParams.get('item');
        console.log(this.selectedItem);
        if (this.selectedItem.description) {
            this.description = this.sanitizer.bypassSecurityTrustHtml(this.selectedItem.description);
        }
        else {
            this.description = '';
        }
        if (this.selectedItem.type === 'variable') {
            this.getVariations();
        }
        else if (this.selectedItem.type === 'grouped') {
            this.getGroupedProducts();
        }
        else {
            this.productLoaded = true;
        }
        setTimeout(function () {
            _this.getProductReviews();
        }, 1500);
        if (!this.selectedItem.quantity) {
            this.selectedItem.quantity = 1;
        }
        if (this.selectedItem.images.length) {
            this.productImages = this.selectedItem.images;
        }
        this.wooProvider.getCurrencySymbol().then(function (symbol) {
            _this.currencySymbol = symbol;
        });
        this.listener();
    };
    // remove attributes that are used for variations
    WooDetail.prototype.getAvailableAttributes = function () {
        this.availableAttributes = this.selectedItem.attributes.filter(function (attribute) {
            if (attribute.variation) {
                return attribute;
            }
        });
    };
    WooDetail.prototype.attributeChanged = function (value, attribute) {
        // bail on form reset
        if (!value.length) {
            return;
        }
        // get rid of all dashes, fixes a bug
        value = value.replace(/-/g, " ");
        this.noResults = false;
        // find variations with this attribute in them, and filter
        var getVariations = this.filteredVariations.filter(function (variation) {
            for (var i = 0; i < variation.attributes.length; ++i) {
                // fix bugs with special characters
                var decoded = decodeURIComponent(variation.attributes[i].option);
                decoded = decoded.replace(/-/g, " ");
                if (variation.attributes[i].name === attribute.name && decoded === value) {
                    return variation;
                }
            }
        });
        // if there are no results, we don't want to wipe the array, just display a notice
        if (!getVariations.length) {
            this.noResults = true;
            attribute.highlight = true;
        }
        else {
            attribute.disabled = true;
            this.filteredVariations = getVariations;
            attribute.highlight = false;
        }
        if (this.filteredVariations.length === 1) {
            this.productImages = [this.filteredVariations[0].image];
        }
    };
    WooDetail.prototype.resetOptions = function () {
        if (!this.selectedItem || !this.availableAttributes)
            return;
        this.filteredVariations = this.variations;
        for (var i = 0; i < this.availableAttributes.length; ++i) {
            this.availableAttributes[i].disabled = false;
            this.availableAttributes[i].highlight = false;
        }
        this.productImages = this.selectedItem.images;
        this.noResults = false;
        this.addToCartForm.reset();
    };
    WooDetail.prototype.increment = function (item) {
        item.quantity = parseInt(item.quantity) + 1;
    };
    /**
     * Decrease quantity by one only if bigger than 1
     * @param {*} item
     */
    WooDetail.prototype.decrement = function (item) {
        var quantity = parseInt(item.quantity);
        if (quantity > 1) {
            item.quantity = quantity - 1;
        }
    };
    WooDetail.prototype.addToCart = function (form) {
        var item = form.value;
        if (item.quantity === 0) {
            this.presentToast('Please select a quantity.');
            return;
        }
        if (this.selectedItem.type === 'grouped') {
            this.addGroupedItem(item);
            this.instantAdd(item, true);
        }
        else if (this.selectedItem.type === 'external') {
            window.open(this.selectedItem.external_url, '_blank');
            return;
        }
        else if (this.selectedItem.type === 'composite') {
            return;
        }
        else {
            this.addSingleItem(item);
            this.instantAdd(item, false);
        }
    };
    // we show success right away to enhance perceived speed
    // only if there is an error we alert the user
    WooDetail.prototype.instantAdd = function (item, grouped) {
        var _this = this;
        // flash cart icon
        this.itemAdded = true;
        setTimeout(function () {
            _this.itemAdded = false;
        }, 1000);
    };
    WooDetail.prototype.addSingleItem = function (item) {
        var _this = this;
        if (this.variations && this.variations.length) {
            // don't allow adding to cart if attributes are not all selected
            for (var i = 0; i < this.availableAttributes.length; ++i) {
                // if attributes are not all selected, you can still add item to cart if there is one variation we narrowed it down to. Otherwise you can't add to cart.
                if (!this.availableAttributes[i].disabled && this.filteredVariations.length > 1) {
                    this.translate.get('Please choose available options first.').subscribe(function (text) {
                        _this.presentToast(text);
                    });
                    return;
                }
            }
            // this handles duplicate variations
            if (this.filteredVariations && this.filteredVariations.length >= 1) {
                item.variation_id = this.filteredVariations[0].id;
            }
            if (item.variation_id === undefined) {
                this.translate.get('Not available, please select different options.').subscribe(function (text) {
                    _this.presentToast(text);
                });
                return;
            }
        }
        this.translate.get('added to cart').subscribe(function (text) {
            _this.presentToast(_this.selectedItem.name + ' ' + text);
        });
        item.name = this.selectedItem.name;
        item.product_id = this.selectedItem.id;
        item.price = this.selectedItem.price;
        item.quantity = this.selectedItem.quantity;
        this.wooProvider.addToCart(item).then(function (data) {
            _this.productAddSuccess(item);
        }).catch(function (e) {
            _this.productAddError(e);
            console.warn(e);
        });
    };
    WooDetail.prototype.addToList = function () {
        var _this = this;
        this.storage.get('woo_saved_items').then(function (items) {
            if (!items) {
                items = [_this.selectedItem];
            }
            else {
                var inArray = false;
                for (var i = items.length - 1; i >= 0; i--) {
                    if (items[i].id === _this.selectedItem.id) {
                        inArray = true;
                        break;
                    }
                }
                // Don't add duplicate favs
                if (inArray === false) {
                    items.push(_this.selectedItem);
                }
            }
            _this.storage.set('woo_saved_items', items);
        });
        this.presentToast(this.selectedItem.name + ' added to list.');
    };
    WooDetail.prototype.addGroupedItem = function (item) {
        console.log(item, item.quantity);
        this.presentToast(this.selectedItem.name + ' added to cart.');
        var that = this;
        // using async/await with promise inside loop
        (function loop() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, id;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = [];
                            for (_b in item)
                                _a.push(_b);
                            _i = 0;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            id = _a[_i];
                            return [4 /*yield*/, that.addGroupItemToCart(id, item)];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        })();
    };
    WooDetail.prototype.addGroupItemToCart = function (id, formValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var item = {};
            item.product_id = id;
            var productObject = _this.groupedProducts.filter(function (obj) {
                if (obj.id === parseInt(id)) {
                    return obj;
                }
            });
            // console.log(productObject[0])
            item.name = (productObject[0] ? productObject[0].name : '');
            item.product_id = id;
            item.price = (productObject[0] ? productObject[0].price : '');
            item.quantity = (productObject[0] ? productObject[0].quantity : 1);
            // add variation id if this is a variable product
            if (formValues[id + '_variation_id']) {
                item.variation_id = formValues[id + '_variation_id'];
            }
            // hacky fix because of the way our object is
            if (item.product_id.indexOf('variation_id') >= 0) {
                return;
            }
            console.log('item before add to cart', item);
            _this.wooProvider.addToCart(item).then(function (data) {
                _this.productAddSuccess(item);
            }).catch(function (e) {
                console.warn(e);
                _this.productAddError(e);
            }).then(function () { return resolve(); });
        });
    };
    WooDetail.prototype.productAddSuccess = function (item) {
        var quantity = (item.quantity ? item.quantity : 1);
        this.cart_count = this.cart_count + quantity;
        this.storage.set('cart_count', this.cart_count);
        this.events.publish('cart_change', this.cart_count);
        // maybe reset options
        if (this.availableAttributes) {
            for (var i = 0; i < this.availableAttributes.length; ++i) {
                this.availableAttributes[i].disabled = false;
                this.availableAttributes[i].highlight = false;
            }
            this.filteredVariations = this.variations;
        }
    };
    WooDetail.prototype.productAddError = function (e) {
        var msg;
        if (e.error && e.error.message) {
            msg = e.error.message;
        }
        else {
            msg = 'There was a problem, your item was not added to the cart.';
        }
        this.presentToast(msg);
    };
    // grouped products just give us the IDs in the API response, so we need to go get each grouped product's details so we can add it to the cart with price, name, etc. Grouped products get added as individual products in the cart.
    WooDetail.prototype.getGroupedProducts = function () {
        var _this = this;
        this.groupedProducts = [];
        for (var i = 0; i < this.selectedItem.grouped_products.length; ++i) {
            this.wooProvider.get('products/' + this.selectedItem.grouped_products[i], 'nopaging').then(function (product) {
                if (!product.quantity) {
                    product.quantity = 1;
                }
                // if we have a variable product as part of the groupe, we have to get all the options and display those for the user to choose from
                if (product.type === 'variable') {
                    _this.productLoaded = false;
                    _this.getGroupedVariation(product.id).then(function (variations) {
                        product.groupVariations = variations;
                        _this.groupedProducts.push(product);
                        _this.productLoaded = true;
                        console.log('grouped', _this.groupedProducts);
                    });
                }
                else {
                    _this.groupedProducts.push(product);
                    _this.productLoaded = true;
                }
            }).catch(function (e) {
                console.warn(e);
            });
        }
    };
    WooDetail.prototype.getGroupedVariation = function (productId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.wooProvider.get('products/' + productId + '/variations', 'nopaging').then(function (variations) {
                console.log('getGroupedVariation variations', variations);
                resolve(variations);
            }).catch(function (e) {
                console.warn(e);
                resolve([]);
            });
        });
    };
    WooDetail.prototype.verifyVariations = function () {
        var _this = this;
        if (this.selectedItem.type == 'variable') {
            var can_purchase_1 = true;
            if (this.variations && this.variations.length) {
                this.variations.forEach(function (variation, index) {
                    // console.log('verifyVariations variation', variation);
                    if (_this.myapppsettings.isPreview() && can_purchase_1 && variation.price === '' && variation.purchasable === false) {
                        can_purchase_1 = false;
                        console.warn('This variation can not be purchased, because no price has been set', variation);
                        alert('Admin Notice: You have a variation that has no price and cannot be purchased. You can view the JavaScript console to see which one.');
                    }
                });
            }
        }
    };
    WooDetail.prototype.getVariations = function (arg) {
        var _this = this;
        if (arg === void 0) { arg = null; }
        var param = (arg ? '/?' + arg : '');
        this.wooProvider.get('products/' + this.selectedItem.id + '/variations' + param, 'nopaging').then(function (variations) {
            //console.log('getVariations variations', variations)
            _this.variations = variations;
            _this.filteredVariations = variations;
            _this.getAvailableAttributes();
            _this.verifyVariations();
        }).catch(function (e) {
            console.warn(e);
        }).then(function () {
            _this.productLoaded = true;
        });
    };
    WooDetail.prototype.getProductReviews = function () {
        var _this = this;
        this.wooProvider.get('products/reviews/?product=' + this.selectedItem.id + '&per_page=5', 1).then(function (reviews) {
            console.log('reviews', reviews);
            _this.reviews = reviews;
            if (_this.reviews && _this.reviews.length >= 5) {
                _this.moreReviewsExist = true;
            }
        }).catch(function (e) {
            console.warn(e);
        });
    };
    WooDetail.prototype.moreReviews = function () {
        this.navCtrl.push('CommentsPage', { route: 'products/reviews/?product=' + this.selectedItem.id + '&per_page=20', title: this.selectedItem.name, woo: true });
    };
    WooDetail.prototype.getRelatedRoute = function () {
        if (this.selectedItem.related_ids.length) {
            return 'products?include=' + this.selectedItem.related_ids;
        }
    };
    WooDetail.prototype.listener = function () {
        var _this = this;
        // remove listener first so we don't set it multiple times
        if (this.listenFunc) {
            this.listenFunc();
        }
        // Listen for link clicks, open in in app browser
        this.listenFunc = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            _this.iabLinks(event.target);
        });
    };
    WooDetail.prototype.iabLinks = function (el) {
        console.log('iabLinks', el);
        var target = '_blank';
        if (el.href && el.href.indexOf('http') >= 0) {
            if (el.classList && el.classList.contains('system'))
                target = '_system';
            event.preventDefault();
            this.iab(el.href, target);
        }
    };
    WooDetail.prototype.iab = function (url, target) {
        var _this = this;
        if (!target) {
            target = '_blank';
        }
        var browser = this.inAppBrowser.create(url + '?appcommerce=1', '_blank');
        browser.on('exit').subscribe(function (data) {
            console.log('browser closed', data);
            // update cart in case items were changed on site
            _this.getCartFromAPI();
        });
    };
    WooDetail.prototype.productSiteLink = function (url) {
        var _this = this;
        this.translate.get('You are visiting our site to add this product. Return to the app after adding to your cart by pressing done on iOS or the X on Android.').subscribe(function (text) {
            alert(text);
            _this.iab(url, '_blank');
        });
    };
    WooDetail.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooDetail.prototype.showCart = function () {
        var cartPage = this.wooProvider.getWooPage('cart');
        if (!cartPage) {
            this.presentToast("No cart page set.");
            return;
        }
        var cartModule = this.getPageModuleName(cartPage.page_id);
        this.navCtrl.push(cartModule, cartPage);
    };
    WooDetail.prototype.share = function () {
        this.socialSharing.share(this.selectedItem.name, null, null, this.selectedItem.permalink).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    WooDetail.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    WooDetail.prototype.openImageModal = function (imageSrc) {
        var imageModal = this.modalCtrl.create('ImageModal', { src: imageSrc }, { cssClass: 'image-modal' });
        imageModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addToCartForm'),
        __metadata("design:type", Object)
    ], WooDetail.prototype, "addToCartForm", void 0);
    WooDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-woo-detail',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/woo-detail/woo-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n	<ion-buttons start>\n		<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-buttons>\n	\n    <ion-title *ngIf="selectedItem?.name"><span [innerHTML]="selectedItem.name"></span></ion-title>\n\n    <ion-buttons end>\n		<button ion-button (click)="showCart()" [ngClass]="{ \'item-added\' : itemAdded  }">\n			<ion-icon name="cart"></ion-icon>\n			<ion-badge color="clear" item-end>{{cart_count}}</ion-badge>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n <section *ngIf="selectedItem" class="single-product">\n\n 	<ion-slides pager class="single-product-images" *ngIf="selectedItem.images">\n\n	  <ion-slide *ngFor="let image of productImages" (click)="openImageModal(image.src)">\n		<img src="{{image.src}}" class="product-image" />\n	  </ion-slide>\n\n	</ion-slides>\n\n	<div class="single-product-content">\n\n		<button class="product-share" ion-button icon-only clear (click)="share()"><ion-icon name="ios-share-outline"></ion-icon></button>\n\n	    <h2 class="product-title" [innerHTML]="selectedItem.name"></h2>\n\n	    <p *ngIf="selectedItem.price_html" class="product-price" [innerHTML]="selectedItem.price_html"></p>\n\n	    <p *ngIf="!selectedItem.price_html && selectedItem.price">{{ selectedItem.price }}</p>\n\n	    <star-rating [rating]="selectedItem.average_rating"></star-rating>\n\n		<div class="product-description" *ngIf="description" [innerHTML]="description"></div>\n\n		<p *ngIf="selectedItem.in_stock" class="product-stock">{{ \'✓ In Stock.\' | translate }}</p>\n\n		<p *ngIf="selectedItem.stock_status === \'outofstock\'" class="product-error out-of-stock">{{ \'Out of Stock.\' | translate }}</p>\n\n		<button *ngIf="variations?.length" block ion-button clear icon-start (click)="resetOptions()"><ion-icon name="refresh"></ion-icon> {{ \'Reset Options\' | translate }}</button>\n\n		<form (ngSubmit)="addToCart(addToCartForm)" #addToCartForm="ngForm">\n\n			<div class="loading-squares loading-squares-vertical" *ngIf="selectedItem.type === \'variable\' && !availableAttributes?.length">\n			 <div class="loading-square">\n			 </div>\n			 <div class="loading-square">\n			 </div>\n			</div>\n\n			<div *ngIf="variations?.length && availableAttributes?.length">\n				<ion-item *ngFor="let attribute of availableAttributes">\n				  <ion-label stacked>{{attribute.name}}</ion-label>\n				  <ion-select [ngClass]="{ \'attribute-highlight\' : attribute.highlight }" [disabled]="attribute.disabled" (ionChange)="attributeChanged( $event, attribute )" ngModel name="{{attribute.name}}-{{attribute.id}}" >\n				    <ion-option *ngFor="let option of attribute.options" value="{{option}}">\n				      {{option}}\n				    </ion-option>\n				  </ion-select>\n				</ion-item>\n			</div>\n\n			<p class="product-error" *ngIf="noResults">{{ \'These options may not be available.\' | translate }}</p>\n			\n			<div *ngIf="groupedProducts?.length">\n				<ion-grid *ngFor="let groupProd of groupedProducts">\n					<ion-row class="grouped-product">\n						<ion-col col-6>\n							<span class="product-name">{{groupProd.name}}</span>\n							<div *ngIf="groupProd.groupVariations">\n								<ion-item *ngIf="groupProd.groupVariations.length">\n									<ion-label stacked>Options</ion-label>\n									<ion-select ngModel name="{{groupProd.id}}_variation_id">\n										<ion-option *ngFor="let variation of groupProd.groupVariations" value="{{variation.id}}">\n											<span class="currency-symbol" *ngIf="currencySymbol" [innerHTML]="currencySymbol"></span>{{variation.price}} - \n											<div *ngFor="let attr of variation.attributes">\n												{{attr.name}} : {{attr.option}}\n											</div>\n										</ion-option>\n									</ion-select>\n								</ion-item>\n							</div>\n						</ion-col>\n						<ion-col col-3>\n							<span class="product-price" [innerHTML]="groupProd.price_html"></span>\n						</ion-col>\n						<ion-col col-3 text-center class="product-quantity">\n							<ion-icon item-start name="remove-circle" (click)="decrement( groupProd )"></ion-icon>\n							<span>{{ groupProd.quantity }}</span>\n							<ion-icon item-end name="add-circle" (click)="increment( groupProd )"></ion-icon>\n						</ion-col>\n					</ion-row>\n					<ion-input type="hidden" ngModel name="{{groupProd.id}}"></ion-input>\n				</ion-grid>\n			</div>\n\n			<ion-item class="product-quantity" *ngIf="!groupedProducts?.length && productLoaded && selectedItem.price">\n				<ion-icon name="remove-circle" (tap)="decrement( selectedItem )" item-start></ion-icon>\n				<ion-label>{{ selectedItem.quantity }}</ion-label>\n				\n				<ion-icon name="add-circle" (tap)="increment( selectedItem )" item-end></ion-icon>\n			</ion-item>\n			\n			<button *ngIf="productLoaded && selectedItem.type === \'composite\'" ion-button block (tap)="productSiteLink(selectedItem.permalink)">{{ \'Choose options on website\' | translate }}</button>\n\n			<button *ngIf="productLoaded && selectedItem.type != \'composite\' && selectedItem.price" ion-button type="submit" block>{{ \'Add to Cart\' | translate }}</button>\n\n		</form>\n\n		<ion-item class="add-to-list" *ngIf="productLoaded">\n			<span class="add-to-list-text">{{ \'Save for later?\' | translate }}</span>\n			<button class="add-to-list-btn" (tap)="addToList()" ion-button color="light" item-end icon-start><ion-icon name="add"></ion-icon> {{ \'Add to List\' | translate }}</button>\n		</ion-item>\n\n		<div *ngIf="reviews?.length" class="product-reviews">\n\n			<hr>\n\n			<h2>{{ \'Reviews\' | translate }}</h2>\n			<ion-list>\n				<ion-item text-wrap *ngFor="let review of reviews">\n					<ion-avatar item-start *ngIf="review.reviewer_avatar_urls">\n				      <img [src]="review.reviewer_avatar_urls[\'48\']" class="reviewer-avatar">\n				    </ion-avatar>\n\n				    <h3 class="reviewer-name">{{ review.reviewer }}</h3>\n\n				    <star-rating [rating]="review.rating"></star-rating>\n\n				    <div [innerHTML]="review.review"></div>\n				    <!--p class="review-date">{{ review.date_created }}</p-->\n				</ion-item>\n			</ion-list>\n\n			<button ion-button block color="light" *ngIf="moreReviewsExist" (click)="moreReviews()"> {{ \'All Reviews\' | translate }}</button>\n		</div>\n\n		<div class="related-products" *ngIf="selectedItem.related_ids?.length">\n\n			<h3>{{ \'Related Products\' | translate }}</h3>\n\n			<woo-slider [route]="getRelatedRoute()"></woo-slider>\n\n		</div>\n\n	</div>\n </section>\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/woo-detail/woo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_8__providers_appdata_myappp_settings_service__["a" /* MyApppSettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], WooDetail);
    return WooDetail;
}());

//# sourceMappingURL=woo-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map