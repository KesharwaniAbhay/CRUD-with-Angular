import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import "./chunk-FPSJESYG.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-metergroup.mjs
var _c0 = (a0, a1) => ({
  $implicit: a0,
  icon: a1
});
var _c1 = () => ({
  "p-metergroup-label-icon": true
});
var _c2 = (a0) => ({
  color: a0
});
var _c3 = (a0) => ({
  backgroundColor: a0
});
function MeterGroupLabel_li_1_ng_container_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 8);
  }
  if (rf & 2) {
    const labelItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵclassMap(labelItem_r1.icon);
    ɵɵproperty("ngClass", ɵɵpureFunction0(4, _c1))("ngStyle", ɵɵpureFunction1(5, _c2, labelItem_r1.color));
  }
}
function MeterGroupLabel_li_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
  if (rf & 2) {
    const labelItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngStyle", ɵɵpureFunction1(1, _c3, labelItem_r1.color));
  }
}
function MeterGroupLabel_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MeterGroupLabel_li_1_ng_container_1_i_1_Template, 1, 7, "i", 6)(2, MeterGroupLabel_li_1_ng_container_1_span_2_Template, 1, 3, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const labelItem_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", labelItem_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !labelItem_r1.icon);
  }
}
function MeterGroupLabel_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroupLabel_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 2);
    ɵɵtemplate(1, MeterGroupLabel_li_1_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MeterGroupLabel_li_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const labelItem_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c0, labelItem_r1, labelItem_r1.icon));
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", labelItem_r1.label, " (", ctx_r1.parentInstance == null ? null : ctx_r1.parentInstance.percentValue(labelItem_r1.value), ")");
  }
}
var _c4 = ["container"];
var _c5 = (a0, a1, a2) => ({
  $implicit: a0,
  totalPercent: a1,
  percentages: a2
});
var _c6 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  index: a1,
  orientation: a2,
  class: "p-metergroup-meter",
  size: a3,
  totalPercent: a4
});
function MeterGroup_Conditional_2_p_meterGroupLabel_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-meterGroupLabel", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r0.value)("labelPosition", ctx_r0.labelPosition)("labelOrientation", ctx_r0.labelOrientation)("min", ctx_r0.min)("max", ctx_r0.max)("iconTemplate", ctx_r0.iconTemplate);
  }
}
function MeterGroup_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroup_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MeterGroup_Conditional_2_p_meterGroupLabel_0_Template, 1, 6, "p-meterGroupLabel", 5)(1, MeterGroup_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r0.labelTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.labelTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(3, _c5, ctx_r0.value, ctx_r0.totalPercent(), ctx_r0.percentages()));
  }
}
function MeterGroup_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroup_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroup_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const meterItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.meterStyle(meterItem_r2));
  }
}
function MeterGroup_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MeterGroup_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 2)(2, MeterGroup_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const meterItem_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.meterTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(3, _c6, meterItem_r2, index_r3, ctx_r0.orientation, ctx_r0.percentValue(meterItem_r2.value), ctx_r0.totalPercent()));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.meterTemplate && meterItem_r2.value > 0);
  }
}
function MeterGroup_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroup_Conditional_7_p_meterGroupLabel_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-meterGroupLabel", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r0.value)("labelPosition", ctx_r0.labelPosition)("labelOrientation", ctx_r0.labelOrientation)("min", ctx_r0.min)("max", ctx_r0.max)("iconTemplate", ctx_r0.iconTemplate);
  }
}
function MeterGroup_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MeterGroup_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MeterGroup_Conditional_7_p_meterGroupLabel_0_Template, 1, 6, "p-meterGroupLabel", 5)(1, MeterGroup_Conditional_7_ng_container_1_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r0.labelTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.labelTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(3, _c5, ctx_r0.value, ctx_r0.totalPercent(), ctx_r0.percentages()));
  }
}
var MeterGroupLabel = class _MeterGroupLabel {
  value = null;
  labelPosition = "end";
  labelOrientation = "horizontal";
  min;
  max;
  iconTemplate;
  templates;
  get labelClass() {
    return {
      "p-metergroup-labels p-component": true,
      "p-metergroup-labels-vertical": this.labelOrientation === "vertical",
      "p-metergroup-labels-horizontal": this.labelOrientation === "horizontal"
    };
  }
  parentInstance = inject(forwardRef(() => MeterGroup));
  static ɵfac = function MeterGroupLabel_Factory(t) {
    return new (t || _MeterGroupLabel)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MeterGroupLabel,
    selectors: [["p-meterGroupLabel"]],
    contentQueries: function MeterGroupLabel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      value: "value",
      labelPosition: "labelPosition",
      labelOrientation: "labelOrientation",
      min: "min",
      max: "max",
      iconTemplate: "iconTemplate"
    },
    decls: 2,
    vars: 3,
    consts: [[3, "ngClass"], ["class", "p-metergroup-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-metergroup-label"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-metergroup-label-text"], [3, "class", "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-metergroup-label-marker", 3, "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-metergroup-label-marker", 3, "ngStyle"]],
    template: function MeterGroupLabel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ol", 0);
        ɵɵtemplate(1, MeterGroupLabel_li_1_Template, 5, 8, "li", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.labelClass);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.value)("ngForTrackBy", ctx.parentInstance.trackByFn);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeterGroupLabel, [{
    type: Component,
    args: [{
      selector: "p-meterGroupLabel",
      template: `
        <ol [ngClass]="labelClass">
            <li *ngFor="let labelItem of value; let index = index; trackBy: parentInstance.trackByFn" class="p-metergroup-label">
                <ng-container *ngIf="!iconTemplate">
                    <i *ngIf="labelItem.icon" [class]="labelItem.icon" [ngClass]="{ 'p-metergroup-label-icon': true }" [ngStyle]="{ color: labelItem.color }"></i>
                    <span *ngIf="!labelItem.icon" class="p-metergroup-label-marker" [ngStyle]="{ backgroundColor: labelItem.color }"></span>
                </ng-container>
                <ng-container *ngTemplateOutlet="iconTemplate; context: { $implicit: labelItem, icon: labelItem.icon }"></ng-container>
                <span class="p-metergroup-label-text">{{ labelItem.label }} ({{ parentInstance?.percentValue(labelItem.value) }})</span>
            </li>
        </ol>
    `
    }]
  }], null, {
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    labelOrientation: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    iconTemplate: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MeterGroup = class _MeterGroup {
  /**
   * Current value of the metergroup.
   * @group Props
   */
  value;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Specifies the label position of the component, valid values are 'start' and 'end'.
   * @group Props
   */
  labelPosition = "end";
  /**
   * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
   * @group Props
   */
  labelOrientation = "horizontal";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  templates;
  get vertical() {
    return this.orientation === "vertical";
  }
  get containerClass() {
    return {
      "p-metergroup p-component": true,
      "p-metergroup-horizontal": this.orientation === "horizontal",
      "p-metergroup-vertical": this.orientation === "vertical"
    };
  }
  labelTemplate;
  meterTemplate;
  endTemplate;
  startTemplate;
  iconTemplate;
  container;
  ngAfterViewInit() {
    const _container = this.container.nativeElement;
    const height = DomHandler.getOuterHeight(_container);
    this.vertical && (_container.style.height = height + "px");
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "label":
          this.labelTemplate = item.template;
          break;
        case "meter":
          this.meterTemplate = item.template;
          break;
        case "icon":
          this.iconTemplate = item.template;
          break;
        case "start":
          this.startTemplate = item.template;
          break;
        case "end":
          this.endTemplate = item.template;
          break;
        default:
          break;
      }
    });
  }
  percent(meter = 0) {
    const percentOfItem = (meter - this.min) / (this.max - this.min) * 100;
    return Math.round(Math.max(0, Math.min(100, percentOfItem)));
  }
  percentValue(meter) {
    return this.percent(meter) + "%";
  }
  meterStyle(val) {
    return {
      backgroundColor: val.color,
      width: this.orientation === "horizontal" && this.percentValue(val.value),
      height: this.orientation === "vertical" && this.percentValue(val.value)
    };
  }
  totalPercent() {
    return this.percent(this.value.reduce((total, val) => total + val.value, 0));
  }
  percentages() {
    let sum = 0;
    const sumsArray = [];
    this.value.forEach((item) => {
      sum += item.value;
      sumsArray.push(sum);
    });
    return sumsArray;
  }
  trackByFn(index) {
    return index;
  }
  static ɵfac = function MeterGroup_Factory(t) {
    return new (t || _MeterGroup)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MeterGroup,
    selectors: [["p-meterGroup"]],
    contentQueries: function MeterGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MeterGroup_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      value: "value",
      min: "min",
      max: "max",
      orientation: "orientation",
      labelPosition: "labelPosition",
      labelOrientation: "labelOrientation",
      style: "style",
      styleClass: "styleClass"
    },
    decls: 8,
    vars: 23,
    consts: [["container", ""], ["role", "meter", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-metergroup-meters"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value", "labelPosition", "labelOrientation", "min", "max", "iconTemplate", 4, "ngIf"], [3, "value", "labelPosition", "labelOrientation", "min", "max", "iconTemplate"], [4, "ngIf"], [1, "p-metergroup-meter", 3, "ngStyle"]],
    template: function MeterGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, MeterGroup_Conditional_2_Template, 2, 7)(3, MeterGroup_ng_container_3_Template, 1, 0, "ng-container", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵtemplate(5, MeterGroup_ng_container_5_Template, 3, 9, "ng-container", 4);
        ɵɵelementEnd();
        ɵɵtemplate(6, MeterGroup_ng_container_6_Template, 1, 0, "ng-container", 2)(7, MeterGroup_Conditional_7_Template, 2, 7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.totalPercent());
        ɵɵadvance(2);
        ɵɵconditional(2, ctx.labelPosition === "start" ? 2 : -1);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.startTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(15, _c5, ctx.value, ctx.totalPercent(), ctx.percentages()));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.value)("ngForTrackBy", ctx.trackByFn);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.endTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(19, _c5, ctx.value, ctx.totalPercent(), ctx.percentages()));
        ɵɵadvance();
        ɵɵconditional(7, ctx.labelPosition === "end" ? 7 : -1);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, MeterGroupLabel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeterGroup, [{
    type: Component,
    args: [{
      selector: "p-meterGroup",
      template: `
        <div #container [ngClass]="containerClass" role="meter" [attr.aria-valuemin]="min" [attr.aria-valuemax]="max" [attr.aria-valuenow]="totalPercent()" [ngStyle]="style" [class]="styleClass">
            @if (labelPosition === 'start') {
                <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
                <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
            <ng-container *ngTemplateOutlet="startTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            <div class="p-metergroup-meters">
                <ng-container *ngFor="let meterItem of value; let index = index; trackBy: trackByFn">
                    <ng-container *ngTemplateOutlet="meterTemplate; context: { $implicit: meterItem, index: index, orientation: this.orientation, class: 'p-metergroup-meter', size: percentValue(meterItem.value), totalPercent: totalPercent() }">
                    </ng-container>
                    <ng-container *ngIf="!meterTemplate && meterItem.value > 0">
                        <span class="p-metergroup-meter" [ngStyle]="meterStyle(meterItem)"></span>
                    </ng-container>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="endTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            @if (labelPosition === 'end') {
                <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
                <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    labelOrientation: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ElementRef
      }]
    }]
  });
})();
var MeterGroupModule = class _MeterGroupModule {
  static ɵfac = function MeterGroupModule_Factory(t) {
    return new (t || _MeterGroupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MeterGroupModule,
    declarations: [MeterGroup, MeterGroupLabel],
    imports: [CommonModule, SharedModule],
    exports: [MeterGroup, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeterGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [MeterGroup, SharedModule],
      declarations: [MeterGroup, MeterGroupLabel]
    }]
  }], null, null);
})();
export {
  MeterGroup,
  MeterGroupLabel,
  MeterGroupModule
};
//# sourceMappingURL=primeng_metergroup.js.map
