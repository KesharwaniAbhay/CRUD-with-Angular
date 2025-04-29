import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-2FPE2ERJ.js";
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  InputFlags,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-PTQGSKSK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-animateonscroll.mjs
var AnimateOnScroll = class _AnimateOnScroll {
  document;
  platformId;
  host;
  el;
  renderer;
  /**
   * Selector to define the CSS class for enter animation.
   * @group Props
   */
  enterClass;
  /**
   * Selector to define the CSS class for leave animation.
   * @group Props
   */
  leaveClass;
  /**
   * Specifies the root option of the IntersectionObserver API.
   * @group Props
   */
  root;
  /**
   * Specifies the rootMargin option of the IntersectionObserver API.
   * @group Props
   */
  rootMargin;
  /**
   * Specifies the threshold option of the IntersectionObserver API
   * @group Props
   */
  threshold;
  /**
   * Whether the scroll event listener should be removed after initial run.
   * @group Props
   */
  once = true;
  observer;
  resetObserver;
  isObserverActive = false;
  animationState;
  animationEndListener;
  constructor(document, platformId, host, el, renderer) {
    this.document = document;
    this.platformId = platformId;
    this.host = host;
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(this.host.nativeElement, "opacity", this.enterClass ? "0" : "");
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.bindIntersectionObserver();
    }
  }
  get options() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
  }
  bindIntersectionObserver() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (this.isObserverActive) {
        if (entry.boundingClientRect.top > 0) {
          entry.isIntersecting ? this.enter() : this.leave();
        }
      } else if (entry.isIntersecting) {
        this.enter();
      }
      this.isObserverActive = true;
    }, this.options);
    setTimeout(() => this.observer.observe(this.host.nativeElement), 0);
    this.resetObserver = new IntersectionObserver(([entry]) => {
      if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
        this.host.nativeElement.style.opacity = this.enterClass ? "0" : "";
        DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
        this.resetObserver.unobserve(this.host.nativeElement);
      }
      this.animationState = void 0;
    }, __spreadProps(__spreadValues({}, this.options), {
      threshold: 0
    }));
  }
  enter() {
    if (this.animationState !== "enter" && this.enterClass) {
      this.host.nativeElement.style.opacity = "";
      DomHandler.removeMultipleClasses(this.host.nativeElement, this.leaveClass);
      DomHandler.addMultipleClasses(this.host.nativeElement, this.enterClass);
      this.once && this.unbindIntersectionObserver();
      this.bindAnimationEvents();
      this.animationState = "enter";
    }
  }
  leave() {
    if (this.animationState !== "leave" && this.leaveClass) {
      this.host.nativeElement.style.opacity = this.enterClass ? "0" : "";
      DomHandler.removeMultipleClasses(this.host.nativeElement, this.enterClass);
      DomHandler.addMultipleClasses(this.host.nativeElement, this.leaveClass);
      this.bindAnimationEvents();
      this.animationState = "leave";
    }
  }
  bindAnimationEvents() {
    if (!this.animationEndListener) {
      this.animationEndListener = this.renderer.listen(this.host.nativeElement, "animationend", () => {
        DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
        !this.once && this.resetObserver.observe(this.host.nativeElement);
        this.unbindAnimationEvents();
      });
    }
  }
  unbindAnimationEvents() {
    if (this.animationEndListener) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  unbindIntersectionObserver() {
    this.observer?.unobserve(this.host.nativeElement);
    this.resetObserver?.unobserve(this.host.nativeElement);
    this.isObserverActive = false;
  }
  ngOnDestroy() {
    this.unbindAnimationEvents();
    this.unbindIntersectionObserver();
  }
  static ɵfac = function AnimateOnScroll_Factory(t) {
    return new (t || _AnimateOnScroll)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AnimateOnScroll,
    selectors: [["", "pAnimateOnScroll", ""]],
    hostVars: 2,
    hostBindings: function AnimateOnScroll_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-animateonscroll", true);
      }
    },
    inputs: {
      enterClass: "enterClass",
      leaveClass: "leaveClass",
      root: "root",
      rootMargin: "rootMargin",
      threshold: [InputFlags.HasDecoratorInputTransform, "threshold", "threshold", numberAttribute],
      once: [InputFlags.HasDecoratorInputTransform, "once", "once", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScroll, [{
    type: Directive,
    args: [{
      selector: "[pAnimateOnScroll]",
      host: {
        "[class.p-animateonscroll]": "true"
      }
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
    type: ElementRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    enterClass: [{
      type: Input
    }],
    leaveClass: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    threshold: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    once: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var AnimateOnScrollModule = class _AnimateOnScrollModule {
  static ɵfac = function AnimateOnScrollModule_Factory(t) {
    return new (t || _AnimateOnScrollModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AnimateOnScrollModule,
    declarations: [AnimateOnScroll],
    imports: [CommonModule],
    exports: [AnimateOnScroll]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScrollModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AnimateOnScroll],
      declarations: [AnimateOnScroll]
    }]
  }], null, null);
})();
export {
  AnimateOnScroll,
  AnimateOnScrollModule
};
//# sourceMappingURL=primeng_animateonscroll.js.map
