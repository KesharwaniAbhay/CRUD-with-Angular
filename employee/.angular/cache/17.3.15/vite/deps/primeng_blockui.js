import {
  PrimeNGConfig,
  PrimeTemplate
} from "./chunk-5SF6BQZ2.js";
import {
  zindexutils
} from "./chunk-FPSJESYG.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  InputFlags,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-blockui.mjs
var _c0 = ["mask"];
var _c1 = ["*"];
var _c2 = (a0) => ({
  "p-blockui-document": a0,
  "p-blockui p-component-overlay p-component-overlay-enter": true
});
var _c3 = () => ({
  display: "none"
});
function BlockUI_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var BlockUI = class _BlockUI {
  document;
  el;
  cd;
  config;
  renderer;
  platformId;
  /**
   * Name of the local ng-template variable referring to another component.
   * @group Props
   */
  target;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Current blocked state as a boolean.
   * @group Props
   */
  get blocked() {
    return this._blocked;
  }
  set blocked(val) {
    if (this.mask && this.mask.nativeElement) {
      if (val) this.block();
      else this.unblock();
    } else {
      this._blocked = val;
    }
  }
  templates;
  mask;
  _blocked = false;
  animationEndListener;
  contentTemplate;
  constructor(document, el, cd, config, renderer, platformId) {
    this.document = document;
    this.el = el;
    this.cd = cd;
    this.config = config;
    this.renderer = renderer;
    this.platformId = platformId;
  }
  ngAfterViewInit() {
    if (this._blocked) this.block();
    if (this.target && !this.target.getBlockableElement) {
      throw "Target of BlockUI must implement BlockableUI interface";
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  block() {
    if (isPlatformBrowser(this.platformId)) {
      this._blocked = true;
      this.mask.nativeElement.style.display = "flex";
      if (this.target) {
        this.target.getBlockableElement().appendChild(this.mask.nativeElement);
        this.target.getBlockableElement().style.position = "relative";
      } else {
        this.renderer.appendChild(this.document.body, this.mask.nativeElement);
        DomHandler.blockBodyScroll();
      }
      if (this.autoZIndex) {
        zindexutils.set("modal", this.mask.nativeElement, this.baseZIndex + this.config.zIndex.modal);
      }
    }
  }
  unblock() {
    if (isPlatformBrowser(this.platformId) && this.mask && !this.animationEndListener) {
      this.animationEndListener = this.renderer.listen(this.mask.nativeElement, "animationend", this.destroyModal.bind(this));
      DomHandler.addClass(this.mask.nativeElement, "p-component-overlay-leave");
    }
  }
  destroyModal() {
    this._blocked = false;
    if (this.mask && isPlatformBrowser(this.platformId)) {
      zindexutils.clear(this.mask.nativeElement);
      DomHandler.removeClass(this.mask.nativeElement, "p-component-overlay-leave");
      this.renderer.removeChild(this.el.nativeElement, this.mask.nativeElement);
      DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.cd.markForCheck();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.unblock();
    this.destroyModal();
  }
  static ɵfac = function BlockUI_Factory(t) {
    return new (t || _BlockUI)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PLATFORM_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BlockUI,
    selectors: [["p-blockUI"]],
    contentQueries: function BlockUI_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function BlockUI_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mask = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      target: "target",
      autoZIndex: [InputFlags.HasDecoratorInputTransform, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [InputFlags.HasDecoratorInputTransform, "baseZIndex", "baseZIndex", numberAttribute],
      styleClass: "styleClass",
      blocked: "blocked"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 11,
    consts: [["mask", ""], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"]],
    template: function BlockUI_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵprojection(2);
        ɵɵtemplate(3, BlockUI_ng_container_3_Template, 1, 0, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c2, !ctx.target))("ngStyle", ɵɵpureFunction0(10, _c3));
        ɵɵattribute("aria-busy", ctx.blocked)("data-pc-name", "blockui")("data-pc-section", "root");
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlockUI, [{
    type: Component,
    args: [{
      selector: "p-blockUI",
      template: `
        <div
            #mask
            [class]="styleClass"
            [attr.aria-busy]="blocked"
            [ngClass]="{ 'p-blockui-document': !target, 'p-blockui p-component-overlay p-component-overlay-enter': true }"
            [ngStyle]="{ display: 'none' }"
            [attr.data-pc-name]="'blockui'"
            [attr.data-pc-section]="'root'"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    target: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    blocked: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    mask: [{
      type: ViewChild,
      args: ["mask"]
    }]
  });
})();
var BlockUIModule = class _BlockUIModule {
  static ɵfac = function BlockUIModule_Factory(t) {
    return new (t || _BlockUIModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BlockUIModule,
    declarations: [BlockUI],
    imports: [CommonModule],
    exports: [BlockUI]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlockUIModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [BlockUI],
      declarations: [BlockUI]
    }]
  }], null, null);
})();
export {
  BlockUI,
  BlockUIModule
};
//# sourceMappingURL=primeng_blockui.js.map
