/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./app.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/core/src/application_module');
var import4 = require('@angular/platform-browser/src/browser');
var import5 = require('ng2-toastr/src/toast.module');
var import6 = require('@angular/common/src/localization');
var import7 = require('@angular/core/src/application_init');
var import8 = require('@angular/core/src/testability/testability');
var import9 = require('@angular/core/src/application_ref');
var import10 = require('@angular/core/src/linker/compiler');
var import11 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import12 = require('@angular/platform-browser/src/dom/events/event_manager');
var import13 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import14 = require('@angular/platform-browser/src/dom/dom_renderer');
var import15 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import16 = require('@angular/core/src/linker/view_utils');
var import17 = require('@angular/platform-browser/src/browser/title');
var import18 = require('ng2-toastr/src/toast-manager');
var import20 = require('../node_modules/ng2-toastr/src/toast-container.component.ngfactory');
var import21 = require('./app.component.ngfactory');
var import22 = require('@angular/core/src/application_tokens');
var import23 = require('@angular/platform-browser/src/dom/events/dom_events');
var import24 = require('@angular/platform-browser/src/dom/events/key_events');
var import25 = require('@angular/core/src/zone/ng_zone');
var import26 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import27 = require('ng2-toastr/src/toast-options');
var import28 = require('@angular/core/src/console');
var import29 = require('@angular/core/src/i18n/tokens');
var import30 = require('@angular/core/src/error_handler');
var import31 = require('@angular/platform-browser/src/dom/dom_tokens');
var import32 = require('@angular/platform-browser/src/dom/animation_driver');
var import33 = require('@angular/core/src/render/api');
var import34 = require('@angular/core/src/security');
var import35 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import36 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import37 = require('@angular/core/src/i18n/tokens');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import20.ToastContainerNgFactory,
            import21.AppComponentNgFactory
        ], [import21.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_5", {
        get: function () {
            if ((this.__LOCALE_ID_5 == null)) {
                (this.__LOCALE_ID_5 = null);
            }
            return this.__LOCALE_ID_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_6", {
        get: function () {
            if ((this.__NgLocalization_6 == null)) {
                (this.__NgLocalization_6 = new import6.NgLocaleLocalization(this._LOCALE_ID_5));
            }
            return this.__NgLocalization_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_11", {
        get: function () {
            if ((this.__ApplicationRef_11 == null)) {
                (this.__ApplicationRef_11 = this._ApplicationRef__10);
            }
            return this.__ApplicationRef_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_12", {
        get: function () {
            if ((this.__Compiler_12 == null)) {
                (this.__Compiler_12 = new import10.Compiler());
            }
            return this.__Compiler_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_13", {
        get: function () {
            if ((this.__APP_ID_13 == null)) {
                (this.__APP_ID_13 = import22._appIdRandomProviderFactory());
            }
            return this.__APP_ID_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_14", {
        get: function () {
            if ((this.__DOCUMENT_14 == null)) {
                (this.__DOCUMENT_14 = import4._document());
            }
            return this.__DOCUMENT_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_15", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_15 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_15 = new import11.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_16", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_16 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_16 = [
                    new import23.DomEventsPlugin(),
                    new import24.KeyEventsPlugin(),
                    new import11.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_15)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_17", {
        get: function () {
            if ((this.__EventManager_17 == null)) {
                (this.__EventManager_17 = new import12.EventManager(this._EVENT_MANAGER_PLUGINS_16, this.parent.get(import25.NgZone)));
            }
            return this.__EventManager_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_18", {
        get: function () {
            if ((this.__DomSharedStylesHost_18 == null)) {
                (this.__DomSharedStylesHost_18 = new import13.DomSharedStylesHost(this._DOCUMENT_14));
            }
            return this.__DomSharedStylesHost_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_19", {
        get: function () {
            if ((this.__AnimationDriver_19 == null)) {
                (this.__AnimationDriver_19 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_20", {
        get: function () {
            if ((this.__DomRootRenderer_20 == null)) {
                (this.__DomRootRenderer_20 = new import14.DomRootRenderer_(this._DOCUMENT_14, this._EventManager_17, this._DomSharedStylesHost_18, this._AnimationDriver_19));
            }
            return this.__DomRootRenderer_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_21", {
        get: function () {
            if ((this.__RootRenderer_21 == null)) {
                (this.__RootRenderer_21 = import26._createConditionalRootRenderer(this._DomRootRenderer_20, this.parent.get(import26.NgProbeToken, null)));
            }
            return this.__RootRenderer_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_22", {
        get: function () {
            if ((this.__DomSanitizer_22 == null)) {
                (this.__DomSanitizer_22 = new import15.DomSanitizerImpl());
            }
            return this.__DomSanitizer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_23", {
        get: function () {
            if ((this.__Sanitizer_23 == null)) {
                (this.__Sanitizer_23 = this._DomSanitizer_22);
            }
            return this.__Sanitizer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_24", {
        get: function () {
            if ((this.__ViewUtils_24 == null)) {
                (this.__ViewUtils_24 = new import16.ViewUtils(this._RootRenderer_21, this._APP_ID_13, this._Sanitizer_23));
            }
            return this.__ViewUtils_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_25", {
        get: function () {
            if ((this.__IterableDiffers_25 == null)) {
                (this.__IterableDiffers_25 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_26", {
        get: function () {
            if ((this.__KeyValueDiffers_26 == null)) {
                (this.__KeyValueDiffers_26 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_27", {
        get: function () {
            if ((this.__SharedStylesHost_27 == null)) {
                (this.__SharedStylesHost_27 = this._DomSharedStylesHost_18);
            }
            return this.__SharedStylesHost_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_28", {
        get: function () {
            if ((this.__Title_28 == null)) {
                (this.__Title_28 = new import17.Title());
            }
            return this.__Title_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ToastsManager_29", {
        get: function () {
            if ((this.__ToastsManager_29 == null)) {
                (this.__ToastsManager_29 = new import18.ToastsManager(this, this._ApplicationRef_11, this.parent.get(import27.ToastOptions, null)));
            }
            return this.__ToastsManager_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TRANSLATIONS_FORMAT_30", {
        get: function () {
            if ((this.__TRANSLATIONS_FORMAT_30 == null)) {
                (this.__TRANSLATIONS_FORMAT_30 = null);
            }
            return this.__TRANSLATIONS_FORMAT_30;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ToastModule_3 = new import5.ToastModule();
        this._AppModule_4 = new import1.AppModule();
        this._ErrorHandler_7 = import4.errorHandler();
        this._ApplicationInitStatus_8 = new import7.ApplicationInitStatus(this.parent.get(import7.APP_INITIALIZER, null));
        this._Testability_9 = new import8.Testability(this.parent.get(import25.NgZone));
        this._ApplicationRef__10 = new import9.ApplicationRef_(this.parent.get(import25.NgZone), this.parent.get(import28.Console), this, this._ErrorHandler_7, this, this._ApplicationInitStatus_8, this.parent.get(import8.TestabilityRegistry, null), this._Testability_9);
        return this._AppModule_4;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.ToastModule)) {
            return this._ToastModule_3;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_4;
        }
        if ((token === import29.LOCALE_ID)) {
            return this._LOCALE_ID_5;
        }
        if ((token === import6.NgLocalization)) {
            return this._NgLocalization_6;
        }
        if ((token === import30.ErrorHandler)) {
            return this._ErrorHandler_7;
        }
        if ((token === import7.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_8;
        }
        if ((token === import8.Testability)) {
            return this._Testability_9;
        }
        if ((token === import9.ApplicationRef_)) {
            return this._ApplicationRef__10;
        }
        if ((token === import9.ApplicationRef)) {
            return this._ApplicationRef_11;
        }
        if ((token === import10.Compiler)) {
            return this._Compiler_12;
        }
        if ((token === import22.APP_ID)) {
            return this._APP_ID_13;
        }
        if ((token === import31.DOCUMENT)) {
            return this._DOCUMENT_14;
        }
        if ((token === import11.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_15;
        }
        if ((token === import12.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_16;
        }
        if ((token === import12.EventManager)) {
            return this._EventManager_17;
        }
        if ((token === import13.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_18;
        }
        if ((token === import32.AnimationDriver)) {
            return this._AnimationDriver_19;
        }
        if ((token === import14.DomRootRenderer)) {
            return this._DomRootRenderer_20;
        }
        if ((token === import33.RootRenderer)) {
            return this._RootRenderer_21;
        }
        if ((token === import15.DomSanitizer)) {
            return this._DomSanitizer_22;
        }
        if ((token === import34.Sanitizer)) {
            return this._Sanitizer_23;
        }
        if ((token === import16.ViewUtils)) {
            return this._ViewUtils_24;
        }
        if ((token === import35.IterableDiffers)) {
            return this._IterableDiffers_25;
        }
        if ((token === import36.KeyValueDiffers)) {
            return this._KeyValueDiffers_26;
        }
        if ((token === import13.SharedStylesHost)) {
            return this._SharedStylesHost_27;
        }
        if ((token === import17.Title)) {
            return this._Title_28;
        }
        if ((token === import18.ToastsManager)) {
            return this._ToastsManager_29;
        }
        if ((token === import37.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_30;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__10.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map