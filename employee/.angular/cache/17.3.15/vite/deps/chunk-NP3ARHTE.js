import {
  CheckIcon
} from "./chunk-NHEL2V7M.js";
import {
  TimesIcon
} from "./chunk-ASGWCLQS.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-MR2QYEAI.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-3WZWM3WO.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
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
  ContentChildren,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
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
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PTQGSKSK.js";

// node_modules/primeng/fesm2022/primeng-tristatecheckbox.mjs
var _c0 = (a0, a1, a2) => ({
  "p-checkbox p-component": true,
  "p-checkbox-disabled": a0,
  "p-checkbox-focused": a1,
  "p-variant-filled": a2
});
var _c1 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c2 = (a0, a1, a2) => ({
  "p-checkbox-label-active": a0,
  "p-disabled": a1,
  "p-checkbox-label-focus": a2
});
function TriStateCheckbox_ng_container_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.checkboxTrueIcon);
    ɵɵattribute("data-pc-section", "checkIcon");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("data-pc-section", "checkIcon");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "checkIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template, 1, 2, "CheckIcon", 9)(2, TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.checkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_span_1_Template, 1, 2, "span", 7)(2, TriStateCheckbox_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checkboxTrueIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.checkboxTrueIcon);
  }
}
function TriStateCheckbox_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.checkboxFalseIcon);
    ɵɵattribute("data-pc-section", "uncheckIcon");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("data-pc-section", "uncheckIcon");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "uncheckIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 9)(2, TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.uncheckIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_span_1_Template, 1, 2, "span", 7)(2, TriStateCheckbox_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checkboxFalseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.checkboxFalseIcon);
  }
}
function TriStateCheckbox_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14);
    ɵɵlistener("click", function TriStateCheckbox_label_7_Template_label_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      const input_r2 = ɵɵreference(3);
      return ɵɵresetView(ctx_r2.onClick($event, input_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction3(3, _c2, ctx_r2.value != null, ctx_r2.disabled, ctx_r2.focused));
    ɵɵattribute("for", ctx_r2.inputId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label);
  }
}
var TRISTATECHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TriStateCheckbox),
  multi: true
};
var TriStateCheckbox = class _TriStateCheckbox {
  cd;
  config;
  constructor(cd, config) {
    this.cd = cd;
    this.config = config;
  }
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Name of the component.
   * @group Props
   */
  name;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
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
   * Label of the checkbox.
   * @group Props
   */
  label;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Specifies the icon for checkbox true value.
   * @group Props
   */
  checkboxTrueIcon;
  /**
   * Specifies the icon for checkbox false value.
   * @group Props
   */
  checkboxFalseIcon;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {TriStateCheckboxChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  templates;
  checkIconTemplate;
  uncheckIconTemplate;
  focused;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  onClick(event, input) {
    if (!this.disabled && !this.readonly) {
      this.toggle(event);
      this.focused = true;
      input.focus();
    }
  }
  onKeyDown(event) {
    if (event.key === "Enter") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  toggle(event) {
    if (this.value == null || this.value == void 0) this.value = true;
    else if (this.value == true) this.value = false;
    else if (this.value == false) this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "checkicon":
          this.checkIconTemplate = item.template;
          break;
        case "uncheckicon":
          this.uncheckIconTemplate = item.template;
          break;
      }
    });
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
    this.cd.markForCheck();
  }
  static ɵfac = function TriStateCheckbox_Factory(t) {
    return new (t || _TriStateCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TriStateCheckbox,
    selectors: [["p-triStateCheckbox"]],
    contentQueries: function TriStateCheckbox_ContentQueries(rf, ctx, dirIndex) {
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
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      name: "name",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      variant: "variant",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      style: "style",
      styleClass: "styleClass",
      label: "label",
      readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
      checkboxTrueIcon: "checkboxTrueIcon",
      checkboxFalseIcon: "checkboxFalseIcon",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([TRISTATECHECKBOX_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    decls: 8,
    vars: 28,
    consts: [["input", ""], [3, "click", "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "inputmode", "none", "pAutoFocus", "", 3, "keydown", "focus", "blur", "name", "readonly", "disabled", "autofocus"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], [4, "ngIf"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [1, "p-checkbox-label", 3, "click", "ngClass"]],
    template: function TriStateCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("click", function TriStateCheckbox_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          const input_r2 = ɵɵreference(3);
          return ɵɵresetView(ctx.onClick($event, input_r2));
        });
        ɵɵelementStart(1, "div", 2)(2, "input", 3, 0);
        ɵɵlistener("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("focus", function TriStateCheckbox_Template_input_focus_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function TriStateCheckbox_Template_input_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd()();
        ɵɵelementStart(4, "div", 4);
        ɵɵtemplate(5, TriStateCheckbox_ng_container_5_Template, 3, 2, "ng-container", 5)(6, TriStateCheckbox_ng_container_6_Template, 3, 2, "ng-container", 5);
        ɵɵelementEnd()();
        ɵɵtemplate(7, TriStateCheckbox_label_7_Template, 2, 7, "label", 6);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction3(20, _c0, ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        ɵɵattribute("data-pc-name", "tristatecheckbox")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled)("autofocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(24, _c1, ctx.value != null, ctx.disabled, ctx.focused));
        ɵɵattribute("aria-checked", ctx.value === true);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.value === true);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.value === false);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.label);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, CheckIcon, TimesIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriStateCheckbox, [{
    type: Component,
    args: [{
      selector: "p-triStateCheckbox",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused, 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' }"
            [class]="styleClass"
            (click)="onClick($event, input)"
            [attr.data-pc-name]="'tristatecheckbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [name]="name"
                    [attr.tabindex]="tabindex"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    (keydown)="onKeyDown($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    inputmode="none"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="value === true" [ngClass]="{ 'p-highlight': value != null, 'p-disabled': disabled, 'p-focus': focused }">
                <ng-container *ngIf="value === true">
                    <span *ngIf="checkboxTrueIcon" [ngClass]="checkboxTrueIcon" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'"></span>
                    <ng-container *ngIf="!checkboxTrueIcon">
                        <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.data-pc-section]="'checkIcon'" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="value === false">
                    <span *ngIf="checkboxFalseIcon" [ngClass]="checkboxFalseIcon" class="p-checkbox-icon" [attr.data-pc-section]="'uncheckIcon'"></span>
                    <ng-container *ngIf="!checkboxFalseIcon">
                        <TimesIcon [styleClass]="'p-checkbox-icon'" *ngIf="!uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'" />
                        <span class="p-checkbox-icon" *ngIf="uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'">
                            <ng-template *ngTemplateOutlet="uncheckIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event, input)" [ngClass]="{ 'p-checkbox-label-active': value != null, 'p-disabled': disabled, 'p-checkbox-label-focus': focused }" *ngIf="label" [attr.for]="inputId">{{ label }}</label>
    `,
      providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkboxTrueIcon: [{
      type: Input
    }],
    checkboxFalseIcon: [{
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
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TriStateCheckboxModule = class _TriStateCheckboxModule {
  static ɵfac = function TriStateCheckboxModule_Factory(t) {
    return new (t || _TriStateCheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TriStateCheckboxModule,
    declarations: [TriStateCheckbox],
    imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon],
    exports: [TriStateCheckbox, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriStateCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon],
      exports: [TriStateCheckbox, SharedModule],
      declarations: [TriStateCheckbox]
    }]
  }], null, null);
})();

export {
  TRISTATECHECKBOX_VALUE_ACCESSOR,
  TriStateCheckbox,
  TriStateCheckboxModule
};
//# sourceMappingURL=chunk-NP3ARHTE.js.map
