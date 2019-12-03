webpackJsonp([19],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadListModule", function() { return DownloadListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__download_list__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadListModule = /** @class */ (function () {
    function DownloadListModule() {
    }
    DownloadListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__download_list__["a" /* DownloadList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__download_list__["a" /* DownloadList */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__download_list__["a" /* DownloadList */]
            ]
        })
    ], DownloadListModule);
    return DownloadListModule;
}());

//# sourceMappingURL=download-list.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_streaming_media_streaming_media__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdf_pdf__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DownloadList = /** @class */ (function () {
    function DownloadList(navParams, device, storage, viewCtrl, toastCtrl, modalCtrl, file, translate, streamingMediaPlayer, pdfService) {
        var _this = this;
        this.navParams = navParams;
        this.device = device;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.translate = translate;
        this.streamingMediaPlayer = streamingMediaPlayer;
        this.pdfService = pdfService;
        if (this.navParams.get("title")) {
            this.title = this.navParams.get("title");
        }
        else {
            this.translate.get("Downloads").subscribe(function (text) {
                _this.title = text;
            });
        }
    }
    DownloadList.prototype.ionViewWillEnter = function () {
        this.getDownloads();
    };
    DownloadList.prototype.ionSelected = function () {
        this.getDownloads();
    };
    // first get existing checked segments
    DownloadList.prototype.getDownloads = function () {
        var _this = this;
        this.storage.get("downloads").then(function (downloadList) {
            _this.downloads = downloadList;
        });
    };
    DownloadList.prototype.mediaModal = function (item) {
        // check if this is a pdf, handle differently
        var url = item.url || item.media_url;
        var fileExt = url.split(".").pop();
        if (fileExt === "pdf") {
            this.handlePDF(url);
        }
        else {
            this.streamingMediaPlayer.start(item, this.downloads);
        }
    };
    DownloadList.prototype.handlePDF = function (src) {
        this.pdfService.openPdf(src);
    };
    DownloadList.prototype.removeDownload = function (item) {
        var _this = this;
        var path = cordova.file.dataDirectory + "media/";
        var fileName = item.url.replace(/^.*[\\\/]/, "");
        this.file.removeFile(path, fileName).then(function (msg) {
            _this.removeDownloadSuccess(item);
        }, function (error) {
            console.warn(error);
            // still remove data if file not found
            if (error.code == 1) {
                _this.removeDownloadSuccess(item);
            }
        });
    };
    DownloadList.prototype.removeDownloadSuccess = function (item) {
        var _this = this;
        // remove from downloads and delete file
        for (var i = this.downloads.length - 1; i >= 0; i--) {
            if (this.downloads[i].url === item.url) {
                this.downloads.splice(i, 1);
                break;
            }
        }
        this.storage.set("downloads", this.downloads);
        this.translate.get("Download Removed").subscribe(function (text) {
            _this.presentToast(text);
        });
    };
    DownloadList.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: "bottom"
        });
        toast.present();
    };
    DownloadList.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DownloadList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/download-list/download-list.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ title | translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item-sliding *ngFor="let download of downloads" #slidingItem>\n\n    <button ion-item (click)="mediaModal(download)">\n\n      <h2>{{download.title}}</h2>\n\n    </button>\n\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="removeDownload(download)">\n        <ion-icon name="remove-circle"></ion-icon>\n        {{ \'Delete\' | translate }}\n      </button>\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item *ngIf="!downloads">{{ \'No Downloads available.\' | translate }}</ion-item>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/download-list/download-list.html"*/,
            selector: "download-list"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */],
            __WEBPACK_IMPORTED_MODULE_7__providers_pdf_pdf__["a" /* PdfService */]])
    ], DownloadList);
    return DownloadList;
}());

//# sourceMappingURL=download-list.js.map

/***/ })

});
//# sourceMappingURL=19.js.map