webpackJsonp([9],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WooListModule", function() { return WooListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_list__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WooListModule = /** @class */ (function () {
    function WooListModule() {
    }
    WooListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_list__["a" /* WooList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_list__["a" /* WooList */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_star_rating_star_rating_module__["a" /* StarRatingComponentModule */]
            ],
        })
    ], WooListModule);
    return WooListModule;
}());

//# sourceMappingURL=woo-list.module.js.map

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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WooList = /** @class */ (function () {
    function WooList(navCtrl, navParams, wooProvider, loadingCtrl, toastCtrl, modalCtrl, events, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.page = 1;
        this.showSearch = false;
        this.stopLoop = false;
        this.showingSavedItems = false;
        this.card = true;
        if (this.navParams.get('route')) {
            this.route = this.navParams.get('route');
        }
        else {
            this.route = 'products';
        }
        if (this.navParams.get('search') == true) {
            this.showSearch = true;
        }
        if (this.navParams.get('card')) {
            this.card = this.navParams.get('card');
        }
        // console.log('route ' + this.route)
        this.title = this.navParams.get('title');
        events.subscribe('cart_change', function (count) {
            _this.cart_count = count;
        });
        // make sure cart count is always updated on initial load
        this.getCartFromAPI();
    }
    WooList.prototype.ionViewDidLoad = function () {
        if (this.route === 'woo_saved_items') {
            this.getSavedItems();
            this.showingSavedItems = true;
        }
        else {
            this.loadProducts(this.route);
            this.getCategories();
        }
    };
    WooList.prototype.ionViewWillEnter = function () {
        this.getCartCount();
    };
    WooList.prototype.getCartCount = function () {
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
    WooList.prototype.getCartFromAPI = function () {
        var _this = this;
        this.wooProvider.getCartContents().then(function (cart) {
            _this.cart_count = (cart && typeof cart != 'string' && cart.cart_total ? cart.cart_total.cart_contents_count : '');
            // don't need to save count to storage, it's already saved in woo.ts
        }).catch(function (err) {
            console.warn(err);
        });
    };
    WooList.prototype.getSavedItems = function () {
        var _this = this;
        this.storage.get('woo_saved_items').then(function (items) {
            _this.items = items;
        });
    };
    WooList.prototype.removeFromList = function (item) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id === item.id) {
                this.items.splice(i, 1);
                break;
            }
        }
        this.storage.set('woo_saved_items', this.items);
        this.presentToast(item.name + ' removed from list.');
    };
    WooList.prototype.loadProducts = function (route) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.wooProvider.get(route, this.page).then(function (items) {
            if (items.length) {
                _this.items = items;
                // load more right away
                _this.loadMore(null);
            }
            else if (!_this.stopLoop) {
                _this.route = 'products?category=' + _this.getUrlParam(_this.route, 'parent=');
                _this.loadProducts(_this.route);
                _this.getCategories();
                _this.stopLoop = true;
            }
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            _this.handleErr(err);
        });
        // make sure spinner never gets stuck on
        setTimeout(function () {
            loading.dismiss();
        }, 8000);
    };
    WooList.prototype.getCategories = function () {
        var _this = this;
        if (this.route.indexOf('categories') >= 0 || this.route.indexOf('search=') >= 0) {
            return;
        }
        this.wooProvider.get('products/categories', null).then(function (categories) {
            if (categories) {
                _this.customClasses += ' has-favorites';
                _this.content.resize();
            }
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
            _this.handleErr(err);
        });
    };
    WooList.prototype.categoryChanged = function () {
        var route = this.addQueryParam('products', 'category=' + this.category);
        this.loadProducts(route);
    };
    WooList.prototype.loadDetail = function (item) {
        var opt = {};
        if (item.price || item.price === '') {
            this.navCtrl.push('WooDetail', {
                item: item
            }, opt);
        }
        else if (this.route.indexOf('categories') >= 0) {
            this.navCtrl.push('WooList', {
                route: 'products/?category=' + item.id
            }, opt);
        }
        else {
            this.navCtrl.push('WooList', {
                route: 'products/categories/?parent=' + item.id
            }, opt);
        }
    };
    WooList.prototype.doRefresh = function (refresh) {
        this.loadProducts(this.route);
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    WooList.prototype.loadMore = function (infiniteScroll) {
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
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            _this.handleErr(e);
        });
    };
    WooList.prototype.getBtnText = function (item) {
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
    WooList.prototype.productAction = function (item) {
        switch (item.type) {
            case "simple":
                this.addToCart(item);
                break;
            default:
                this.loadDetail(item);
        }
    };
    WooList.prototype.addToCart = function (item) {
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
    WooList.prototype.productAddSuccess = function (data, item) {
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
    WooList.prototype.productAddError = function (e) {
        var msg;
        if (e.error && e.error.message) {
            msg = e.error.message;
        }
        else {
            msg = 'There was a problem, your item was not added to the cart.';
        }
        this.presentToast(msg);
    };
    WooList.prototype.handleErr = function (e) {
        console.warn(e);
        if (e && e.error && e.error.message) {
            this.presentToast(e.error.message);
        }
        else {
            this.presentToast('Unknown error.');
        }
    };
    WooList.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooList.prototype.showCart = function () {
        var cartPage = this.wooProvider.getWooPage('cart');
        if (!cartPage) {
            this.presentToast("No cart page set.");
            return;
        }
        var cartModule = this.getPageModuleName(cartPage.page_id);
        this.navCtrl.push(cartModule, cartPage);
    };
    WooList.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    WooList.prototype.toggleSearchBar = function () {
        if (this.showSearch === true) {
            this.showSearch = false;
        }
        else {
            this.showSearch = true;
        }
        this.content.resize();
    };
    WooList.prototype.search = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            if (this.route.indexOf('search') >= 0) {
                // remove extra search param
                this.route = this.route.split('?search')[0];
            }
            var route = this.addQueryParam('products', 'search=' + val);
            this.loadProducts(route);
        }
    };
    // get category ID from url string
    WooList.prototype.getUrlParam = function (url, param) {
        // console.log('url param ' + url, param)
        return url.split(param).pop();
    };
    WooList.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    WooList.prototype.clearSearch = function () {
        this.loadProducts(this.route);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], WooList.prototype, "content", void 0);
    WooList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-woo-list',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/woo-list/woo-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  \n\n    <ion-buttons end>\n      <button ion-button class="search-button-header" (click)="toggleSearchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n      <button ion-button (click)="showCart()">\n      	<ion-icon name="cart"></ion-icon>\n        <ion-badge color="clear" item-end>{{cart_count}}</ion-badge>\n      </button>\n    </ion-buttons>\n\n	</ion-navbar>\n\n  <ion-toolbar *ngIf="showSearch">\n    <ion-searchbar placeholder="{{\'Search\' | translate }}" debounce="1000" (ionInput)="search($event)" (ionClear)="clearSearch()"></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-item *ngIf="categories && !showSearch" id="favorites-toolbar" color="light">\n\n    <ion-select [(ngModel)]="category" (ionChange)="categoryChanged()" placeholder="{{ \'Category\' | translate }}">\n\n      <ion-option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name | translate }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n</ion-header>\n\n\n<ion-content [ngClass]="customClasses">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list class="woocommerce-list" *ngIf="card && card !=\'false\'">\n\n    <ion-card *ngFor="let item of items">\n\n      <div (tap)="loadDetail(item)" class="card-featured-wrap" *ngIf="item.images || item.image">\n        <div *ngIf="item.images && item.images[0] && item.images[0].src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.images[0].src +\')\'}"></div>\n        <div *ngIf="item.image && item.image.src" class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ item.image.src +\')\'}"></div>\n      </div>\n\n      <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.above_title" [innerHTML]="item.appp.woo_list.above_title"></div>\n\n      <ion-card-content>\n\n        <ion-card-title (tap)="loadDetail(item)" *ngIf="item.name">\n          <h2 [innerHTML]="item.name"></h2>\n        </ion-card-title>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_title" [innerHTML]="item.appp.woo_list.below_title"></div>\n\n        <p *ngIf="item.price_html" class="product-price" [innerHTML]="item.price_html"></p>\n\n        <p *ngIf="!item.price_html && item.price" class="product-price">{{ item.price }}</p>\n\n        <star-rating [rating]="item.average_rating"></star-rating>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_content" [innerHTML]="item.appp.woo_list.below_content"></div>\n\n      </ion-card-content>\n\n      <div class="btn-wrap" *ngIf="item.type && !showingSavedItems">\n\n        <button class="product-action" ion-button block small color="light" (tap)="productAction(item)">{{ getBtnText(item) | translate }}</button>\n\n      </div>\n\n      <div *ngIf="showingSavedItems" class="saved-items-btns">\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <button class="product-action" ion-button block small clear icon-start (tap)="productAction(item)"><ion-icon name="add-circle"></ion-icon> {{ getBtnText(item) | translate }}</button>\n            </ion-col>\n            <ion-col col-6>\n              <button class="remove-from-list" ion-button block small clear icon-start (tap)="removeFromList(item)"><ion-icon name="remove-circle"></ion-icon> {{ \'Remove\' | translate }}</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </div>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-list *ngIf="card && card == \'false\'">\n\n    <ion-item *ngFor="let item of items">\n\n        <button ion-button item-end *ngIf="wishlist" icon-only color="danger" clear (tap)="removeSavedItem(item)"><ion-icon name="close-circle"></ion-icon></button>\n\n        <ion-thumbnail class="product-thumbnail" (tap)="loadDetail(item)" item-start *ngIf="item.images">\n          <img *ngIf="item.images[0] && item.images[0].src" src="{{item.images[0].src}}">\n          <img *ngIf="!item.images[0]" src="assets/woo-default.png">\n        </ion-thumbnail>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.above_title" [innerHTML]="item.appp.woo_list.above_title"></div>\n\n        <h2 (tap)="loadDetail(item)" *ngIf="item.name" [innerHTML]="item.name"></h2>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_title" [innerHTML]="item.appp.woo_list.below_title"></div>\n\n        <p (tap)="loadDetail(item)" *ngIf="item.price_html" class="product-price" [innerHTML]="item.price_html"></p>\n\n        <p (tap)="loadDetail(item)" *ngIf="!item.price_html && item.price" class="product-price">{{ item.price }}</p>\n\n        <p *ngIf="item.description" (tap)="loadDetail(item)" [innerHTML]="item.description" class="product-description"></p>\n\n        <star-rating *ngIf="!wishlist" [rating]="item.average_rating"></star-rating>\n\n        <div *ngIf="item.appp && item.appp.woo_list && item.appp.woo_list.below_content" [innerHTML]="item.appp.woo_list.below_content"></div>\n\n      </ion-item>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/woo-list/woo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], WooList);
    return WooList;
}());

//# sourceMappingURL=woo-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map