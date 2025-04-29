import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-MR2QYEAI.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-3WZWM3WO.js";
import {
  OverlayService,
  PrimeNGConfig,
  TranslationKeys
} from "./chunk-5SF6BQZ2.js";
import {
  zindexutils
} from "./chunk-FPSJESYG.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-E3RKQ3P6.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  InputFlags,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c0 = ["container"];
var _c1 = ["input"];
var _c2 = ["colorSelector"];
var _c3 = ["colorHandle"];
var _c4 = ["hue"];
var _c5 = ["hueHandle"];
var _c6 = (a0, a1) => ({
  "p-colorpicker p-component": true,
  "p-colorpicker-overlay": a0,
  "p-colorpicker-dragging": a1
});
var _c7 = (a0) => ({
  "p-disabled": a0
});
var _c8 = (a0, a1) => ({
  "p-colorpicker-panel": true,
  "p-colorpicker-overlay-panel": a0,
  "p-disabled": a1
});
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function ColorPicker_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 9, 1);
    ɵɵlistener("click", function ColorPicker_input_2_Template_input_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputClick());
    })("keydown", function ColorPicker_input_2_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputKeydown($event));
    })("focus", function ColorPicker_input_2_Template_input_focus_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputFocus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("background-color", ctx_r1.inputBgColor);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c7, ctx_r1.disabled))("disabled", ctx_r1.disabled)("autofocus", ctx_r1.autofocus);
    ɵɵattribute("tabindex", ctx_r1.tabindex)("id", ctx_r1.inputId)("data-pc-section", "input")("aria-label", ctx_r1.ariaLabel);
  }
}
function ColorPicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function ColorPicker_div_3_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function ColorPicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColorPicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(1, "div", 11)(2, "div", 12, 2);
    ɵɵlistener("touchstart", function ColorPicker_div_3_Template_div_touchstart_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onColorDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_2_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDragEnd());
    })("mousedown", function ColorPicker_div_3_Template_div_mousedown_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onColorMousedown($event));
    });
    ɵɵelementStart(4, "div", 13);
    ɵɵelement(5, "div", 14, 3);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 15, 4);
    ɵɵlistener("mousedown", function ColorPicker_div_3_Template_div_mousedown_7_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHueMousedown($event));
    })("touchstart", function ColorPicker_div_3_Template_div_touchstart_7_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHueDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_7_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_7_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDragEnd());
    });
    ɵɵelement(9, "div", 16, 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c8, !ctx_r1.inline, ctx_r1.disabled))("@overlayAnimation", ɵɵpureFunction1(16, _c10, ɵɵpureFunction2(13, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "selector");
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "color");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "colorHandle");
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "hue");
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "hueHandle");
  }
}
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var ColorPicker = class _ColorPicker {
  document;
  platformId;
  el;
  renderer;
  cd;
  config;
  overlayService;
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
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
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
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  containerViewChild;
  inputViewChild;
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  defaultColor = "ff0000";
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  documentClickListener;
  documentResizeListener;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  selfClick;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  window;
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  writeValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    setTimeout(() => {
      this.updateColorSelector();
      this.updateUI();
      this.cd.markForCheck();
    });
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.overlay = event.element;
          this.appendOverlay();
          if (this.autoZIndex) {
            zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.updateColorSelector();
          this.updateUI();
        }
        break;
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.onShow.emit({});
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        this.onHide.emit({});
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else DomHandler.appendChild(this.overlay, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) DomHandler.absolutePosition(this.overlay, this.inputViewChild?.nativeElement);
    else DomHandler.relativePosition(this.overlay, this.inputViewChild?.nativeElement);
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.selfClick = true;
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible) this.show();
    else this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", () => {
        if (!this.selfClick) {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();
        }
        this.selfClick = false;
        this.cd.markForCheck();
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onOverlayHide() {
    this.unbindScrollListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentClickListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static ɵfac = function ColorPicker_Factory(t) {
    return new (t || _ColorPicker)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.colorSelector = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.colorHandle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hue = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      inline: [InputFlags.HasDecoratorInputTransform, "inline", "inline", booleanAttribute],
      format: "format",
      appendTo: "appendTo",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [InputFlags.HasDecoratorInputTransform, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [InputFlags.HasDecoratorInputTransform, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵProvidersFeature([COLORPICKER_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    decls: 4,
    vars: 11,
    consts: [["container", ""], ["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], [3, "ngStyle", "ngClass"], ["type", "text", "class", "p-colorpicker-preview p-inputtext", "readonly", "readonly", "pAutoFocus", "", 3, "ngClass", "disabled", "backgroundColor", "autofocus", "click", "keydown", "focus", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["type", "text", "readonly", "readonly", "pAutoFocus", "", 1, "p-colorpicker-preview", "p-inputtext", 3, "click", "keydown", "focus", "ngClass", "disabled", "autofocus"], [3, "click", "ngClass"], [1, "p-colorpicker-content"], [1, "p-colorpicker-color-selector", 3, "touchstart", "touchmove", "touchend", "mousedown"], [1, "p-colorpicker-color"], [1, "p-colorpicker-color-handle"], [1, "p-colorpicker-hue", 3, "mousedown", "touchstart", "touchmove", "touchend"], [1, "p-colorpicker-hue-handle"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 6, 0);
        ɵɵtemplate(2, ColorPicker_input_2_Template, 2, 11, "input", 7)(3, ColorPicker_div_3_Template, 11, 18, "div", 8);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction2(8, _c6, !ctx.inline, ctx.colorDragging || ctx.hueDragging));
        ɵɵattribute("data-pc-name", "colorpicker")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.inline);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, AutoFocus],
    styles: ["@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker",
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-colorpicker p-component': true, 'p-colorpicker-overlay': !inline, 'p-colorpicker-dragging': colorDragging || hueDragging }"
            [attr.data-pc-name]="'colorpicker'"
            [attr.data-pc-section]="'root'"
        >
            <input
                *ngIf="!inline"
                #input
                type="text"
                class="p-colorpicker-preview p-inputtext"
                [ngClass]="{ 'p-disabled': disabled }"
                readonly="readonly"
                [attr.tabindex]="tabindex"
                [disabled]="disabled"
                (click)="onInputClick()"
                (keydown)="onInputKeydown($event)"
                (focus)="onInputFocus()"
                [attr.id]="inputId"
                [style.backgroundColor]="inputBgColor"
                [attr.data-pc-section]="'input'"
                [attr.aria-label]="ariaLabel"
                pAutoFocus
                [autofocus]="autofocus"
            />
            <div
                *ngIf="inline || overlayVisible"
                [ngClass]="{ 'p-colorpicker-panel': true, 'p-colorpicker-overlay-panel': !inline, 'p-disabled': disabled }"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <div class="p-colorpicker-content" [attr.data-pc-section]="'content'">
                    <div #colorSelector class="p-colorpicker-color-selector" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                        <div class="p-colorpicker-color" [attr.data-pc-section]="'color'">
                            <div #colorHandle class="p-colorpicker-color-handle" [attr.data-pc-section]="'colorHandle'"></div>
                        </div>
                    </div>
                    <div #hue class="p-colorpicker-hue" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                        <div #hueHandle class="p-colorpicker-hue-handle" [attr.data-pc-section]="'hueHandle'"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [COLORPICKER_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}\n"]
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
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
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
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static ɵfac = function ColorPickerModule_Factory(t) {
    return new (t || _ColorPickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ColorPickerModule,
    declarations: [ColorPicker],
    imports: [CommonModule, AutoFocusModule],
    exports: [ColorPicker]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [ColorPicker],
      declarations: [ColorPicker]
    }]
  }], null, null);
})();
export {
  COLORPICKER_VALUE_ACCESSOR,
  ColorPicker,
  ColorPickerModule
};
//# sourceMappingURL=primeng_colorpicker.js.map
