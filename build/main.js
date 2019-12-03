webpackJsonp([22],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remote_data_model__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RemoteDataService = /** @class */ (function () {
    function RemoteDataService(storage, device, http, globalvars) {
        this.storage = storage;
        this.device = device;
        this.http = http;
        this.globalvars = globalvars;
        this.apiUrl = this.globalvars.getApiRoot();
        this.appId = this.globalvars.getAppId();
    }
    /**
     * Saves a RemoteData object to storage so we can send it later. Such as saving offline data
     * or logging items before we know logging is enabled.
     *
     * @param apiUrl Full URL to a endpoint to consume the data
     * @param data Any kind of JSON object (use {error_msg: 'message'} for logging errors)
     * @param options The options for the RemoteData object
     */
    RemoteDataService.prototype.createRemoteData = function (apiUrl, data, options) {
        var d = new __WEBPACK_IMPORTED_MODULE_6__remote_data_model__["a" /* RemoteData */](apiUrl, options);
        d.data = data;
        this.storeData(d);
    };
    /**
     * Adds a RemoteData object to storage
     *
     * @param rData RemoteData object to store in storage
     */
    RemoteDataService.prototype.storeData = function (rData) {
        this.storage.set(rData.getDbKey(), rData);
    };
    /**
     * Loops through the data storage for matching types and matching API URLs
     * and adds them to a collection so we can send that entire data
     * collection in one API call.
     *
     * @param type A way to catgorize data so we can send them in batches
     * @param token A secret key
     */
    RemoteDataService.prototype.sendStoredData = function (type, token) {
        var _this = this;
        var dataCollection = [];
        // group the data with the same API URL
        this.storage.forEach(function (value, key, i) {
            if (key.indexOf('rdata-' + type) === 0) {
                if (Object.keys(dataCollection).indexOf(value.apiUrl) >= 0) {
                    dataCollection[value.apiUrl].push(value);
                }
                else {
                    dataCollection[value.apiUrl] = [];
                    dataCollection[value.apiUrl].push(value);
                }
            }
        }).then(function () {
            // console.log('dataCollection.length', Object.keys(dataCollection).length, dataCollection);
            if (Object.keys(dataCollection).length) {
                Object.keys(dataCollection).forEach(function (key, index) {
                    // console.log('forEach collection', dataCollection[key], index);
                    // send groups of data by the same URL
                    _this.send(dataCollection[key], token);
                });
            }
        });
    };
    /**
     * Sends a collection of data to a single API in one call.
     *
     * @param rdataCollection
     * @param token
     */
    RemoteDataService.prototype.send = function (rdataCollection, token) {
        var _this = this;
        var dbKeys = [];
        var data = {
            collection: [],
            type: rdataCollection[0].type,
            deviceId: this.device.uuid,
            appId: this.appId,
            token: token
        };
        rdataCollection.forEach(function (value) {
            dbKeys.push(_this.getDbKey(value));
            data.collection.push({
                data: value.data,
                timestamp: value.timestamp
            });
        });
        // console.log('we want to send this stuff', data, 'to', rdataCollection[0].apiUrl);
        this.http.post(rdataCollection[0].apiUrl, data).toPromise().then(function (response) {
            console.log(response);
            console.log('now we can delete', dbKeys);
            dbKeys.forEach(function (key) {
                console.log('deleting this key from the db', key);
                _this.deleteDbItem(key);
            });
        }).catch(function (error) {
            console.log('RemoteDataService send error', error);
        });
    };
    /**
     * Creates a unique data key based on the type
     *
     * @param data The RemoteData object
     */
    RemoteDataService.prototype.getDbKey = function (data) {
        if (data.isLog)
            return 'rdata-log-' + data.type + '-' + data.guid.value;
        else if (data.type)
            return 'rdata-' + data.type + '-' + data.guid.value;
        else
            return 'rdata-' + data.guid.value;
    };
    /**
     * Deletes a single item from the database
     *
     * @param key guid database key
     */
    RemoteDataService.prototype.deleteDbItem = function (key) {
        if (key && key.indexOf('rdata-') === 0) {
            this.storage.remove(key);
        }
    };
    /**
     * Deletes a group of logs items from the database that match a specified type
     *
     * @param type The portion of the guid key to match
     */
    RemoteDataService.prototype.removeLogs = function (type) {
        var _this = this;
        if (type) {
            this.storage.forEach(function (value, key, i) {
                if (key.indexOf('rdata-log-' + type) === 0) {
                    _this.deleteDbItem(_this.getDbKey(value));
                }
            });
        }
    };
    RemoteDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_5__globalvars_globalvars__["a" /* GlobalVars */]])
    ], RemoteDataService);
    return RemoteDataService;
}());

//# sourceMappingURL=remote-data.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderLogo = /** @class */ (function () {
    function HeaderLogo(http) {
        this.http = http;
        this.url = 'assets/header-logo.png';
    }
    HeaderLogo.prototype.checkLogo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.logo_exists) {
                // logo exists, we already checked
                resolve(_this.url);
            }
            else if (_this.logo_exists === false) {
                // logo does not exists, we already checked
                reject();
            }
            else {
                // not sure if logo exists, check please
                _this.http.get('./assets/header-logo.png')
                    .subscribe(function (data) {
                    _this.logo_exists = true;
                    // logo file exists, return url 
                    resolve(_this.url);
                }, function (error) {
                    _this.logo_exists = false;
                    // logo file does not exist
                    reject(error);
                });
            }
        });
    };
    HeaderLogo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], HeaderLogo);
    return HeaderLogo;
}());

//# sourceMappingURL=header-logo.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(221);
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
 * How PDFs are handled:
 * If it is a remote file, we link out to the system browser. For Android, it uses Google Reader, iOS just uses Safari.
 * If it is a local file, we open with the device's PDF application.
 *
 */
var PdfService = /** @class */ (function () {
    function PdfService(file, iab, device, fileOpener, platform) {
        this.file = file;
        this.iab = iab;
        this.device = device;
        this.fileOpener = fileOpener;
        this.platform = platform;
    }
    PdfService.prototype.openPdf = function (src) {
        // handle remote files in browser
        if (src.indexOf("http") >= 0) {
            if (this.platform.is("android")) {
                window.open("https://drive.google.com/viewerng/viewer?url=" + src, "_system");
            }
            else {
                window.open(src, "_system");
            }
        }
        else {
            this.handleLocalPdf(src);
        }
    };
    PdfService.prototype.handleLocalPdf = function (src) {
        if (this.platform.is("android")) {
            this.handleAndroidLocal(src);
        }
        else {
            if (src.indexOf("file://") < 0) {
                // relative url, need to make it absolute
                src = this.file.applicationDirectory + "www/" + src;
            }
            this.useFileOpener(src);
        }
    };
    PdfService.prototype.handleAndroidLocal = function (source) {
        var _this = this;
        // if the file is already on the local system, don't mess with the url. This is probably from the downloads list
        if (source.indexOf('file://') >= 0) {
            this.useFileOpener(source);
        }
        else {
            // if the file is in our assets or application directory, move it to a public folder so it can be opened by a pdf app
            this.maybeCopyFile(source)
                .then(function (res) {
                _this.useFileOpener(res);
            })
                .catch(function (err) {
                console.warn(err);
            });
        }
    };
    PdfService.prototype.useFileOpener = function (src) {
        this.fileOpener
            .open(src, "application/pdf")
            .then(function () { })
            .catch(function (e) { return console.warn("Error opening file after copying", e); });
    };
    // local files on Android don't work from assets folder, so we have to copy them to the app storage
    PdfService.prototype.maybeCopyFile = function (source) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var assetPath = _this.file.applicationDirectory + "www/" + source;
            console.log(assetPath);
            //first - resolve target path in bundled file structure:
            _this.file
                .resolveLocalFilesystemUrl(assetPath)
                .then(function (entry) {
                var wwwFile = entry.toInternalURL();
                console.log("target entry: " + entry + ", - wwwFile: " + wwwFile);
                //then - resolve save folder in dataDirectory:
                _this.file
                    .resolveLocalFilesystemUrl(_this.file.externalDataDirectory)
                    .then(function (entry) {
                    var savePath = entry.toInternalURL();
                    console.log("save entry: " + entry + ", - savePath: " + savePath);
                    //then - copy file to saveFolder
                    var fileName = wwwFile.split("/").pop();
                    _this.file
                        .copyFile(_this.file.applicationDirectory + "www/assets/", fileName, savePath, fileName)
                        .then(function (entry) {
                        var newPath = entry.toURL();
                        console.log("File copied, entry.toURL(): " + newPath);
                        resolve(newPath);
                    })
                        .catch(function (error) {
                        console.log("error copyFile: ", error);
                        reject(error);
                    });
                })
                    .catch(function (error) {
                    console.log("error this.file.resolveLocalFilesystemUrl (save folder): ", error);
                    reject(error);
                });
            })
                .catch(function (error) {
                console.log("error this.file.resolveLocalFilesystemUrl (target): ", error);
                reject(error);
            });
        });
    };
    PdfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], PdfService);
    return PdfService;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_iframe_iframe__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(globalvars, translate) {
        this.globalvars = globalvars;
        this.translate = translate;
        this.menu = [];
        this.tabs = [];
    }
    /**
     *
     * @param menuIndex number
     * @param menuType 'menu' or 'tab'
     */
    MenuService.prototype.getMenuItem = function (menuIndex, menuType) {
        if (menuType == 'tab')
            return this.getTab(menuIndex);
        else
            return this.getMenu(menuIndex);
    };
    MenuService.prototype.getMenu = function (index) {
        if (this.menu[index])
            return this.menu[index];
        return false;
    };
    MenuService.prototype.getTab = function (index) {
        if (this.tabs[index])
            return this.tabs[index];
        return false;
    };
    MenuService.prototype.getItemRoot = function (menuItem) {
        var root = __WEBPACK_IMPORTED_MODULE_2__pages_iframe_iframe__["a" /* Iframe */];
        if (menuItem.type === 'apppages' && menuItem.page_type === 'list') {
            root = 'PostList';
        }
        else if (menuItem.type === 'apppages' && menuItem.page_type === 'media-list') {
            root = 'MediaList';
        }
        else if (menuItem.type === 'apppages') {
            root = this.getPageModuleName(menuItem.page_id);
        }
        return root;
    };
    MenuService.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        if (false === this.globalvars.getUseDynamicPageModule())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    /**
       * Side or tab menus
       * @param slug page slug or URL
       * @param menuType menu type
       */
    MenuService.prototype.getIndexBySlug = function (slug, menuType) {
        var menu_index;
        var count = 0;
        var pages = null;
        if (typeof menuType == 'object') {
            pages = menuType;
        }
        else {
            pages = (menuType == 'tab') ? this.tabs : this.menu;
        }
        if (!pages)
            return menu_index;
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            if (page.slug && page.slug == slug) {
                menu_index = count;
            }
            else if (page.url && page.url == slug) {
                menu_index = count;
            }
            count++;
        }
        ;
        if (!menu_index && menu_index !== 0)
            console.log('Are you looking for page slugs?', pages); // you can find the slugs here
        return menu_index;
    };
    MenuService.prototype.getLoginModalPage = function (force_login_active) {
        return {
            title: this.translate.instant('Login'),
            show: true,
            root: 'LoginModal',
            extra_classes: 'loggedout',
            force_login_active: (force_login_active)
        };
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApppSettingsService; });
var MyApppSettingsService = /** @class */ (function () {
    function MyApppSettingsService() {
    }
    MyApppSettingsService.prototype.setData = function (data) {
        this.settings = data;
        console.log('settings', this.settings);
    };
    MyApppSettingsService.prototype.isForcedLogin = function () {
        return (this.settings.side_menu_force_login == 'on');
    };
    MyApppSettingsService.prototype.isPreview = function () {
        if (window.location && window.location.href) {
            if (window.location.href.indexOf('localhost') >= 0) {
                console.log('isPreview', true);
                return true;
            }
            else if (window.location.href.indexOf('myapppresser') >= 0) {
                console.log('isPreview', true);
                return true;
            }
        }
        console.log('isPreview', false);
        return false;
    };
    MyApppSettingsService.prototype.hasTabsMenu = function () {
        return (this.settings.tab_menu && this.settings.tab_menu.items && this.settings.tab_menu.items.length);
    };
    return MyApppSettingsService;
}());

//# sourceMappingURL=myappp.settings.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = /** @class */ (function () {
    function Language(data) {
        this.code = 'en';
        this.dir = 'ltr';
        if (data) {
            if (data.code)
                this.code = data.code;
            if (data.dir)
                this.dir = data.dir;
        }
    }
    Language.prototype.isRTL = function () {
        return (this.dir && this.dir == 'rtl');
    };
    return Language;
}());

//# sourceMappingURL=language.model.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IAP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
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
  In App Purchases

  See http://ionicframework.com/docs/native/in-app-purchase/
  and https://github.com/AlexDisler/cordova-plugin-inapppurchase
*/
var IAP = /** @class */ (function () {
    function IAP(iap, storage, http, platform) {
        this.iap = iap;
        this.storage = storage;
        this.http = http;
        this.platform = platform;
        var item = window.localStorage.getItem('myappp');
        if (item)
            this.wpUrl = JSON.parse(item).wordpress_url;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    // buy a product
    IAP.prototype.buy = function (id, form) {
        var _this = this;
        if (form === void 0) { form = null; }
        return new Promise(function (resolve, reject) {
            // we have to get products before we can buy
            _this.iap.getProducts([id]).then(function (products) {
                // after we get product, buy it
                _this.iap.buy(id).then(function (result) {
                    _this.storage.get('iap_purchase_ids').then(function (ids) {
                        if (ids) {
                            ids.push(id);
                        }
                        else {
                            ids = [id];
                        }
                        _this.storage.set('iap_purchase_ids', ids);
                    });
                    resolve(result);
                })
                    .catch(function (err) {
                    var error = _this.getErrMsg(err);
                    reject(error);
                    console.log(err);
                });
            })
                .catch(function (err) {
                var error = _this.getErrMsg(err);
                reject(error);
                console.log(err);
            });
        }); // end promise
    };
    // generic restore purchase
    IAP.prototype.restorePurchase = function (id, form) {
        var _this = this;
        if (form === void 0) { form = null; }
        console.log('restore ' + id, form);
        this.productId = id;
        return new Promise(function (resolve, reject) {
            _this.iap.restorePurchases().then(function (result) {
                for (var i = 0; i < result.length; ++i) {
                    // TODO: check result[i].state for cancelled or refunded
                    if (result[i].productId == _this.productId) {
                        _this.storage.get('iap_purchase_ids').then(function (ids) {
                            if (ids) {
                                ids.push(_this.productId);
                            }
                            else {
                                ids = [_this.productId];
                            }
                            _this.storage.set('iap_purchase_ids', ids);
                        });
                        resolve(result);
                        return;
                    }
                }
                reject("No purchases found to restore.");
            })
                .catch(function (err) {
                var error = _this.getErrMsg(err);
                reject(error);
                console.log(err);
            });
        });
    };
    // subscribe to an app store purchase
    IAP.prototype.subscribe = function (id) {
        var _this = this;
        this.storage.set('iap_product_id', id);
        return new Promise(function (resolve, reject) {
            // we have to get products before we can buy
            _this.iap.getProducts([id]).then(function (products) {
                // after we get product, buy it
                _this.iap.subscribe(id).then(function (result) {
                    console.log('subscribe receipt', result);
                    _this.storage.set('iap_subscription', id);
                    resolve(result.transactionId);
                })
                    .catch(function (err) {
                    var error = _this.getErrMsg(err);
                    reject(error);
                });
            })
                .catch(function (err) {
                var error = _this.getErrMsg(err);
                reject(error);
            });
        }); // end promise
    };
    IAP.prototype.restoreSubscription = function (id) {
        var _this = this;
        this.productId = id;
        this.storage.set('iap_product_id', id);
        return new Promise(function (resolve, reject) {
            _this.iap.restorePurchases().then(function (result) {
                // this is an array of purchases
                //console.log( 'restore purchases result', result )
                for (var i = 0; i < result.length; ++i) {
                    // TODO: check result[i].state for cancelled or refunded
                    if (result[i].productId == _this.productId) {
                        _this.storage.set('iap_subscription', _this.productId);
                        // we aren't using this transaction ID
                        resolve(result[i].transactionId);
                        return;
                    }
                }
                reject('No purchases found to restore.');
            })
                .catch(function (err) {
                var error = _this.getErrMsg(err);
                reject(error);
            });
        });
    };
    // buy a product, then remove ads. Used in AOM app
    // subscribeNoAds( id ) {
    //   // we have to get products before we can buy
    //   this.iap.getProducts( [ id ] ).then( products => {
    //     // after we get product, buy it
    //     this.iap.subscribe( id ).then( result => {
    //       this.removeAds()
    //     })
    //     .catch( err => {
    //       let error = 'Error, please try again.';
    //       if( err && err.message ) {
    //         error = err.message
    //       } else if( err && err.errorMessage ) {
    //         error = err.errorMessage
    //       }
    //       alert( error )
    //       console.log(err)
    //     })
    //   })
    //   .catch( err => {
    //     let error = this.getErrMsg( err )
    //     alert( error )
    //     console.log(err)
    //   })
    // }
    // a much simpler way to check iOS iap status using status update notifications
    // the server handles everything, we just check periodically for a boolean status
    // Returns: boolean
    IAP.prototype.getSubscriptionStatus = function (user_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('iap_product_id').then(function (productId) {
                if (_this.platform.is('android')) {
                    _this.validateAndroid(user_id, productId).then(function (response) {
                        resolve(response);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    _this.validateIosRemotely(user_id, productId).then(function (response) {
                        resolve(response);
                    }).catch(function (err) {
                        var error = _this.getErrMsg(err);
                        reject(error);
                    });
                }
            }); // end storage.get
        }); // end promise
    };
    IAP.prototype.validateAndroid = function (user_id, productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.iap.restorePurchases().then(function (result) {
                console.log('Restore purchase android', result);
                // when an Android subscription expires, restorePurchases is empty. We still send to the server
                // send receipts to server to validate
                _this.validateAndroidRemotely(user_id, result, productId).then(function (validity) {
                    resolve(validity);
                }).catch(function (err) {
                    var error = _this.getErrMsg(err);
                    reject(error);
                });
                /*
                 * We could validate on the device like this, but then the server wouldn't be able to cancel memberships.
                for (var i = 0; i < result.length; ++i) {
        
                  if( result[i].productId == productId ) {
        
                    console.log('purchase is valid')
        
                    validity = true;
        
                  }
        
                } */
            }); // end restore purchases
        }); // end promise
    };
    // this is actually easier to do in app, but we send it to the server to allow customers to modify it easily
    IAP.prototype.validateAndroidRemotely = function (user_id, purchases, productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                user_id: user_id,
                sec: 'jk39DLKj!',
                purchases: JSON.stringify(purchases),
                product_id: productId
            };
            _this.http.post(_this.wpUrl + 'wp-json/appp/v1/in-app-purchase-validate', data, _this.httpOptions)
                .subscribe(function (response) {
                console.log('validateAndroidRemotely response', response);
                resolve(response);
            }, function (err) {
                var error = _this.getErrMsg(err);
                reject(error);
                // probably a bad url or 404
                console.warn('validateAndroidRemotely error', error);
            });
        });
    };
    // iOS doesn't validate purchases on server, because we use Apple subscription notifications. We just check for a boolean based on user meta here.
    IAP.prototype.validateIosRemotely = function (user_id, productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.wpUrl + 'wp-json/appp/v1/in-app-purchase-status?user_id=' + user_id + '&product_id=' + productId)
                .subscribe(function (response) {
                console.log('iap check response', response);
                resolve(response);
            }, function (error) {
                reject(error);
                // probably a bad url or 404
                console.warn(error);
            });
        });
    };
    IAP.prototype.getErrMsg = function (err) {
        var error;
        if (err && err.message) {
            error = err.message;
        }
        else if (err && err.errorMessage) {
            error = err.errorMessage;
        }
        else {
            error = err;
        }
        return error;
    };
    IAP = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* Platform */]])
    ], IAP);
    return IAP;
}());

//# sourceMappingURL=inapppurchase.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_free__ = __webpack_require__(223);
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
  Admob

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppAds = /** @class */ (function () {
    function AppAds(admobFree) {
        this.admobFree = admobFree;
    }
    AppAds.prototype.setOptions = function () {
        if (!this.admobFree)
            return;
    };
    AppAds.prototype.createBanner = function (id) {
        console.log('create banner ' + id);
        this.admobFree.banner.config({
            id: id,
            isTesting: false,
            autoShow: true
        });
        this.admobFree.banner.prepare()
            .then(function () {
            console.log('show banner');
        })
            .catch(function (e) { return console.log(e); });
    };
    // interstitial( id ) {
    // 	if( !this.admob )
    //     return;
    // 	this.admob.prepareInterstitial({
    // 		adId: id, 
    // 		autoShow: true,
    // 		adSize: 'SMART_BANNER'
    // 	});
    // }
    AppAds.prototype.hideAll = function () {
        console.log('hiding ads');
        this.admobFree.banner.hide();
    };
    AppAds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], AppAds);
    return AppAds;
}());

//# sourceMappingURL=appads.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_fbconnect_settings__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Logins = /** @class */ (function () {
    function Logins(storage, events, fbconnectvars) {
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
    }
    Logins.prototype.set_force_login = function (status) {
        var _this = this;
        if (status) {
            this.storage.get('user_login').then(function (data) {
                // only show the login modal when logged out
                if (data) {
                    console.log('do not show logout modal');
                }
                else {
                    _this.events.publish('login:force_login');
                }
            });
            this.storage.set('force_login', true).then(function () {
                // nothing
            });
        }
        else {
            this.storage.remove('force_login');
        }
    };
    /**
     * use FB avatar for FB logins and
     * use WP avatar for WP logins
     *
     * @param avatar string or json
     * @return avatar
     */
    Logins.prototype.get_avatar = function (avatar) {
        var avatar_url;
        if (typeof (avatar) == 'object' && avatar.avatar_url)
            avatar_url = avatar.avatar_url;
        else if (typeof (avatar) == 'object' && avatar.avatar)
            avatar_url = avatar.avatar;
        else if (typeof (avatar) == 'string') {
            avatar_url = avatar;
        }
        var fb_avatar = this.get_fb_avatar();
        if (fb_avatar)
            this.avatar = fb_avatar;
        else
            this.avatar = avatar_url;
        this.avatar = this.fixProtocolRelativeUrl(this.avatar);
        return this.avatar;
    };
    Logins.prototype.get_fb_avatar = function () {
        return this.fbconnectvars.get_avatar();
    };
    /**
     * If a URL has a relative protocol, //gravatar.com, we need to force one
     *
     * @param url
     * @param protocol Default: https
     */
    Logins.prototype.fixProtocolRelativeUrl = function (url, protocol) {
        if (!url)
            return '';
        protocol = protocol ? protocol : 'https';
        if (url.indexOf('//') === 0)
            return protocol + ':' + url;
        else
            return url;
    };
    Logins = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__facebook_fbconnect_settings__["a" /* FBConnectAppSettings */]])
    ], Logins);
    return Logins;
}());

//# sourceMappingURL=logins.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Download; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Download = /** @class */ (function () {
    function Download(http, events, transfer) {
        this.http = http;
        this.events = events;
        this.transfer = transfer;
    }
    Download.prototype.downloadFile = function (filePath) {
        // console.log( cordova.file.dataDirectory, filePath )
        var _this = this;
        // simulate progress
        this.events.publish('load:progress', 10);
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (progressEvent) {
            var percent = progressEvent.loaded / progressEvent.total * 100;
            percent = Math.round(percent);
            // only send progress event when number changes
            if (percent === _this.percent) {
                return;
            }
            _this.percent = percent;
            // console.log(percent)
            if (percent > 10) {
                _this.events.publish('load:progress', percent);
            }
        });
        return new Promise(function (resolve, reject) {
            var filename = filePath.replace(/^.*[\\\/]/, '');
            filename = filename.replace(/[\s+]/g, '-');
            fileTransfer.download(filePath, cordova.file.dataDirectory + '/media/' + filename).then(function (entry) {
                console.log('file download success', entry);
                _this.events.publish('load:progress', 80);
                resolve(entry.toURL());
            }, function (error) {
                console.log('file download err', error);
                reject(JSON.stringify(error));
                _this.events.publish('load:progress', 0);
            });
        });
    };
    Download = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], Download);
    return Download;
}());

//# sourceMappingURL=download.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appdata_error_log_service__ = __webpack_require__(67);
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
  Push Notifications

  See http://ionicframework.com/docs/v2/native/push/
*/
var PushService = /** @class */ (function () {
    function PushService(http, globalvars, storage, errorlogs, Device) {
        this.http = http;
        this.globalvars = globalvars;
        this.storage = storage;
        this.errorlogs = errorlogs;
        this.Device = Device;
    }
    // Subscribe for push through our API service
    PushService.prototype.subscribeDevice = function (token) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid;
        return new Promise(function (resolve) {
            _this.errorlogs.addLog('subscribeDevice ' + _this.api + params, 'push');
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.errorlogs.addLog('subscribeDevice response ' + data, 'push');
                resolve(data);
            }, function (error) {
                console.warn('subscribeDevice error' + error);
                _this.errorlogs.addLog('subscribeDevice error' + error, 'push');
            });
        });
    };
    // sends device id to WordPress to save as user meta, which we use later to send pushes to specific devices.
    PushService.prototype.sendDeviceToWp = function (id, ajaxurl) {
        var _this = this;
        var params = '?action=ap3_add_device_id&endpoint=' + id;
        // console.log('sending device id to wp: ' + ajaxurl + params );
        return new Promise(function (resolve) {
            _this.http.post(ajaxurl + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return console.warn('sendDeviceToWp error', error); });
        });
    };
    // Subscribe to a topic, for push segmenting
    PushService.prototype.subscribeToTopic = function (token, topicArn) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid + '&topicarn=' + topicArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('subscribe topic error' + error); });
        });
    };
    // Unsubscribe. Requires subscriptionArn which is returned after subscribing to a topic.
    PushService.prototype.unsubscribe = function (subscriptionArn) {
        var _this = this;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/unsubscribe/';
        var params = '?subscriptionArn=' + subscriptionArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('Unsubscribe error' + error); });
        });
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__appdata_error_log_service__["a" /* ErrorLogService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bp-details/bp-details.module": [
		386,
		1
	],
	"../pages/bp-group/bp-group.module": [
		383,
		8
	],
	"../pages/bp-list/bp-list.module": [
		384,
		3
	],
	"../pages/bp-messages/bp-messages.module": [
		385,
		2
	],
	"../pages/bp-modal/bp-modal.module": [
		388,
		21
	],
	"../pages/bp-notifications/bp-notifications.module": [
		387,
		20
	],
	"../pages/bp-profile/bp-profile.module": [
		390,
		7
	],
	"../pages/comments/comments.module": [
		389,
		10
	],
	"../pages/custom-pages/custom-page.module": [
		391,
		0
	],
	"../pages/download-list/download-list.module": [
		392,
		19
	],
	"../pages/edit-profile-modal/edit-profile-modal.module": [
		393,
		18
	],
	"../pages/image-modal/image-modal.module": [
		394,
		17
	],
	"../pages/language-settings/language-settings.module": [
		395,
		16
	],
	"../pages/login-modal/login-modal.module": [
		396,
		15
	],
	"../pages/media-list/media-list.module": [
		397,
		14
	],
	"../pages/post-details/post-details.module": [
		399,
		6
	],
	"../pages/post-list/post-list.module": [
		400,
		5
	],
	"../pages/push-settings/push-settings.module": [
		398,
		13
	],
	"../pages/tabs/tabs.module": [
		401,
		12
	],
	"../pages/thank-you/thank-you.module": [
		402,
		11
	],
	"../pages/woo-detail/woo-detail.module": [
		403,
		4
	],
	"../pages/woo-list/woo-list.module": [
		404,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__ = __webpack_require__(75);
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
  Generated class for the Menus provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppCamera = /** @class */ (function () {
    function AppCamera(actionSheet, Camera, Device, Transfer, File) {
        this.actionSheet = actionSheet;
        this.Camera = Camera;
        this.Device = Device;
        this.Transfer = Transfer;
        this.File = File;
        this.options = {
            quality: 50,
            destinationType: this.Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: 1204,
            targetHeight: 1204
        };
        this.appbuddy = false;
    }
    AppCamera.prototype.openSheet = function (appbuddy) {
        var _this = this;
        var buttonLabels = ['Take Photo', 'Photo Library'];
        this.actionSheet.show({
            title: 'Choose an image',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        }).then(function (buttonIndex) {
            if (buttonIndex === 1) {
                _this.takePicture(appbuddy);
            }
            else if (buttonIndex === 2) {
                _this.photoLibrary(appbuddy);
            }
        });
    };
    AppCamera.prototype.takePicture = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        this.options.sourceType = this.Camera.PictureSourceType.CAMERA;
        this.doCamera();
    };
    AppCamera.prototype.photoLibrary = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        // console.log('appbuddy app-camera.ts', this.appbuddy);
        this.options.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
        this.doCamera();
    };
    AppCamera.prototype.doCamera = function () {
        var _this = this;
        // sneak in the progress bar while taking/choosing photo for better UX
        this.progress_timeout = setTimeout(function () {
            _this.uploadProgress(5, 100);
        }, 1000);
        this.Camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // let base64Image = "data:image/jpeg;base64," + imageData;
            _this.uploadPhoto(imageData);
        }, function (err) {
            _this.hideProgress();
            alert(err);
        });
    };
    AppCamera.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
        this.iframedoc = this.iframe.contentWindow.document;
    };
    AppCamera.prototype.uploadPhoto = function (camImage) {
        var _this = this;
        console.log('app-camera.ts AppCamera.uploadPhoto camImage', camImage);
        var imageURI = '';
        console.log('typeof camImage', typeof camImage, camImage);
        if (camImage.indexOf('{') === 0) {
            var img = JSON.parse(camImage);
            imageURI = img.filename;
        }
        else {
            imageURI = camImage;
        }
        var fileTransfer = this.Transfer.create();
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        var name = image.split("?")[0];
        var anumber = image.split("?")[1];
        var ajaxurl = this.iframewin.apppCore.ajaxurl;
        if ('Android' === this.Device.platform) {
            image = anumber + '.jpg';
        }
        // this creates a random string based on the date
        var d = new Date().toTimeString();
        var random = d.replace(/[\W_]+/g, "").substr(0, 6);
        var options = {
            fileKey: 'appp_cam_file',
            // prepend image name with random string to avoid duplicate upload errors
            fileName: imageURI ? random + image : random,
            mimeType: 'image/jpeg',
            httpMethod: "POST",
            chunkedMode: false
        };
        var params = {
            form_fields: null,
            form_values: null,
            appp_action: null,
            action: null,
            nonce: null,
        };
        var form_fields = [];
        var form_values = [];
        var iterator;
        var form = this.iframedoc.getElementById('appp_camera_form');
        var form_elements = form.elements;
        var shortcode_actions = ['new', 'this', 'library'];
        params.appp_action = 'attach'; // default: attach to BP activity
        // console.log('elements', form_elements);
        for (iterator = 0; iterator < form_elements.length; iterator++) {
            form_fields[iterator] = form_elements[iterator].name;
            form_values[iterator] = form_elements[iterator].value;
            // console.log(form_elements[iterator].name, form_elements[iterator].value);
            // set the action from the shortcode param
            if (form_elements[iterator].name == 'appp_action' && shortcode_actions.indexOf(form_elements[iterator].value) > -1) {
                params.appp_action = form_elements[iterator].value;
                params.action = form_elements[iterator].value;
            }
        }
        params.form_fields = JSON.stringify(form_fields);
        params.form_values = JSON.stringify(form_values);
        // Maybe do appbuddy attach stuff. Difference is the action, nonce, and transfer success function.
        if (this.appbuddy === true) {
            // console.log('appbuddy upload');
            // see appcamera/inc/AppPresser_Camera_Ajax.php
            params.action = 'upload_image';
            if (this.iframedoc.getElementById('apppcamera-upload-image')) {
                params.nonce = this.iframedoc.getElementById('apppcamera-upload-image').value;
            }
            else if (this.iframedoc.getElementById('attach-photo')) {
                params.nonce = this.iframedoc.getElementById('attach-photo').getAttribute('data-nonce');
            }
            options.params = params;
            fileTransfer.upload(imageURI, ajaxurl, options, true).then(function (msg) {
                _this.attachWin(msg);
            }).catch(function (FileTransferError) {
                _this.appbuddy = false;
                _this.uploadErr(FileTransferError);
            });
        }
        else {
            // Not appbuddy, do normal photo upload
            this.iframedoc.getElementById('appp_cam_post_title').value = '';
            options.params = params;
            // console.log('uploadPhoto options', options);
            // console.log('fileTransfer.upload(imageURI, encodeURI(ajaxurl), options)', imageURI, encodeURI(ajaxurl), options);
            // console.log('ajaxurl', ajaxurl);
            fileTransfer.upload(imageURI, encodeURI(ajaxurl), options, true).then(function (r) {
                _this.uploadWin(r);
            }).catch(function (FileTransferError) {
                _this.uploadErr(FileTransferError);
            });
        }
        fileTransfer.onProgress(function (e) {
            if (e.lengthComputable) {
                _this.uploadProgress(e.loaded, e.total);
            }
        });
    };
    AppCamera.prototype.uploadProgress = function (loaded, total) {
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'visible';
        var perc = Math.floor(loaded / total * 100);
        progress.value = perc;
    };
    AppCamera.prototype.hideProgress = function () {
        clearTimeout(this.progress_timeout);
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'hidden';
        progress.value = 0;
    };
    // handles displaying image in appbuddy activity modal after uploaded
    AppCamera.prototype.attachWin = function (r) {
        // console.log('attach win', r);
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        var action = this.iframedoc.getElementById('appp_action').value;
        var imgUrl = this.camUtil(r.response);
        var imgTag = (imgUrl) ? '<img src="' + imgUrl + '">' : '';
        this.iframedoc.getElementById('attach-image').value = imgUrl;
        this.iframedoc.getElementById('image-status').innerHTML = imgTag;
        this.hideProgress();
        this.iframedoc.getElementById('cam-status').innerHTML = '';
        // hide action sheet
        this.iframedoc.getElementById('attach-image-sheet').className =
            this.iframedoc.getElementById('attach-image-sheet').className.replace(/\bactive\b/, 'hide');
        this.appbuddy = false;
    };
    AppCamera.prototype.uploadWin = function (r) {
        // console.log('uploadWin', r);
        // If the nonce fails, this could be a cookie issue. If cookie is not set, nonce will fail.
        if (r.response === 'Nonce Failed') {
            alert("Upload unsuccessful, nonce failed.");
        }
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        if (r && r.response) {
            var event_1 = new CustomEvent('appcamera-uploadwin', { 'detail': { response: r.response, iframe: this.iframe.contentWindow } });
            window.document.dispatchEvent(event_1);
        }
        var appcamera = this.iframe.contentWindow.window.appcamera;
        var msg = appcamera.msg.moderation;
        var status = this.iframedoc.getElementById('cam-status');
        if (!appcamera.moderation_on) {
            msg = appcamera.msg.success;
        }
        status.innerHTML = '<p>' + msg + '</p>';
        this.hideProgress();
        // clear message after 5 sec
        setTimeout(function () {
            status.innerHTML = '';
        }, 5000);
    };
    AppCamera.prototype.uploadErr = function (FileTransferError) {
        console.warn(FileTransferError);
        console.log("download error source " + FileTransferError.source);
        console.log("download error target " + FileTransferError.target);
        console.log("upload error code " + FileTransferError.code);
        switch (FileTransferError.code) {
            case FileTransferError.FILE_NOT_FOUND_ERR:
                console.warn('Transfer error: File not found');
                break;
            case FileTransferError.INVALID_URL_ERR:
                console.warn('Transfer error: invalid URL');
                break;
            case FileTransferError.CONNECTION_ERR:
                console.warn('Transfer error: connection');
                break;
            case FileTransferError.ABORT_ERR:
                console.warn('Transfer error: abort');
                break;
            case FileTransferError.NOT_MODIFIED_ERR:
                console.warn('Transfer error: not modified');
                break;
        }
        this.hideProgress();
    };
    // parse and fetch the image url we need
    AppCamera.prototype.camUtil = function (response) {
        var debug = false;
        if (response && response.indexOf("http") > 0) {
            var regex = new RegExp("(\"http(.*)\/upload(.*)\.(jpg|png)\")", "gm");
            var matches = response.match(regex);
            if (debug && matches && matches.length) {
                if (response != matches[0]) {
                    // console.log('attach img raw response', response, matches);
                }
                // console.log('attach img', matches);
            }
            if (matches[0]) {
                return JSON.parse(matches[0]);
            }
        }
        return '';
    };
    AppCamera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], AppCamera);
    return AppCamera;
}());

//# sourceMappingURL=app-camera.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConnectIframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user_model__ = __webpack_require__(65);
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
  Facebook Connect

  Used when the login is in an iframe

  See http://ionicframework.com/docs/v2/native/facebook/
*/
var FbConnectIframe = /** @class */ (function () {
    function FbConnectIframe(http, storage, events, fbconnectvars, loginservice, Facebook) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
        this.loginservice = loginservice;
        this.Facebook = Facebook;
    }
    FbConnectIframe.prototype.init = function () {
        var debug = this.fbconnectvars.debug;
        this.findIframe();
        // (<any>) syntax is to avoid typescript errors
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        if (typeof this.iframewin.apppfb == 'undefined') {
            return;
        }
        if (typeof this.iframewin.apppfb.l10n !== 'undefined') {
            this.fbconnectvars.l10n = this.iframewin.apppfb.l10n;
        }
    };
    FbConnectIframe.prototype.login = function () {
        var _this = this;
        this.init();
        this.Facebook.login(this.fbconnectvars.login_scope).then(function (result) {
            // we get back an auth response here, should save it or something
            _this.statusChangeCallback(result);
        });
        // return false; // so not to submit the form
    };
    FbConnectIframe.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // find our iframe components by tag name
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // This is called with the results from from FB.getLoginStatus().
    FbConnectIframe.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fbMe(response);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.not_authorized;
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fb_not_logged_in;
        }
    };
    FbConnectIframe.prototype.fbMe = function (response) {
        var _this = this;
        this.Facebook.api("/me?fields=" + this.fbconnectvars.verify_me_fields(this.iframewin.apppfb.me_fields), null).then(function (response) {
            _this.fetchUser_Callback(response);
        });
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnectIframe.prototype.fetchUser_Callback = function (response) {
        var _this = this;
        var redirect_url = false;
        if (this.iframedoc.getElementById('status')) {
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.login_msg.replace('{{USERNAME}}', response.name);
        }
        // Send user info to WordPress login function
        if (typeof response.name != 'undefined' && typeof response.email != 'undefined') {
            this.fbconnectvars.set_avatar(response);
            this.wplogin(response.name, response.email).then(function (data) {
                // successfully logged in
                var context = _this.iframewin.location.pathname.substring(0, _this.iframewin.location.pathname.lastIndexOf("/"));
                var baseURL = _this.iframewin.location.protocol + '//' + _this.iframewin.location.hostname + (_this.iframewin.location.port ? ':' + _this.iframewin.location.port : '') + context;
                var app_ver = (_this.iframewin.apppCore.ver) ? _this.iframewin.apppCore.ver : '3';
                if (data && data.redirect_url) {
                    redirect_url = _this.fbconnectvars.get_redirect_url(data.redirect_url);
                    if (redirect_url)
                        data.login_redirect = redirect_url;
                }
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_8__models_user_model__["a" /* User */](data));
                _this.storage.set('user_login', data);
                // hide/show menu items in main app component
                _this.events.publish('user:login', data);
                if (redirect_url === false)
                    _this.iframewin.location.href = baseURL + "?appp=" + app_ver;
            });
        }
        else {
            console.log(response);
        }
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnectIframe.prototype.fetchUser_CallbackError = function (response) {
        this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fetch_user_fail;
    };
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    FbConnectIframe.prototype.checkLoginState = function () {
        var _this = this;
        this.Facebook.getLoginStatus().then(function (result) {
            _this.statusChangeCallback(result);
        });
    };
    /* Returns promise.
     * Usage: this.wplogin(name,email).then( response => { // do something });
     */
    FbConnectIframe.prototype.wplogin = function (name, email) {
        var _this = this;
        var nameStripped = name.replace(/\s+/g, '');
        var params = '?appp=3&action=appp_wp_fblogin&user_email=' + email + '&full_name=' + nameStripped + '&security=' + this.iframewin.apppfb.security;
        return new Promise(function (resolve) {
            _this.http.post(_this.iframewin.apppCore.ajaxurl + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return alert(_this.fbconnectvars.l10n.wp_login_error); });
        });
    };
    FbConnectIframe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_7__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], FbConnectIframe);
    return FbConnectIframe;
}());

//# sourceMappingURL=login-iframe.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWoo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
  Appwoo

*/
var AppWoo = /** @class */ (function () {
    function AppWoo(iab, platform) {
        this.iab = iab;
        this.platform = platform;
    }
    AppWoo.prototype.paypal = function (paypal_url, redirect) {
        var _this = this;
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            window.open(paypal_url, '_blank');
            return;
        }
        this.browser = this.iab.create(paypal_url, '_blank');
        this.browser.on('exit').subscribe(function (value) {
            _this.browserClose(redirect);
        });
        this.browser.on('loadstop').subscribe(function (event) {
            _this.loadstopEvent(event);
        });
    };
    AppWoo.prototype.browserClose = function (redirect) {
        // need to find iframe and change src
        this.findIframe();
        this.iframe.src = redirect;
    };
    AppWoo.prototype.loadstopEvent = function (event) {
        // get base url
        var test_url = event.url.split('/')[2];
        this.findIframe();
        var src = this.iframe.src;
        src = src.split('/')[2];
        // If url in in-app browser is one of our own,
        if (src == test_url) {
            // redirect
            this.iframe.src = event.url;
            // and trigger the in-app browser to close
            this.browser.close();
        }
    };
    AppWoo.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // find our iframe components by tag name
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
    };
    AppWoo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]])
    ], AppWoo);
    return AppWoo;
}());

//# sourceMappingURL=appwoo.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_log_service__ = __webpack_require__(67);
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
// on first load, use app-data.json file and save to localstorage.
// check if app needs update in background, set localstorage item
// on next load, if app needs update, go get new data and overwrite localstorage.
*/
var AppData = /** @class */ (function () {
    function AppData(errorlogs, http, Device) {
        this.errorlogs = errorlogs;
        this.http = http;
        this.Device = Device;
        this.data = null;
        this.local = false;
        this.updateNeeded = false;
        this.notAuthorized = false;
    }
    /*
     * Get data in this priority:
     * 1. localStorage
     * 2. API
     * 3. app-data.json file
     * If anything fails, we go to the next one
     *
     * App is built with app-data.json file, which is never updated. Only API data and localStorage are updated, so falling back to app-data.json might break stuff, so it's a last resort.
     * If we are not on a device, always get data from the API. This makes sure the preview shows latest changes.
     * Update 8/18: need a way to update data when a new app version is released. If app-data.json ver is higher than local ver, we force an update.
     */
    AppData.prototype.load = function (apiurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var item = window.localStorage.getItem('myappp');
            _this.local = JSON.parse(item);
            // convert to a constant to use in promise
            var localData = _this.local;
            var localVer = (localData ? localData.meta.app_update_version : null);
            // get json data first
            _this.getData('app-data.json').then(function (jsonData) {
                _this.updateNeeded = (window.localStorage.getItem('myappp_update') == 'true') ? true : false;
                if (_this.Device.platform != 'iOS' && _this.Device.platform != 'Android') {
                    // if we are not on a device, don't cache data. helps preview update faster
                    // get data from api
                    _this.getData(apiurl).then(function (data) {
                        resolve(data);
                    });
                    return;
                }
                // if app-data.json version is higher, force update
                if (jsonData && localVer && parseFloat(localVer) < parseFloat(jsonData.meta.app_update_version)) {
                    console.log('get updated json');
                    resolve(jsonData);
                }
                else if (localData && _this.updateNeeded != true) {
                    console.log('using localStorage data');
                    // send back localstorage item
                    resolve(localData);
                }
                else if (!localData && _this.updateNeeded != true && jsonData) {
                    console.log('using app-data.json');
                    // get local app-data file
                    resolve(jsonData);
                }
                else {
                    console.log('get data from API');
                    // get data from api
                    _this.getData(apiurl).then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) {
                        // API is down, or bad url, so we need to get app-data.json file. Send back to app.component.ts line 78
                        if (err.status == 401) {
                            // membership expired
                            _this.notAuthorized = true;
                        }
                        reject(err);
                    });
                } // end if statements
            }).catch(function (e) {
                // app-data.json is missing for some reason
                console.warn(e);
                // get data from api
                _this.getData(apiurl).then(function (data) {
                    resolve(data);
                });
            }); // end this.getData()
        }); // end promise
    };
    AppData.prototype.getData = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                window.localStorage.removeItem('myappp');
                _this.local = window.localStorage.setItem('myappp', JSON.stringify(data));
                resolve(data);
            }, function (error) {
                // API is down, or bad url, send back to line 65
                reject(error);
            });
        });
    };
    /*
     * When you click "go live" in the app builder, it increments the update version, and this function tells the app to get new data on the next load.
     *
     * New!!! Maybe start debug logging; no sense calling the API multiple times to get the same data
     */
    AppData.prototype.checkForUpdates = function (apiurl) {
        var _this = this;
        // if api failed once no need to try it again
        if (this.notAuthorized)
            return; // membership expired
        var item = window.localStorage.getItem('myappp');
        this.local = JSON.parse(item);
        // Runs in the background, and set the app to update on the next load
        // check if local app_update_version and remote version match, set updateNeeded accordingly
        this.http.get(apiurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.errorlogs.init(data);
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            if (_this.local && _this.local.meta && data.meta && _this.local.meta.app_update_version != data.meta.app_update_version) {
                window.localStorage.setItem('myappp_update', 'true');
            }
            else {
                window.localStorage.removeItem('myappp_update');
            }
        });
    };
    AppData.prototype.handleError = function (err) {
        console.warn(err);
    };
    AppData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__error_log_service__["a" /* ErrorLogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], AppData);
    return AppData;
}());

//# sourceMappingURL=appdata.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGeo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
  AppGeo

*/
var AppGeo = /** @class */ (function () {
    function AppGeo(Geolocation, http) {
        this.Geolocation = Geolocation;
        this.http = http;
        this.geolocation_options = {};
        this.position_options = null;
        this.url = '';
        this.beacon_started = false;
        this.interval_id = 0;
        this.wordpress_url = '';
    }
    AppGeo.prototype.startBeacon = function (geouserpref) {
        console.log('start geolocation beacon');
        if (geouserpref.interval && geouserpref.wordpress_url) {
            if (this.position_options === null) {
                this.setCurrentPositionOptions(geouserpref);
            }
            if (this.position_options && this.beacon_started === false) {
                this.beacon_started = true;
                this.wordpress_url = geouserpref.wordpress_url;
                this.geoLocate_user();
                this.interval_id = this.start_userInterval(geouserpref.interval);
                console.log('start interval_id', this.interval_id);
            }
        }
        else {
            this.stopBeacon('No interval or wordpress_url supplied');
        }
    };
    AppGeo.prototype.stopBeacon = function (msg) {
        console.log('stop interval_id', this.interval_id);
        clearInterval(this.interval_id);
        console.log('geouser beacon stopped', msg);
        this.beacon_started = false;
    };
    AppGeo.prototype.start_userInterval = function (interval) {
        var _this = this;
        if (interval) {
            // check every 60 seconds
            return window.setInterval(function () {
                _this.geoLocate_user();
            }, interval);
        }
        else {
            console.log('geouserpref interval not set');
        }
    };
    ;
    // store location data for user
    AppGeo.prototype.geoLocate_user = function () {
        var _this = this;
        this.Geolocation.getCurrentPosition().then(function (position) {
            _this.onSuccessGeoUser(position);
        }).catch(function (error) {
            _this.stopBeacon(error.message);
        });
    };
    ;
    AppGeo.prototype.getCurrentPositionOptions = function () {
        return this.position_options;
    };
    AppGeo.prototype.setCurrentPositionOptions = function (geouserdata) {
        var timeout, maximumAge, enableHighAccuracy;
        var default_options = {
            timeout: 5000,
            maximumAge: 3000,
            enableHighAccuracy: true,
        };
        var geolocation_options = geouserdata.options;
        if (typeof geolocation_options !== 'undefined') {
            // Timeout
            if (typeof geolocation_options.timeout !== 'undefined') {
                timeout = parseInt(geolocation_options.timeout);
                if (timeout && timeout >= 1000) {
                    default_options.timeout = timeout;
                }
            }
            // maximumAge
            if (typeof geolocation_options.maximumAge !== 'undefined') {
                maximumAge = parseInt(geolocation_options.maximumAge);
                if (maximumAge && maximumAge >= 1000) {
                    default_options.maximumAge = maximumAge;
                }
            }
            // enableHighAccuracy
            if (typeof geolocation_options.enableHighAccuracy !== 'undefined') {
                enableHighAccuracy = parseInt(geolocation_options.enableHighAccuracy);
                default_options.enableHighAccuracy = (enableHighAccuracy); // force a boolean
            }
        }
        this.position_options = default_options;
    };
    ;
    AppGeo.prototype.onSuccessGeoUser = function (position) {
        var _this = this;
        console.log('longitude', position.coords.longitude);
        console.log('latitude', position.coords.latitude);
        var ajax_url = this.wordpress_url + 'wp-admin/admin-ajax.php?action=appp_geo_user';
        var coords = {
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed
        };
        var data = {
            'position': coords,
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
        };
        this.http.post(ajax_url, data).subscribe(function (data) {
            var response = data.json();
            if (response.success === false) {
                _this.stopBeacon(response.data);
            }
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ;
    AppGeo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], AppGeo);
    return AppGeo;
}());

//# sourceMappingURL=appgeo.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RolesService = /** @class */ (function () {
    function RolesService(loginservice) {
        var _this = this;
        this.loginservice = loginservice;
        this.loginservice.loginStatus().subscribe(function (user) { return _this.user = user; });
    }
    /**
     * Tests the extra_classes of a menu item again role attached to a user
     *
     * @param role Must begin with 'role-'. This could be the whole extra_class set
     */
    RolesService.prototype.test_user_role = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf('role-') >= 0) {
            // this menu item has a role to test
            var a_extra_classes = extra_classes.split(' ');
            var user_role = (this.user && this.user.role) ? this.user.role : false;
            var user_roles = (this.user && this.user.roles && this.user.roles.length) ? this.user.roles : false;
            if (user_role === false && user_roles === false) {
                // user has no roles, fail
                return false;
            }
            var role_to_test = '';
            // match the menu items role to the user's
            for (var i = 0; i < a_extra_classes.length; i++) {
                if (a_extra_classes[i].indexOf('role-') === 0) {
                    role_to_test = a_extra_classes[i].replace('role-', '');
                    // match a single role
                    if (role_to_test == user_role) {
                        // Match! This user passes
                        return true;
                    }
                    // match one of the roles
                    if (this.hasRole(role_to_test)) {
                        // Match! This user passes
                        return true;
                    }
                }
            }
            // fail, user did not match any roles
            return false;
        }
        // no role to test, ok to add the item to the menun
        return true;
    };
    RolesService.prototype.hasRole = function (role) {
        return (this.user && this.user.hasRole(role));
    };
    RolesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], RolesService);
    return RolesService;
}());

//# sourceMappingURL=roles.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_streaming_media_streaming_media__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent(navParams, viewCtrl, streamingMedia, events) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.streamingMedia = streamingMedia;
        this.events = events;
        this.progress = null;
        this.image = null;
        this.playerExpanded = true;
        this.title = null;
        console.log(navParams.data);
        this.events.subscribe("audio_player_progress", function (position) {
            _this.progress = position;
        });
    }
    AudioPlayerComponent.prototype.ngAfterViewInit = function () {
        if (this.navParams && this.navParams.get('image')) {
            this.image = this.navParams.get('image');
        }
        else {
            this.image = null;
        }
        if (this.navParams && this.navParams.get('title')) {
            this.title = this.navParams.get('title');
        }
        else {
            this.title = null;
        }
    };
    AudioPlayerComponent.prototype.play = function () {
        this.streamingMedia.play();
    };
    AudioPlayerComponent.prototype.pause = function () {
        this.streamingMedia.pause();
    };
    AudioPlayerComponent.prototype.back = function () {
        this.streamingMedia.playPrevious();
    };
    AudioPlayerComponent.prototype.forward = function () {
        this.streamingMedia.playNext();
    };
    AudioPlayerComponent.prototype.expand = function () {
        this.playerExpanded = true;
        this.events.publish('audio_player_expand_collapse');
    };
    AudioPlayerComponent.prototype.seek = function () {
        this.streamingMedia.seek(this.progress);
    };
    AudioPlayerComponent.prototype.collapse = function () {
        this.playerExpanded = false;
        this.events.publish('audio_player_expand_collapse', { collapse: true });
    };
    AudioPlayerComponent.prototype.close = function () {
        this.streamingMedia.cleanup();
        this.viewCtrl.dismiss();
    };
    AudioPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "audio-player",template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/components/audio-player/audio-player.html"*/'<ion-fab bottom center *ngIf="!playerExpanded">\n  <button ion-fab color="dark" mini (click)="expand()">\n    <ion-icon name="options"></ion-icon>\n  </button>\n</ion-fab>\n\n<div *ngIf="playerExpanded">\n  <div class="close-buttons">\n    <button ion-button clear (click)="close()" class="close-button">\n      <ion-icon name="close"></ion-icon>\n    </button>\n    <button ion-button clear (click)="collapse()" class="collapse-button">\n      <ion-icon name="arrow-down"></ion-icon>\n    </button>\n  </div>\n  <ion-card class="audio-player-image" no-lines *ngIf="image">\n    <img [src]="image" />\n  </ion-card>\n  <ion-list class="audio-player-inside" no-lines>\n    <ion-item no-lines text-wrap class="player-title-wrap">\n      <h1 class="player-title" *ngIf="title" [innerHTML]="title"></h1>\n    </ion-item>\n    <ion-item class="player-buttons" no-lines>\n      <button\n        class="skip-backward-button"\n        ion-button\n        clear\n        (click)="back()"\n        icon-only\n      >\n        <ion-icon name="skip-backward"></ion-icon>\n      </button>\n      <button ion-button class="pause-button" clear (click)="pause()" icon-only>\n        <ion-icon name="pause"></ion-icon>\n      </button>\n      <button\n        ion-button\n        class="play-button"\n        clear\n        (click)="play()"\n        icon-only\n      >\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button\n        class="forward-button"\n        ion-button\n        clear\n        (click)="forward()"\n        icon-only\n      >\n        <ion-icon name="skip-forward"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item class="player-progress" no-lines>\n      <ion-range\n        [(ngModel)]="progress"\n        (ionBlur)="seek()"\n        min="0"\n        max="100"\n        color="primary"\n      ></ion-range>\n    </ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/components/audio-player/audio-player.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());

//# sourceMappingURL=audio-player.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globalvars_globalvars__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WooProvider = /** @class */ (function () {
    function WooProvider(http, globalvars, storage) {
        this.http = http;
        this.globalvars = globalvars;
        this.storage = storage;
        this.data = null;
        var item = window.localStorage.getItem('myappp');
        this.itemParsed = JSON.parse(item);
        this.url = this.itemParsed.wordpress_url;
        this.wooRest = 'wp-json/wc/v3/';
        this.cartRest = 'wp-json/appcommerce/v1/cart';
        this.authString = this.globalvars.getWooAuth();
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': this.authString
            }),
            withCredentials: true
        };
    }
    /* Returns promise.
     * Usage:
     */
    WooProvider.prototype.get = function (route, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!route)
                reject({ data: { message: "No URL set. " } });
            var concat;
            // check if url already has a query param
            if (route.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            var url = _this.url + _this.wooRest + route;
            // set pagination
            if (page === 'nopaging') {
                // get all results with no paging
                url = url + concat + 'per_page=50';
            }
            else if (page) {
                url = url + concat + 'page=' + page;
            }
            else {
                url = url + concat + 'page=1';
            }
            // don't show draft products
            if (route.indexOf('products') >= 0 && route.indexOf('reviews') < 0) {
                url = url + '&status=publish';
            }
            _this.http.get(url, _this.httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.send = function (data, route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!data)
                reject({ data: { message: "No data." } });
            var url = _this.url + _this.wooRest + route;
            _this.http.post(url, data, _this.httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.addToCart = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!data)
                reject({ data: { message: "No data." } });
            _this.http.post(_this.url + _this.cartRest + '/add', data, _this.httpOptions)
                .subscribe(function (response) {
                console.log(response);
                resolve(response);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.clearCart = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.url + _this.cartRest + '/clear', _this.httpOptions)
                .subscribe(function (response) {
                resolve(response);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.getCartContents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.cartRest + '?thumb=true', _this.httpOptions)
                .subscribe(function (response) {
                _this.setCartCount(response);
                resolve(response);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    // update cart total every time we do an API call
    WooProvider.prototype.setCartCount = function (response) {
        if (typeof response === 'string') {
            this.storage.remove('cart_count');
        }
        else {
            this.storage.set('cart_count', response.cart_total.cart_contents_count);
        }
    };
    WooProvider.prototype.removeItem = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.url + _this.cartRest + '/cart-item?cart_item_key=' + item.key, _this.httpOptions)
                .subscribe(function (response) {
                resolve(response);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.updateItem = function (item, quantity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + _this.cartRest + '/cart-item?cart_item_key=' + item.key + '&quantity=' + quantity, null, _this.httpOptions)
                .subscribe(function (response) {
                resolve(response);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    // find cart, shop, etc page in menu items, return [ id, slug ]
    WooProvider.prototype.getWooPage = function (pageName) {
        var pages = [];
        if (this.itemParsed.menus.items) {
            pages = this.itemParsed.menus.items;
        }
        if (this.itemParsed.tab_menu.items) {
            for (var i = 0; i < this.itemParsed.tab_menu.items.length; ++i) {
                pages.push(this.itemParsed.tab_menu.items[i]);
            }
        }
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            if (page && page.woo_page && page.woo_page == pageName) {
                return page;
            }
        }
        return null;
    };
    WooProvider.prototype.getSetting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.wooRest + 'system_status', _this.httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.getCurrencySymbol = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('woo_currency_symbol').then(function (symbol) {
                if (symbol) {
                    resolve(symbol);
                }
                else {
                    _this.getSetting().then(function (settings) {
                        console.log('settings', settings);
                        if (settings && settings.settings && settings.settings.currency_symbol) {
                            _this.storage.set('woo_currency_symbol', settings.settings.currency_symbol);
                            resolve(settings.settings.currency_symbol);
                        }
                        else {
                            // default to USD
                            resolve('&#36;');
                        }
                    }).catch(function (e) {
                        console.warn(e);
                        resolve('&#36;');
                    }); // end getSetting()
                }
            }); // end storage.get
        }); // end promise
    };
    /* Returns promise.
     */
    WooProvider.prototype.getCustom = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!route)
                reject({ data: { message: "No URL set. " } });
            var url = _this.url + route;
            _this.http.get(url, _this.httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.handleError = function (err) {
        console.warn(err);
    };
    WooProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], WooProvider);
    return WooProvider;
}());

//# sourceMappingURL=woo.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__ = __webpack_require__(75);
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
 * Services for BuddyPress API
*/
var BpProvider = /** @class */ (function () {
    function BpProvider(http, actionSheet, Camera, Device, Transfer, File) {
        this.http = http;
        this.actionSheet = actionSheet;
        this.Camera = Camera;
        this.Device = Device;
        this.Transfer = Transfer;
        this.File = File;
        this.data = null;
        this.options = {
            quality: 50,
            destinationType: this.Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: 1204,
            targetHeight: 1204
        };
        var item = window.localStorage.getItem('myappp');
        this.url = JSON.parse(item).wordpress_url;
        this.restBase = 'wp-json/ap-bp/v1/';
    }
    // pass full route url with login data. Some routes do not require login.
    BpProvider.prototype.getItems = function (route, login_data, page) {
        var _this = this;
        // set pagination
        if (!page) {
            var page_1 = '1';
        }
        var user_id = (login_data && login_data.user_id ? '&user_id=' + login_data.user_id : '');
        var token = (login_data ? '&token=' + login_data.token : '');
        var concat;
        if (route.indexOf('?') >= 0) {
            concat = '&';
        }
        else {
            concat = '?';
        }
        var url = route + concat + 'page=' + page + user_id + token;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.getItem = function (route, login_data) {
        var _this = this;
        var concat;
        if (route.indexOf('?') >= 0) {
            concat = '&';
        }
        else {
            concat = '?';
        }
        var user_id = (login_data && login_data.user_id ? 'user_id=' + login_data.user_id : '');
        var token = (login_data && login_data.token && login_data.user_id ? '&token=' + login_data.token : '');
        var url = this.url + this.restBase + route;
        url = url + concat + user_id + token;
        console.log(url);
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    /**
     * Gets current fields from profile
     * @param {*} login_data
     * @returns {Promise<any>}
     */
    BpProvider.prototype.getFields = function (login_data) {
        var objectParams = { user_id: login_data.user_id, token: login_data.token, fetch_field_data: true };
        var route = this.url + this.restBase + 'xprofile/fields';
        var params = this.objToParams(objectParams);
        return this.http.get(route + '?' + params, null).toPromise();
    };
    BpProvider.prototype.doCamera = function (type) {
        var _this = this;
        if (type === 'camera') {
            this.options.sourceType = this.Camera.PictureSourceType.CAMERA;
        }
        else {
            this.options.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
        }
        return new Promise(function (resolve, reject) {
            _this.Camera.getPicture(_this.options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                // let base64Image = "data:image/jpeg;base64," + imageData;
                resolve(imageData);
            }, function (err) {
                alert(err);
                reject(err);
            });
        });
    };
    /* Returns promise.
     */
    BpProvider.prototype.postWithImage = function (login_data, activity, camImage, group_id) {
        var _this = this;
        if (!activity.content && camImage) {
            // let people post only an image
            activity.content = '';
        }
        var route = this.url + this.restBase + 'activity';
        return new Promise(function (resolve, reject) {
            var imageURI = '';
            var fileTransfer = _this.Transfer.create();
            var options = {};
            if (camImage.indexOf('{') === 0) {
                var img = JSON.parse(camImage);
                imageURI = img.filename;
            }
            else {
                imageURI = camImage;
            }
            var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            var name = image.split("?")[0];
            var anumber = image.split("?")[1];
            if ('Android' === _this.Device.platform) {
                image = anumber + '.jpg';
            }
            // this creates a random string based on the date
            var d = new Date().toTimeString();
            var random = d.replace(/[\W_]+/g, "").substr(0, 6);
            options = {
                fileKey: 'activity_image',
                // prepend image name with random string to avoid duplicate upload errors
                fileName: imageURI ? random + image : random,
                mimeType: 'image/jpeg',
                httpMethod: "POST",
                chunkedMode: false
            };
            var params = {
                content: activity.content,
                user_id: login_data.user_id,
                token: login_data.token
            };
            if (group_id) {
                params['primary_id'] = group_id;
            }
            options.params = params;
            fileTransfer.upload(imageURI, route, options, true).then(function (data) {
                console.log(data);
                resolve(JSON.parse(data.response));
            }).catch(function (FileTransferError) {
                _this.handleError(FileTransferError);
                reject(FileTransferError);
            });
        }); // end promise
    };
    /* Returns promise.
     */
    BpProvider.prototype.postTextOnly = function (login_data, activity, group_id) {
        var _this = this;
        var route = this.url + this.restBase + 'activity';
        var data = {
            user_id: login_data.user_id,
            content: activity.content,
            token: login_data.token,
        };
        if (activity.parent) {
            data.type = 'activity_comment';
            data.parent = activity.parent;
            data.id = activity.parent;
        }
        if (group_id) {
            data.type = 'activity_update';
            data.primary_id = group_id;
        }
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            // sending data as params avoids OPTIONS pre-flight request which doesn't work on some apache servers for an unknown reason
            _this.http.post(route + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.updateItem = function (action, login_data, activity_id) {
        var _this = this;
        var route = this.url + this.restBase + 'activity/' + activity_id;
        var data = {
            user_id: login_data.user_id,
            action: action,
            token: login_data.token
        };
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(route + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    /**
     * Updates the specified profile field
     * @param {*} login_data
     * @param {number} fieldId
     * @param {string} fieldValue
     * @returns {Promise<any>}
     */
    BpProvider.prototype.updateProfileField = function (login_data, fieldId, fieldValue) {
        var objectParams = { token: login_data.token, value: fieldValue };
        var route = this.url + this.restBase + 'xprofile/' + fieldId + '/data/' + login_data.user_id;
        var params = this.objToParams(objectParams);
        return this.http.post(route + '?' + params, null).toPromise();
    };
    /**
       * Update the profile avatar picture
       * @param {*} login_data
       * @param {string} imageUrl
       * @returns {Promise<any>}
       */
    BpProvider.prototype.updateProfileAvatar = function (login_data, imageUrl) {
        var _this = this;
        var route = this.url + this.restBase + 'members/' + login_data.user_id + '/avatar';
        return new Promise(function (resolve, reject) {
            var imageURI = '';
            var fileTransfer = _this.Transfer.create();
            var options = {};
            if (imageUrl.indexOf('{') === 0) {
                var img = JSON.parse(imageUrl);
                imageURI = img.filename;
            }
            else {
                imageURI = imageUrl;
            }
            var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            var name = image.split("?")[0];
            var anumber = image.split("?")[1];
            if ('Android' === _this.Device.platform) {
                image = anumber + '.jpg';
            }
            // this creates a random string based on the date
            var d = new Date().toTimeString();
            var random = d.replace(/[\W_]+/g, "").substr(0, 6);
            options = {
                fileKey: 'file',
                // prepend image name with random string to avoid duplicate upload errors
                fileName: imageURI ? random + image : random,
                mimeType: 'image/jpeg',
                httpMethod: "POST",
                chunkedMode: false
            };
            options.params = { token: login_data.token };
            fileTransfer.upload(imageURI, route, options, true).then(function (data) {
                console.log(data);
                resolve(JSON.parse(data.response));
            }).catch(function (FileTransferError) {
                _this.handleError(FileTransferError);
                reject(FileTransferError);
            });
        }); // end promise
    };
    BpProvider.prototype.joinGroup = function (item, login_data) {
        var _this = this;
        var route = this.url + this.restBase + 'groups/join-group';
        var data = {
            user_id: login_data.user_id,
            group_id: item.id,
            token: login_data.token
        };
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(route + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.doFriend = function (friendId, login_data, unfriend) {
        var _this = this;
        var route = this.url + this.restBase + 'friends/friend/' + friendId;
        var action;
        if (unfriend) {
            action = 'remove_friend';
        }
        else {
            action = 'add_friend';
        }
        var data = {
            action: action,
            user_id: login_data.user_id,
            token: login_data.token
        };
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(route + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    /**
     * Accepts or Withdraws a friend request to the API
     * @param {number} friendId
     * @param {*} login_data
     * @param {string} withdraw
     * @returns {Promise<any>}
     */
    BpProvider.prototype.acceptOrWithdrawFriendship = function (friendId, login_data, withdraw) {
        var route = this.url + this.restBase + 'friends/requests/' + friendId;
        var action = (withdraw) ? 'withdraw' : 'accept';
        var data = { action: action, user_id: login_data.user_id, token: login_data.token };
        var params = this.objToParams(data);
        return this.http.post(route + '?' + params, null).toPromise();
    };
    BpProvider.prototype.sendMessage = function (recipients, login_data, subject, content, threadId) {
        var _this = this;
        if (!subject) {
            subject = '';
        }
        var route = this.url + this.restBase + 'messages/send';
        var data = {
            recipients: recipients,
            subject: subject,
            content: content,
            user_id: login_data.user_id,
            token: login_data.token,
        };
        if (threadId) {
            data.thread_id = threadId;
        }
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(route + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    /**
     * Sends an image as a private message (@TODO refactor this when testing on device)
     *
     * @param {*} recipients
     * @param {*} login_data
     * @param {string} image
     * @param {number} threadId
     * @returns {Promise<any>}
     */
    BpProvider.prototype.sendMessageWithImage = function (recipients, login_data, imageUrl, threadId) {
        var _this = this;
        var route = this.url + this.restBase + 'messages/send';
        return new Promise(function (resolve, reject) {
            var imageURI = '';
            var fileTransfer = _this.Transfer.create();
            var options = {};
            if (imageUrl.indexOf('{') === 0) {
                var img = JSON.parse(imageUrl);
                imageURI = img.filename;
            }
            else {
                imageURI = imageUrl;
            }
            var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            var name = image.split("?")[0];
            var anumber = image.split("?")[1];
            if ('Android' === _this.Device.platform) {
                image = anumber + '.jpg';
            }
            // this creates a random string based on the date
            var d = new Date().toTimeString();
            var random = d.replace(/[\W_]+/g, "").substr(0, 6);
            options = {
                fileKey: 'message_image',
                // prepend image name with random string to avoid duplicate upload errors
                fileName: imageURI ? random + image : random,
                mimeType: 'image/jpeg',
                httpMethod: "POST",
                chunkedMode: false
            };
            var params = {
                recipients: recipients,
                user_id: login_data.user_id,
                token: login_data.token,
                thread_id: threadId
            };
            options.params = params;
            fileTransfer.upload(imageURI, route, options, true).then(function (data) {
                console.log(data);
                resolve(JSON.parse(data.response));
            }).catch(function (FileTransferError) {
                _this.handleError(FileTransferError);
                reject(FileTransferError);
            });
        }); // end promise
    };
    BpProvider.prototype.getNotifications = function (login_data) {
        // let user_id = ( login_data && login_data.user_id ? '&user_id=' + login_data.user_id : '' );
        // let token = ( login_data ? '&token=' + login_data.token : '' );
        var _this = this;
        var data = '?user_id=' + login_data.user_id + '&token=' + login_data.token;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.restBase + 'notifications' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.clearNotification = function (notification, login_data) {
        var _this = this;
        var data = {
            user_id: (login_data && login_data.user_id) ? login_data.user_id : '',
            token: (login_data && login_data.token) ? login_data.token : '',
            component: notification.component,
            action: notification.action
        };
        var params = this.objToParams(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + _this.restBase + 'notifications?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.objToParams = function (data) {
        return Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
    };
    BpProvider.prototype.handleError = function (err) {
        console.warn(err);
    };
    BpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], BpProvider);
    return BpProvider;
}());

//# sourceMappingURL=bp-provider.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Posts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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




/*
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Posts = /** @class */ (function () {
    function Posts(http, storage) {
        this.http = http;
        this.storage = storage;
        this.data = null;
    }
    Posts.prototype.load = function (url, page) {
        var _this = this;
        // set pagination
        if (!page) {
            var page_1 = '1';
        }
        // if (this.data) {
        //   // already loaded data. this is handled elsewhere for now
        //   return Promise.resolve(this.data);
        // }
        return new Promise(function (resolve, reject) {
            var concat;
            // check if url already has a query param
            if (url && url.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            _this.storage.get('app_language').then(function (lang) {
                var language = '';
                if (lang && typeof (lang) === 'object') {
                    language = '&lang=' + lang.code;
                }
                else if (lang && typeof (lang) === 'string') {
                    language = '&lang=' + lang;
                }
                _this.http.get(url + concat + 'appp=3&page=' + page + language)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.data = data;
                    resolve(_this.data);
                }, function (error) {
                    // probably a bad url or 404
                    reject(error);
                });
            });
        });
    };
    Posts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Posts);
    return Posts;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoUtils = /** @class */ (function () {
    function VideoUtils(platform) {
        this.platform = platform;
    }
    // stop videos from playing when app is exited, required by Google
    VideoUtils.prototype.killVideos = function (elementRef) {
        this.platform.pause.subscribe(function () {
            var frames = elementRef.nativeElement.getElementsByTagName('iframe');
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
    VideoUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], VideoUtils);
    return VideoUtils;
}());

//# sourceMappingURL=video-utils.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPlogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(65);
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
 * Login to WordPress from the app
*/
var WPlogin = /** @class */ (function () {
    function WPlogin(loginservice, http) {
        this.loginservice = loginservice;
        this.http = http;
        this.data = null;
        var item = window.localStorage.getItem('myappp');
        this.url = JSON.parse(item).wordpress_url;
    }
    /* Returns promise.
     * Usage:
     */
    WPlogin.prototype.login = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.url)
                reject({ data: { message: "No WordPress URL set. " } });
            var url = _this.url + 'wp-json/appp/v1/login';
            var formData = new FormData();
            formData.append("username", form.user);
            formData.append("password", form.pass);
            var request = new XMLHttpRequest();
            request.open("POST", url);
            request.send(formData);
            request.onload = function (e) {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        console.log(request.responseText);
                        try {
                            var login_data = JSON.parse(request.responseText);
                            login_data = (login_data.data) ? login_data.data : login_data;
                            if (typeof login_data.username !== 'undefined') {
                                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */](login_data));
                            }
                        }
                        catch (error) {
                            console.log(error);
                        }
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        if (request.statusText) {
                            reject(request.statusText);
                        }
                        else {
                            reject('Failed, with no response from server');
                        }
                    }
                }
            };
        });
    };
    WPlogin.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.url + 'wp-json/appp/v1/logout';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.success == true)
                    resolve(data);
                reject(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    WPlogin.prototype.register = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/register';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.verifyUser = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/verify';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.resendCode = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/verify-resend';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.resetPassword = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/reset-password';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    // used for in app purchases
    // register user if they don't exist
    // store transaction_id from app store purchase in user meta
    // log in and return data
    WPlogin.prototype.iapRegisterLogIn = function (userData, transaction_id) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/in-app-purchase';
        var params = Object.keys(userData).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(userData[k]);
        }).join('&');
        // transaction_id is only sent on initial purchase, not restore
        if (transaction_id) {
            params += '&transaction_id=' + encodeURIComponent(transaction_id);
        }
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.handleError = function (err) {
        console.warn(err);
    };
    WPlogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], WPlogin);
    return WPlogin;
}());

//# sourceMappingURL=wplogin.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkStatusService = /** @class */ (function () {
    function NetworkStatusService(network, platform) {
        this.network = network;
        this.platform = platform;
        this.connectionObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentStatus = null;
        if (window.location && window.location.href && window.location.href.indexOf('localhost') >= 0)
            return;
        // only do this on a device
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.initNetworkWatch();
        }
    }
    NetworkStatusService.prototype.networkStatus = function () {
        // return the observable
        return this.connectionObs;
    };
    /**
     *
     * @param wait optional How long to wait which confirms we have truly lost a connection
     */
    NetworkStatusService.prototype.initNetworkWatch = function (wait) {
        var _this = this;
        wait = (wait) ? wait : 3000;
        if (!this.network)
            return;
        // Initial status
        if (this.network.type === 'none') {
            this.connectionObs.next(false);
            this.currentStatus = false;
        }
        else {
            this.connectionObs.next(true);
            this.currentStatus = true;
        }
        // Subscribe to changes
        this.network.onchange().subscribe(function () {
            console.log('networkstatusservice: network type', _this.network.type);
            // Only change the app's network status if the network type changes and stays
            // consisent for X seconds (wait variable)
            var current_type = _this.network.type;
            // filter out the frequent changes
            setTimeout(function () {
                if (_this.network.type == 'none' && _this.network.type == current_type) {
                    _this.connectionObs.next(false);
                    _this.currentStatus = false;
                }
                else if (_this.network.type != 'none' && _this.network.type == current_type) {
                    _this.connectionObs.next(true);
                    _this.currentStatus = true;
                }
            }, wait);
        }, function (err) { console.warn(err); });
    };
    NetworkStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */]])
    ], NetworkStatusService);
    return NetworkStatusService;
}());

//# sourceMappingURL=network-status.service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConnectApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__(65);
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
  Facebook Connect

  Used when the login is directly in the app

  See http://ionicframework.com/docs/v2/native/facebook/
*/
var FbConnectApp = /** @class */ (function () {
    function FbConnectApp(http, storage, events, fbconnectvars, Facebook, Device, toastCtrl, loginservice, translate) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
        this.Facebook = Facebook;
        this.Device = Device;
        this.toastCtrl = toastCtrl;
        this.loginservice = loginservice;
        this.translate = translate;
    }
    FbConnectApp.prototype.login = function () {
        var _this = this;
        console.log('this.fbconnectvars.login_scope', this.fbconnectvars.login_scope);
        if (typeof this.Device.platform != 'string' && location.port != '8100') {
            this.translate.get('Please try from a device.').subscribe(function (text) {
                alert(text);
            });
            return;
        }
        this.Facebook.login(this.fbconnectvars.login_scope)
            .then(function (result) {
            // we get back an auth response here, should save it or something
            _this.statusChangeCallback(result);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    // This is called with the results from from FB.getLoginStatus().
    FbConnectApp.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fbMe(response);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            // @TODO - Handle not authorized message
            console.log(this.fbconnectvars.l10n.not_authorized);
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            // @TODO - Handle not loggedin message
            console.log(this.fbconnectvars.l10n.fb_not_logged_in);
        }
    };
    FbConnectApp.prototype.fbMe = function (response) {
        var _this = this;
        this.Facebook.api("/me?fields=" + this.fbconnectvars.me_fields, null).then(function (response) {
            _this.fetchUser_Callback(response);
        });
    };
    FbConnectApp.prototype.fetchUser_Callback = function (response) {
        var _this = this;
        // Send user info to WordPress login function
        if (typeof response.name != 'undefined' && typeof response.email != 'undefined') {
            var login_msg = this.fbconnectvars.l10n.login_msg.replace('{{USERNAME}}', response.name);
            var redirect_url = void 0;
            this.fbconnectvars.set_avatar(response);
            this.events.publish('fb:login', response);
            this.wplogin(response.name, response.email).then(function (data) {
                if (typeof (data) == 'number') {
                    // WP login failure
                    console.warn('WPLogin response was ' + data.toString() + '.  AppFBConnect plugin might not be active');
                    _this.fbconnectvars.loggout().then(function (fb_logout_response) {
                        console.log(fb_logout_response);
                        console.warn('Since WPLogin failed, loggedout() of Facebook now occurred');
                    });
                    _this.translate.get('Login failed').subscribe(function (text) {
                        _this.presentToast(text);
                    });
                    return false;
                }
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* User */](data));
                console.log('After Facebook and WPLogin, wplogin response', data);
                _this.storage.set('user_login', data);
                // hide/show menu items in main app component
                _this.events.publish('user:login', data);
            });
        }
        else {
            console.log(response);
        }
    };
    FbConnectApp.prototype.wplogin = function (name, email) {
        var _this = this;
        var nameStripped = name.replace(/\s+/g, '');
        var fb_security = this.fbconnectvars.get_nonce();
        var ajaxurl = this.fbconnectvars.get_ajaxurl();
        var params = '?appp=3&action=appp_wp_fblogin&user_email=' + email + '&full_name=' + nameStripped + '&security=' + fb_security;
        return new Promise(function (resolve, reject) {
            console.log('attempt wplogin using fb_nonce: %s', ajaxurl + params);
            _this.http.post(ajaxurl + params, null).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // WPLogin failed, let's try to logout, just in case
                console.log('wplogin failed; try to logout, just in case', error);
                var url = ajaxurl + '?action=apppajaxlogout';
                _this.http.get(url)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return console.log('wplogout successful', data); });
                alert(_this.fbconnectvars.l10n.wp_login_error);
                reject(error);
            });
        });
    };
    FbConnectApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    FbConnectApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["d" /* TranslateService */]])
    ], FbConnectApp);
    return FbConnectApp;
}());

//# sourceMappingURL=login-app.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(294);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export MyMissingTranslationHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_purchase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_streaming_media__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_media__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_opener__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_appdata_myappp_settings_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_camera_app_camera__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_posts_posts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_appads_appads__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_logins_logins__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_logins_roles_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_facebook_login_iframe__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_facebook_login_app__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_facebook_fbconnect_settings__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_push_push__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_appwoo_appwoo__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_appdata_appdata__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_wplogin_wplogin__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_language_language_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_header_logo_header_logo__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_video_video_utils__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_appgeo_appgeo__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_inapppurchase_inapppurchase__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_download_download__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_buddypress_bp_provider__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_menus_menu_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_network_network_status_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angulartics2_ga__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angulartics2_routerlessmodule__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_analytics_analytics_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_appdata_error_log_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_appdata_remote_data__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_streaming_media_streaming_media__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_pdf_pdf__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_iframe_iframe__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_woo_woo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_audio_player_audio_player_module__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























/* Providers */
































/* Other */



// required for ng translate, tells it to look in assets folder for trans files
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "assets/i18n/", ".json");
}
var MyMissingTranslationHandler = /** @class */ (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return MyMissingTranslationHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_60__pages_iframe_iframe__["a" /* Iframe */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bp-group/bp-group.module#BpGroupPageModule', name: 'BpGroupPage', segment: 'bp-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-list/bp-list.module#BpListModule', name: 'BpList', segment: 'bp-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-messages/bp-messages.module#BpMessagesModule', name: 'BpMessages', segment: 'bp-messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-details/bp-details.module#BpDetailsPageModule', name: 'BpDetailsPage', segment: 'bp-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-notifications/bp-notifications.module#BpNotificationsModule', name: 'BpNotifications', segment: 'bp-notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-modal/bp-modal.module#BpModalModule', name: 'BpModal', segment: 'bp-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-profile/bp-profile.module#BpProfilePageModule', name: 'BpProfilePage', segment: 'bp-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom-pages/custom-page.module#CustomPageModule', name: 'CustomPage', segment: 'custom-page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/download-list/download-list.module#DownloadListModule', name: 'DownloadList', segment: 'download-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile-modal/edit-profile-modal.module#EditProfileModalModule', name: 'EditProfileModal', segment: 'edit-profile-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-modal/image-modal.module#ImageModalModule', name: 'ImageModal', segment: 'image-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language-settings/language-settings.module#LanguageSettingsModule', name: 'LanguageSettings', segment: 'language-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalModule', name: 'LoginModal', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/media-list/media-list.module#MediaListModule', name: 'MediaList', segment: 'media-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/push-settings/push-settings.module#PushSettingsModule', name: 'PushSettings', segment: 'push-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-details/post-details.module#PostDetailsPageModule', name: 'PostDetailsPage', segment: 'post-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-list/post-list.module#PostListModule', name: 'PostList', segment: 'post-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thank-you/thank-you.module#ThanksPageModule', name: 'ThanksPage', segment: 'thank-you', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/woo-detail/woo-detail.module#WooDetailModule', name: 'WooDetail', segment: 'woo-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/woo-list/woo-list.module#WooListModule', name: 'WooList', segment: 'woo-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_61__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_63__components_audio_player_audio_player_module__["a" /* AudioPlayerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_54_angulartics2_routerlessmodule__["a" /* Angulartics2RouterlessModule */].forRoot([__WEBPACK_IMPORTED_MODULE_53_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */]]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_60__pages_iframe_iframe__["a" /* Iframe */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* MissingTranslationHandler */],
                    useClass: MyMissingTranslationHandler
                },
                __WEBPACK_IMPORTED_MODULE_29__providers_appdata_myappp_settings_service__["a" /* MyApppSettingsService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_camera_app_camera__["a" /* AppCamera */],
                __WEBPACK_IMPORTED_MODULE_31__providers_posts_posts__["a" /* Posts */],
                __WEBPACK_IMPORTED_MODULE_32__providers_globalvars_globalvars__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_55__providers_analytics_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_appads_appads__["a" /* AppAds */],
                __WEBPACK_IMPORTED_MODULE_36__providers_facebook_login_iframe__["a" /* FbConnectIframe */],
                __WEBPACK_IMPORTED_MODULE_37__providers_facebook_login_app__["a" /* FbConnectApp */],
                __WEBPACK_IMPORTED_MODULE_38__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
                __WEBPACK_IMPORTED_MODULE_39__providers_push_push__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_40__providers_appwoo_appwoo__["a" /* AppWoo */],
                __WEBPACK_IMPORTED_MODULE_41__providers_appdata_appdata__["a" /* AppData */],
                __WEBPACK_IMPORTED_MODULE_47__providers_appgeo_appgeo__["a" /* AppGeo */],
                __WEBPACK_IMPORTED_MODULE_43__providers_logins_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_44__providers_language_language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_56__providers_appdata_error_log_service__["a" /* ErrorLogService */],
                __WEBPACK_IMPORTED_MODULE_57__providers_appdata_remote_data__["a" /* RemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_34__providers_logins_logins__["a" /* Logins */],
                __WEBPACK_IMPORTED_MODULE_35__providers_logins_roles_service__["a" /* RolesService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_wplogin_wplogin__["a" /* WPlogin */],
                __WEBPACK_IMPORTED_MODULE_45__providers_header_logo_header_logo__["a" /* HeaderLogo */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__["a" /* ActionSheet */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_46__providers_video_video_utils__["a" /* VideoUtils */],
                __WEBPACK_IMPORTED_MODULE_48__providers_inapppurchase_inapppurchase__["a" /* IAP */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_49__providers_download_download__["a" /* Download */],
                __WEBPACK_IMPORTED_MODULE_50__providers_buddypress_bp_provider__["a" /* BpProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_menus_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_52__providers_network_network_status_service__["a" /* NetworkStatusService */],
                __WEBPACK_IMPORTED_MODULE_62__providers_woo_woo__["a" /* WooProvider */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_58__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_59__providers_pdf_pdf__["a" /* PdfService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Store global variables to use throughout app

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalVars = /** @class */ (function () {
    function GlobalVars(http) {
        this.http = http;
        this.data = null;
        this.useDynamicContentModule = false; // false when using our builder on remote Ionic builder?
        // url should be WP site with AP installed, dynamically changes based on build form
        this.appid = '10';
        this.apiurl = 'https://myapppresser.com/aasimz/';
        this.endpoint = 'wp-json/ap3/v1/app/';
        this.wooAuth = 'Basic Y2tfNGRmNzI1NjRlODZhZDQyZDA5MWYxZjg2ZDBjZjM3NTI2ODk1NGZmMjpjc184NTRkNGUxOWE0YzM0YjlhNDUyNTY3MTQyNDFmZDE0MTI3ZWUxZDFl';
        if (__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"]) {
            this.useDynamicContentModule = true;
        }
        // development API
        if (window.location && window.location.href && window.location.href.indexOf('localhost') >= 0) {
            this.appid = '884';
            this.apiurl = 'https://myapppresser.com/demos/';
            // auth for appptest.wpengine.com
            // this.wooAuth = 'Basic Y2tfMmRhZTNmMzg0NDg2MGIxNmEyNzgwNjY0ODMzNjgwNzIyYjBiZTAzNzpjc183NDE3ZmFjYzJmMmVkNjQ1Zjc4NjBjOWNiOTE2MTBiZjVmY2Y2ZjVl';
        }
        this.endpoint += this.appid;
        this.api = this.apiurl + this.endpoint;
    }
    GlobalVars.prototype.getApi = function () {
        return this.api;
    };
    GlobalVars.prototype.getApiRoot = function () {
        return this.apiurl;
    };
    GlobalVars.prototype.getAppId = function () {
        return this.appid;
    };
    GlobalVars.prototype.getUseDynamicPageModule = function () {
        return this.useDynamicContentModule;
    };
    GlobalVars.prototype.getWooAuth = function () {
        return this.wooAuth;
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_guid_typescript__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_guid_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_guid_typescript__);

var RemoteData = /** @class */ (function () {
    function RemoteData(apiUrl, options) {
        this.isLog = false;
        this.apiUrl = apiUrl;
        this.guid = __WEBPACK_IMPORTED_MODULE_0_guid_typescript__["Guid"].create();
        this.timestamp = new Date().getTime();
        if (options) {
            if (options.type)
                this.type = options.type;
            if (options.isLog)
                this.isLog = true;
            if (options.token)
                this.token = options.token;
        }
    }
    RemoteData.prototype.getDbKey = function () {
        if (this.isLog)
            return 'rdata-log-' + this.type + '-' + this.guid.toString();
        else if (this.type)
            return 'rdata-' + this.type + '-' + this.guid.toString();
        else
            return 'rdata-' + this.guid.toString();
    };
    return RemoteData;
}());

//# sourceMappingURL=remote-data.model.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(events) {
        this.events = events;
        this.userObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.wp_reset_password_url = '';
    }
    LoginService.prototype.setLoginStatus = function (user) {
        this.user = user;
        this.userObs.next(this.user);
    };
    LoginService.prototype.removeLoginStatus = function () {
        this.user = null;
        this.userObs.next(null);
    };
    LoginService.prototype.loginStatus = function () {
        // return the observable
        return this.userObs;
    };
    LoginService.prototype.getPasswordResetUrl = function () {
        if (!this.wp_reset_password_url) {
            var item = window.localStorage.getItem('myappp');
            var wpurl = JSON.parse(item).wordpress_url;
            this.wp_reset_password_url = this.appendUrlModalLogin(wpurl);
        }
        return this.wp_reset_password_url;
    };
    LoginService.prototype.appendUrlModalLogin = function (url) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]();
        // gather any #
        var url_parts = url.split('#');
        var hash = '#app-lost-password';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        if (query && url.indexOf('appp=3') >= 0) {
            // already has appp=3
            params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]({
                fromString: query
            });
        }
        else {
            // add the appp=3
            params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]({
                fromString: (query) ? query + '&appp=3' : 'appp=3'
            });
        }
        // put it all together
        url = base_url + '?' + params.toString() + hash;
        // remove empty params
        url = url.replace('&=&', '&');
        return url;
    };
    /**
     * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
     * @param navParams
     */
    LoginService.prototype.yieldLogin = function (navParams) {
        if (navParams && navParams.extra_classes && navParams.extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) {
                return false;
            }
            else {
                console.log('yieldLogin');
                this.events.publish('login:force_login');
                return true;
            }
        }
        return false;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_facebook_fbconnect_settings__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_facebook_login_iframe__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_push__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_appwoo_appwoo__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appdata_appdata__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_appgeo_appgeo__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_logins_logins__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_download_download__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_analytics_analytics_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__models_user_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_language_language_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_menus_menu_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_inapppurchase_inapppurchase__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__models_language_model__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_appdata_error_log_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_appdata_remote_data__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_appdata_myappp_settings_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_logins_roles_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_audio_player_audio_player__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Framework */





/* Providers (make sure to add to app.module.ts providers too) */












/* Native */






















/**
 * Customizable options for our
 * segments, media, language and login modals
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
var MyApp = /** @class */ (function () {
    function MyApp(platform, myapppsettings, appCamera, menuCtrl, globalvars, appads, appgeo, fbconnectvars, fbconnectIframe, loginservice, rolesservice, languageservice, sanitizer, pushService, appwoo, appdata, logins, toastCtrl, loadingCtrl, storage, modalCtrl, events, translate, keyboard, SplashScreen, StatusBar, Network, SocialSharing, Device, Push, http, Dialogs, zone, config, menuservice, analyticsservice, download, iab, iap, errorlogs, remoteData, popoverCtrl) {
        var _this = this;
        this.platform = platform;
        this.myapppsettings = myapppsettings;
        this.appCamera = appCamera;
        this.menuCtrl = menuCtrl;
        this.globalvars = globalvars;
        this.appads = appads;
        this.appgeo = appgeo;
        this.fbconnectvars = fbconnectvars;
        this.fbconnectIframe = fbconnectIframe;
        this.loginservice = loginservice;
        this.rolesservice = rolesservice;
        this.languageservice = languageservice;
        this.sanitizer = sanitizer;
        this.pushService = pushService;
        this.appwoo = appwoo;
        this.appdata = appdata;
        this.logins = logins;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.translate = translate;
        this.keyboard = keyboard;
        this.SplashScreen = SplashScreen;
        this.StatusBar = StatusBar;
        this.Network = Network;
        this.SocialSharing = SocialSharing;
        this.Device = Device;
        this.Push = Push;
        this.http = http;
        this.Dialogs = Dialogs;
        this.zone = zone;
        this.config = config;
        this.menuservice = menuservice;
        this.analyticsservice = analyticsservice;
        this.download = download;
        this.iab = iab;
        this.iap = iap;
        this.errorlogs = errorlogs;
        this.remoteData = remoteData;
        this.popoverCtrl = popoverCtrl;
        this.navparams = [];
        this.showmenu = false;
        this.bothMenus = false;
        this.myLoginModal_open = false;
        this.showLogin = false;
        this.menu_side = "left";
        this.rtl = false;
        this.iphoneX = false;
        this.showingIntro = false;
        this.stopTabReset = false;
        this.menu_all_pages = false;
        this.app_recently_started = true;
        this.audioPlayerVisible = false;
        this.decodeHtmlEntity = function (str) {
            return str.replace(/&#(\d+);/g, function (match, dec) {
                return String.fromCharCode(dec);
            });
        };
        this.initializeApp();
        events.subscribe("user:login", function (data) {
            _this.userLogin(data);
            _this.menuCtrl.close();
            _this.analyticsservice.trackEvent("user:login");
        });
        events.subscribe("user:logout", function (data) {
            _this.userLogout(data);
            _this.menuCtrl.close();
            _this.analyticsservice.trackEvent("user:logout");
        });
        events.subscribe("data:update", function (obj) {
            _this.fetchData(obj);
        });
        events.subscribe("show_audio_player", function (data) {
            console.log('show_audio_player event', data);
            _this.showAudioPlayer(data);
        });
        events.subscribe("close_audio_player", function () {
            console.log('close_audio_player event');
            _this.closeAudioPlayer();
        });
        events.subscribe("audio_player_expand_collapse", function (data) {
            console.log('audio_player_expand_collapse event', data);
            if (data && data.collapse) {
                _this.bodyTag.classList.add('audio-player-minimized');
            }
            else {
                _this.bodyTag.classList.remove('audio-player-minimized');
            }
        });
        events.subscribe("login:force_login", function () {
            if (!_this.user &&
                _this.myapppsettings.isForcedLogin() &&
                _this.myapppsettings.isPreview()) {
                // only do this in the preview, at other times the loginModal becomes a page when the menus are reset
                _this.openLoginModal();
            }
        });
        events.subscribe("pushpage", function (page) {
            _this.pushPage(page);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        // Login status
        this.bodyTag = document.getElementsByTagName("body")[0];
        this.loginservice.loginStatus().subscribe(function (user) {
            _this.user = user;
            if (user) {
                _this.bodyTag.classList.add("loggedin");
            }
            else {
                _this.bodyTag.classList.remove("loggedin");
            }
        });
        this.getSetLogin();
        // TODO: this causes a bug when iframe page is the homepage. It calls resetTabs too many times, which loads iframe.ts twice, causing the spinner to appear for too long.
        this.languageservice.languageStatus().subscribe(function (language) {
            _this.zone.run(function () {
                var is_loggedin = _this.loginservice.user;
                _this.rtl = language.dir && language.dir == "rtl";
                var dir = _this.rtl ? "rtl" : "ltr";
                _this.platform.setDir(dir, true);
                _this.platform.setLang(language.code, true);
                _this.setBackBtnText();
                var lang_updated = true;
                _this.resetTabs(is_loggedin, lang_updated);
            });
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.apiurl = _this.globalvars.getApi();
            _this.fetchData(false);
            _this.doConnectionEvents();
            _this.attachListeners();
            _this.maybeDoPush();
            _this.maybeValidateIap();
            _this.doIphoneX();
            _this.keyboard.onKeyboardShow().subscribe(function (data) {
                _this.bodyTag.classList.remove("keyboard-close");
                _this.bodyTag.classList.add("keyboard-open");
            });
            _this.keyboard.onKeyboardHide().subscribe(function (data) {
                _this.bodyTag.classList.remove("keyboard-open");
                _this.bodyTag.classList.add("keyboard-close");
            });
            // prevents bug where select done button didn't display
            _this.keyboard.hideFormAccessoryBar(false);
            // Disable scroll fixes webview displacement, but hides content lower on page. Can't use
            //Keyboard.disableScroll(true);
            // check for API updates on resume and on initial load
            _this.platform.resume.subscribe(function () {
                _this.appdata.checkForUpdates(_this.apiurl);
            });
            setTimeout(function () {
                _this.appdata.checkForUpdates(_this.apiurl);
            }, 5000);
            setTimeout(function () {
                // on startup, wait a little while before doing a push notification redirect
                _this.app_recently_started = false;
            }, 10000);
        });
    };
    MyApp.prototype.fetchData = function (reset) {
        var _this = this;
        // if refreshing the app, have to reset variables first
        if (reset) {
            this.tabs = [];
            this.pages = null;
            this.bothMenus = false;
            this.navparams = [];
            this.showmenu = false;
        }
        // get our app data, then use it. will return either local data, or get from api
        this.appdata
            .load(this.apiurl)
            .then(function (data) {
            console.log("Got data", data);
            _this.myapppsettings.setData(data);
            _this.afterData();
        })
            .catch(function (e) {
            // if there's a problem, default to app-data.json
            console.log("problem getting appdata, getting local json file", e);
            _this.appdata.getData("app-data.json").then(function (data) {
                console.log("Got local data file.");
                _this.myapppsettings.setData(data);
                _this.afterData();
            });
        });
    };
    MyApp.prototype.afterData = function () {
        var _this = this;
        var data = this.myapppsettings.settings;
        this.SplashScreen.hide();
        this.menu_all_pages = data.menu_all_pages == true ? true : false;
        this.languageservice.initStoredLanguage().then(function (hasStoredLanuage) {
            _this.verifyLanguageFile(data).then(function (lang) {
                // set the default language before loading menu
                _this.setAvailableLangs(data).then(function (lang) {
                    _this.loadMenus();
                    _this.showLogin = data.side_menu_login == "on" ? true : false;
                    _this.logins.set_force_login(data.side_menu_force_login == "on");
                    _this.menu_side = data.meta.menu_right == true ? "right" : "left";
                    _this.rtl = data.meta.rtl == true ? true : false;
                    if (_this.rtl === true &&
                        _this.languageservice.hasStoredLanguage === false)
                        _this.platform.setDir("rtl", true);
                    _this.loadStyles(data);
                    _this.doStatusBar(data);
                });
            });
        });
        // Uncomment this when we begin using WKWebview
        // this.maybeSetCookie( data );
        this.apptitle = data.title;
        this.storage.get("purchased_ad_removal").then(function (res) {
            if (!res) {
                _this.maybeDoAds(data);
            }
        });
        if (data.show_registration_link === "on") {
            this.storage.set("api_register_setting", {
                registration: true,
                url: data.registration_url
            });
        }
        else {
            this.storage.remove("api_register_setting");
        }
        if (data.vendors &&
            data.vendors.google_analytics &&
            data.vendors.google_analytics.tracking_id) {
            var tracking_id = data.vendors.google_analytics.tracking_id;
            var basename = data.vendors.google_analytics.basename;
            this.analyticsservice.beginTracking(tracking_id, basename);
            this.analyticsservice.trackEvent("open");
        }
        else {
            console.log("no analytics: missing tracking_id");
        }
    };
    MyApp.prototype.loadSideMenu = function () {
        // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
        // let e = { 'title': "Custom Page", 'component': CustomPage, 'class': "information-circle", 'navparams': { slug: 'custom' }, extra_classes: '' };
        // this.pages.push( e );
        var _this = this;
        var data = this.myapppsettings.settings;
        if (data.menus.items) {
            data.menus.items.map(function (item) { return (item.title = _this.decodeHtmlEntity(item.title)); });
            this.pages = data.menus.items.slice();
            this.menuservice.menu = this.pages.slice();
            this.menuservice.menu.map(function (item) {
                if (_this.rolesservice.test_user_role(item.extra_classes) === false) {
                    item.extra_classes += " role-hide";
                }
                else {
                    item.extra_classes.replace(" role-hide", "");
                }
            });
            this.showmenu = true;
            // set the home page to the proper component
            this.setHomePageComponent();
        }
    };
    MyApp.prototype.setHomePageComponent = function () {
        var data = this.myapppsettings.settings;
        var homeItem;
        // prevents bug when first/second menu item is not a valid page
        if (!this.tabs && data.menus.items) {
            homeItem = this.getValidHomeItem(data.menus.items);
        }
        if (!this.user &&
            this.myapppsettings.isForcedLogin() &&
            !this.myapppsettings.isPreview()) {
            // force login, but not when in the preview
            this.nav.setRoot("LoginModal", [this.menuservice.getLoginModalPage()]);
        }
        else if (this.tabs) {
            this.pages.unshift({
                title: data.tab_menu.name,
                url: "",
                component: "TabsPage",
                navparams: this.navparams,
                class: "home",
                extra_classes: "hide",
                is_home: true
            });
        }
        else if (!this.tabs && homeItem.type === "apppages") {
            // used for custom logo
            homeItem.is_home = true;
            var root = this.getPageType(homeItem);
            this.nav.setRoot(root, homeItem);
        }
        else {
            // used for custom logo
            homeItem.is_home = true;
            // anything else uses Iframe component
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */], homeItem);
        }
    };
    // if first menu item can't be used for homepage, go to the next. Fixes bug when first menu item is not a valid page, like a divider.
    MyApp.prototype.getValidHomeItem = function (itemArray) {
        var homeItem = itemArray[0];
        if (homeItem.extra_classes.indexOf("submenu-parent") >= 0 ||
            homeItem.extra_classes.indexOf("divider") >= 0) {
            homeItem = itemArray[1];
        }
        if (homeItem.extra_classes.indexOf("submenu-parent") >= 0 ||
            homeItem.extra_classes.indexOf("divider") >= 0) {
            homeItem = itemArray[2];
        }
        return homeItem;
    };
    MyApp.prototype.loadTabMenu = function () {
        var data = this.myapppsettings.settings;
        // If we have a tab menu, set that up
        if (this.myapppsettings.hasTabsMenu()) {
            // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
            // let e = { 'title': "Downloads", 'type': 'apppages', 'page_type' : 'media-list', 'class': "information-circle", 'slug': 'custom', 'extra_classes': '', 'allow_downloads': '', 'list_route': 'http://appdev.local/wp-json/wp/v2/posts' };
            for (var _i = 0, _a = data.tab_menu.items; _i < _a.length; _i++) {
                var item = _a[_i];
                // set component, default is Iframe
                var root = __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */];
                root = this.getPageType(item);
                // Temporary console log (just to be sure)
                if (this.loginservice.user) {
                    console.log("load loggedin tab menu");
                }
                else {
                    console.log("load loggedout tab menu");
                }
                item.show = true;
                if (item.extra_classes.indexOf("hide") >= 0) {
                    // hide the tab if user added class of hide
                    item.show = false;
                }
                else if (item.extra_classes === "hidden-tab") {
                    // hide the tab if user added class of hidden-tab (used in global tabs)
                    item.show = false;
                }
                else if (!this.loginservice.user &&
                    item.extra_classes.indexOf("loggedin") >= 0) {
                    item.show = false;
                }
                else if (this.loginservice.user &&
                    item.extra_classes.indexOf("loggedout") >= 0) {
                    item.show = false;
                }
                else if (this.rolesservice.test_user_role(item.extra_classes) === false) {
                    item.show = false;
                }
                this.navParamsPush(item, root);
            }
            this.tabs = this.navparams;
            this.menuservice.tabs = this.tabs.slice();
            if (typeof this.originalTabs === "undefined")
                this.originalTabs = this.tabs.slice(); // make a copy
            if (!this.user &&
                this.myapppsettings.isForcedLogin() &&
                !this.myapppsettings.isPreview()) {
                var loginModalPage = this.menuservice.getLoginModalPage(true);
                this.nav.setRoot("TabsPage", [loginModalPage]);
            }
            else {
                this.nav.setRoot("TabsPage", this.tabs);
            }
        }
    };
    MyApp.prototype.loadMenus = function () {
        var data = this.myapppsettings.settings;
        if (this.myapppsettings.isPreview() &&
            !data.tab_menu.items &&
            !data.menus.items) {
            // we are in the preview and no menu is set
            alert("Please visit the Settings tab and select a menu for your app.");
            return;
        }
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.loadTabMenu();
        this.loadSideMenu();
        // If the user is already logged in, when the app opens it should reset side menu so that the items would show/hide accordingly
        if (this.user) {
            this.resetSideMenu(true);
        }
        // Only show the intro if there's a slug
        if (data.meta.intro_slug && data.meta.intro_slug != "")
            this.maybeShowIntro(data.meta.intro_slug);
        if (data.tab_menu.items && data.menus.items) {
            // we have both menus, use pushPage on sidemenu
            this.bothMenus = true;
        }
    };
    // construct tab items
    MyApp.prototype.navParamsPush = function (item, root) {
        var page;
        this.navparams.push({
            title: this.decodeHtmlEntity(item.title),
            url: item.url,
            root: root,
            icon: item.class,
            slug: item.slug,
            api_route: item.api_route,
            list_route: item.list_route,
            list_display: item.list_display,
            favorites: item.favorites,
            allow_downloads: item.allow_downloads,
            auto_play_next: item.auto_play_next,
            extra_classes: item.extra_classes,
            show: item.show,
            show_slider: item.show_slider,
            slide_route: item.slide_route,
            woo_page: item.woo_page,
            type: item.type,
            page_type: item.page_type,
            page_id: item.page_id,
            is_home: true,
            download_list_image: item.download_list_image,
            download_left_icon: item.download_left_icon,
            download_right_icon: item.download_right_icon
        });
    };
    // If there is a page called "Intro", show it the first time the app is used
    MyApp.prototype.maybeShowIntro = function (slug) {
        this.introshown = window.localStorage.getItem("app-intro-shown");
        if (this.introshown === "true")
            return;
        this.showingIntro = true;
        var page_id = this.getPageIdBySlug(slug);
        if (!page_id && this.tabs.length) {
            var tab_menu_index = this.getTabIndexBySlug(slug);
            if (tab_menu_index === 0 || tab_menu_index) {
                page_id = this.tabs[tab_menu_index];
            }
        }
        if (page_id) {
            var intro = {
                title: "Introduction",
                component: this.getPageModuleName(page_id),
                class: "",
                navparams: { slug: slug }
            };
            this.nav.push(this.getPageModuleName(page_id), intro.navparams);
        }
        else {
            throw "page_id for intro not found";
        }
        window.localStorage.setItem("app-intro-shown", "true");
    };
    /**
     * Get side menu index by page slug
     */
    MyApp.prototype.getMenuIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.pages);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    MyApp.prototype.getTabIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.tabs);
    };
    MyApp.prototype.getPageIdBySlug = function (slug) {
        var page_id = 0;
        if (this.pages && this.pages.length) {
            this.pages.forEach(function (page) {
                if (page.slug && page.slug == slug && page.page_id)
                    page_id = page.page_id;
            });
        }
        else {
            return false;
        }
        return page_id;
    };
    MyApp.prototype.getPageBySlug = function (slug) {
        var mypage;
        if (this.pages && this.pages.length) {
            this.pages.forEach(function (page) {
                if (page.slug && page.slug == slug && page.page_id)
                    mypage = page;
            });
        }
        return mypage;
    };
    /**
     * Determines which function to use (Side menu link)
     * @param {*} p
     * @param {*} e
     * @returns {void}
     */
    MyApp.prototype.menuLink = function (p, e) {
        if (p.extra_classes.indexOf("submenu-parent") >= 0) {
            this.doSubMenus(e);
            return;
        }
        if (this.bothMenus &&
            (p.extra_classes && p.extra_classes.indexOf("tabs") >= 0)) {
            this._openTabFromMenu(p);
        }
        else {
            this._pushOrOpenPage(p);
        }
    };
    /**
     * Pushes or opens the selected page
     * @param {*} p
     */
    MyApp.prototype._pushOrOpenPage = function (p) {
        if (this.bothMenus ||
            (p.extra_classes && p.extra_classes.indexOf("push-page") >= 0)) {
            this.pushPage(p);
        }
        else {
            this.openPage(p);
        }
    };
    /**
     * Opens a tab (global tab) from the side menu
     * @param {*} p
     */
    MyApp.prototype._openTabFromMenu = function (p) {
        // Get a list of the active child navigation.
        var activeNavigation = this.nav.getActiveChildNavs();
        // Get all tabs (assume the tab controller is the only child nav)
        var allTabs = activeNavigation[0];
        // Get the index of the tab that has the same page id, as the selected menu
        var tabIndex = allTabs._tabs.findIndex(function (tab) {
            return tab.rootParams.page_id === p.page_id;
        });
        // Select the tab using the tabIndex only if the same page_id exist
        if (tabIndex >= 0) {
            allTabs.select(tabIndex);
            // Close the side menu
            this.menuCtrl.close();
        }
        else {
            // If the tab with the same page_id does not exists push or open page
            this._pushOrOpenPage(p);
        }
    };
    // Handles opening and closing submenus
    MyApp.prototype.doSubMenus = function (e) {
        var button;
        if (e.target.classList && e.target.classList.contains("submenu-parent")) {
            button = e.target;
        }
        else if (e.target.classList) {
            button = e.target.closest(".submenu-parent");
        }
        if (button.classList && button.classList.contains("submenu-parent")) {
            if (button.classList.contains("open-menu")) {
                button.classList.remove("open-menu");
            }
            else {
                button.classList.add("open-menu");
            }
            var el = button.nextSibling;
            while (el.classList && el.classList.contains("submenu-child")) {
                if (el.classList.contains("open")) {
                    el.classList.remove("open");
                }
                else {
                    el.classList.add("open");
                }
                el = el.nextSibling;
            }
            return;
        }
    };
    /**
     * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
     * @param extra_classes
     */
    MyApp.prototype.yieldLogin = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf("yieldlogin") >= 0) {
            if (this.user) {
                // logged in
                return false;
            }
            else {
                // logged out, show login modal
                this.openLoginModal();
                return true;
            }
        }
        return false;
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // don't do anything if someone clicks a nav divider
        if (typeof page.extra_classes != "undefined" &&
            page.extra_classes.indexOf("divider") >= 0)
            return;
        if (this.yieldLogin(page.extra_classes))
            return;
        // close the menu when clicking a link from the menu
        this.menuCtrl.close();
        if (page.target === "_blank" &&
            typeof page.extra_classes !== "undefined" &&
            page.extra_classes.indexOf("system") >= 0) {
            this.openIab(page.url, "_system", null);
            return;
        }
        else if (page.target === "_blank") {
            this.openIab(page.url, page.target, null);
            return;
        }
        else if (typeof page.extra_classes !== "undefined" &&
            (page.extra_classes.indexOf("loginmodal") >= 0 ||
                page.extra_classes.indexOf("logoutmodal") >= 0)) {
            this.openLoginModal({ title: page.title });
            return;
        }
        var root = this.getPageType(page);
        // console.log('open page root', root, page)
        if (root) {
            this.nav.setRoot(root, page);
        }
        else if (page.url && page.root === "true") {
            // for LearnDash post messages, specifically course completion redirects
            // can't set root on tabs
            var first = this.nav.first();
            if (first.id === "TabsPage") {
                // if root is in the message, we pop to the root via tabs.ts
                return;
            }
            else {
                // learndash redirect with side menu
                this.nav.popToRoot({ animate: false }).then(function () {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */], page);
                });
                return;
            }
        }
    };
    MyApp.prototype.pushPage = function (page) {
        // don't do anything if someone clicks a nav divider
        if (typeof page.extra_classes != "undefined" &&
            page.extra_classes.indexOf("divider") >= 0)
            return;
        if (this.yieldLogin(page.extra_classes))
            return;
        // close the menu when clicking a link from the menu
        this.menuCtrl.close();
        if (page.target === "_blank" && page.extra_classes.indexOf("system") >= 0) {
            this.openIab(page.url, "_system", null);
            return;
        }
        else if (page.target === "_blank") {
            this.openIab(page.url, page.target, null);
            return;
        }
        else if (typeof page.extra_classes !== "undefined" &&
            (page.extra_classes.indexOf("loginmodal") >= 0 ||
                page.extra_classes.indexOf("logoutmodal") >= 0)) {
            this.openLoginModal({ title: page.title });
            return;
        }
        else if (page.slug) {
            page = this.getPage(page.slug);
        }
        var opt = {};
        if (this.rtl === true && this.platform.is("ios"))
            opt = { direction: "back" };
        var root = this.getPageType(page);
        // console.log('push page type', root)
        if (root) {
            this.nav.push(root, page, opt);
        }
        else {
            this.nav.push(page); // If page is a string and is the class name of the page (component page)
        }
    };
    MyApp.prototype.openTab = function (tab_index) {
        this.restoreTabs();
        var tabs = this.nav.getActiveChildNav();
        if (tabs) {
            this.nav.popToRoot({ animate: true }).then(function () {
                // close any transitioned pages
                tabs.select(tab_index);
            });
        }
    };
    /**
     * Experimental: need to get this.removeNewTab() working
     * @param page object
     */
    MyApp.prototype.openNewTab = function (page) {
        var _this = this;
        this.nav.popToRoot({ animate: true }).then(function () {
            // close any transitioned pages
            _this.restoreTabs();
            _this.tabs.unshift(page);
            var loggedin = typeof _this.login_data === "object";
            _this.resetTabs(loggedin);
            _this.nav.setRoot("TabsPage", _this.navparams);
        });
    };
    /**
     * Restore the original tabs.
     */
    MyApp.prototype.restoreTabs = function () {
        this.tabs = this.originalTabs.slice(); // copy back
    };
    MyApp.prototype.openMenuLink = function (data) {
        var _this = this;
        var page;
        var menu_index;
        if (typeof data.menulink.menu !== "undefined") {
            // might be 0; check undefined
            if (typeof data.menulink.menu === "number")
                menu_index = data.menulink.menu;
            else if (typeof data.menulink.menu === "string")
                menu_index = this.getMenuIndexBySlug(data.menulink.menu);
            if (typeof menu_index !== "undefined")
                page = this.pages[menu_index];
        }
        else if (typeof data.menulink.tab_menu !== "undefined") {
            if (typeof data.menulink.tab_menu === "number")
                menu_index = data.menulink.tab_menu;
            else if (typeof data.menulink.tab_menu === "string")
                menu_index = this.getTabIndexBySlug(data.menulink.tab_menu);
            if (typeof menu_index !== "undefined")
                page = this.tabs[menu_index];
        }
        // Verify logins
        if (page && page.extra_classes) {
            if (page.extra_classes == "loggedin" &&
                typeof this.login_data != "object") {
                this.translate.get("Please login").subscribe(function (text) {
                    _this.presentToast(text);
                });
                return;
            }
            if (page.extra_classes == "loggedout" &&
                typeof this.login_data == "object") {
                console.log("login_data", this.login_data);
                page = null;
            }
        }
        if (page) {
            if (data.menulink.new_tab) {
                this.openNewTab(page);
            }
            else if (data.menulink.backbtn ||
                typeof data.menulink.menu !== "undefined") {
                this.pushPage(page);
            }
            else {
                this.openTab(menu_index);
            }
        }
        else {
            this.translate.get("Page not found").subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return "Page" + page_id;
        if (false === this.globalvars.getUseDynamicPageModule())
            // building on remote Ionic builder
            return "Page" + page_id;
        else
            return "CustomPage";
    };
    MyApp.prototype.doStatusBar = function (data) {
        if (!this.StatusBar)
            return;
        if (data.meta.light_status_bar == true) {
            // Light text, for dark backgrounds
            this.StatusBar.styleLightContent();
        }
        else {
            // Dark text
            this.StatusBar.styleDefault();
        }
        // Android only, background color
        if (this.platform.is("android")) {
            if (data.meta.design && data.meta.design.status_bar_bkg) {
                this.StatusBar.backgroundColorByHexString(data.meta.design.status_bar_bkg);
            }
        }
    };
    // if using WKWebview, we have to set a cookie by opening an invisible browser
    MyApp.prototype.maybeSetCookie = function (data) {
        if (this.platform.is("ios") ||
            (this.platform.is("android") && data.wordpress_url)) {
            var browser_1 = this.iab.create(data.wordpress_url, "_blank", "hidden=yes");
            console.log("loading browser", browser_1);
            setTimeout(function () {
                browser_1.close();
            }, 10000);
        }
    };
    MyApp.prototype.doConnectionEvents = function () {
        var _this = this;
        this.networkState = this.Network.type;
        if (this.networkState === "none" || this.networkState === "unknown") {
            this.translate
                .get("You appear to be offline, app functionality may be limited.")
                .subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.loadStyles = function (data) {
        // handle design settings
        if (data.meta.design.app_design) {
            this.bodyTag.classList.add(data.meta.design.app_design);
        }
        // handle font settings
        if (data.meta.design.fonts && data.meta.design.fonts.body) {
            this.bodyTag.classList.add("body-font-" + data.meta.design.fonts.body);
        }
        if (data.meta.design.fonts && data.meta.design.fonts.headings) {
            this.bodyTag.classList.add("headings-font-" + data.meta.design.fonts.headings);
        }
        // kinda hacky, but it works
        var styles = "<style>";
        if (data.meta.design.fonts && data.meta.design.fonts.custom_font) {
            styles += "@import url('" + data.meta.design.fonts.custom_font + "');";
        }
        // toolbar color
        styles +=
            ".toolbar-background-md, .toolbar-background-ios, .tabs-md .tabbar, .tabs-ios .tabbar, .custom-page .menu-card { background: " +
                data.meta.design.toolbar_background +
                " }";
        // toolbar text
        styles +=
            ".toolbar-content, .toolbar-title, .bar-button-default, .toolbar .bar-button-default:hover, .toolbar .segment-button, .toolbar button.activated, .tabs .tab-button .tab-button-icon, .tab-button .tab-button-text, .tabbar .tab-button[aria-selected=true] .tab-button-icon, ion-toolbar .button, .toolbar input.searchbar-input { color: " +
                data.meta.design.toolbar_color +
                " }";
        // left menu colors
        styles +=
            ".menu-inner .content-md, .menu-inner .content-ios, .menu-inner ion-list .item { color: " +
                data.meta.design.left_menu_text +
                "; background-color: " +
                data.meta.design.left_menu_bg +
                " }";
        styles +=
            ".menu-inner .loggedin-msg { color: " +
                data.meta.design.left_menu_text +
                " }";
        // left menu icon color
        if (data.meta.design.left_menu_icons) {
            styles +=
                "ion-menu .list-md ion-icon, ion-menu .list-ios ion-icon, .menu-inner .submenu-parent::after { color: " +
                    data.meta.design.left_menu_icons +
                    " }";
            styles +=
                ".menu-inner .item-ios[detail-push] .item-inner, .menu-inner button.item-ios:not([detail-none]) .item-inner, .menu-inner a.item-ios:not([detail-none]) .item-inner { background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='" +
                    data.meta.design.left_menu_icons +
                    "'/></svg>\"); }";
        }
        // body text and background
        styles +=
            ".ion-page ion-content, .ion-page ion-list .item { color: " +
                data.meta.design.text_color +
                "; background-color: " +
                data.meta.design.body_bg +
                " }";
        styles += "p, .item p { color: " + data.meta.design.text_color + " }";
        // buttons
        styles +=
            ".button-default, .button-primary, .menu-login-button, page-login-modal div > .button, bp-modal .button, bp-list .badge, bp-details .badge, bp-messages .button { background: " +
                data.meta.design.button_background +
                "!important; color: " +
                data.meta.design.button_text +
                " }";
        styles +=
            "bp-list .button, bp-details .button, bp-group .button, bp-profile .button { color: " +
                data.meta.design.button_background +
                " }";
        // headings
        styles +=
            "ion-page h1, ion-page h2, ion-page h3, ion-page h4, ion-page h5, ion-page h6, ion-page ion-list .item h2, ion-page ion-list .item h3, ion-page ion-list .item h4 { color: " +
                data.meta.design.headings_color +
                " }";
        // links
        styles +=
            "ion-page ion-content a, ion-page ion-content a:visited { color: " +
                data.meta.design.link_color +
                " }";
        styles += data.meta.design.custom_css;
        // hide menu toggle if no left menu
        if (this.showmenu === false) {
            styles +=
                "ion-navbar .bar-button-menutoggle { display: none !important; }";
        }
        // maybe move menu item to right
        if ((this.menu_side === "right" && this.rtl === false) ||
            (this.menu_side === "left" && this.rtl === true)) {
            styles += "ion-navbar .bar-buttons[start] { order: 7; }";
        }
        styles += "</style>";
        this.styles = this.sanitizer.bypassSecurityTrustHtml(styles);
    };
    /*
     * We are listening for postMessage events from the iframe pages. When something needs to happen, a message is sent from the iframe as a JSON object, such as { iablink: 'http://apppresser.com', target: '_blank', options: '' }. We parse that object here, and do the phonegap stuff like window.open(data.iablink)
     */
    MyApp.prototype.attachListeners = function () {
        var _this = this;
        // When WP site loads, attach our click events
        window.addEventListener("message", function (e) {
            // might be undefined, but we only using strings here
            if (typeof e.data !== "string" || e.data == "")
                return;
            // console.log('postMessage', e.data);
            if (e.data === "checkin_success") {
                _this.translate.get("Check in successful!").subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
            else if (e.data === "logout") {
                _this.userLogout();
            }
            // if it's not our json object, return
            if (e.data.indexOf("{") != 0)
                return;
            var data = JSON.parse(e.data);
            if (data.url) {
                // push a new page
                var page = {
                    title: data.title,
                    component: __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */],
                    url: data.url,
                    classes: null
                };
                _this.pushPage(page);
            }
            else if (data.msg) {
                // social sharing was clicked, show that
                _this.SocialSharing.share(data.msg, null, null, data.link);
            }
            else if (data.iablink) {
                // in app browser links
                _this.openIab(data.iablink, data.target, data.options);
            }
            else if (data.camera && data.camera === "library") {
                if (data.appbuddy === true) {
                    _this.appCamera.photoLibrary(true);
                }
                else {
                    _this.appCamera.photoLibrary(false);
                }
            }
            else if (data.camera && data.camera === "photo") {
                if (data.appbuddy === true) {
                    _this.appCamera.openSheet(true);
                }
                else {
                    _this.appCamera.takePicture(false);
                }
            }
            else if (data.fblogin) {
                _this.fbconnectIframe.login();
                _this.maybeSendPushId(data.ajaxurl);
            }
            else if (data.paypal_url) {
                _this.appwoo.paypal(data.paypal_url, data.redirect);
            }
            else if (data.loggedin) {
                var avatar = _this.logins.get_avatar(data); // logic for FB or WP
                if (avatar)
                    data.avatar = avatar;
                _this.userLogin(data);
                _this.storage.set("user_login", _this.login_data);
            }
            else if (typeof data.isloggedin != "undefined") {
                // make sure app and WP have the same status
                // this is no longer necessary with API login plus cookie fix
                // this.syncLoginStatus( data )
            }
            else if (data.apppage) {
                var page = {
                    title: data.title,
                    component: __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */],
                    url: data.apppage.url,
                    classes: null,
                    page_type: null,
                    type: null,
                    root: data.apppage.root
                };
                _this.openPage(page);
            }
            else if (data.geouserpref) {
                _this.appgeo.startBeacon(data.geouserpref);
            }
            else if (data.menulink) {
                _this.openMenuLink(data);
            }
            else if (data.download_url) {
                _this.downloadItem(data);
            }
        }, false); // end eventListener
        if (this.iphoneX) {
            // css hacks for iphone x status bar
            window.addEventListener("orientationchange", function () {
                if (!window.orientation && window.orientation == 0) {
                    _this.customClasses = "iphoneX-portrait";
                }
                else if (window.orientation && window.orientation === -90) {
                    _this.customClasses = "iphoneX-landscape";
                }
            }, false);
        }
    };
    MyApp.prototype.openIab = function (link, target, options) {
        if (options === void 0) { options = null; }
        window.open(link, target, options);
    };
    MyApp.prototype.maybeDoAds = function (data) {
        // only show ads on a device
        if (!this.Device.platform)
            return;
        // If we don't have any ads set, stop
        if (data.ads.ios === "" && data.ads.android === "") {
            console.log("No ads");
            return;
        }
        // this.appads.setOptions();
        if (this.Device.platform === "iOS" && data.ads.ios.banner != "") {
            this.appads.createBanner(data.ads.ios.banner);
        }
        if (this.Device.platform === "Android" && data.ads.android.banner != "") {
            this.appads.createBanner(data.ads.android.banner);
        }
        // show interstitial like this
        // this.appads.interstitial( data.ads.ios.interstitial );
    };
    MyApp.prototype.maybeDoPush = function () {
        var _this = this;
        var push = null;
        try {
            push = this.Push.init({
                android: {
                    icon: "phonegap",
                    senderID: "674885634243"
                },
                ios: {
                    alert: "true",
                    badge: true,
                    clearBadge: true,
                    sound: "true"
                },
                windows: {}
            });
        }
        catch (err) {
            console.log(err);
            return;
        }
        if (push.error)
            return;
        push.on("registration").subscribe(function (data) {
            // Debugging with the error log
            var error = "push registration of uuid: " + _this.Device.uuid + ", deviceToken: " + data.registrationId;
            _this.errorlogs.addLog(error, "push");
            _this.storage.set("deviceToken", data.registrationId);
            _this.regId = data.registrationId;
            _this.storage.get("endpointArn").then(function (res) {
                var update = window.localStorage.getItem("myappp_update");
                // If already subscribed, don't hit API again. Updating API version bypasses so everyone resubscribes.
                if (res && update != "true") {
                    return;
                }
                // Subscribe through myapppresser.com api
                _this.pushService.subscribeDevice(_this.regId).then(function (result) {
                    var newresult = JSON.parse(result);
                    _this.storage.set("endpointArn", newresult.endpointArn);
                    _this.remoteData.createRemoteData(_this.globalvars.getApiRoot() + "/wp-json/ap3/v1/remote/data/push/", {
                        uuid: _this.Device.uuid,
                        endpointArn: newresult.endpointArn
                    }, {
                        type: "push",
                        isLog: true
                    });
                });
            });
        });
        push.on("notification").subscribe(function (data) {
            // Debugging with the error log
            var error = "notification received: " + JSON.stringify(data);
            _this.errorlogs.addLog(error, "push");
            // allow the language and user to be set and menus to reset before redirecting
            var wait = 0;
            if (_this.app_recently_started) {
                wait = 5000;
                if (_this.myapppsettings.isForcedLogin()) {
                    wait += 3500;
                }
            }
            setTimeout(function () {
                _this._redirectPage(data);
            }, wait);
        });
        push.on("error").subscribe(function (e) {
            _this.errorlogs.addLog("notification error: " + e.message, "push");
            console.log(e.message);
        });
    };
    /**
     * Redirects to the correct page
     * @param {*} data
     */
    MyApp.prototype._redirectPage = function (data) {
        var _this = this;
        var isAppPushPostURL = data.additionalData &&
            data.additionalData.url &&
            data.additionalData.url.indexOf("http") == 0 &&
            data.additionalData.target &&
            data.additionalData.target == "_self";
        var isAppPushCustomURL = data.additionalData &&
            data.additionalData.url &&
            data.additionalData.url.indexOf("http") == 0;
        var isAppPage = data.additionalData && data.additionalData.page;
        // Don't allow resetTabs to happen if we need to pushPage from notification: it messes things up
        if (isAppPushPostURL || isAppPushCustomURL || isAppPage) {
            this.stopTabReset = true;
        }
        this.Dialogs.alert(data.message, // message
        data.title, // title
        this.translate.instant('Continue') // buttonName
        )
            .then(function () {
            // Now we can allow resetTabs to happen
            _this.stopTabReset = false;
            // if apppush post URL
            if (isAppPushPostURL) {
                var page = {
                    title: data.title,
                    component: __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */],
                    url: data.additionalData.url,
                    classes: null
                };
                _this.pushPage(page);
                return;
            }
            // if there's an external url from apppush custom url field, open in IAB
            if (isAppPushCustomURL) {
                _this.errorlogs.addLog("custom url " + data.additionalData.url, "push");
                _this.openIab(data.additionalData.url, "_blank");
                return;
            }
            // if there's an app page, open it
            if (isAppPage) {
                var page = data.additionalData.page;
                // if page is external, fire the in app browser
                if (page.target === "_blank") {
                    _this.errorlogs.addLog("page url " + page.url, "push");
                    _this.openIab(page.url, page.target);
                    return;
                }
                _this.errorlogs.addLog("page slug " + data.additionalData.page, "push");
                // if they included an app page, load the page
                _this.pushPage(data.additionalData.page);
            }
            // If there is something in the custom url field, but it is not an external url
            if (data.additionalData.url && !isAppPushCustomURL) {
                var page = data.additionalData.url;
                _this.pushPage(page);
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    MyApp.prototype.maybeSendPushId = function (ajaxurl) {
        var _this = this;
        if (!ajaxurl)
            ajaxurl = this.getAjaxURL();
        if (!ajaxurl) {
            console.log("Not able to send endpointArn, missing ajaxurl");
            return;
        }
        this.storage.get("endpointArn").then(function (id) {
            if (id) {
                // ajax call to save this to user meta
                _this.pushService.sendDeviceToWp(id, ajaxurl).then(function (result) {
                    console.log(result);
                });
            }
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: "bottom"
        });
        toast.present();
    };
    MyApp.prototype.menuOpened = function () {
        this.menuCtrl.swipeEnable(true);
    };
    MyApp.prototype.menuClosed = function () {
        this.menuCtrl.swipeEnable(false);
    };
    MyApp.prototype.openLoginModal = function (opt) {
        var _this = this;
        var css = opt && opt.cssClass ? opt.cssClass : "";
        var params = opt && opt.title ? { title: opt.title } : {};
        if (!this.myLoginModal) {
            this.myLoginModal = this.modalCtrl.create("LoginModal", params, {
                cssClass: css
            });
        }
        this.myLoginModal.onDidDismiss(function (data) {
            _this.myLoginModal_open = false;
        });
        if (this.myLoginModal_open === false) {
            this.myLoginModal_open = true;
            this.myLoginModal.present();
        }
    };
    MyApp.prototype.userLogin = function (data) {
        var _this = this;
        var avatar = this.logins.get_avatar(data);
        if (avatar)
            data.avatar = avatar;
        this.login_data = data;
        this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_27__models_user_model__["a" /* User */](data));
        this.maybeSendPushId();
        // tell the modal we are logged in
        this.events.publish("modal:logindata", data);
        this.translate.get("Login successful").subscribe(function (text) {
            _this.presentToast(text);
        });
        this.maybeLogInOutRedirect(data);
        if (this.pages)
            this.resetSideMenu(true);
        if (this.tabs)
            this.resetTabs(true);
    };
    /**
     * Handle the appp_login_redirect filter from WordPress
     * @param data Login data
     */
    MyApp.prototype.maybeLogInOutRedirect = function (data) {
        var _this = this;
        var redirect;
        if (data.login_redirect)
            redirect = data.login_redirect;
        else if (data.logout_redirect)
            redirect = data.logout_redirect;
        if (redirect) {
            console.log("redirecting to ", redirect);
            var page_1;
            var title = "";
            var url = "";
            if (typeof redirect === "string") {
                url = redirect;
            }
            else if (typeof redirect === "object") {
                title = redirect.title;
                url = redirect.url;
            }
            if (!url) {
                return;
            }
            else if (url.indexOf("http") === -1) {
                // load by page slug
                var page_slug = url;
                page_1 = this.getPageBySlug(page_slug);
                if (page_1) {
                    if (this.myLoginModal) {
                        this.myLoginModal.dismiss();
                    }
                    setTimeout(function () {
                        _this.pushPage(page_1);
                    }, 800);
                }
                else {
                    this.translate.get("Page not found").subscribe(function (text) {
                        _this.presentToast(text);
                    });
                }
            }
            else {
                // load by URL
                page_1 = {
                    title: title,
                    url: url,
                    component: __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */],
                    classes: null,
                    target: "",
                    extra_classes: ""
                };
                this.pushPage(page_1);
                this.resetTabs(this.loginservice.user);
            }
        }
    };
    MyApp.prototype.userLogout = function (logout_response) {
        // this.storage.remove('user_login').then( () => {
        //   this.presentToast('Logged out successfully.')
        // })
        var _this = this;
        this.login_data = null;
        this.loginservice.removeLoginStatus();
        if (this.tabs && this.pages) {
            this.resetTabs(false);
            this.resetSideMenu(false);
        }
        else if (this.tabs) {
            this.resetTabs(false);
        }
        else {
            this.resetSideMenu(false);
            // this.openPage(this.pages[0])
        }
        this.translate.get("Logout successful").subscribe(function (text) {
            _this.presentToast(text);
        });
        if (this.myapppsettings.isForcedLogin() &&
            this.myapppsettings.isPreview()) {
            setTimeout(function () {
                _this.openLoginModal();
            }, 1500);
        }
        else if (logout_response &&
            logout_response.data &&
            logout_response.data.logout_redirect) {
            this.maybeLogInOutRedirect(logout_response.data);
        }
    };
    // show or hide menu items on login or logout. resetSideMenu(false) for logout
    MyApp.prototype.resetSideMenu = function (login) {
        var _this = this;
        var updated_pages = [];
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (login === true && item.extra_classes.indexOf("loggedin") >= 0) {
                item.extra_classes += " show";
            }
            else if (login === false &&
                item.extra_classes.indexOf("loggedin") >= 0) {
                item.extra_classes = item.extra_classes.replace(" show", "");
            }
            else if (login === true &&
                item.extra_classes.indexOf("loggedout") >= 0) {
                item.extra_classes += " hide";
            }
            else if (login === false &&
                item.extra_classes.indexOf("loggedout") >= 0) {
                item.extra_classes = item.extra_classes.replace(" hide", "");
            }
            if (item.extra_classes) {
                // always remove this to avoid adding twice
                item.extra_classes = item.extra_classes.replace(" role-hide", "");
            }
            if (this.rolesservice.test_user_role(item.extra_classes) === false) {
                item.extra_classes += " role-hide";
            }
            updated_pages.push(item);
        }
        this.zone.run(function () {
            _this.pages = updated_pages;
        });
        this.setHomePageComponent();
    };
    /**
     * Show or hide tabs on login or logout. resetTabs(false) for logout
     * @param login Boolean
     */
    MyApp.prototype.resetTabs = function (login, lang_updated) {
        var _this = this;
        if (this.stopTabReset) {
            this.stopTabReset = false;
            return; // We can't reset the tabs now if a push notification has opened the app and has a pushPage included
        }
        this.navparams = [];
        if (typeof this.tabs === "undefined")
            return;
        login = typeof login === "undefined" ? false : login;
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var item = _a[_i];
            // set component, default is Iframe
            var root = __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */];
            if (item.root) {
                root = item.root;
            }
            else {
                root = this.getPageType(item);
            }
            item.show = true;
            if (item.extra_classes.indexOf("hide") >= 0) {
                // hide the tab if user added class of hide
                item.show = false;
            }
            else if (item.extra_classes === "hidden-tab") {
                // hide the tab if user added class of hidden-tab (used in global tabs)
                item.show = false;
            }
            else if (!login && item.extra_classes.indexOf("loggedin") >= 0) {
                item.show = false;
            }
            else if (login && item.extra_classes.indexOf("loggedout") >= 0) {
                item.show = false;
            }
            else if (this.rolesservice.test_user_role(item.extra_classes) === false) {
                item.show = false;
            }
            item.class = item.icon;
            // add lang=xx param
            if (root == __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */] && item.url && item.url.indexOf("http") == 0) {
                // console.log('MyAppp resetTabs Iframe change url start', item.url)
                item.url = this.languageservice.appendUrlLang(item.url);
                // console.log('MyAppp resetTabs Iframe change url end', item.url)
            }
            this.navParamsPush(item, root);
        }
        this.tabs = this.navparams.slice();
        this.menuservice.tabs = this.navparams.slice();
        // "refresh" the view by resetting to home tab
        //this.openPage( { 'title': this.tabs[0].title, 'url': '', 'component': 'TabsPage', 'navparams': this.navparams, 'class': this.tabs[0].icon } )
        if (!this.user &&
            this.myapppsettings.isForcedLogin() &&
            !this.myapppsettings.isPreview()) {
            var loginModal = this.menuservice.getLoginModalPage(true);
            this.nav.setRoot("TabsPage", [loginModal]);
            return;
        }
        this.zone.run(function () {
            // If the login/out has a redirect, we don't want to set the root here
            if (!login || lang_updated) {
                if (lang_updated) {
                    if (_this.showingIntro) {
                        // Don't refresh the tabs if showing the intro now
                        setTimeout(function () {
                            _this.showingIntro = false;
                        }, 6000);
                        return;
                    }
                    // some craziness to update Iframe components in the TabsPage Tab
                    // bug fix: https://trello.com/c/Q3qlMxOU/999-language-options-and-iframe-tab-conflict
                    _this.nav.popToRoot(_this.navparams).then(function () {
                        _this.nav.getActiveChildNav()
                            .goToRoot(_this.navparams)
                            .then(function () {
                            _this.nav.setRoot("TabsPage", _this.navparams);
                        });
                    });
                }
                else {
                    // reset the tabs
                    _this.nav.setRoot("TabsPage", _this.navparams);
                }
            }
            else {
                // fixes bug where tabs don't reset after login
                _this.nav.setRoot("TabsPage", _this.navparams);
            }
        });
    };
    MyApp.prototype.getSetLogin = function () {
        var _this = this;
        if (this.loginservice.user) {
            if (this.pages)
                this.resetSideMenu(true);
            if (this.tabs)
                this.resetTabs(true);
            return;
        }
        this.storage.get("user_login").then(function (data) {
            if (data) {
                var avatar = _this.fbconnectvars.get_avatar();
                if (avatar)
                    data.avatar = avatar;
                _this.login_data = data;
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_27__models_user_model__["a" /* User */](data));
                if (_this.pages)
                    _this.resetSideMenu(true);
                if (_this.tabs)
                    _this.resetTabs(true);
            }
        });
    };
    MyApp.prototype.setAvailableLangs = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (data.languages) {
                console.log("set available_languages", data.languages);
                _this.storage.set("available_languages", data.languages);
                _this.languageservice.setAvailable(data.languages);
            }
            else {
                _this.storage.remove("available_languages");
                _this.languageservice.setAvailable(null);
            }
            resolve();
        });
    };
    MyApp.prototype.syncLoginStatus = function (data) {
        // sync login status. If WP and app doesn't match up, fix it
        var _this = this;
        if (data.isloggedin == false && this.login_data) {
            // logged out of WP but still logged into app: log out of app
            this.login_data = null;
            this.storage.remove("user_login");
            this.loginservice.removeLoginStatus();
            this.events.publish("modal:logindata", null);
            this.events.publish("user:logout", null);
        }
        else if (data.isloggedin == true && !this.login_data) {
            // logged into WP but logged out of app: log into app
            if (data.avatar_url && data.message) {
                this.login_data = {
                    loggedin: true,
                    avatar: this.logins.get_avatar(data.avatar_url),
                    message: data.message,
                    username: ""
                };
            }
            else {
                this.login_data = { loggedin: true, username: "" };
            }
            this.storage.set("user_login", this.login_data).then(function () {
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_27__models_user_model__["a" /* User */](_this.login_data));
                _this.events.publish("modal:logindata", _this.login_data);
            });
        }
    };
    MyApp.prototype.getAjaxURL = function () {
        if (!this.ajax_url) {
            var item = window.localStorage.getItem("myappp");
            var myapp = JSON.parse(item);
            if (myapp.wordpress_url) {
                this.ajax_url = myapp.wordpress_url + "wp-admin/admin-ajax.php";
            }
            else {
                return "";
            }
        }
        return this.ajax_url;
    };
    MyApp.prototype.verifyLanguageFile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // check if language file exists. If not, default to en.json
            _this.languageservice.langFileExists(data).then(function (data) {
                var langData = data;
                _this.rtl = langData.dir && langData.dir == "rtl";
                var language = new __WEBPACK_IMPORTED_MODULE_33__models_language_model__["a" /* Language */]({
                    code: langData.code,
                    dir: langData.dir && langData.dir == "rtl" ? "rtl" : "ltr"
                });
                if (_this.languageservice.hasStoredLanguage) {
                    // from storage
                    resolve(_this.languageservice.language);
                }
                else {
                    // from data
                    _this.languageservice.setCurrentLanguage(language);
                }
                resolve(language);
            });
        });
    };
    MyApp.prototype.setBackBtnText = function () {
        var _this = this;
        this.translate.get("Back").subscribe(function (text) {
            console.log("Back " + text);
            _this.config.set("ios", "backButtonText", text);
        });
    };
    // download item from WP, add to storage
    MyApp.prototype.downloadItem = function (data) {
        var _this = this;
        if (!this.Device.platform)
            return;
        console.log(data);
        var loading = this.loadingCtrl.create({
            showBackdrop: false
            //dismissOnPageChange: true
        });
        loading.present(loading);
        this.download
            .downloadFile(data.download_url)
            .then(function (downloadUrl) {
            if (!downloadUrl)
                return;
            _this.storage.get("downloads").then(function (downloads) {
                if (downloads) {
                    downloads.push({ title: data.download_title, url: downloadUrl });
                }
                else {
                    downloads = [{ title: data.download_title, url: downloadUrl }];
                }
                _this.storage.set("downloads", downloads);
            });
            _this.translate.get("Download successful.").subscribe(function (text) {
                _this.presentToast(text);
            });
            if (loading)
                loading.dismiss();
        })
            .catch(function (err) {
            console.warn(err);
            if (loading)
                loading.dismiss();
        });
    };
    MyApp.prototype.doIphoneX = function () {
        // hack for iphonex status bar
        if (this.Device && this.Device.model) {
            var model = this.Device.model.toLowerCase();
            if (model.indexOf("iphone10") >= 0 || model.indexOf("iphone11") >= 0) {
                this.iphoneX = true;
                if (this.platform.isLandscape()) {
                    this.customClasses = "iphoneX-landscape";
                }
                else {
                    this.customClasses = "iphoneX-portrait";
                }
            }
        }
    };
    /**
     * Search both menus for a page
     *
     * @param page_slug
     */
    MyApp.prototype.getPage = function (page_slug) {
        var _this = this;
        var menu_index;
        var page;
        menu_index = this.getMenuIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.pages[menu_index];
        }
        menu_index = this.getTabIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.tabs[menu_index];
        }
        // otherwise . . .
        this.translate.get("Page not found").subscribe(function (text) {
            _this.presentToast(text);
        });
        return false;
    };
    MyApp.prototype.getPageType = function (page) {
        if (page.type === "apppages" && page.page_type === "list") {
            return "PostList";
        }
        else if (page.type === "apppages" && page.page_type === "media-list") {
            return "MediaList";
        }
        else if (page.type === "apppages" && page.page_type === "bp-list") {
            // maybe load profile page. It has type of bp-list even though it's not a bp-list page. Awkward I know.
            if (page.list_route === "profile") {
                return "BpProfilePage";
            }
            else if (page.list_route === "messages") {
                return "BpMessages";
            }
            else {
                return "BpList";
            }
        }
        else if (page.type === "apppages") {
            return this.getPageModuleName(page.page_id);
        }
        else if (page.url && !page.root) {
            return __WEBPACK_IMPORTED_MODULE_32__pages_iframe_iframe__["a" /* Iframe */];
        }
        else {
            return null;
        }
    };
    // check if there is an in app purchase
    MyApp.prototype.maybeValidateIap = function () {
        var _this = this;
        this.storage.get("iap_subscription").then(function (productId) {
            console.log("subscription productId", productId);
            if (productId) {
                _this.getCountSetting();
            }
        });
    };
    // get user setting for how many opens until we validate, default to 1 (check every app open)
    MyApp.prototype.getCountSetting = function () {
        var _this = this;
        this.storage.get("iap_open_count_user_setting").then(function (user_count_setting) {
            if (!user_count_setting) {
                _this.doOpenCount(1);
            }
            else {
                user_count_setting = parseInt(user_count_setting);
                _this.doOpenCount(user_count_setting);
            }
        });
    };
    // count number of times app has been opened since membership was purchased. this is more reliable than checking every 30 days. we don't want to validate every time app is opened
    MyApp.prototype.doOpenCount = function (user_count_setting) {
        var _this = this;
        this.storage.get("open_count").then(function (data) {
            var count = 1;
            if (data) {
                count = data + 1;
            }
            // need username to do membership check, make sure they are logged in
            _this.storage.get("user_login").then(function (login_data) {
                if (login_data && login_data.user_id && count >= user_count_setting) {
                    _this.doIapValidation(login_data.user_id);
                }
                _this.storage.set("open_count", count);
            });
        });
    };
    MyApp.prototype.doIapValidation = function (user_id) {
        var _this = this;
        this.iap
            .getSubscriptionStatus(user_id)
            .then(function (response) {
            if (response === false) {
                _this.purchaseInvalid();
            }
            else if (response) {
                // everything is valid, restart the counter
                _this.storage.remove("open_count");
            }
            else {
                // some sort of error, try again later
                _this.validationError();
            }
        })
            .catch(function (err) {
            console.log("getSubscriptionStatus catch", err);
            _this.validationError();
        });
    };
    // maybe set the open counter back so we can validate again later
    MyApp.prototype.validationError = function () {
        var _this = this;
        this.storage.get("iap_open_count_user_setting").then(function (user_count_setting) {
            if (user_count_setting) {
                user_count_setting = parseInt(user_count_setting);
                _this.storage.set("open_count", user_count_setting - 1);
            }
        });
    };
    // user's purchase has expired, log them out
    // this can be reversed with "restore purchase"
    MyApp.prototype.purchaseInvalid = function () {
        var _this = this;
        this.translate
            .get("Your membership has expired or been cancelled. Please contact us if you need assistance.")
            .subscribe(function (text) {
            _this.presentToast(text);
        });
        this.storage.remove("purchases");
        this.storage.remove("open_count");
        if (this.pages)
            this.resetSideMenu(false);
        if (this.tabs)
            this.resetTabs(false);
    };
    MyApp.prototype.closeAudioPlayer = function () {
        if (this.audioPlayer) {
            this.audioPlayer.dismiss();
        }
        ;
    };
    MyApp.prototype.showAudioPlayer = function (data) {
        var classes = "audio-player-wrapper";
        if (this.tabs || this.myapppsettings.settings.ads && this.myapppsettings.settings.ads.ios || this.myapppsettings.settings.ads && this.myapppsettings.settings.ads.android) {
            classes = "audio-player-wrapper move-up";
        }
        if (this.audioPlayer) {
            this.audioPlayer.dismiss();
        }
        ;
        var opts = { showBackdrop: false, cssClass: classes, enableBackdropDismiss: false };
        this.audioPlayer = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_38__components_audio_player_audio_player__["a" /* AudioPlayerComponent */], data, opts);
        this.audioPlayer.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/app/app.html"*/'<div [innerHTML]="styles"></div>\n\n<ion-menu class="{{customClasses}}" side="{{menu_side}}" *ngIf="pages" [content]="content" swipeEnabled="false" (ionOpen)="menuOpened()" (ionClose)="menuClosed()" persistent="{{menu_all_pages}}">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header text-wrap *ngIf="login_data">\n        <ion-avatar *ngIf="loginservice.user.avatar">\n          <img [src]="loginservice.user.avatar" />\n        </ion-avatar>\n        <p class="loggedin-msg"><b>{{ login_data.message | translate }}</b></p>\n        \n      </ion-list-header>\n\n      <button [ngClass]="p.extra_classes" ion-item *ngFor="let p of pages" (click)="menuLink(p, $event)">\n        <ion-icon *ngIf="p.class" name="{{p.class}}" item-left></ion-icon>\n        {{p.title | translate}}\n      </button>\n\n      <button *ngIf="showLogin" ion-button block icon-left class="menu-login-button" (click)="openLoginModal()">\n      <ion-icon name="log-in"></ion-icon>\n      <span *ngIf="login_data">{{ \'Logout\' | translate }}</span><span *ngIf="!login_data">{{ \'Login\' | translate }}</span></button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content swipeBackEnabled="false" class="{{customClasses}}"></ion-nav>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_36__providers_appdata_myappp_settings_service__["a" /* MyApppSettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__["a" /* AppCamera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__["a" /* AppAds */],
            __WEBPACK_IMPORTED_MODULE_13__providers_appgeo_appgeo__["a" /* AppGeo */],
            __WEBPACK_IMPORTED_MODULE_8__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_9__providers_facebook_login_iframe__["a" /* FbConnectIframe */],
            __WEBPACK_IMPORTED_MODULE_28__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_37__providers_logins_roles_service__["a" /* RolesService */],
            __WEBPACK_IMPORTED_MODULE_29__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_push__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_appwoo_appwoo__["a" /* AppWoo */],
            __WEBPACK_IMPORTED_MODULE_12__providers_appdata_appdata__["a" /* AppData */],
            __WEBPACK_IMPORTED_MODULE_14__providers_logins_logins__["a" /* Logins */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_30__providers_menus_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_download_download__["a" /* Download */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_31__providers_inapppurchase_inapppurchase__["a" /* IAP */],
            __WEBPACK_IMPORTED_MODULE_34__providers_appdata_error_log_service__["a" /* ErrorLogService */],
            __WEBPACK_IMPORTED_MODULE_35__providers_appdata_remote_data__["a" /* RemoteDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_player__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AudioPlayerComponentModule = /** @class */ (function () {
    function AudioPlayerComponentModule() {
    }
    AudioPlayerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__audio_player__["a" /* AudioPlayerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__audio_player__["a" /* AudioPlayerComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__audio_player__["a" /* AudioPlayerComponent */]
            ]
        })
    ], AudioPlayerComponentModule);
    return AudioPlayerComponentModule;
}());

//# sourceMappingURL=audio-player.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBConnectAppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logins_login_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FBConnectAppSettings = /** @class */ (function () {
    function FBConnectAppSettings(globalvars, http, facebook, loginservice, platform) {
        var _this = this;
        this.globalvars = globalvars;
        this.http = http;
        this.facebook = facebook;
        this.loginservice = loginservice;
        this.platform = platform;
        this.app_ver = 3;
        this.debug = false;
        this.login_scope = ['email', 'public_profile'];
        this.me_fields = 'email,name,picture';
        this.l10n = {
            login_msg: 'Thanks for logging in, {{USERNAME}}!',
            fetch_user_fail: 'Sorry, login failed',
            not_authorized: 'Please log into this app.',
            fb_not_logged_in: 'Please log into Facebook.',
            wp_login_error: 'WordPress login error',
            login_fail: 'Login error, please try again.'
        };
        this.platform.ready().then(function (platform) {
            if ('object' === typeof window['facebookConnectPlugin']) {
                _this.get_settings().then(function () {
                    console.log('fb settings should be stored now');
                }, function (error) {
                    console.log(error);
                    if (error == 'LocalStorage not set yet') {
                        setTimeout(function () {
                            _this.get_settings();
                        }, 3000); // let's try again in 3 seconds
                        console.log('let\'s try again in 3 seconds');
                    }
                });
            }
            else {
                console.warn('cordova FacebookConnectPlugin is not installed');
            }
        });
    }
    FBConnectAppSettings.prototype.get_settings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myappp = localStorage.getItem('myappp');
            if (myappp) {
                myappp = JSON.parse(myappp);
                if (myappp && myappp.wordpress_url) {
                    _this.wordpress_url = myappp['wordpress_url'];
                    _this.wp_site_addr = (myappp['wp_site_addr']) ? myappp['wp_site_addr'] : '';
                    _this.get_remote_settings().then(function (data) {
                        console.log('Facebook, we will update our settings', data);
                        _this.update_settings(data);
                        resolve();
                    }, function (error) {
                        console.warn(error);
                        console.warn('Facebook login settings are not set. Now the Facebook login button will not display');
                        _this.set_nonce(false);
                    });
                }
                else {
                    reject('Skipping remote login setup: no WP URL');
                }
            }
            else {
                reject('LocalStorage not set yet');
            }
        });
    };
    /**
     *
     * @param data from WordPress API response
     */
    FBConnectAppSettings.prototype.update_settings = function (data) {
        console.log('update_settings', data);
        if (data.security)
            this.set_nonce(data.security);
        if (data.l10n)
            this.l10n = data.l10n;
        if (data.me_fields)
            this.verify_me_fields(data.me_fields);
    };
    /**
     * Call WordPress to get nonce for WPLogin
     */
    FBConnectAppSettings.prototype.get_remote_settings = function () {
        var _this = this;
        var params = 'wp-json/ap3/v1/appfbconnect/settings';
        var data = { id: this.globalvars.getAppId() };
        var wp_json_url = (this.wp_site_addr) ? this.wp_site_addr : this.wordpress_url;
        return new Promise(function (resolve, reject) {
            _this.http.post(wp_json_url + params, data).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('data from wordpress', data);
                if (data && data.error) {
                    reject(data.error);
                }
                else {
                    resolve(data);
                }
            }, function (error) {
                if (error.status && error.status == '404') {
                    var msg = 'Using FB Login requires App Facebook Connect 2.6.0+ plugin on ' + _this.wordpress_url;
                    console.error(msg);
                    reject(msg);
                }
            });
        });
    };
    FBConnectAppSettings.prototype.get_redirect_url = function (redirect_url) {
        if (redirect_url) {
            var url = new URL(redirect_url);
            url.searchParams.append('appp', this.app_ver.toString());
            return url.toString();
        }
        else {
            return false;
        }
    };
    FBConnectAppSettings.prototype.verify_me_fields = function (me_fields) {
        // a wp developer can send their own fields
        if (me_fields) {
            this.me_fields = me_fields;
            // required fields for our app
            if (this.me_fields.indexOf('picture') < 0)
                this.me_fields += ',picture';
            if (this.me_fields.indexOf('name') < 0)
                this.me_fields += ',name';
            if (this.me_fields.indexOf('email') < 0)
                this.me_fields += ',email';
        }
        return this.me_fields;
    };
    FBConnectAppSettings.prototype.loggout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ('object' === typeof window['facebookConnectPlugin']) {
                _this.facebook.getLoginStatus().then(function (response) {
                    if (response && response.status == 'connected') {
                        _this.facebook.logout();
                    }
                    resolve(response);
                });
            }
            else {
                console.warn('cordova FacebookConnectPlugin is not installed');
            }
            _this.remove_avatar();
        });
    };
    FBConnectAppSettings.prototype.get_nonce = function () {
        return localStorage.getItem('fb_nonce');
    };
    FBConnectAppSettings.prototype.set_nonce = function (security) {
        if (security)
            localStorage.setItem('fb_nonce', security);
        else
            localStorage.removeItem('fb_nonce');
    };
    FBConnectAppSettings.prototype.get_ajaxurl = function () {
        return this.wordpress_url + 'wp-admin/admin-ajax.php';
    };
    FBConnectAppSettings.prototype.get_avatar = function () {
        return localStorage.getItem('fb_avatar');
    };
    FBConnectAppSettings.prototype.set_avatar = function (response) {
        if (response && response.picture && response.picture.data.url)
            localStorage.setItem('fb_avatar', response.picture.data.url);
    };
    FBConnectAppSettings.prototype.remove_avatar = function () {
        localStorage.removeItem('fb_avatar');
    };
    FBConnectAppSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */]])
    ], FBConnectAppSettings);
    return FBConnectAppSettings;
}());

//# sourceMappingURL=fbconnect-settings.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2_ga__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(ga, angulartics2) {
        this.ga = ga;
        this.angulartics2 = angulartics2;
        this.isEnabled = false;
        this.isDuplicate = false;
        this.basepath = 'apppresser/';
    }
    AnalyticsService.prototype.beginTracking = function (tracking_id, basename) {
        this.isEnabled = true;
        if (basename) {
            this.basepath = basename + '/';
        }
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        // Use localstorage instead of cookies
        var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
        ga('create', tracking_id, {
            'storage': 'none',
            'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
        });
        ga(function (tracker) {
            localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
        });
        // allow file:// URLs for our app
        ga('set', 'checkProtocolTask', function () { });
    };
    AnalyticsService.prototype.trackScreenView = function (component, screenname) {
        if (!this.isEnabled)
            return;
        if (!this.isDuplicate) {
            this.setNoDuplicates();
            // https://github.com/angulartics/angulartics2/blob/master/src/lib/providers/ga/ga.ts
            this.ga.pageTrack(this.basepath + component + '/#/' + screenname);
            // console.log(this.basepath + component + '/#/' + screenname);
        }
    };
    AnalyticsService.prototype.setNoDuplicates = function () {
        var _this = this;
        if (this.isDuplicate)
            return;
        this.isDuplicate = true;
        setTimeout(function () {
            _this.isDuplicate = false;
        }, 1000);
    };
    AnalyticsService.prototype.trackEvent = function (event, label) {
        if (!this.isEnabled)
            return;
        var properties = {
            category: 'app'
        };
        if (label)
            properties.label = label;
        this.angulartics2.eventTrack.next({
            action: event,
            properties: properties,
        });
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2_angulartics2__["b" /* Angulartics2 */]])
    ], AnalyticsService);
    return AnalyticsService;
}());

//# sourceMappingURL=analytics.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(data) {
        if (data) {
            this.username = (data.username) ? data.username : '';
            this.firstname = (data.firstname) ? data.firstname : '';
            this.lastname = (data.lastname) ? data.lastname : '';
            this.email = (data.email) ? data.email : '';
            this.avatar = (data.avatar) ? data.avatar : '';
            this.role = (data.role) ? data.role : '';
            this.roles = (data.roles) ? data.roles : [];
            this.lang = (data.lang) ? data.lang : '';
            this.rtl = (data.rtl);
            // backwards compatiblity
            if (this.role) {
                this.roles.push(this.role);
            }
        }
    }
    User.prototype.hasRole = function (role) {
        if (this.roles && this.roles.length) {
            var roles = this.roles;
            if (role && roles && typeof roles === 'object' && roles.length) {
                if (roles.indexOf(role) >= 0) {
                    return true;
                }
            }
        }
        return false;
    };
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote_data__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Device} from '@ionic-native/device';


var ErrorLogService = /** @class */ (function () {
    function ErrorLogService(remoteData, http, globalvars) {
        this.remoteData = remoteData;
        this.http = http;
        this.globalvars = globalvars;
        this.initialized = false;
        this.loggingEnabled = false;
        this.apiUrl = this.globalvars.getApiRoot();
        this.appId = this.globalvars.getAppId();
    }
    /**
     * Initialized from the AppData.checkForUpdates() which has a five second delay
     *
     * @param data API app-data
     */
    ErrorLogService.prototype.init = function (data) {
        this.initialized = true;
        if (data && data.error_logs) {
            this.enableLogging(data.error_logs.timestamp, data.error_logs.token);
            this.remoteData.sendStoredData('log-app-push', this.token);
        }
        else {
            console.log('logging is [DISABLED] for myapppresser.com');
            this.clearRemoteDataLogs();
        }
    };
    /**
     * Enabled by fetchData data.enable_error_logs,
     * but only if has been recently enabled on myapppresser.com
     */
    ErrorLogService.prototype.enableLogging = function (timestamp, token) {
        var expireTime = new Date(parseInt(timestamp) * 1000);
        var now = new Date();
        // Only log for two hours
        expireTime.setHours(expireTime.getHours() + 2);
        if (expireTime.getTime() > now.getTime()) {
            this.token = token;
            this.loggingEnabled = true;
            console.log('logging is [ENABLED] for myapppresser.com');
        }
        else {
            console.log('logging has [EXPIRED] for myapppresser.com');
        }
    };
    /**
     * Add an error to myapppresser.com
     *
     * example: this.errorlogs.addLog('log this error', 'push');
     *
     * @param msg string
     * @param error_type string All error types will be prepended with 'app-'
     */
    ErrorLogService.prototype.addLog = function (msg, error_type) {
        var _this = this;
        // Maybe too early do know if logging has been enabled, so save it to storage, then send it or delete once we know
        if (this.initialized == false) {
            // /wp-json/ap3/v1/remote/data/push/
            this.remoteData.createRemoteData(this.globalvars.getApiRoot() + ("/wp-json/ap3/v1/error/add/app-" + error_type + "/" + this.appId), { error_msg: msg }, {
                type: 'app-' + error_type,
                isLog: true
            });
            return true;
        }
        if (this.loggingEnabled) {
            var endpoint = "wp-json/ap3/v1/error/add/app-" + error_type + "/" + this.appId;
            var data = {
                error_msg: msg,
                token: this.token
            };
            this.http.post(this.apiUrl + endpoint, data).toPromise().then(function (response) {
                var status = response.json();
                console.log('API log', msg, status);
                if (status.logging_disabled) {
                    _this.loggingEnabled = false;
                    console.log('Logging for myapppresser.com is being disabled');
                }
            });
            return true;
        }
        else {
            return false;
        }
    };
    ErrorLogService.prototype.clearRemoteDataLogs = function () {
        this.remoteData.removeLogs('app-push');
    };
    ErrorLogService.prototype.getLogs = function () {
    };
    ErrorLogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__remote_data__["a" /* RemoteDataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__["a" /* GlobalVars */]])
    ], ErrorLogService);
    return ErrorLogService;
}());

//# sourceMappingURL=error-log.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_streaming_media_streaming_media__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_pdf_pdf__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_header_logo_header_logo__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_language_language_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_analytics_analytics_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var Iframe = /** @class */ (function () {
    function Iframe(navParams, nav, viewCtrl, platform, loadingController, sanitizer, modalCtrl, storage, el, headerLogoService, languageservice, Keyboard, Device, Geolocation, SocialSharing, events, ga, zone, iab, menuCtrl, streamingMediaPlayer, pdfService) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.el = el;
        this.headerLogoService = headerLogoService;
        this.languageservice = languageservice;
        this.Keyboard = Keyboard;
        this.Device = Device;
        this.Geolocation = Geolocation;
        this.SocialSharing = SocialSharing;
        this.events = events;
        this.ga = ga;
        this.zone = zone;
        this.iab = iab;
        this.menuCtrl = menuCtrl;
        this.streamingMediaPlayer = streamingMediaPlayer;
        this.pdfService = pdfService;
        this.title = ' ';
        this.loaded = false;
        this.activityModal = false;
        this.checkinModal = false;
        this.showShare = false;
        this.rtlBack = false;
        this.lang = '';
        this.shareUrl = '';
        this.cart_link = '';
        this.showCartLink = false;
        this.show_header_logo = false;
        this.hide_share_icon = false;
        this.is_registration_page = false;
        this.is_cached = false;
        events.subscribe('user:login', function (data) {
            // reload the iframe for a logged in user
            _this.setupURL();
        });
        events.subscribe('user:logout', function (data) {
            // reload the iframe for a logged out user
            _this.setupURL();
        });
    }
    Iframe_1 = Iframe;
    Iframe.prototype.ngOnInit = function () {
        var _this = this;
        this.iframeLoading();
        if (this.navParams.data.is_home == true) {
            this.doLogo();
            // hack to fix spinner appearing too long when iframe is home tab. Caused by language service calls to resetTabs in main component.
            setTimeout(function () {
                if (_this.loading)
                    _this.loading.dismiss().then(function () {
                        _this.loading = null;
                    });
            }, 4000);
        }
        this.setupURL();
        var dataurl = this.navParams.data.url;
        // Show error message if in preview and not using https
        this.previewAlert(this.navParams.data.url);
        var myappp = localStorage.getItem('myappp');
        if (myappp) {
            if (typeof myappp == 'string')
                myappp = JSON.parse(myappp);
            if (myappp && myappp.meta && myappp.meta.share && myappp.meta.share.icon && myappp.meta.share.icon.hide)
                this.hide_share_icon = myappp.meta.share.icon.hide;
        }
    };
    /**
     * Adds the appp=3 to the URL, but makes sure hashtags stay at the end
     * and we don't end up with more than one ?.
     */
    Iframe.prototype.setupURL = function () {
        var url = this.navParams.data.url;
        url = this.languageservice.appendUrlLang(url);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    Iframe.prototype.ionViewWillEnter = function () {
        var _this = this;
        // If we have already set the title from WordPress don't use the one from the menu
        if (this.title != this.wp_title) {
            this.title = this.navParams.get('title');
        }
        this.showShare = false;
        if (this.navParams.get('is_register_page') === true) {
            if (this.viewCtrl.enableBack())
                this.viewCtrl.showBackButton(false);
            this.rtlBack = false;
            this.is_registration_page = true;
        }
        else if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
            this.is_registration_page = false;
        }
        if (this.navParams.data.url) {
            this.ga.trackScreenView('Iframe', this.navParams.data.url);
        }
        this.storage.get('user_login').then(function (login_data) {
            if (login_data) {
                _this.login_data = login_data;
            }
        });
    };
    Iframe.prototype.ionViewDidLoad = function () {
        // set this.iframe for use in cached views
        this.findIframe();
    };
    Iframe.prototype.ionViewDidEnter = function () {
        // this message fires when entering a cached view so we can update any data with ajax. For example, learndash course progress
        if (this.iframe && this.iframe.contentWindow && this.is_cached) {
            this.iframe.contentWindow.postMessage('app_view_enter', '*');
        }
    };
    Iframe.prototype.ionViewWillLeave = function () {
        // Hack to clear page title when going back. Otherwise page title will be from previous page
        window.postMessage(JSON.stringify({ post_title: '', post_url: 'none' }), '*');
        this.is_cached = true;
    };
    Iframe.prototype.iframeLoading = function () {
        var _this = this;
        // set this.loaded so cached pages don't show loading spinner
        if (this.loaded)
            return;
        this.showSpinner();
        window.addEventListener('native.keyboardhide', function (e) {
            _this.notifyThemeKeyboardClosed();
        });
        window.addEventListener('native.keyboardshow', function (e) {
            _this.notifyThemeKeyboardOpened();
        });
        this.platform.pause.subscribe(function () {
            _this.postPauseEvent();
        });
        this.loaded = true;
    };
    Iframe.prototype.showSpinner = function () {
        var _this = this;
        // create only one spinner
        if (typeof this.loading == 'undefined' || this.loading == null || this.loaded === null) {
            this.loading = this.loadingController.create({
                showBackdrop: false,
                dismissOnPageChange: false
            });
            this.loading.present().then(function (data) {
                setTimeout(function () {
                    if (_this.loading)
                        _this.loading.dismiss().then(function () {
                            _this.loading = null;
                        });
                }, 8000);
            });
        }
    };
    Iframe.prototype.ionSelected = function () {
        // fires when an active menu item is pressed again, causing a refresh
        var _this = this;
        console.log('ionSelected Iframe');
        this.showSpinner();
        var url = this.url;
        this.url = '';
        setTimeout(function () {
            _this.url = url;
        }, 1);
    };
    // ng2 way of adding a listener
    Iframe.prototype.onMessage = function (event) {
        this.myListeners(event);
    };
    Iframe.prototype.myListeners = function (e) {
        var _this = this;
        console.log('iframe msg', e);
        // get current window so we can find active iframe
        var w = e.target;
        if (e.data === 'site_loaded') {
            if (this.loading)
                this.loading.dismiss().then(function () {
                    _this.loading = null;
                });
        }
        else if (e.data === 'show_spinner') {
            this.showSpinner();
        }
        else if (e.data === 'open_login_modal') {
            this.openLoginModal();
        }
        else if (e.data === 'reload_frame') {
            // need to reload frame on login
            this.iframe = w.document.getElementsByClassName('ap3-iframe')[0];
            var src = this.iframe.src;
            this.iframe.src = src;
        }
        else if (e.data === 'checkin_icon_show' || e.data === 'checkin_modal' /* icon */) {
            this.checkinModal = true;
        }
        else if (e.data === 'checkin_modal_show') {
            // doCheckinModal expects an event target, so we'll simulate one
            var _e = {
                target: this.el.nativeElement.querySelector('.ap3-iframe')
            };
            this.doCheckinModal(_e);
        }
        else if (e.data === 'activity_modal') {
            this.zone.run(function () {
                _this.activityModal = true;
            });
        }
        else if (e.data === 'goback') {
            this.goBack();
        }
        else if (e.data.indexOf('{') === 0) {
            // if it's a json object, parse it
            var parsed = JSON.parse(e.data);
            if (parsed.media) {
                this.mediaModal(parsed.media, parsed.img);
            }
            else if (parsed.activity_modal) {
                // console.log('parsed.iframe_url', parsed.iframe_url);
                // console.log('this.iframe.src', this.iframe.src);
                // console.log('this.navParams.data', this.navParams.data);
                // only add the activity_modal icon to this iframe
                if ((typeof (this.navParams.data.extra_classes) !== 'undefined' && this.navParams.data.extra_classes.indexOf('bp-activity-icon') >= 0) || // show if has extra_class of bp-activity-icon
                    this.iframe.src.indexOf(parsed.iframe_url) == 0 || // show even if one of the URL is missing lang=en
                    this.iframe.src.indexOf('/me?') > 0 || // always show if me page
                    this.iframe.src.indexOf('/me/') > 0 || // always show if me page
                    this.iframe.src == parsed.iframe_url // show if the current iframe sent the message, but don't affect other iframes that are in the stack
                ) {
                    if (typeof (this.navParams.data.extra_classes) !== 'undefined' && this.navParams.data.extra_classes.indexOf('no-bp-activity-icon') >= 0) {
                        this.zone.run(function () {
                            _this.activityModal = false;
                        });
                    }
                    else {
                        this.zone.run(function () {
                            _this.activityModal = true;
                        });
                    }
                }
            }
            else if (parsed.apppkeyboardhelper) {
                if (parsed.apppkeyboardhelper === 'close') {
                    if (this.Keyboard) {
                        this.Keyboard.hide();
                    }
                }
            }
            else if (parsed.cart_link && parsed.cart_link != '') {
                this.cart_link = parsed.cart_link;
                this.changeTitle(parsed.post_title);
                this.showCartLink = true;
            }
            else if (parsed.post_url && parsed.post_url != 'none') {
                this.shareUrl = parsed.post_url;
                this.changeTitle(parsed.post_title);
                if (!this.hide_share_icon)
                    this.showShare = true;
            }
            else if (parsed.post_url && parsed.post_url === 'none') {
                // part of the hack to clear page titles when going back
                this.showShare = false;
                this.changeTitle(this.navParams.get('title'));
            }
            else if (parsed.geo_place) {
                // doCheckinPlaceModal expects an event target, so we'll simulate one
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doCheckinPlaceModal(_e, parsed.geo_place);
            }
            else if (parsed.apppgeolocation) {
                // appp-geolocation shortcode
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doApppGeolocation(_e);
            }
            else if (parsed.avatar_url && parsed.message && !parsed.isloggedin && this.login_data) {
                // got a postMessage that the user is not logged in, so log them out of the app
                this.login_data = null;
                this.storage.remove('user_login').then(function () {
                    _this.events.publish('modal:logindata', null);
                    setTimeout(function () {
                        _this.events.publish('user:logout');
                    }, 10);
                });
            }
        }
    };
    Iframe.prototype.changeTitle = function (title) {
        var _this = this;
        if (title === '')
            return;
        // Don't change the title if we already of the one from WordPress
        // Oops! This caused a bug: https://trello.com/c/RvRor5KD
        // if(this.wp_title)
        //     return;
        // zone fixes bug where title didn't update properly on device
        this.zone.run(function () {
            _this.title = title;
            _this.wp_title = title;
        });
    };
    Iframe.prototype.postPauseEvent = function () {
        this.findIframe();
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('{"pause_event":{"platform":"' + this.Device.platform + '"}}', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts postPauseEvent()');
        }
    };
    // find the first ancestor with the given class name
    Iframe.prototype.findAncestor = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls))
            ;
        return el;
    };
    Iframe.prototype.doActivityModal = function (event) {
        this.findIframeBySelector(event.target);
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('activity', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts doActivityModal()');
        }
    };
    Iframe.prototype.doCheckinModal = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // first message is to show modal, then we send through location
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('checkin', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts doCheckinModal()');
        }
        // Do this when checkin button clicked
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ lat: latitude, long: longitude }, '*');
        });
    };
    Iframe.prototype.doCheckinPlaceModal = function (event, place) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // Do this when checkin button clicked when it has a place parameter
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ geo_place: place, lat: latitude, long: longitude }, '*');
        });
    };
    /**
     *  [appp-geolocation] Geo the location to set the form values
     */
    Iframe.prototype.doApppGeolocation = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // event on wp's page load containing the shortcode
        this.Geolocation.getCurrentPosition().then(function (position) {
            console.log('Iframe doApppGeolocation position', position);
            var coords = {
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed
            };
            var message = JSON.stringify({
                apppgeolocation: {
                    coords: coords,
                    timestamp: position.timestamp
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        }).catch(function (reason) {
            console.log('getCurrentPosition reason', reason);
            var message = JSON.stringify({
                apppgeolocation: {
                    ready: false,
                    message: reason.message
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        });
    };
    Iframe.prototype.notifyThemeKeyboardClosed = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_closed', '*');
    };
    Iframe.prototype.notifyThemeKeyboardOpened = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_opened', '*');
    };
    Iframe.prototype.mediaModal = function (src, img) {
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
    Iframe.prototype.handlePDF = function (src) {
        this.pdfService.openPdf(src);
    };
    Iframe.prototype.openLoginModal = function () {
        var modal = this.modalCtrl.create('LoginModal');
        modal.present();
    };
    // Show alert in preview if not using https
    Iframe.prototype.previewAlert = function (url) {
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android' && url.indexOf('http://') >= 0 && location.port != '8100') {
            alert('Cannot display http pages in browser preview. Please build app for device or use https.');
        }
    };
    // Must send in selector from a click event on the page
    Iframe.prototype.findIframeBySelector = function (el) {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        var page = this.findAncestor(el, 'ion-page');
        this.iframe = page.getElementsByClassName('ap3-iframe')[0];
    };
    // find the iframe without a selector
    Iframe.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // changes the back button transition direction if app is RTL
    Iframe.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
        if (this.is_registration_page)
            this.events.publish('login:force_login');
    };
    Iframe.prototype.share = function () {
        this.SocialSharing.share(this.title, null, null, this.shareUrl).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    Iframe.prototype.cartLink = function () {
        this.nav.push(Iframe_1, { 'title': '', 'url': this.cart_link });
    };
    Iframe.prototype.doLogo = function () {
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
    // used by postMessage in applms to dismiss current view
    Iframe.prototype.goBack = function () {
        this.findIframe();
        var page = this.findAncestor(this.iframe, 'ion-page');
        var back = page.getElementsByClassName('back-button')[0];
        back.click();
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Iframe.prototype, "onMessage", null);
    Iframe = Iframe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/iframe/iframe.html"*/'<ion-header>\n\n	<ion-navbar>\n		\n		<ion-buttons start>\n		<button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n		    <ion-icon name="arrow-forward"></ion-icon>\n		    {{ \'Back\' | translate }}\n		</button>\n\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		</ion-buttons>\n\n	    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    	<ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n	    <ion-buttons end>\n	    <button *ngIf="activityModal" ion-button (click)="doActivityModal($event)">\n			<ion-icon name="ios-create-outline"></ion-icon>\n		</button>\n		<button *ngIf="checkinModal" ion-button (click)="doCheckinModal($event)">\n			<ion-icon name="ios-navigate-outline"></ion-icon>\n		</button>\n		<button *ngIf="showShare" ion-button (click)="share()">\n			<ion-icon name="share"></ion-icon>\n		</button>\n		<button *ngIf="showCartLink" ion-button (click)="cartLink()">\n			<ion-icon name="cart"></ion-icon>\n		</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n    <iframe *ngIf="url" [src]="url" id="ap3-iframe" class="ap3-iframe" allowfullscreen></iframe>\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/iframe/iframe.html"*/,
            selector: 'wordpress-page'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_11__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_12__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_streaming_media_streaming_media__["a" /* StreamingMediaPlayer */],
            __WEBPACK_IMPORTED_MODULE_10__providers_pdf_pdf__["a" /* PdfService */]])
    ], Iframe);
    return Iframe;
    var Iframe_1;
}());

//# sourceMappingURL=iframe.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamingMediaPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StreamingMediaPlayer = /** @class */ (function () {
    function StreamingMediaPlayer(streamingMedia, file, device, media, events, loadingCtrl) {
        this.streamingMedia = streamingMedia;
        this.file = file;
        this.device = device;
        this.media = media;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.title = "";
        this.currentIndex = 0;
        this.playlist = null;
        this.duration = null;
    }
    StreamingMediaPlayer.prototype.start = function (item, playlist) {
        var _this = this;
        if (playlist) {
            this.playlist = playlist;
            // where are we in playlist? song 1, song 5, etc?
            this.currentIndex = this.playlist.findIndex(function (x) { return x.source === item.source; });
        }
        if (!item.source) {
            if (item.url) {
                item.source = item.url;
            }
            else {
                alert("Error: no media source.");
                return;
            }
        }
        // handle local file paths
        this.getSource(item)
            .then(function (source) {
            item.source = source;
            _this.playMedia(item);
        })
            .catch(function (err) {
            console.warn(err);
            alert("Unable to play file.");
        });
    };
    StreamingMediaPlayer.prototype.playMedia = function (item) {
        if (!this.device || typeof this.device.platform != 'string') {
            alert("Please try from a device.");
            return;
        }
        this.cleanup();
        item.type = this.getMimeType(item.source);
        if (item.type.indexOf("audio") >= 0) {
            this.events.publish("show_audio_player", item);
            this.currentTrack = this.media.create(item.source);
            this.currentTrack.onSuccess.subscribe(function () {
                console.log("Play is successful");
                // this.playNext();
            });
            this.currentTrack.play();
            this.doProgress();
        }
        else {
            var options = {
                successCallback: function () {
                    console.log("Video success");
                },
                errorCallback: function (e) {
                    console.log("Error streaming");
                },
                shouldAutoClose: true,
                controls: true // true(default)/false. Used to hide controls on fullscreen
            };
            this.events.publish("close_audio_player");
            this.streamingMedia.playVideo(item.source, options);
        }
    };
    StreamingMediaPlayer.prototype.getDur = function () {
        var _this = this;
        // @TODO consider adding a loader until audio starts to play and duration is available
        // (check constantly for the cordova media plugin updates, beacuse there are pull requests that have already fixed this)
        return new Promise(function (resolve) {
            _this.durationInterval = setInterval(function () {
                var dur = _this.currentTrack.getDuration();
                if (dur > 0) {
                    clearInterval(_this.durationInterval);
                    _this.duration = dur;
                    resolve(dur);
                }
            }, 100);
        });
    };
    StreamingMediaPlayer.prototype.doProgress = function () {
        var _this = this;
        this.getDur().then(function (duration) {
            var dur = duration;
            _this.progress = setInterval(function () {
                // get media position
                _this.currentTrack.getCurrentPosition()
                    .then(function (position) {
                    if (position > -1) {
                        var percentCompleted = parseInt(position) / parseInt(dur);
                        percentCompleted = Math.floor(percentCompleted * 100);
                        _this.events.publish("audio_player_progress", percentCompleted);
                    }
                })
                    .catch(function (e) {
                    console.log("Error getting pos=" + e);
                });
            }, 1000);
        });
    };
    StreamingMediaPlayer.prototype.pause = function () {
        if (this.currentTrack)
            this.currentTrack.pause();
    };
    StreamingMediaPlayer.prototype.stop = function () {
        if (this.currentTrack)
            this.currentTrack.stop();
    };
    StreamingMediaPlayer.prototype.play = function () {
        if (this.currentTrack)
            this.currentTrack.play();
    };
    StreamingMediaPlayer.prototype.seek = function (num) {
        if (!this.currentTrack || !this.duration)
            return;
        // num is integer between 1 - 100
        // turn that into a percent num / 100
        var percent = num / 100;
        // get track duration in milliseconds dur * 1000
        var durMil = this.duration * 1000;
        // percent * duration = seekMil
        var seekMil = percent * durMil; // milliseconds to seek to
        this.currentTrack.seekTo(seekMil);
    };
    StreamingMediaPlayer.prototype.getSource = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            item.type = _this.getMimeType(item.source);
            if (item.source.indexOf('http') >= 0) {
                // remote file, don't do anything with url
                resolve(item.source);
            }
            else if (item.type.indexOf("audio") >= 0) {
                // local audio files need special handling
                var src = void 0;
                if (item.source.indexOf("file://") >= 0) {
                    // already an absolute local url
                    src = item.source;
                }
                else {
                    // relative url, need to make it absolute
                    src = _this.file.applicationDirectory + "www/" + item.source;
                }
                _this.file
                    .resolveLocalFilesystemUrl(src)
                    .then(function (dir) {
                    // this will return a url starting with cdvfile://
                    resolve(dir.toInternalURL());
                });
            }
            else if (item.type.indexOf("video") >= 0 && item.source.indexOf('file://') < 0) {
                if (_this.device.platform.toLowerCase() === "android") {
                    var loading = _this.loadingCtrl.create();
                    loading.present();
                    _this.maybeCopyFile(item)
                        .then(function (source) {
                        resolve(source);
                    })
                        .catch(function (err) {
                        console.warn("maybe copy file error", err);
                        reject(err);
                    }).then(function () {
                        loading.dismiss();
                    });
                }
                else {
                    resolve(_this.file.applicationDirectory + "www/" + item.source);
                }
            }
            else {
                // probably here because file is already downloaded. This happens on media list downloads.
                resolve(item.source);
            }
        });
    };
    StreamingMediaPlayer.prototype.playNext = function () {
        if (!this.playlist)
            return;
        if (!this.currentIndex || this.currentIndex === 0) {
            this.currentIndex = 1;
        }
        else {
            this.currentIndex++;
        }
        if (this.currentIndex >= this.playlist.length) {
            this.currentIndex = 0;
        }
        this.playMedia(this.playlist[this.currentIndex]);
    };
    StreamingMediaPlayer.prototype.playPrevious = function () {
        if (!this.playlist)
            return;
        if (!this.currentIndex || this.currentIndex === 0) {
            this.currentIndex = 1;
        }
        else {
            this.currentIndex--;
        }
        if (this.currentIndex <= -1)
            return;
        this.playMedia(this.playlist[this.currentIndex]);
    };
    /**
     * Tip: we use mimetype to know when to remove/stop autoplay.
     * A PDF can't autoplay, so we don't give it a mimetype.
     * @param mediaUrl
     */
    StreamingMediaPlayer.prototype.getMimeType = function (mediaUrl) {
        if (!mediaUrl)
            return "";
        var fileExt = mediaUrl.split(".").pop();
        var mimeType = "";
        // .mp3, .m4a, .mov, .mp4
        switch (fileExt) {
            case "mp3":
                mimeType = "audio/mp3";
                break;
            case "mp4":
                mimeType = "video/mp4";
                break;
            case "mov":
                mimeType = "video/quicktime";
                break;
            case "m4a":
                mimeType = "audio/mp4a-latm";
                break;
            default:
                mimeType = "";
                break;
        }
        return mimeType;
    };
    // local files on Android don't work from assets folder, so we have to copy them to the app storage
    StreamingMediaPlayer.prototype.maybeCopyFile = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var assetPath = _this.file.applicationDirectory + "www/" + item.source;
            //first - resolve target path in bundled file structure:
            _this.file
                .resolveLocalFilesystemUrl(assetPath)
                .then(function (entry) {
                var wwwFile = entry.toInternalURL();
                //console.log("target entry: " + entry + ", - wwwFile: " + wwwFile);
                //then - resolve save folder in dataDirectory:
                _this.file
                    .resolveLocalFilesystemUrl(_this.file.dataDirectory)
                    .then(function (entry) {
                    var savePath = entry.toInternalURL();
                    //console.log("save entry: " + entry + ", - savePath: " + savePath);
                    //then - copy file to saveFolder
                    var fileName = wwwFile.split("/").pop();
                    _this.file
                        .copyFile(_this.file.applicationDirectory + "www/assets/", fileName, savePath, fileName)
                        .then(function (entry) {
                        var newPath = entry.toURL();
                        // console.log("File copied, entry.toURL(): " + newPath);
                        resolve(newPath);
                    })
                        .catch(function (error) {
                        console.log("error copyFile: ", error);
                        reject(error);
                    });
                })
                    .catch(function (error) {
                    console.log("error this.file.resolveLocalFilesystemUrl (save folder): ", error);
                    reject(error);
                });
            })
                .catch(function (error) {
                console.log("error this.file.resolveLocalFilesystemUrl (target): ", error);
                reject(error);
            });
        });
    };
    // when audio player is closed, kill all processes
    StreamingMediaPlayer.prototype.cleanup = function () {
        if (this.currentTrack) {
            this.currentTrack.stop();
            this.currentTrack.release();
            this.duration = null;
            this.events.publish('audio_player_expand_collapse');
        }
        clearInterval(this.progress);
        clearInterval(this.durationInterval);
    };
    StreamingMediaPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* LoadingController */]])
    ], StreamingMediaPlayer);
    return StreamingMediaPlayer;
}());

//# sourceMappingURL=streaming-media.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_language_model__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__analytics_analytics_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LanguageService = /** @class */ (function () {
    function LanguageService(analyticsservice, translate, config, storage, http) {
        this.analyticsservice = analyticsservice;
        this.translate = translate;
        this.config = config;
        this.storage = storage;
        this.http = http;
        this.langObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hasStoredLanguage = false;
        this.language = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]();
    }
    LanguageService.prototype.getLanguage = function () {
        return this.language;
    };
    LanguageService.prototype.setLanguage = function (language) {
        this.language = language;
        this.langObs.next(this.language);
    };
    LanguageService.prototype.initStoredLanguage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('app_language').then(function (lang) {
                if (lang) {
                    _this.hasStoredLanguage = true;
                    _this.translate.setDefaultLang(lang.code);
                    _this.setCurrentLanguage(lang);
                }
                else {
                    _this.hasStoredLanguage = false;
                }
                resolve(_this.hasStoredLanguage);
            });
        });
    };
    LanguageService.prototype.setCurrentLanguage = function (language) {
        this.language.code = language.code;
        this.language.dir = language.dir;
        this.analyticsservice.trackEvent('lang', this.language.code);
        this.translate.use(language.code);
        this.storage.set('app_language', language);
        this.langObs.next(this.language);
    };
    LanguageService.prototype.setAvailable = function (languages) {
        this.language.available = languages;
    };
    /**
     * The current language: 'en'
     */
    LanguageService.prototype.getCurrentLanguage = function () {
        return this.language.code;
    };
    LanguageService.prototype.removeLanguage = function () {
        this.language = null;
        this.langObs.next(null);
    };
    LanguageService.prototype.languageStatus = function () {
        // return the observable
        return this.langObs;
    };
    LanguageService.prototype.removeAppParams = function (url, use_language) {
        // gather any #
        var url_parts = url.split('#');
        var hash = (url_parts[1]) ? '#' + url_parts[1] : '';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        query = query.replace('appp=3', '');
        // maybe remove the existing language
        if (use_language === false) {
            query = query.replace(new RegExp("lang=[a-z]{2}", "gm"), '');
        }
        // trim the ampersands
        query = query.replace(/^\&+|\&+$/g, '');
        query = query.replace('&&', '&');
        url = (query) ? base_url + "?" + query : base_url;
        return url + hash;
    };
    LanguageService.prototype.appendUrlLang = function (url) {
        // console.log('LanguageService appendUrlLang start', url);
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        // remove the existing language
        url = url.replace(new RegExp("lang=[a-z]{2}", "gm"), '');
        // gather any #
        var url_parts = url.split('#');
        var hash = (url_parts[1]) ? '#' + url_parts[1] : '';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        if (query && url.indexOf('appp=3') >= 0) {
            // already has appp=3
            params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]({
                fromString: query
            });
        }
        else {
            // add the appp=3
            params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]({
                fromString: (query) ? query + '&appp=3' : 'appp=3'
            });
        }
        // add the lang=X
        var lang = this.getCurrentLanguage();
        if (lang)
            params = params.append('lang', lang.toString()); // Silly, convert String to primative string
        // put it all together
        url = base_url + '?' + params.toString() + hash;
        // remove empty params
        url = url.replace('&=&', '&');
        // console.log('LanguageService appendUrlLang end', url);
        return url;
    };
    LanguageService.prototype.langFileExists = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fallbackLang = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]({
                code: 'en',
                dir: (data.meta && data.meta.rtl) ? 'rtl' : 'ltr'
            });
            if (data.default_language) {
                var langDefault_1 = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]({
                    code: data.default_language,
                    dir: (data.meta && data.meta.rtl) ? 'rtl' : 'ltr'
                });
                _this.http.get('./assets/i18n/' + langDefault_1.code + '.json')
                    .subscribe(function (response) {
                    var new_lang = langDefault_1;
                    var parsedLangData = response.json();
                    if (parsedLangData) {
                        new_lang.dir = (parsedLangData.dir) ? parsedLangData.dir : langDefault_1.dir;
                    }
                    // language file exists, return url 
                    resolve(new_lang);
                }, function (error) {
                    // language file does not exist
                    resolve(fallbackLang);
                });
            }
            else {
                resolve(fallbackLang);
            }
        });
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], LanguageService);
    return LanguageService;
}());

//# sourceMappingURL=language.service.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map