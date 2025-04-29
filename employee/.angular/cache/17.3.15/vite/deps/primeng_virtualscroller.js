import {
  Scroller,
  ScrollerModule
} from "./chunk-UDQPAJOP.js";
import "./chunk-AXOSKZ4X.js";
import "./chunk-KJHM36LJ.js";
import {
  Footer,
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import "./chunk-FPSJESYG.js";
import "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-virtualscroller.mjs
var _c0 = ["scroller"];
var _c1 = [[["p-header"]], [["p-footer"]]];
var _c2 = ["p-header", "p-footer"];
var _c3 = (a0) => ({
  height: a0
});
var _c4 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
function VirtualScroller_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function VirtualScroller_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1);
    ɵɵtemplate(2, VirtualScroller_div_1_ng_container_2_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function VirtualScroller_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function VirtualScroller_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, VirtualScroller_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const scrollerOptions_r4 = ctx.options;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c3, ctx_r1.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r3 ? ctx_r1.itemTemplate : ctx_r1.loadingItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c4, item_r3, scrollerOptions_r4));
  }
}
function VirtualScroller_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function VirtualScroller_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, VirtualScroller_div_7_ng_container_2_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "footer");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
var VirtualScroller = class _VirtualScroller {
  el;
  cd;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Height of an item in the list.
   * @group Props
   */
  itemSize;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Max height of the content area in inline mode.
   * @group Props
   */
  scrollHeight;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  options;
  /**
   * Threshold in milliseconds to delay lazy loading during scrolling.
   * @group Props
   */
  delay = 250;
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {VirtualScrollerLazyLoadEvent} event - custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  header;
  footer;
  templates;
  scroller;
  itemTemplate;
  headerTemplate;
  footerTemplate;
  loadingItemTemplate;
  virtualScrollTimeout;
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "loadingItem":
          this.loadingItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  onLazyItemLoad(event) {
    if (this.virtualScrollTimeout) {
      clearTimeout(this.virtualScrollTimeout);
    }
    this.virtualScrollTimeout = setTimeout(() => {
      this.onLazyLoad.emit(__spreadProps(__spreadValues({}, event), {
        rows: event.last - event.first,
        forceUpdate: () => this.cd.detectChanges()
      }));
    }, this.delay);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  scrollToIndex(index, mode) {
    this.scroller?.scrollToIndex(index, mode);
  }
  static ɵfac = function VirtualScroller_Factory(t) {
    return new (t || _VirtualScroller)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _VirtualScroller,
    selectors: [["p-virtualScroller"]],
    contentQueries: function VirtualScroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5);
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function VirtualScroller_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      itemSize: [InputFlags.HasDecoratorInputTransform, "itemSize", "itemSize", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      scrollHeight: "scrollHeight",
      lazy: [InputFlags.HasDecoratorInputTransform, "lazy", "lazy", booleanAttribute],
      options: "options",
      delay: [InputFlags.HasDecoratorInputTransform, "delay", "delay", numberAttribute]
    },
    outputs: {
      onLazyLoad: "onLazyLoad"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c2,
    decls: 8,
    vars: 17,
    consts: [["content", ""], ["scroller", ""], [3, "ngClass", "ngStyle"], ["class", "p-virtualscroller-header", 4, "ngIf"], [1, "p-virtualscroller-content"], ["styleClass", "p-virtualscroller-list", 3, "onLazyLoad", "items", "itemSize", "lazy", "options"], ["pTemplate", "item"], ["class", "p-virtualscroller-footer", 4, "ngIf"], [1, "p-virtualscroller-header"], [4, "ngTemplateOutlet"], [1, "p-virtualscroller-item", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-footer"]],
    template: function VirtualScroller_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 2);
        ɵɵtemplate(1, VirtualScroller_div_1_Template, 3, 1, "div", 3);
        ɵɵelementStart(2, "div", 4, 0)(4, "p-scroller", 5, 1);
        ɵɵlistener("onLazyLoad", function VirtualScroller_Template_p_scroller_onLazyLoad_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onLazyItemLoad($event));
        });
        ɵɵtemplate(6, VirtualScroller_ng_template_6_Template, 2, 8, "ng-template", 6);
        ɵɵelementEnd()();
        ɵɵtemplate(7, VirtualScroller_div_7_Template, 3, 2, "div", 7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-virtualscroller p-component")("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "virtualscroller")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance(2);
        ɵɵstyleMap(ɵɵpureFunction1(15, _c3, ctx.scrollHeight));
        ɵɵproperty("items", ctx.value)("itemSize", ctx.itemSize)("lazy", ctx.lazy)("options", ctx.options);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.footer || ctx.footerTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, PrimeTemplate, Scroller],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualScroller, [{
    type: Component,
    args: [{
      selector: "p-virtualScroller",
      template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'virtualscroller'" [attr.data-pc-section]="'root'">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content" [attr.data-pc-section]="'content'">
                <p-scroller #scroller [items]="value" styleClass="p-virtualscroller-list" [style]="{ height: scrollHeight }" [itemSize]="itemSize" [lazy]="lazy" (onLazyLoad)="onLazyItemLoad($event)" [options]="options">
                    <ng-template pTemplate="item" let-item let-scrollerOptions="options">
                        <div [ngStyle]="{ height: itemSize + 'px' }" class="p-virtualscroller-item">
                            <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: { $implicit: item, options: scrollerOptions }"></ng-container>
                        </div>
                    </ng-template>
                </p-scroller>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate" [attr.data-pc-section]="'footer'">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    options: [{
      type: Input
    }],
    delay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onLazyLoad: [{
      type: Output
    }],
    header: [{
      type: ContentChild,
      args: [Header]
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }]
  });
})();
var VirtualScrollerModule = class _VirtualScrollerModule {
  static ɵfac = function VirtualScrollerModule_Factory(t) {
    return new (t || _VirtualScrollerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _VirtualScrollerModule,
    declarations: [VirtualScroller],
    imports: [CommonModule, SharedModule, ScrollerModule],
    exports: [VirtualScroller, SharedModule, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, ScrollerModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, ScrollerModule],
      exports: [VirtualScroller, SharedModule, ScrollerModule],
      declarations: [VirtualScroller]
    }]
  }], null, null);
})();
export {
  VirtualScroller,
  VirtualScrollerModule
};
//# sourceMappingURL=primeng_virtualscroller.js.map
