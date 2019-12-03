webpackJsonp([18],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModalModule", function() { return EditProfileModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_modal__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfileModalModule = /** @class */ (function () {
    function EditProfileModalModule() {
    }
    EditProfileModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__edit_profile_modal__["a" /* EditProfileModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__edit_profile_modal__["a" /* EditProfileModal */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
        })
    ], EditProfileModalModule);
    return EditProfileModalModule;
}());

//# sourceMappingURL=edit-profile-modal.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logins_login_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_buddypress_bp_provider__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








;
var EditProfileModal = /** @class */ (function () {
    function EditProfileModal(platform, viewCtrl, alertCtrl, loadingCtrl, device, actionSheet, storage, translate, loginservice, bpProvider) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.actionSheet = actionSheet;
        this.storage = storage;
        this.translate = translate;
        this.loginservice = loginservice;
        this.bpProvider = bpProvider;
        this.profileFields = [];
        this.profileAvatar = String(this.loginservice.user.avatar);
        this._doIphoneX();
    }
    /**
     * Tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.)
     */
    EditProfileModal.prototype.ionViewWillEnter = function () {
        this._getLoginData();
    };
    /**
     * Get the login data from the storage
     * @TODO consider putting this on a provider to be used as a service
     */
    EditProfileModal.prototype._getLoginData = function () {
        var _this = this;
        this.storage.get('user_login')
            .then(function (login_data) {
            if (login_data) {
                _this.login_data = login_data;
                _this._getAllFields();
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    /**
     * Gets profile fields from API
     */
    EditProfileModal.prototype._getAllFields = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
            dismissOnPageChange: false
        });
        loading.present();
        this.bpProvider.getFields(this.login_data)
            .then(function (response) {
            var fields = response.json();
            fields.forEach(function (field) {
                // @TODO consider grouping fields as in buddypress (Base, Single Fields, Multi Fields)
                _this.profileFields.push({
                    id: field.id,
                    name: field.name,
                    value: field.data.value,
                    type: field.type,
                    loading: false,
                    order: field.field_order
                });
            });
            // Sort profileFields by field_order
            _this.profileFields.sort(function (field1, field2) {
                return field1.order - field2.order; // Ascending
            });
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    /**
     * Changes custom class as a workaround for iphonex status bar
     */
    EditProfileModal.prototype._doIphoneX = function () {
        if (this.device && this.device.model) {
            var model = this.device.model.toLowerCase();
            if (model.indexOf('iphone10') >= 0) {
                if (this.platform.isLandscape()) {
                    this.customClasses = 'iphoneX-landscape';
                }
                else {
                    this.customClasses = 'iphoneX-portrait';
                }
            }
        }
    };
    /**
     * Dismissed the modal
     */
    EditProfileModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Edits the profile's avatar from camera or library
     */
    EditProfileModal.prototype.editAvatar = function () {
        var _this = this;
        var actionSheetOptions = {
            title: this.translate.instant('Choose an image'),
            buttonLabels: [
                this.translate.instant('Take Photo'),
                this.translate.instant('Photo Library')
            ],
            addCancelButtonWithLabel: this.translate.instant('Cancel'),
            androidTheme: 5,
            androidEnableCancelButton: true,
            destructiveButtonLast: true
        };
        this.actionSheet.show(actionSheetOptions)
            .then(function (buttonIndex) {
            if (buttonIndex === 1) {
                _this.bpProvider.doCamera('camera')
                    .then(function (image) {
                    var uploadedImage = image;
                    _this._updateAvatarToApi(uploadedImage);
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
            else if (buttonIndex === 2) {
                _this.bpProvider.doCamera('library')
                    .then(function (image) {
                    var uploadedImage = image;
                    _this._updateAvatarToApi(uploadedImage);
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    /**
     * Opens the right alert controller to
     * @param {Field} field
     */
    EditProfileModal.prototype.editFieldValue = function (field) {
        var fieldType = field.type;
        switch (fieldType) {
            case 'textbox': {
                this._editTextField(field, 'text');
                break;
            }
            case 'telephone': {
                this._editTextField(field, 'tel');
                break;
            }
            case 'number': {
                this._editTextField(field, 'number');
                break;
            }
            case 'url': {
                this._editTextField(field, 'url');
                break;
            }
            /*
            case 'radio': {
              // https://ionicframework.com/docs/v3/components/#alert-radio
              break;
            }
      
            case 'checkbox': {
              // https://ionicframework.com/docs/v3/components/#alert-checkbox
              break;
            }
      
            case 'datebox': {
              // https://ionicframework.com/docs/v3/native/date-picker/
              // or
              // https://ionicframework.com/docs/v3/components/#datetime
              break;
            }
            */
            default: {
                this._editFieldNotAvailable();
                break;
            }
        }
    };
    /**
     * Shows an alert to edit text fields
     * @param {Field} field
     * @param {string} fieldType
     */
    EditProfileModal.prototype._editTextField = function (field, fieldType) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translate.instant('Edit field'),
            subTitle: field.name,
            inputs: [
                {
                    name: 'current_field_name',
                    placeholder: field.name,
                    type: fieldType,
                    value: field.value
                },
            ],
            buttons: [
                {
                    text: this.translate.instant('Cancel'),
                },
                {
                    text: this.translate.instant('Save'),
                    handler: function (data) {
                        _this._updateFieldToApi(field, data.current_field_name);
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * Shows an alert that field edit is not available
     */
    EditProfileModal.prototype._editFieldNotAvailable = function () {
        var alert = this.alertCtrl.create({
            title: this.translate.instant('Edit field'),
            subTitle: this.translate.instant('Editing this field is not available yet.'),
            buttons: ['OK']
        });
        alert.present();
    };
    /**
     * Updates the current field with the new value to the API
     * @param {Field} field
     * @param {string} updatedFieldValue
     */
    EditProfileModal.prototype._updateFieldToApi = function (field, updatedFieldValue) {
        var _this = this;
        var fieldIndex = this.profileFields.findIndex(function (currentField) { return currentField.id === field.id; });
        this.profileFields[fieldIndex].loading = true;
        this.bpProvider.updateProfileField(this.login_data, this.profileFields[fieldIndex].id, updatedFieldValue)
            .then(function () {
            _this.profileFields[fieldIndex].value = updatedFieldValue;
            _this.profileFields[fieldIndex].loading = false;
        })
            .catch(function (error) {
            console.log(error);
            _this._handleErrorFromApi();
            _this.profileFields[fieldIndex].loading = false;
        });
    };
    /**
     * Updates the new pofile's avatar to the API
     * @param {string} profileAvatar
     */
    EditProfileModal.prototype._updateAvatarToApi = function (profileAvatar) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
            dismissOnPageChange: false
        });
        loading.present();
        this.bpProvider.updateProfileAvatar(this.login_data, profileAvatar)
            .then(function (avatar) {
            _this.profileAvatar = avatar[0].full;
            _this.loginservice.user.avatar = avatar[0].full;
            _this.login_data.avatar = avatar[0].full;
            _this.storage.set('user_login', _this.login_data);
            loading.dismiss();
        })
            .catch(function (error) {
            console.error(error);
            loading.dismiss();
            _this._handleErrorFromApi();
        });
    };
    /**
     * Shows an alert if the update to the API fails
     */
    EditProfileModal.prototype._handleErrorFromApi = function () {
        var alert = this.alertCtrl.create({
            title: this.translate.instant('Error'),
            subTitle: this.translate.instant('Could not update your profile. Please try again.'),
            buttons: ['OK']
        });
        alert.present();
    };
    EditProfileModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile-modal',template:/*ion-inline-start:"/Users/scottopolis/Work/git tower/ap3/src/pages/edit-profile-modal/edit-profile-modal.html"*/'<ion-header class="{{customClasses}}">\n  <ion-toolbar>\n    <ion-title>{{ \'Edit Profile\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="{{customClasses}}">\n  <div class="profile-avatar" text-center>\n    <img *ngIf="profileAvatar" [src]="profileAvatar" (click)="editAvatar()">\n    <img *ngIf="!profileAvatar" src="assets/default.png">\n    <a (click)="editAvatar()">\n      <span>{{ \'Edit\' | translate }}</span>\n    </a>\n  </div>\n  <ion-list>\n    <button ion-item *ngFor="let field of profileFields" (click)="editFieldValue(field)" detail-none>\n      <p>{{ field.name }}</p>\n      <h2 *ngIf="field.type !== \'textarea\'">{{ field.value }}</h2>\n      <h2 *ngIf="field.type === \'textarea\'" [innerHTML]="field.value"></h2>\n      <ion-spinner item-end *ngIf="field.loading"></ion-spinner>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/scottopolis/Work/git tower/ap3/src/pages/edit-profile-modal/edit-profile-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_buddypress_bp_provider__["a" /* BpProvider */]])
    ], EditProfileModal);
    return EditProfileModal;
}());

//# sourceMappingURL=edit-profile-modal.js.map

/***/ })

});
//# sourceMappingURL=18.js.map