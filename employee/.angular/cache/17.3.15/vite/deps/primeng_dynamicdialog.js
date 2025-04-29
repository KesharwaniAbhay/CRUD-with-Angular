import {
  WindowMaximizeIcon,
  WindowMinimizeIcon
} from "./chunk-4BTLBOYZ.js";
import {
  FocusTrap,
  FocusTrapModule
} from "./chunk-OZEA3STR.js";
import {
  TimesIcon
} from "./chunk-ASGWCLQS.js";
import "./chunk-KJHM36LJ.js";
import {
  PrimeNGConfig,
  SharedModule,
  TranslationKeys
} from "./chunk-5SF6BQZ2.js";
import {
  UniqueComponentId,
  zindexutils
} from "./chunk-FPSJESYG.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-E3RKQ3P6.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgComponentOutlet,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-2FPE2ERJ.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Inject,
  Injectable,
  Injector,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  Renderer2,
  SkipSelf,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  createComponent,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-dynamicdialog.mjs
var _c0 = ["mask"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["titlebar"];
var _c4 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker": a0,
  "p-dialog-left": a1,
  "p-dialog-right": a2,
  "p-dialog-top": a3,
  "p-dialog-bottom": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom-left": a7,
  "p-dialog-bottom-right": a8
});
var _c5 = (a0, a1, a2, a3) => ({
  "p-dialog p-dynamic-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-resizable": a1,
  "p-dialog-draggable": a2,
  "p-dialog-maximized": a3
});
var _c6 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c7 = (a0) => ({
  value: "visible",
  params: a0
});
var _c8 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
function DynamicDialogComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("mousedown", function DynamicDialogComponent_div_2_div_2_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.initResize($event));
    });
    ɵɵelementEnd();
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMaximizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "WindowMaximizeIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-maximize-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMinimizeIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "WindowMinimizeIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-maximize-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.maximize());
    })("keydown.enter", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.maximize());
    });
    ɵɵtemplate(1, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_span_1_Template, 1, 1, "span", 21)(2, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMaximizeIcon_2_Template, 1, 1, "WindowMaximizeIcon", 22)(3, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMinimizeIcon_3_Template, 1, 1, "WindowMinimizeIcon", 22)(4, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_4_Template, 1, 0, "ng-container", 12)(5, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_5_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction0(6, _c8));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.maximizeIconTemplate || !ctx_r1.minimizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIcon && !ctx_r1.minimizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.maximizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-close-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 25);
    ɵɵlistener("click", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.hide());
    })("keydown.enter", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.hide());
    });
    ɵɵtemplate(1, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_TimesIcon_1_Template, 1, 1, "TimesIcon", 22)(2, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_ng_container_2_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", "p-dialog-header-icon p-dialog-header-maximize p-link");
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.closeIconTemplate);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 16);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 17);
    ɵɵtemplate(4, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template, 6, 7, "button", 18)(5, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template, 3, 4, "button", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.ariaLabelledBy);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.config.header);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.config.maximizable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.closable !== false);
  }
}
function DynamicDialogComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15, 3);
    ɵɵlistener("mousedown", function DynamicDialogComponent_div_2_div_3_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.initDrag($event));
    });
    ɵɵtemplate(2, DynamicDialogComponent_div_2_div_3_ng_container_2_Template, 1, 0, "ng-container", 12)(3, DynamicDialogComponent_div_2_div_3_ng_container_3_Template, 6, 4, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngComponentOutlet", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.headerTemplate);
  }
}
function DynamicDialogComponent_div_2_6_ng_template_0_Template(rf, ctx) {
}
function DynamicDialogComponent_div_2_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DynamicDialogComponent_div_2_6_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
}
function DynamicDialogComponent_div_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.config.footer, " ");
  }
}
function DynamicDialogComponent_div_2_div_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicDialogComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27, 4);
    ɵɵtemplate(2, DynamicDialogComponent_div_2_div_8_ng_container_2_Template, 2, 1, "ng-container", 11)(3, DynamicDialogComponent_div_2_div_8_ng_container_3_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.footerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.footerTemplate);
  }
}
function DynamicDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7, 1);
    ɵɵlistener("@animation.start", function DynamicDialogComponent_div_2_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function DynamicDialogComponent_div_2_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵtemplate(2, DynamicDialogComponent_div_2_div_2_Template, 1, 0, "div", 8)(3, DynamicDialogComponent_div_2_div_3_Template, 4, 2, "div", 9);
    ɵɵelementStart(4, "div", 10, 2);
    ɵɵtemplate(6, DynamicDialogComponent_div_2_6_Template, 1, 0, null, 11)(7, DynamicDialogComponent_div_2_ng_container_7_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵtemplate(8, DynamicDialogComponent_div_2_div_8_Template, 4, 2, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.config.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction4(14, _c5, ctx_r1.config.rtl, ctx_r1.config.resizable, ctx_r1.config.draggable, ctx_r1.maximized))("ngStyle", ctx_r1.containerStyle)("@animation", ɵɵpureFunction1(22, _c7, ɵɵpureFunction2(19, _c6, ctx_r1.transformOptions, ctx_r1.config.transitionOptions || "150ms cubic-bezier(0, 0, 0.2, 1)")))("pFocusTrapDisabled", ctx_r1.config.focusTrap === false);
    ɵɵattribute("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.config.resizable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.showHeader === false ? false : true);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.config.contentStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.footer || ctx_r1.footerTemplate);
  }
}
var DynamicDialogContent = class _DynamicDialogContent {
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static ɵfac = function DynamicDialogContent_Factory(t) {
    return new (t || _DynamicDialogContent)(ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DynamicDialogContent,
    selectors: [["", "pDynamicDialogContent", ""]],
    hostAttrs: [1, "p-element"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogContent, [{
    type: Directive,
    args: [{
      selector: "[pDynamicDialogContent]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var DynamicDialogConfig = class {
  /**
   * An object to pass to the component loaded inside the Dialog.
   * @group Props
   */
  data;
  /**
   * Header text of the dialog.
   * @group Props
   */
  header;
  /**
   * Identifies the element (or elements) that labels the element it is applied to.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Footer text of the dialog.
   * @group Props
   */
  footer;
  /**
   * Width of the dialog.
   * @group Props
   */
  width;
  /**
   * Height of the dialog.
   * @group Props
   */
  height;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape;
  /**
   * Specifies if autofocus should happen on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Specifies if autofocus should happen on close.
   * @group Props
   */
  focusOnClose = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Inline style of the component.
   * @group Props
   */
  rtl;
  /**
   * Inline style of the comopnent.
   * @group Props
   */
  style;
  /**
   * Inline style of the content.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
   * @group Props
   */
  position;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A boolean to determine if it can be duplicate.
   * @group Props
   */
  duplicate;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Dialog templates.
   * @group Props
   */
  templates;
};
var DynamicDialogRef = class {
  constructor() {
  }
  /**
   * Closes dialog.
   * @group Method
   */
  close(result) {
    this._onClose.next(result);
    setTimeout(() => {
      this._onClose.complete();
    }, 1e3);
  }
  /**
   * Destroys the dialog instance.
   * @group Method
   */
  destroy() {
    this._onDestroy.next(null);
  }
  /**
   * Callback to invoke on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragStart(event) {
    this._onDragStart.next(event);
  }
  /**
   * Callback to invoke on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragEnd(event) {
    this._onDragEnd.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeInit(event) {
    this._onResizeInit.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeEnd(event) {
    this._onResizeEnd.next(event);
  }
  /**
   * Callback to invoke on dialog is maximized.
   * @param {*} value - Size value.
   * @group Method
   */
  maximize(value) {
    this._onMaximize.next(value);
  }
  _onClose = new Subject();
  /**
   * Event triggered on dialog is closed.
   * @group Events
   */
  onClose = this._onClose.asObservable();
  _onDestroy = new Subject();
  /**
   * Event triggered on dialog instance is destroyed.
   * @group Events
   */
  onDestroy = this._onDestroy.asObservable();
  _onDragStart = new Subject();
  /**
   * Event triggered on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragStart = this._onDragStart.asObservable();
  _onDragEnd = new Subject();
  /**
   * Event triggered on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragEnd = this._onDragEnd.asObservable();
  _onResizeInit = new Subject();
  /**
   * Event triggered on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeInit = this._onResizeInit.asObservable();
  _onResizeEnd = new Subject();
  /**
   * Event triggered on resize end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeEnd = this._onResizeEnd.asObservable();
  _onMaximize = new Subject();
  /**
   * Event triggered on dialog is maximized.
   * @param {*} value - Size value.
   * @group Events
   */
  onMaximize = this._onMaximize.asObservable();
  /**
   * Event triggered on child component load.
   * @param {*} value - Chi.
   * @group Events
   */
  onChildComponentLoaded = new Subject();
};
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var DynamicDialogComponent = class _DynamicDialogComponent {
  document;
  platformId;
  cd;
  renderer;
  config;
  dialogRef;
  zone;
  primeNGConfig;
  parentDialog;
  visible = true;
  componentRef;
  mask;
  resizing;
  dragging;
  maximized;
  _style = {};
  originalStyle;
  lastPageX;
  lastPageY;
  ariaLabelledBy;
  id = UniqueComponentId();
  styleElement;
  insertionPoint;
  maskViewChild;
  contentViewChild;
  footerViewChild;
  headerViewChild;
  childComponentType;
  container;
  wrapper;
  documentKeydownListener;
  documentEscapeListener;
  maskClickListener;
  transformOptions = "scale(0.7)";
  documentResizeListener;
  documentResizeEndListener;
  documentDragListener;
  documentDragEndListener;
  get minX() {
    return this.config.minX ? this.config.minX : 0;
  }
  get minY() {
    return this.config.minY ? this.config.minY : 0;
  }
  get keepInViewport() {
    return this.config.keepInViewport;
  }
  get maximizable() {
    return this.config.maximizable;
  }
  get maximizeIcon() {
    return this.config.maximizeIcon;
  }
  get minimizeIcon() {
    return this.config.minimizeIcon;
  }
  get style() {
    return this._style;
  }
  get position() {
    return this.config.position;
  }
  get closeAriaLabel() {
    return this.primeNGConfig.getTranslation(TranslationKeys.ARIA)["close"];
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  get parent() {
    const domElements = Array.from(this.document.getElementsByClassName("p-dialog"));
    if (domElements.length > 1) {
      return domElements.pop();
    }
  }
  get parentContent() {
    const domElements = Array.from(this.document.getElementsByClassName("p-dialog"));
    if (domElements.length > 0) {
      const contentElements = domElements[domElements.length - 1].querySelector(".p-dialog-content");
      if (contentElements) return Array.isArray(contentElements) ? contentElements[0] : contentElements;
    }
  }
  get header() {
    return this.config.header;
  }
  get data() {
    return this.config.data;
  }
  get breakpoints() {
    return this.config.breakpoints;
  }
  get footerTemplate() {
    return this.config?.templates?.footer;
  }
  get headerTemplate() {
    return this.config?.templates?.header;
  }
  get contentTemplate() {
    return this.config?.templates?.content;
  }
  get minimizeIconTemplate() {
    return this.config?.templates?.minimizeicon;
  }
  get maximizeIconTemplate() {
    return this.config?.templates?.maximizeicon;
  }
  get closeIconTemplate() {
    return this.config?.templates?.closeicon;
  }
  get dynamicDialogCount() {
    const dynamicDialogs = this.document.querySelectorAll("p-dynamicdialog");
    const dynamicDialogCount = dynamicDialogs?.length;
    return dynamicDialogCount;
  }
  get containerStyle() {
    return __spreadProps(__spreadValues({}, this.config.style), {
      width: this.config.width,
      height: this.config.height
    });
  }
  constructor(document, platformId, cd, renderer, config, dialogRef, zone, primeNGConfig, parentDialog) {
    this.document = document;
    this.platformId = platformId;
    this.cd = cd;
    this.renderer = renderer;
    this.config = config;
    this.dialogRef = dialogRef;
    this.zone = zone;
    this.primeNGConfig = primeNGConfig;
    this.parentDialog = parentDialog;
  }
  ngOnInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        DomHandler.setAttribute(this.styleElement, "nonce", this.primeNGConfig?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      }
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.ariaLabelledBy = this.getAriaLabelledBy();
    this.cd.detectChanges();
  }
  getAriaLabelledBy() {
    return this.header !== null ? UniqueComponentId() + "_header" : null;
  }
  loadChildComponent(componentType) {
    let viewContainerRef = this.insertionPoint?.viewContainerRef;
    viewContainerRef?.clear();
    this.componentRef = viewContainerRef?.createComponent(componentType);
    this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance);
  }
  moveOnTop() {
    if (this.config.autoZIndex !== false) {
      zindexutils.set("modal", this.container, (this.config.baseZIndex || 0) + this.primeNGConfig.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container.parentElement;
        this.moveOnTop();
        if (this.parent) {
          this.unbindGlobalListeners();
        }
        this.bindGlobalListeners();
        this.container?.setAttribute(this.id, "");
        if (this.config.modal !== false) {
          this.enableModality();
        }
        if (this.config.focusOnShow !== false) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.config.modal !== false) {
          DomHandler.addClass(this.wrapper, "p-component-overlay-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.parentContent && this.config.focusOnClose !== false) {
        this.focus(this.parentContent);
      }
      this.onContainerDestroy();
      this.dialogRef.destroy();
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    if (this.container && this.config.autoZIndex !== false) {
      zindexutils.clear(this.container);
    }
    if (this.config.modal !== false) {
      this.disableModality();
    }
    this.container = null;
  }
  close() {
    this.visible = false;
    this.cd.markForCheck();
  }
  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  enableModality() {
    if (this.config.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.hide();
        }
      });
    }
    if (this.dynamicDialogCount === 1) {
      DomHandler.addClass(this.document.body, "p-overflow-hidden");
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.config.dismissableMask) {
        this.unbindMaskClickListener();
      }
      if (this.dynamicDialogCount === 1) {
        DomHandler.removeClass(this.document.body, "p-overflow-hidden");
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  focus(focusParentElement = this.contentViewChild.nativeElement) {
    const focusableElements = DomHandler.getFocusableElements(focusParentElement);
    if (!focusableElements.length) {
      return;
    }
    let focusable = DomHandler.getFocusableElement(focusParentElement, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
      return;
    }
    const focusableElement = DomHandler.getFocusableElement(focusParentElement);
    if (focusableElement) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusableElement.focus(), 5);
      });
    } else if (this.footerViewChild) {
      this.focus(this.footerViewChild.nativeElement);
    } else if (!focusableElement && this.headerViewChild) {
      this.focus(this.headerViewChild.nativeElement);
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (this.maximized) {
      DomHandler.addClass(this.document.body, "p-overflow-hidden");
    } else {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
    }
    this.dialogRef.maximize({
      maximized: this.maximized
    });
  }
  initResize(event) {
    if (this.config.resizable) {
      if (!this.documentResizeListener) {
        this.bindDocumentResizeListeners();
      }
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      DomHandler.addClass(this.document.body, "p-unselectable-text");
      this.dialogRef.resizeInit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = DomHandler.getOuterWidth(this.container);
      let containerHeight = DomHandler.getOuterHeight(this.container);
      let contentHeight = DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = DomHandler.getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.dialogRef.resizeEnd(event);
    }
  }
  initDrag(event) {
    if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.config.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      DomHandler.addClass(this.document.body, "p-unselectable-text");
      this.dialogRef.dragStart(event);
    }
  }
  onDrag(event) {
    if (this.dragging) {
      let containerWidth = DomHandler.getOuterWidth(this.container);
      let containerHeight = DomHandler.getOuterHeight(this.container);
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let offset = this.container.getBoundingClientRect();
      let leftPos = offset.left + deltaX;
      let topPos = offset.top + deltaY;
      let viewport = DomHandler.getViewport();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = leftPos + "px";
          this.lastPageX = event.pageX;
          this.container.style.left = leftPos + "px";
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = topPos + "px";
          this.lastPageY = event.pageY;
          this.container.style.top = topPos + "px";
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = leftPos + "px";
        this.lastPageY = event.pageY;
        this.container.style.top = topPos + "px";
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.dialogRef.dragEnd(event);
      this.cd.detectChanges();
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  bindDocumentDragListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.document, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  bindDocumentDragEndListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.document, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragListener = null;
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.document, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.document, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindGlobalListeners() {
    if (this.config.closeOnEscape !== false) {
      this.bindDocumentEscapeListener();
    }
    if (this.config.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.config.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentEscapeListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.maskViewChild ? this.maskViewChild.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) == zindexutils.getCurrent()) {
          this.hide();
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  ngOnDestroy() {
    this.onContainerDestroy();
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.destroyStyle();
  }
  static ɵfac = function DynamicDialogComponent_Factory(t) {
    return new (t || _DynamicDialogComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DynamicDialogConfig), ɵɵdirectiveInject(DynamicDialogRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(_DynamicDialogComponent, 12));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DynamicDialogComponent,
    selectors: [["p-dynamicDialog"]],
    viewQuery: function DynamicDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(DynamicDialogContent, 5);
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.insertionPoint = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maskViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    decls: 3,
    vars: 14,
    consts: [["mask", ""], ["container", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "ngClass"], ["role", "dialog", "pFocusTrap", "", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["role", "dialog", "pFocusTrap", "", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["class", "p-resizable-handle", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-content", 3, "ngStyle"], [4, "ngIf"], [4, "ngComponentOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], [1, "p-dialog-title", 3, "id"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "role", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass"], ["type", "button", "role", "button", 3, "click", "keydown.enter", "ngClass"], ["pDynamicDialogContent", ""], [1, "p-dialog-footer"]],
    template: function DynamicDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 5, 0);
        ɵɵtemplate(2, DynamicDialogComponent_div_2_Template, 9, 24, "div", 6);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.config.maskStyleClass);
        ɵɵproperty("ngClass", ɵɵpureFunctionV(4, _c4, [ctx.config.modal !== false, ctx.position === "left", ctx.position === "right", ctx.position === "top", ctx.position === "bottom", ctx.position === "topleft" || ctx.position === "top-left", ctx.position === "topright" || ctx.position === "top-right", ctx.position === "bottomleft" || ctx.position === "bottom-left", ctx.position === "bottomright" || ctx.position === "bottom-right"]));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgComponentOutlet, NgIf, NgStyle, WindowMaximizeIcon, WindowMinimizeIcon, TimesIcon, FocusTrap, DynamicDialogContent],
    styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogComponent, [{
    type: Component,
    args: [{
      selector: "p-dynamicDialog",
      template: `
        <div
            #mask
            [ngClass]="{
                'p-dialog-mask': true,
                'p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker': config.modal !== false,
                'p-dialog-left': position === 'left',
                'p-dialog-right': position === 'right',
                'p-dialog-top': position === 'top',
                'p-dialog-bottom': position === 'bottom',
                'p-dialog-top-left': position === 'topleft' || position === 'top-left',
                'p-dialog-top-right': position === 'topright' || position === 'top-right',
                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',
                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'
            }"
            [class]="config.maskStyleClass"
        >
            <div
                #container
                [ngClass]="{ 'p-dialog p-dynamic-dialog p-component': true, 'p-dialog-rtl': config.rtl, 'p-dialog-resizable': config.resizable, 'p-dialog-draggable': config.draggable, 'p-dialog-maximized': maximized }"
                [ngStyle]="containerStyle"
                [class]="config.styleClass"
                [@animation]="{ value: 'visible', params: { transform: transformOptions, transition: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)' } }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                role="dialog"
                *ngIf="visible"
                pFocusTrap
                [pFocusTrapDisabled]="config.focusTrap === false"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <div *ngIf="config.resizable" class="p-resizable-handle" (mousedown)="initResize($event)"></div>
                <div #titlebar class="p-dialog-header" (mousedown)="initDrag($event)" *ngIf="config.showHeader === false ? false : true">
                    <ng-container *ngComponentOutlet="headerTemplate"></ng-container>
                    <ng-container *ngIf="!headerTemplate">
                        <span class="p-dialog-title" [id]="ariaLabelledBy">{{ config.header }}</span>
                        <div class="p-dialog-header-icons">
                            <button *ngIf="config.maximizable" type="button" [ngClass]="{ 'p-dialog-header-icon p-dialog-header-maximize p-link': true }" (click)="maximize()" (keydown.enter)="maximize()" tabindex="-1" pRipple>
                                <span class="p-dialog-header-maximize-icon" *ngIf="!maximizeIconTemplate || !minimizeIconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                <WindowMaximizeIcon *ngIf="!maximized && !maximizeIcon && !maximizeIconTemplate" [styleClass]="'p-dialog-header-maximize-icon'" />
                                <WindowMinimizeIcon *ngIf="maximized && !minimizeIcon && !minimizeIconTemplate" [styleClass]="'p-dialog-header-maximize-icon'" />
                                <ng-container *ngComponentOutlet="maximizeIconTemplate"></ng-container>
                                <ng-container *ngComponentOutlet="minimizeIconTemplate"></ng-container>
                            </button>
                            <button [ngClass]="'p-dialog-header-icon p-dialog-header-maximize p-link'" type="button" role="button" (click)="hide()" (keydown.enter)="hide()" *ngIf="config.closable !== false" [attr.aria-label]="closeAriaLabel">
                                <TimesIcon [styleClass]="'p-dialog-header-close-icon'" *ngIf="!closeIconTemplate" />
                                <ng-container *ngComponentOutlet="closeIconTemplate"></ng-container>
                            </button>
                        </div>
                    </ng-container>
                </div>
                <div #content class="p-dialog-content" [ngStyle]="config.contentStyle">
                    <ng-template pDynamicDialogContent *ngIf="!contentTemplate"></ng-template>
                    <ng-container *ngComponentOutlet="contentTemplate"></ng-container>
                </div>
                <div #footer class="p-dialog-footer" *ngIf="config.footer || footerTemplate">
                    <ng-container *ngIf="!footerTemplate">
                        {{ config.footer }}
                    </ng-container>
                    <ng-container *ngComponentOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"]
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
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: DynamicDialogConfig
  }, {
    type: DynamicDialogRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: DynamicDialogComponent,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }], {
    insertionPoint: [{
      type: ViewChild,
      args: [DynamicDialogContent]
    }],
    maskViewChild: [{
      type: ViewChild,
      args: ["mask"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }]
  });
})();
var DynamicDialogModule = class _DynamicDialogModule {
  static ɵfac = function DynamicDialogModule_Factory(t) {
    return new (t || _DynamicDialogModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DynamicDialogModule,
    declarations: [DynamicDialogComponent, DynamicDialogContent],
    imports: [CommonModule, WindowMaximizeIcon, WindowMinimizeIcon, TimesIcon, SharedModule, FocusTrapModule],
    exports: [SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, WindowMaximizeIcon, WindowMinimizeIcon, TimesIcon, SharedModule, FocusTrapModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, WindowMaximizeIcon, WindowMinimizeIcon, TimesIcon, SharedModule, FocusTrapModule],
      declarations: [DynamicDialogComponent, DynamicDialogContent],
      exports: [SharedModule]
    }]
  }], null, null);
})();
var DynamicDialogInjector = class {
  _parentInjector;
  _additionalTokens;
  constructor(_parentInjector, _additionalTokens) {
    this._parentInjector = _parentInjector;
    this._additionalTokens = _additionalTokens;
  }
  get(token, notFoundValue, options) {
    const value = this._additionalTokens.get(token);
    if (value) return value;
    return this._parentInjector.get(token, notFoundValue);
  }
};
var DialogService = class _DialogService {
  appRef;
  injector;
  document;
  dialogComponentRefMap = /* @__PURE__ */ new Map();
  constructor(appRef, injector, document) {
    this.appRef = appRef;
    this.injector = injector;
    this.document = document;
  }
  /**
   * Displays the dialog using the dynamic dialog object options.
   * @param {*} componentType - Dynamic component for content template.
   * @param {DynamicDialogConfig} config - DynamicDialog object.
   * @returns {DynamicDialogRef} DynamicDialog instance.
   * @group Method
   */
  open(componentType, config) {
    if (!this.duplicationPermission(componentType, config)) {
      return null;
    }
    const dialogRef = this.appendDialogComponentToBody(config, componentType);
    this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;
    return dialogRef;
  }
  /**
   * Returns the dynamic dialog component instance.
   * @param {ref} DynamicDialogRef - DynamicDialog instance.
   * @group Method
   */
  getInstance(ref) {
    return this.dialogComponentRefMap.get(ref).instance;
  }
  appendDialogComponentToBody(config, componentType) {
    const map = /* @__PURE__ */ new WeakMap();
    map.set(DynamicDialogConfig, config);
    const dialogRef = new DynamicDialogRef();
    map.set(DynamicDialogRef, dialogRef);
    const sub = dialogRef.onClose.subscribe(() => {
      this.dialogComponentRefMap.get(dialogRef).instance.close();
    });
    const destroySub = dialogRef.onDestroy.subscribe(() => {
      this.removeDialogComponentFromBody(dialogRef);
      destroySub.unsubscribe();
      sub.unsubscribe();
    });
    const componentRef = createComponent(DynamicDialogComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: new DynamicDialogInjector(this.injector, map)
    });
    this.appRef.attachView(componentRef.hostView);
    const domElem = componentRef.hostView.rootNodes[0];
    if (!config.appendTo || config.appendTo === "body") {
      this.document.body.appendChild(domElem);
    } else {
      DomHandler.appendChild(domElem, config.appendTo);
    }
    this.dialogComponentRefMap.set(dialogRef, componentRef);
    return dialogRef;
  }
  removeDialogComponentFromBody(dialogRef) {
    if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
      return;
    }
    const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
    this.appRef.detachView(dialogComponentRef.hostView);
    dialogComponentRef.destroy();
    this.dialogComponentRefMap.delete(dialogRef);
  }
  duplicationPermission(componentType, config) {
    if (config.duplicate) {
      return true;
    }
    let permission = true;
    for (const [key, value] of this.dialogComponentRefMap) {
      if (value.instance.childComponentType === componentType) {
        permission = false;
        break;
      }
    }
    return permission;
  }
  static ɵfac = function DialogService_Factory(t) {
    return new (t || _DialogService)(ɵɵinject(ApplicationRef), ɵɵinject(Injector), ɵɵinject(DOCUMENT));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DialogService,
    factory: _DialogService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable
  }], () => [{
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
export {
  DialogService,
  DynamicDialogComponent,
  DynamicDialogConfig,
  DynamicDialogInjector,
  DynamicDialogModule,
  DynamicDialogRef
};
//# sourceMappingURL=primeng_dynamicdialog.js.map
