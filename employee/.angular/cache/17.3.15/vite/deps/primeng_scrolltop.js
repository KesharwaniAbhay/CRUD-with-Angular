import {
  ChevronUpIcon
} from "./chunk-ITIM3OIJ.js";
import "./chunk-KJHM36LJ.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import {
  zindexutils
} from "./chunk-FPSJESYG.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-E3RKQ3P6.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
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
  ViewEncapsulation$1,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-scrolltop.mjs
var _c0 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c1 = (a0) => ({
  value: "open",
  params: a0
});
var _c2 = () => ({
  styleClass: "p-scrolltop-icon"
});
var _c3 = () => ({
  "font-size": "1rem",
  scale: "1.5"
});
function ScrollTop_button_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.icon);
    ɵɵproperty("ngClass", "p-scrolltop-icon");
  }
}
function ScrollTop_button_0_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 7);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-scrolltop-icon")("ngStyle", ɵɵpureFunction0(2, _c3));
  }
}
function ScrollTop_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ScrollTop_button_0_ng_container_1_span_1_Template, 1, 3, "span", 4)(2, ScrollTop_button_0_ng_container_1_ChevronUpIcon_2_Template, 1, 3, "ChevronUpIcon", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.icon);
  }
}
function ScrollTop_button_0_2_ng_template_0_Template(rf, ctx) {
}
function ScrollTop_button_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScrollTop_button_0_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r1.icon);
  }
}
function ScrollTop_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("@animation.start", function ScrollTop_button_0_Template_button_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onEnter($event));
    })("@animation.done", function ScrollTop_button_0_Template_button_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeave($event));
    })("click", function ScrollTop_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵtemplate(1, ScrollTop_button_0_ng_container_1_Template, 3, 2, "ng-container", 2)(2, ScrollTop_button_0_2_Template, 1, 1, null, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("@animation", ɵɵpureFunction1(12, _c1, ɵɵpureFunction2(9, _c0, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("ngClass", ctx_r1.containerClass())("ngStyle", ctx_r1.style);
    ɵɵattribute("aria-label", ctx_r1.buttonAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction0(14, _c2));
  }
}
var ScrollTop = class _ScrollTop {
  document;
  platformId;
  renderer;
  el;
  cd;
  config;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Target of the ScrollTop.
   * @group Props
   */
  target = "window";
  /**
   * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
   * @group Props
   */
  threshold = 400;
  /**
   * Name of the icon or JSX.Element for icon.
   * @group Props
   */
  icon;
  /**
   * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
   * @group Props
   */
  behavior = "smooth";
  /**
   * A string value used to determine the display transition options.
   * @group Props
   */
  showTransitionOptions = ".15s";
  /**
   * A string value used to determine the hiding transition options.
   * @group Props
   */
  hideTransitionOptions = ".15s";
  /**
   * Establishes a string value that labels the scroll-top button.
   * @group Props
   */
  buttonAriaLabel;
  templates;
  iconTemplate;
  documentScrollListener;
  parentScrollListener;
  visible = false;
  overlay;
  window;
  constructor(document, platformId, renderer, el, cd, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.config = config;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    if (this.target === "window") this.bindDocumentScrollListener();
    else if (this.target === "parent") this.bindParentScrollListener();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  onClick() {
    let scrollElement = this.target === "window" ? this.window : this.el.nativeElement.parentElement;
    scrollElement.scroll({
      top: 0,
      behavior: this.behavior
    });
  }
  onEnter(event) {
    switch (event.toState) {
      case "open":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        break;
      case "void":
        this.overlay = null;
        break;
    }
  }
  onLeave(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  checkVisibility(scrollY) {
    if (scrollY > this.threshold) this.visible = true;
    else this.visible = false;
    this.cd.markForCheck();
  }
  bindParentScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.parentScrollListener = this.renderer.listen(this.el.nativeElement.parentElement, "scroll", () => {
        this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
      });
    }
  }
  bindDocumentScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentScrollListener = this.renderer.listen(this.window, "scroll", () => {
        this.checkVisibility(DomHandler.getWindowScrollTop());
      });
    }
  }
  unbindParentScrollListener() {
    if (this.parentScrollListener) {
      this.parentScrollListener();
      this.parentScrollListener = null;
    }
  }
  unbindDocumentScrollListener() {
    if (this.documentScrollListener) {
      this.documentScrollListener();
      this.documentScrollListener = null;
    }
  }
  containerClass() {
    return {
      "p-scrolltop p-link p-component": true,
      "p-scrolltop-sticky": this.target !== "window"
    };
  }
  ngOnDestroy() {
    if (this.target === "window") this.unbindDocumentScrollListener();
    else if (this.target === "parent") this.unbindParentScrollListener();
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
  }
  static ɵfac = function ScrollTop_Factory(t) {
    return new (t || _ScrollTop)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollTop,
    selectors: [["p-scrollTop"]],
    contentQueries: function ScrollTop_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      target: "target",
      threshold: [InputFlags.HasDecoratorInputTransform, "threshold", "threshold", numberAttribute],
      icon: "icon",
      behavior: "behavior",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      buttonAriaLabel: "buttonAriaLabel"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 1,
    vars: 1,
    consts: [["type", "button", 3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], ["type", "button", 3, "click", "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "ngStyle"], [3, "ngIf"]],
    template: function ScrollTop_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ScrollTop_button_0_Template, 3, 15, "button", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ChevronUpIcon],
    styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        opacity: 0
      })), state("open", style({
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTop, [{
    type: Component,
    args: [{
      selector: "p-scrollTop",
      template: `
        <button
            *ngIf="visible"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            [ngClass]="containerClass()"
            (click)="onClick()"
            [class]="styleClass"
            [ngStyle]="style"
            type="button"
        >
            <ng-container *ngIf="!iconTemplate">
                <span *ngIf="icon" [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
                <ChevronUpIcon *ngIf="!icon" [styleClass]="'p-scrolltop-icon'" [ngStyle]="{ 'font-size': '1rem', scale: '1.5' }" />
            </ng-container>
            <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate; context: { styleClass: 'p-scrolltop-icon' }"></ng-template>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("animation", [state("void", style({
        opacity: 0
      })), state("open", style({
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    threshold: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    behavior: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    buttonAriaLabel: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollTopModule = class _ScrollTopModule {
  static ɵfac = function ScrollTopModule_Factory(t) {
    return new (t || _ScrollTopModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollTopModule,
    declarations: [ScrollTop],
    imports: [CommonModule, ChevronUpIcon, SharedModule],
    exports: [ScrollTop, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ChevronUpIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTopModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ChevronUpIcon, SharedModule],
      exports: [ScrollTop, SharedModule],
      declarations: [ScrollTop]
    }]
  }], null, null);
})();
export {
  ScrollTop,
  ScrollTopModule
};
//# sourceMappingURL=primeng_scrolltop.js.map
