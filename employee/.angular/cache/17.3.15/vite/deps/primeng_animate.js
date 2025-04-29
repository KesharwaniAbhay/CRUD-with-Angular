import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule
} from "./chunk-2FPE2ERJ.js";
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  Renderer2,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-animate.mjs
var Animate = class _Animate {
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
  observer;
  timeout;
  constructor(host, el, renderer) {
    this.host = host;
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    console.log("pAnimate directive is deprecated in 16.7.0 and will be removed in the future. Use pAnimateOnScroll directive instead");
  }
  ngAfterViewInit() {
    this.bindIntersectionObserver();
  }
  bindIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    this.observer = new IntersectionObserver((el) => this.isVisible(el), options);
    this.observer.observe(this.host.nativeElement);
  }
  isVisible(element) {
    const [intersectionObserverEntry] = element;
    intersectionObserverEntry.isIntersecting ? this.enter() : this.leave();
  }
  enter() {
    this.host.nativeElement.style.visibility = "visible";
    DomHandler.addClass(this.host.nativeElement, this.enterClass);
  }
  leave() {
    DomHandler.removeClass(this.host.nativeElement, this.enterClass);
    if (this.leaveClass) {
      DomHandler.addClass(this.host.nativeElement, this.leaveClass);
    }
    const animationDuration = this.host.nativeElement.style.animationDuration || 500;
    this.timeout = setTimeout(() => {
      this.host.nativeElement.style.visibility = "hidden";
    }, animationDuration);
  }
  unbindIntersectionObserver() {
    if (this.observer) {
      this.observer.unobserve(this.host.nativeElement);
    }
  }
  ngOnDestroy() {
    this.unbindIntersectionObserver();
    clearTimeout(this.timeout);
  }
  static ɵfac = function Animate_Factory(t) {
    return new (t || _Animate)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Animate,
    selectors: [["", "pAnimate", ""]],
    hostVars: 2,
    hostBindings: function Animate_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-animate", true);
      }
    },
    inputs: {
      enterClass: "enterClass",
      leaveClass: "leaveClass"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Animate, [{
    type: Directive,
    args: [{
      selector: "[pAnimate]",
      host: {
        "[class.p-animate]": "true"
      }
    }]
  }], () => [{
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
    }]
  });
})();
var AnimateModule = class _AnimateModule {
  static ɵfac = function AnimateModule_Factory(t) {
    return new (t || _AnimateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AnimateModule,
    declarations: [Animate],
    imports: [CommonModule],
    exports: [Animate]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Animate],
      declarations: [Animate]
    }]
  }], null, null);
})();
export {
  Animate,
  AnimateModule
};
//# sourceMappingURL=primeng_animate.js.map
