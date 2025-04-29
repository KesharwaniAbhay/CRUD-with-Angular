import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-defer.mjs
var DeferredLoader = class _DeferredLoader {
  document;
  platformId;
  el;
  renderer;
  viewContainer;
  cd;
  /**
   * Callback to invoke when deferred content is loaded.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onLoad = new EventEmitter();
  template;
  documentScrollListener;
  view;
  window;
  constructor(document, platformId, el, renderer, viewContainer, cd) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
    this.cd = cd;
    this.window = this.document.defaultView;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.shouldLoad()) {
        this.load();
      }
      if (!this.isLoaded()) {
        this.documentScrollListener = this.renderer.listen(this.window, "scroll", () => {
          if (this.shouldLoad()) {
            this.load();
            this.documentScrollListener && this.documentScrollListener();
            this.documentScrollListener = null;
          }
        });
      }
    }
  }
  shouldLoad() {
    if (this.isLoaded()) {
      return false;
    } else {
      let rect = this.el.nativeElement.getBoundingClientRect();
      let docElement = this.document.documentElement;
      let winHeight = docElement.clientHeight;
      return winHeight >= rect.top;
    }
  }
  load() {
    this.view = this.viewContainer.createEmbeddedView(this.template);
    this.onLoad.emit();
    this.cd.detectChanges();
  }
  isLoaded() {
    return this.view != null && isPlatformBrowser(this.platformId);
  }
  ngOnDestroy() {
    this.view = null;
    if (this.documentScrollListener) {
      this.documentScrollListener();
    }
  }
  static ɵfac = function DeferredLoader_Factory(t) {
    return new (t || _DeferredLoader)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DeferredLoader,
    selectors: [["", "pDefer", ""]],
    contentQueries: function DeferredLoader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    outputs: {
      onLoad: "onLoad"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredLoader, [{
    type: Directive,
    args: [{
      selector: "[pDefer]",
      host: {
        class: "p-element"
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
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    onLoad: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: [TemplateRef]
    }]
  });
})();
var DeferModule = class _DeferModule {
  static ɵfac = function DeferModule_Factory(t) {
    return new (t || _DeferModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DeferModule,
    declarations: [DeferredLoader],
    imports: [CommonModule],
    exports: [DeferredLoader]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [DeferredLoader],
      declarations: [DeferredLoader]
    }]
  }], null, null);
})();
export {
  DeferModule,
  DeferredLoader
};
//# sourceMappingURL=primeng_defer.js.map
