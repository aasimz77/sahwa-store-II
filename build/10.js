webpackJsonp([10],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */]
            ],
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());

//# sourceMappingURL=comments.module.js.map

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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, wooProvider, postProvider, loadingCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.postProvider = postProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.page = 1;
        this.isWooReviews = false;
        if (this.navParams.get('route')) {
            this.route = this.navParams.get('route');
        }
        else {
            return;
        }
        if (this.navParams.get('woo')) {
            this.isWooReviews = true;
        }
        // console.log('route ' + this.route)
        this.title = this.navParams.get('title');
        this.loadItems(this.route);
    }
    CommentsPage.prototype.loadItems = function (route) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        if (this.isWooReviews) {
            this.provider = this.wooProvider;
        }
        else {
            this.provider = this.postProvider;
        }
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.provider.get(route, this.page).then(function (items) {
            if (items.length) {
                _this.items = items;
                // load more right away
                _this.loadMore(null);
            }
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            console.error('Error getting posts', err);
        });
        // make sure spinner never gets stuck on
        setTimeout(function () {
            loading.dismiss();
        }, 8000);
    };
    CommentsPage.prototype.doRefresh = function (refresh) {
        this.loadItems(this.route);
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    CommentsPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.provider.get(this.route, this.page).then(function (items) {
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
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    CommentsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    CommentsPage.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    CommentsPage.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comments',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/comments/comments.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf="isWooReviews" class="comment-list woocommerce-reviews">\n\n    <ion-item *ngFor="let item of items">\n\n      <ion-avatar item-left *ngIf="item.reviewer_avatar_urls">\n        <img *ngIf="item.reviewer_avatar_urls && item.reviewer_avatar_urls[\'48\']" src="{{item.reviewer_avatar_urls[\'48\']}}">\n        <img *ngIf="!item.reviewer_avatar_urls || !item.reviewer_avatar_urls[\'48\']" src="assets/default.png">\n      </ion-avatar>\n\n      <h2 *ngIf="item.reviewer" [innerHTML]="item.reviewer"></h2>\n\n      <star-rating *ngIf="item.rating" [rating]="item.rating"></star-rating>\n\n      <p *ngIf="item.review" [innerHTML]="item.review"></p>\n\n      <p *ngIf="item.date_created" class="comment-date">{{ item.date_created }}</p>\n\n    </ion-item>\n\n  </ion-list>\n  \n  <ion-list *ngIf="!isWooReviews" class="comment-list">\n\n    <ion-item *ngFor="let item of items">\n\n      <ion-avatar item-left *ngIf="item.author_avatar_urls">\n        <img *ngIf="item.author_avatar_urls && item.author_avatar_urls[\'48\']" src="{{item.author_avatar_urls[\'48\']}}">\n        <img *ngIf="!item.author_avatar_urls || !item.author_avatar_urls[\'48\']" src="assets/default.png">\n      </ion-avatar>\n\n      <h2 *ngIf="item.author_name" [innerHTML]="item.author_name"></h2>\n\n      <p *ngIf="item.content && item.content.rendered" [innerHTML]="item.content.rendered"></p>\n\n      <p *ngIf="item.date" class="comment-date">{{ item.date }}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ })

});
//# sourceMappingURL=10.js.map