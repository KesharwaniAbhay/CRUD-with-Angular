import {
  InputText,
  InputTextModule
} from "./chunk-LSHU2TNM.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-MR2QYEAI.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-3WZWM3WO.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import "./chunk-FPSJESYG.js";
import "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-inputotp.mjs
var _c0 = (a0, a1, a2) => ({
  $implicit: a0,
  events: a1,
  index: a2
});
function InputOtp_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 2);
    ɵɵlistener("input", function InputOtp_ng_container_0_ng_container_1_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInput($event, i_r2 - 1));
    })("focus", function InputOtp_ng_container_0_ng_container_1_Template_input_focus_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function InputOtp_ng_container_0_ng_container_1_Template_input_blur_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("paste", function InputOtp_ng_container_0_ng_container_1_Template_input_paste_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onPaste($event));
    })("keydown", function InputOtp_ng_container_0_ng_container_1_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("value", ctx_r2.getModelValue(i_r2))("maxLength", 1)("type", ctx_r2.inputType)("inputmode", ctx_r2.inputMode)("variant", ctx_r2.variant)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled)("invalid", ctx_r2.invalid)("tabindex", ctx_r2.tabindex)("unstyled", ctx_r2.unstyled)("autofocus", ctx_r2.getAutofocus(i_r2));
  }
}
function InputOtp_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function InputOtp_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputOtp_ng_container_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.inputTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c0, ctx_r2.getToken(i_r2 - 1), ctx_r2.getTemplateEvents(i_r2 - 1), i_r2));
  }
}
function InputOtp_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputOtp_ng_container_0_ng_container_1_Template, 2, 11, "ng-container", 1)(2, InputOtp_ng_container_0_ng_container_2_Template, 2, 6, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.inputTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.inputTemplate);
  }
}
var INPUT_OTP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputOtp),
  multi: true
};
var InputOtp = class _InputOtp {
  cd;
  /**
   * When present, it specifies that the component should have invalid state style.
   * @group Props
   */
  invalid = false;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly = false;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = null;
  /**
   * Number of characters to initiate.
   * @group Props
   */
  length = 4;
  /**
   * Mask pattern.
   * @group Props
   */
  mask = false;
  /**
   * When present, it specifies that an input field is integer-only.
   * @group Props
   */
  integerOnly = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  templates;
  inputTemplate;
  tokens = [];
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  value;
  get inputMode() {
    return this.integerOnly ? "numeric" : "text";
  }
  get inputType() {
    return this.mask ? "password" : "text";
  }
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        default:
          this.inputTemplate = item.template;
          break;
      }
    });
  }
  getToken(index) {
    return this.tokens[index];
  }
  getTemplateEvents(index) {
    return {
      input: (event) => this.onInput(event, index),
      keydown: (event) => this.onKeyDown(event),
      focus: (event) => this.onFocus.emit(event),
      blur: (event) => this.onBlur.emit(event),
      paste: (event) => this.onPaste(event)
    };
  }
  onInput(event, index) {
    this.tokens[index] = event.target.value;
    this.updateModel(event);
    if (event.inputType === "deleteContentBackward") {
      this.moveToPrev(event);
    } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward") {
      this.moveToNext(event);
    }
  }
  updateModel(event) {
    const newValue = this.tokens.join("");
    this.onModelChange(newValue);
    this.onChange.emit({
      originalEvent: event,
      value: newValue
    });
  }
  writeValue(value) {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        this.value = value.slice(0, this.length);
      } else {
        this.value = value.toString().split("").slice(0, this.length);
      }
    } else {
      this.value = value;
    }
    this.updateTokens();
    this.cd.markForCheck();
  }
  updateTokens() {
    if (this.value !== null && this.value !== void 0) {
      if (Array.isArray(this.value)) {
        this.tokens = [...this.value];
      } else {
        this.tokens = this.value.toString().split("");
      }
    } else {
      this.tokens = [];
    }
  }
  getModelValue(i) {
    return this.tokens[i - 1] || "";
  }
  getAutofocus(i) {
    if (i === 1) {
      return this.autofocus;
    }
    return false;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  moveToPrev(event) {
    let prevInput = this.findPrevInput(event.target);
    if (prevInput) {
      prevInput.focus();
      prevInput.select();
    }
  }
  moveToNext(event) {
    let nextInput = this.findNextInput(event.target);
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  }
  findNextInput(element) {
    let nextElement = element.nextElementSibling;
    if (!nextElement) return;
    return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
  }
  findPrevInput(element) {
    let prevElement = element.previousElementSibling;
    if (!prevElement) return;
    return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
  }
  onInputFocus(event) {
    event.target.select();
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.onBlur.emit(event);
  }
  onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    switch (event.key) {
      case "ArrowLeft":
        this.moveToPrev(event);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Backspace":
        if (event.target.value.length === 0) {
          this.moveToPrev(event);
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        this.moveToNext(event);
        event.preventDefault();
        break;
      case "Tab":
        break;
      default:
        if (this.integerOnly && !((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
          event.preventDefault();
        }
        break;
    }
  }
  onPaste(event) {
    if (!this.disabled && !this.readonly) {
      let paste = event.clipboardData.getData("text");
      if (paste.length) {
        let pastedCode = paste.substring(0, this.length);
        if (!this.integerOnly || !isNaN(pastedCode)) {
          this.tokens = pastedCode.split("");
          this.updateModel(event);
        }
      }
      event.preventDefault();
    }
  }
  getRange(n) {
    return Array.from({
      length: n
    }, (_, index) => index + 1);
  }
  trackByFn(index) {
    return index;
  }
  static ɵfac = function InputOtp_Factory(t) {
    return new (t || _InputOtp)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputOtp,
    selectors: [["p-inputOtp"]],
    contentQueries: function InputOtp_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-inputotp", "p-component"],
    inputs: {
      invalid: "invalid",
      disabled: "disabled",
      readonly: "readonly",
      variant: "variant",
      tabindex: "tabindex",
      length: "length",
      mask: "mask",
      integerOnly: "integerOnly",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([INPUT_OTP_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    decls: 1,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "text", "pInputText", "", "pAutoFocus", "", 1, "p-inputotp-input", 3, "input", "focus", "blur", "paste", "keydown", "value", "maxLength", "type", "inputmode", "variant", "readonly", "disabled", "invalid", "tabindex", "unstyled", "autofocus"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function InputOtp_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, InputOtp_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.getRange(ctx.length))("ngForTrackBy", ctx.trackByFn);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet, InputText, AutoFocus],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtp, [{
    type: Component,
    args: [{
      selector: "p-inputOtp",
      template: `
        <ng-container *ngFor="let i of getRange(length); trackBy: trackByFn">
            <ng-container *ngIf="!inputTemplate">
                <input
                    type="text"
                    pInputText
                    [value]="getModelValue(i)"
                    [maxLength]="1"
                    [type]="inputType"
                    class="p-inputotp-input"
                    [inputmode]="inputMode"
                    [variant]="variant"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    [invalid]="invalid"
                    [tabindex]="tabindex"
                    [unstyled]="unstyled"
                    (input)="onInput($event, i - 1)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (paste)="onPaste($event)"
                    (keydown)="onKeyDown($event)"
                    pAutoFocus
                    [autofocus]="getAutofocus(i)"
                />
            </ng-container>
            <ng-container *ngIf="inputTemplate">
                <ng-container *ngTemplateOutlet="inputTemplate; context: { $implicit: getToken(i - 1), events: getTemplateEvents(i - 1), index: i }"> </ng-container>
            </ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-inputotp p-component"
      },
      providers: [INPUT_OTP_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    invalid: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    integerOnly: [{
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
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var InputOtpModule = class _InputOtpModule {
  static ɵfac = function InputOtpModule_Factory(t) {
    return new (t || _InputOtpModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputOtpModule,
    declarations: [InputOtp],
    imports: [CommonModule, SharedModule, InputTextModule, AutoFocusModule],
    exports: [InputOtp, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, InputTextModule, AutoFocusModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtpModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, InputTextModule, AutoFocusModule],
      exports: [InputOtp, SharedModule],
      declarations: [InputOtp]
    }]
  }], null, null);
})();
export {
  INPUT_OTP_VALUE_ACCESSOR,
  InputOtp,
  InputOtpModule
};
//# sourceMappingURL=primeng_inputotp.js.map
