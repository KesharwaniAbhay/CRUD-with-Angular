import {
  MinusIcon
} from "./chunk-N3AQHCOG.js";
import {
  PlusIcon
} from "./chunk-3R4CCBRT.js";
import {
  Ripple,
  RippleModule
} from "./chunk-2OCB5YNS.js";
import "./chunk-KJHM36LJ.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import {
  UniqueComponentId
} from "./chunk-FPSJESYG.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-E3RKQ3P6.js";
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
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-fieldset.mjs
var _c0 = ["*", [["p-header"]]];
var _c1 = ["*", "p-header"];
var _c2 = (a0, a1) => ({
  "p-fieldset p-component": true,
  "p-fieldset-toggleable": a0,
  "p-fieldset-expanded": a1
});
var _c3 = (a0) => ({
  transitionParams: a0,
  height: "0"
});
var _c4 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c5 = (a0) => ({
  transitionParams: a0,
  height: "*"
});
var _c6 = (a0) => ({
  value: "visible",
  params: a0
});
function Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-fieldset-toggler");
    ɵɵattribute("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "togglericon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template, 1, 2, "PlusIcon", 9)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.expandIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-fieldset-toggler");
    ɵɵattribute("aria-hidden", true)("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "togglericon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template, 1, 3, "MinusIcon", 9)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.collapseIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 7);
    ɵɵlistener("click", function Fieldset_ng_container_2_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_a_keydown_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵtemplate(2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 8)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 8)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const legendContent_r4 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵattribute("id", ctx_r2.id + "_header")("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed)("aria-label", ctx_r2.buttonAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", legendContent_r4);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵprojection(2, 1);
    ɵɵtemplate(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "legendtitle");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.legend);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var Fieldset = class _Fieldset {
  el;
  /**
   * Header text of the fieldset.
   * @group Props
   */
  legend;
  /**
   * When specified, content can toggled by clicking the legend.
   * @group Props
   * @defaultValue false
   */
  toggleable;
  /**
   * Defines the default visibility state of the content.
   * * @group Props
   */
  collapsed = false;
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
   * Transition options of the panel animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emits when the collapsed state changes.
   * @param {boolean} value - New value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  templates;
  get id() {
    return UniqueComponentId();
  }
  get buttonAriaLabel() {
    return this.legend;
  }
  animating;
  headerTemplate;
  contentTemplate;
  collapseIconTemplate;
  expandIconTemplate;
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "expandicon":
          this.expandIconTemplate = item.template;
          break;
        case "collapseicon":
          this.collapseIconTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    event.preventDefault();
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onToggleDone() {
    this.animating = false;
  }
  static ɵfac = function Fieldset_Factory(t) {
    return new (t || _Fieldset)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Fieldset,
    selectors: [["p-fieldset"]],
    contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
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
      legend: "legend",
      toggleable: [InputFlags.HasDecoratorInputTransform, "toggleable", "toggleable", booleanAttribute],
      collapsed: [InputFlags.HasDecoratorInputTransform, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c1,
    decls: 9,
    vars: 28,
    consts: [["legendContent", ""], [3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["role", "region", 1, "p-toggleable-content"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["pRipple", "", "tabindex", "0", "role", "button", 3, "click", "keydown"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], ["class", "p-fieldset-toggler", 4, "ngIf"], [3, "styleClass"], [1, "p-fieldset-toggler"], [1, "p-fieldset-legend-text"]],
    template: function Fieldset_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "fieldset", 1)(1, "legend", 2);
        ɵɵtemplate(2, Fieldset_ng_container_2_Template, 5, 7, "ng-container", 3)(3, Fieldset_ng_template_3_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 4);
        ɵɵlistener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onToggleDone());
        });
        ɵɵelementStart(6, "div", 5);
        ɵɵprojection(7);
        ɵɵtemplate(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        const legendContent_r4 = ɵɵreference(4);
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction2(17, _c2, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id)("data-pc-name", "fieldset")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "legend");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.toggleable)("ngIfElse", legendContent_r4);
        ɵɵadvance(3);
        ɵɵproperty("@fieldsetContent", ctx.collapsed ? ɵɵpureFunction1(22, _c4, ɵɵpureFunction1(20, _c3, ctx.transitionOptions)) : ɵɵpureFunction1(26, _c6, ɵɵpureFunction1(24, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵɵattribute("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("data-pc-section", "toggleablecontent");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, MinusIcon, PlusIcon],
    styles: ["@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fieldset, [{
    type: Component,
    args: [{
      selector: "p-fieldset",
      template: `
        <fieldset
            [attr.id]="id"
            [ngClass]="{ 'p-fieldset p-component': true, 'p-fieldset-toggleable': toggleable, 'p-fieldset-expanded': !collapsed && toggleable }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'fieldset'"
            [attr.data-pc-section]="'root'"
        >
            <legend class="p-fieldset-legend" [attr.data-pc-section]="'legend'">
                <ng-container *ngIf="toggleable; else legendContent">
                    <a [attr.id]="id + '_header'" pRipple tabindex="0" role="button" [attr.aria-controls]="id + '_content'" [attr.aria-expanded]="!collapsed" [attr.aria-label]="buttonAriaLabel" (click)="toggle($event)" (keydown)="onKeyDown($event)">
                        <ng-container *ngIf="collapsed">
                            <PlusIcon *ngIf="!expandIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="expandIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <MinusIcon *ngIf="!collapseIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.aria-hidden]="true" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="collapseIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </a>
                </ng-container>
                <ng-template #legendContent>
                    <span class="p-fieldset-legend-text" [attr.data-pc-section]="'legendtitle'">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                class="p-toggleable-content"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.data-pc-section]="'toggleablecontent'"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div class="p-fieldset-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
      animations: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    legend: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FieldsetModule = class _FieldsetModule {
  static ɵfac = function FieldsetModule_Factory(t) {
    return new (t || _FieldsetModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FieldsetModule,
    declarations: [Fieldset],
    imports: [CommonModule, RippleModule, MinusIcon, PlusIcon],
    exports: [Fieldset, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, MinusIcon, PlusIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, MinusIcon, PlusIcon],
      exports: [Fieldset, SharedModule],
      declarations: [Fieldset]
    }]
  }], null, null);
})();
export {
  Fieldset,
  FieldsetModule
};
//# sourceMappingURL=primeng_fieldset.js.map
