webpackJsonp([6],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_details__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PostDetailsPageModule = /** @class */ (function () {
    function PostDetailsPageModule() {
    }
    PostDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__["a" /* SanitizeHtmlModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]
            ]
        })
    ], PostDetailsPageModule);
    return PostDetailsPageModule;
}());

//# sourceMappingURL=post-details.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_html__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SanitizeHtmlModule = /** @class */ (function () {
    function SanitizeHtmlModule() {
    }
    SanitizeHtmlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]]
        })
    ], SanitizeHtmlModule);
    return SanitizeHtmlModule;
}());

//# sourceMappingURL=sanitize-html.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtml = /** @class */ (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtml = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeHtml);
    return SanitizeHtml;
}());

//# sourceMappingURL=sanitize-html.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_streaming_media_streaming_media__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdf__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_video_video_utils__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_menus_menu_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostDetailsPage = /** @class */ (function () {
    function PostDetailsPage(nav, navParams, sanitizer, modalCtrl, renderer, elementRef, viewCtrl, platform, SocialSharing, menuservice, loginservice, ga, videoUtils, streamingMediaPlayer, pdfService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.SocialSharing = SocialSharing;
        this.menuservice = menuservice;
        this.loginservice = loginservice;
        this.ga = ga;
        this.videoUtils = videoUtils;
        this.streamingMediaPlayer = streamingMediaPlayer;
        this.pdfService = pdfService;
        this.rtlBack = false;
        this.showShare = true;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = this.navParams.get("item");
        this.content = sanitizer.bypassSecurityTrustHtml(this.selectedItem.content.rendered);
        // Listen for link clicks, open in in app browser
        this.listenFunc = renderer.listen(elementRef.nativeElement, "click", function (event) {
            if (!_this.hasPushPageAttr(event)) {
                _this.iabLinks(event.target, event);
            }
        });
        if (platform.is("android")) {
            this.videoUtils.killVideos(this.elementRef);
        }
    }
    PostDetailsPage.prototype.ngOnInit = function () {
        var myappp = localStorage.getItem("myappp");
        if (myappp) {
            if (typeof myappp == "string")
                myappp = JSON.parse(myappp);
            if (myappp &&
                myappp.meta &&
                myappp.meta.share &&
                myappp.meta.share.icon &&
                myappp.meta.share.icon.hide)
                this.showShare = myappp.meta.share.icon.hide ? false : true;
        }
    };
    PostDetailsPage.prototype.iabLinks = function (el, event) {
        var target = "_blank";
        if (el.href && el.href.indexOf("http") >= 0) {
            if (el.classList && el.classList.contains("system"))
                target = "_system";
            event.preventDefault();
            window.open(el.href, target);
        }
        else if (el.tagName == "IMG" &&
            el.parentNode.href &&
            el.parentNode.href.indexOf("http") >= 0) {
            // handle image tags that have link as the parent
            if (el.parentNode.classList && el.parentNode.classList.contains("system"))
                target = "_system";
            event.preventDefault();
            window.open(el.parentNode.href, target);
        }
    };
    /**
     * Look for push-page or open-page on the target
     *
     * @param event click event on a link
     */
    PostDetailsPage.prototype.hasPushPageAttr = function (event) {
        var el = event.target;
        var page_slug = el.getAttribute("data-apppage");
        if (!page_slug) {
            // IMG might be wrapped
            page_slug = el.parentElement.getAttribute("data-apppage");
        }
        if (page_slug) {
            var menuType = null;
            var page_index = this.menuservice.getIndexBySlug(page_slug, "tab");
            if (page_index) {
                menuType = "tab";
            }
            else {
                page_index = this.menuservice.getIndexBySlug(page_slug, "side");
                if (page_index) {
                    menuType = "side";
                }
            }
            if (menuType) {
                var navParams = null;
                event.preventDefault();
                event.stopPropagation();
                if (menuType == "tab") {
                    navParams = this.menuservice.tabs[page_index];
                }
                else {
                    navParams = this.menuservice.menu[page_index];
                }
                var nav = {
                    root: this.menuservice.getPageModuleName(navParams),
                    navParams: navParams,
                    opt: this.platform.isRTL && this.platform.is("ios")
                        ? { direction: "back" }
                        : {}
                };
                if (!this.loginservice.yieldLogin(nav.navParams)) {
                    this.nav.push(nav.root, nav.navParams, nav.opt);
                }
                return true;
            }
        }
        return false;
    };
    PostDetailsPage.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        if (this.selectedItem && this.selectedItem.link)
            this.ga.trackScreenView("PostDetailsPage", "link/" + this.selectedItem.link);
    };
    PostDetailsPage.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var data = { source: src, image: img };
        var fileExt = src.split(".").pop();
        if (fileExt === "pdf") {
            this.handlePDF(src);
        }
        else {
            this.streamingMediaPlayer.start(data, null);
        }
    };
    PostDetailsPage.prototype.handlePDF = function (src) {
        this.pdfService.openPdf(src);
    };
    PostDetailsPage.prototype.share = function () {
        this.SocialSharing.share(this.selectedItem.title.rendered, null, null, this.selectedItem.link)
            .then(function () {
            // Sharing via email is possible
        })
            .catch(function () {
            // Sharing via email is not possible
        });
    };
    // changes the back button transition direction if app is RTL
    PostDetailsPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is("ios"))
            obj = { direction: "forward" };
        this.nav.pop(obj);
    };
    PostDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/post-details/post-details.html"*/'<ion-header>\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n			    <ion-icon name="arrow-forward"></ion-icon>\n			    {{\'Back\' | translate }}\n			</button>\n\n			<button ion-button menuToggle *ngIf="!selectedItem">\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<ion-title><span [innerHTML]="selectedItem.title.rendered"></span></ion-title>\n\n		<ion-buttons end>\n			<button *ngIf="showShare" ion-button (click)="share()">\n				<ion-icon name="share"></ion-icon>\n			</button>\n		</ion-buttons>\n		\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n <div *ngIf="selectedItem" class="selection post-detail">\n\n 	<div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.above_title" [innerHTML]="selectedItem.appp.post_detail.above_title | sanitizeHtml"></div>\n\n    <h2 [innerHTML]="selectedItem.title.rendered"></h2>\n\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_title" [innerHTML]="selectedItem.appp.post_detail.below_title | sanitizeHtml"></div>\n\n    <div *ngIf="content" [innerHTML]="content"></div>\n\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_content" [innerHTML]="selectedItem.appp.post_detail.below_content | sanitizeHtml"></div>\n </div>\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/post-details/post-details.html"*/,
            selector: "post-details"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_7__providers_menus_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_video_video_utils__["a" /* VideoUtils */],
            __WEBPACK_IMPORTED_MODULE_4__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdf__["a" /* PdfService */]])
    ], PostDetailsPage);
    return PostDetailsPage;
}());

//# sourceMappingURL=post-details.js.map

/***/ })

});
//# sourceMappingURL=6.js.map