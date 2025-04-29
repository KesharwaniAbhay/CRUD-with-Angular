import {
  CommonModule
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-buttongroup.mjs
var _c0 = ["*"];
var ButtonGroup = class _ButtonGroup {
  static ɵfac = function ButtonGroup_Factory(t) {
    return new (t || _ButtonGroup)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonGroup,
    selectors: [["p-buttonGroup"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [["role", "group", 1, "p-button-group", "p-component"]],
    template: function ButtonGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroup, [{
    type: Component,
    args: [{
      selector: "p-buttonGroup",
      template: `
        <span class="p-button-group p-component" role="group">
            <ng-content></ng-content>
        </span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var ButtonGroupModule = class _ButtonGroupModule {
  static ɵfac = function ButtonGroupModule_Factory(t) {
    return new (t || _ButtonGroupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonGroupModule,
    declarations: [ButtonGroup],
    imports: [CommonModule],
    exports: [ButtonGroup]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ButtonGroup],
      declarations: [ButtonGroup]
    }]
  }], null, null);
})();
export {
  ButtonGroup,
  ButtonGroupModule
};
//# sourceMappingURL=primeng_buttongroup.js.map
