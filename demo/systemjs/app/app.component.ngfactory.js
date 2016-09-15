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
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./app.component');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('ng2-toastr/src/toast-manager');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import3.AppComponent(this.parentInjector.get(import8.ToastsManager));
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppComponentNgFactory = new import10.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import3.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n      ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_2 = this.renderer.createText(this._el_1, ' Angular 2 Toastr Demo.', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n      ', null);
        this._el_4 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'style', 'border: .2rem solid #f7f7f9; position: relative; margin: 1rem -1rem; padding: 10px;');
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'btn btn-success');
        this.renderer.setElementAttribute(this._el_6, 'type', 'button');
        this._text_7 = this.renderer.createText(this._el_6, 'Success', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'btn btn-info');
        this.renderer.setElementAttribute(this._el_9, 'type', 'button');
        this._text_10 = this.renderer.createText(this._el_9, 'Information', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'btn btn-warning');
        this.renderer.setElementAttribute(this._el_12, 'type', 'button');
        this._text_13 = this.renderer.createText(this._el_12, 'Warning', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'btn btn-danger');
        this.renderer.setElementAttribute(this._el_15, 'type', 'button');
        this._text_16 = this.renderer.createText(this._el_15, 'Error', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n      ', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n      ', null);
        this._el_19 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_19, 'style', 'border: .2rem solid #f7f7f9; position: relative; margin: 1rem -1rem; padding: 10px;');
        this._text_20 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'btn btn-info');
        this.renderer.setElementAttribute(this._el_21, 'type', 'button');
        this._text_22 = this.renderer.createText(this._el_21, 'Click to Dismiss', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_24 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'btn btn-warning');
        this.renderer.setElementAttribute(this._el_24, 'type', 'button');
        this._text_25 = this.renderer.createText(this._el_24, '8-second Toast', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_27 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'class', 'btn btn-default');
        this.renderer.setElementAttribute(this._el_27, 'type', 'button');
        this._text_28 = this.renderer.createText(this._el_27, 'Custom HTML Toast', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n      ', null);
        this._text_30 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ], []);
        return null;
    };
    _View_AppComponent0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showSuccess() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showInfo() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showWarning() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showError() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showClickToDismiss() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showCustomLife() !== false);
        return (true && pd_0);
    };
    _View_AppComponent0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showCustomHTML() !== false);
        return (true && pd_0);
    };
    return _View_AppComponent0;
}(import1.AppView));
function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('/Users/dereks/Documents/PointInside/ng2-toastr/demo/systemjs/app/app.component.ts class AppComponent - inline template', 0, import9.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppComponent0 = viewFactory_AppComponent0;
//# sourceMappingURL=app.component.ngfactory.js.map