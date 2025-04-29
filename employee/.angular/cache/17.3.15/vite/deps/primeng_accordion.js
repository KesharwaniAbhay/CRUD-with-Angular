import {
  ChevronRightIcon
} from "./chunk-KJN6I6DN.js";
import {
  ChevronDownIcon
} from "./chunk-72V3NIFQ.js";
import "./chunk-KJHM36LJ.js";
import {
  Header,
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
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
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
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
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
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c0 = ["*", [["p-header"]]];
var _c1 = ["*", "p-header"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = (a0) => ({
  transitionParams: a0
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  value: "hidden",
  params: a0
});
function AccordionTab_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.accordion.collapseIcon);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 9)(2, AccordionTab_ng_container_3_ng_container_1_ChevronDownIcon_2_Template, 1, 2, "ChevronDownIcon", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.accordion.collapseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.accordion.collapseIcon);
  }
}
function AccordionTab_ng_container_3_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.accordion.expandIcon);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_2_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.iconClass);
    ɵɵattribute("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_ng_container_3_ng_container_2_span_1_Template, 1, 4, "span", 9)(2, AccordionTab_ng_container_3_ng_container_2_ChevronRightIcon_2_Template, 1, 2, "ChevronRightIcon", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.accordion.expandIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.accordion.expandIcon);
  }
}
function AccordionTab_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 3)(2, AccordionTab_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.selected);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.selected);
  }
}
function AccordionTab_4_ng_template_0_Template(rf, ctx) {
}
function AccordionTab_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionTab_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionTab_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
  }
}
function AccordionTab_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionTab_ng_content_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "hasHeaderFacet"]);
  }
}
function AccordionTab_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionTab_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AccordionTab_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
var _c6 = ["*"];
var AccordionTab = class _AccordionTab {
  el;
  changeDetector;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Used to define the header of the tab.
   * @group Props
   */
  header;
  /**
   * Inline style of the tab header.
   * @group Props
   */
  headerStyle;
  /**
   * Inline style of the tab.
   * @group Props
   */
  tabStyle;
  /**
   * Inline style of the tab content.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the tab.
   * @group Props
   */
  tabStyleClass;
  /**
   * Style class of the tab header.
   * @group Props
   */
  headerStyleClass;
  /**
   * Style class of the tab content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Whether the tab is disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether a lazy loaded panel should avoid getting loaded again on reselection.
   * @group Props
   */
  cache = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "start";
  /**
   * The value that returns the selection.
   * @group Props
   */
  get selected() {
    return this._selected;
  }
  set selected(val) {
    this._selected = val;
    if (!this.loaded) {
      if (this._selected && this.cache) {
        this.loaded = true;
      }
      this.changeDetector.detectChanges();
    }
  }
  /**
   * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
   * @group Props
   */
  headerAriaLevel = 2;
  /**
   * Event triggered by changing the choice.
   * @param {boolean} value - Boolean value indicates that the option is changed.
   * @group Emits
   */
  selectedChange = new EventEmitter();
  headerFacet;
  templates;
  _selected = false;
  get iconClass() {
    if (this.iconPos === "end") {
      return "p-accordion-toggle-icon-end";
    } else {
      return "p-accordion-toggle-icon";
    }
  }
  contentTemplate;
  headerTemplate;
  iconTemplate;
  loaded = false;
  accordion;
  constructor(accordion, el, changeDetector) {
    this.el = el;
    this.changeDetector = changeDetector;
    this.accordion = accordion;
    this.id = UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "icon":
          this.iconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.disabled) {
      return false;
    }
    let index = this.findTabIndex();
    if (this.selected) {
      this.selected = false;
      this.accordion.onClose.emit({
        originalEvent: event,
        index
      });
    } else {
      if (!this.accordion.multiple) {
        for (var i = 0; i < this.accordion.tabs.length; i++) {
          if (this.accordion.tabs[i].selected) {
            this.accordion.tabs[i].selected = false;
            this.accordion.tabs[i].selectedChange.emit(false);
            this.accordion.tabs[i].changeDetector.markForCheck();
          }
        }
      }
      this.selected = true;
      this.loaded = true;
      this.accordion.onOpen.emit({
        originalEvent: event,
        index
      });
    }
    this.selectedChange.emit(this.selected);
    this.accordion.updateActiveIndex();
    this.changeDetector.markForCheck();
    event?.preventDefault();
  }
  findTabIndex() {
    let index = -1;
    for (var i = 0; i < this.accordion.tabs.length; i++) {
      if (this.accordion.tabs[i] == this) {
        index = i;
        break;
      }
    }
    return index;
  }
  get hasHeaderFacet() {
    return this.headerFacet && this.headerFacet.length > 0;
  }
  onKeydown(event) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  getTabHeaderActionId(tabId) {
    return `${tabId}_header_action`;
  }
  getTabContentId(tabId) {
    return `${tabId}_content`;
  }
  ngOnDestroy() {
    this.accordion.tabs.splice(this.findTabIndex(), 1);
  }
  static ɵfac = function AccordionTab_Factory(t) {
    return new (t || _AccordionTab)(ɵɵdirectiveInject(forwardRef(() => Accordion)), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AccordionTab,
    selectors: [["p-accordionTab"]],
    contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      header: "header",
      headerStyle: "headerStyle",
      tabStyle: "tabStyle",
      contentStyle: "contentStyle",
      tabStyleClass: "tabStyleClass",
      headerStyleClass: "headerStyleClass",
      contentStyleClass: "contentStyleClass",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      cache: [InputFlags.HasDecoratorInputTransform, "cache", "cache", booleanAttribute],
      transitionOptions: "transitionOptions",
      iconPos: "iconPos",
      selected: "selected",
      headerAriaLevel: [InputFlags.HasDecoratorInputTransform, "headerAriaLevel", "headerAriaLevel", numberAttribute]
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c1,
    decls: 12,
    vars: 44,
    consts: [[1, "p-accordion-tab", 3, "ngClass", "ngStyle"], ["role", "heading", 1, "p-accordion-header"], ["role", "button", 1, "p-accordion-header-link", 3, "click", "keydown", "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content", 3, "ngClass", "ngStyle"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-accordion-header-text"]],
    template: function AccordionTab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        ɵɵlistener("click", function AccordionTab_Template_a_click_2_listener($event) {
          return ctx.toggle($event);
        })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) {
          return ctx.onKeydown($event);
        });
        ɵɵtemplate(3, AccordionTab_ng_container_3_Template, 3, 2, "ng-container", 3)(4, AccordionTab_4_Template, 1, 0, null, 4)(5, AccordionTab_span_5_Template, 2, 1, "span", 5)(6, AccordionTab_ng_container_6_Template, 1, 0, "ng-container", 6)(7, AccordionTab_ng_content_7_Template, 1, 0, "ng-content", 3);
        ɵɵelementEnd()();
        ɵɵelementStart(8, "div", 7)(9, "div", 8);
        ɵɵprojection(10);
        ɵɵtemplate(11, AccordionTab_ng_container_11_Template, 2, 1, "ng-container", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassProp("p-accordion-tab-active", ctx.selected);
        ɵɵproperty("ngClass", ctx.tabStyleClass)("ngStyle", ctx.tabStyle);
        ɵɵattribute("data-pc-name", "accordiontab");
        ɵɵadvance();
        ɵɵclassProp("p-highlight", ctx.selected)("p-disabled", ctx.disabled);
        ɵɵattribute("aria-level", ctx.headerAriaLevel)("data-p-disabled", ctx.disabled)("data-pc-section", "header");
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.headerStyleClass)("ngStyle", ctx.headerStyle);
        ɵɵattribute("tabindex", ctx.disabled ? null : 0)("id", ctx.getTabHeaderActionId(ctx.id))("aria-controls", ctx.getTabContentId(ctx.id))("aria-expanded", ctx.selected)("aria-disabled", ctx.disabled)("data-pc-section", "headeraction");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.iconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(34, _c2, ctx.selected));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.hasHeaderFacet);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.hasHeaderFacet);
        ɵɵadvance();
        ɵɵproperty("@tabContent", ctx.selected ? ɵɵpureFunction1(38, _c4, ɵɵpureFunction1(36, _c3, ctx.transitionOptions)) : ɵɵpureFunction1(42, _c5, ɵɵpureFunction1(40, _c3, ctx.transitionOptions)));
        ɵɵattribute("id", ctx.getTabContentId(ctx.id))("aria-hidden", !ctx.selected)("aria-labelledby", ctx.getTabHeaderActionId(ctx.id))("data-pc-section", "toggleablecontent");
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.contentStyleClass)("ngStyle", ctx.contentStyle);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ChevronRightIcon, ChevronDownIcon],
    styles: ["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionTab, [{
    type: Component,
    args: [{
      selector: "p-accordionTab",
      template: `
        <div class="p-accordion-tab" [class.p-accordion-tab-active]="selected" [ngClass]="tabStyleClass" [ngStyle]="tabStyle" [attr.data-pc-name]="'accordiontab'">
            <div class="p-accordion-header" role="heading" [attr.aria-level]="headerAriaLevel" [class.p-highlight]="selected" [class.p-disabled]="disabled" [attr.data-p-disabled]="disabled" [attr.data-pc-section]="'header'">
                <a
                    [ngClass]="headerStyleClass"
                    [ngStyle]="headerStyle"
                    role="button"
                    class="p-accordion-header-link"
                    (click)="toggle($event)"
                    (keydown)="onKeydown($event)"
                    [attr.tabindex]="disabled ? null : 0"
                    [attr.id]="getTabHeaderActionId(id)"
                    [attr.aria-controls]="getTabContentId(id)"
                    [attr.aria-expanded]="selected"
                    [attr.aria-disabled]="disabled"
                    [attr.data-pc-section]="'headeraction'"
                >
                    <ng-container *ngIf="!iconTemplate">
                        <ng-container *ngIf="selected">
                            <span *ngIf="accordion.collapseIcon" [class]="accordion.collapseIcon" [ngClass]="iconClass" [attr.aria-hidden]="true"></span>
                            <ChevronDownIcon *ngIf="!accordion.collapseIcon" [ngClass]="iconClass" [attr.aria-hidden]="true" />
                        </ng-container>
                        <ng-container *ngIf="!selected">
                            <span *ngIf="accordion.expandIcon" [class]="accordion.expandIcon" [ngClass]="iconClass" [attr.aria-hidden]="true"></span>
                            <ChevronRightIcon *ngIf="!accordion.expandIcon" [ngClass]="iconClass" [attr.aria-hidden]="true" />
                        </ng-container>
                    </ng-container>
                    <ng-template *ngTemplateOutlet="iconTemplate; context: { $implicit: selected }"></ng-template>
                    <span class="p-accordion-header-text" *ngIf="!hasHeaderFacet">
                        {{ header }}
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
                </a>
            </div>
            <div
                [attr.id]="getTabContentId(id)"
                class="p-toggleable-content"
                [@tabContent]="selected ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }"
                role="region"
                [attr.aria-hidden]="!selected"
                [attr.aria-labelledby]="getTabHeaderActionId(id)"
                [attr.data-pc-section]="'toggleablecontent'"
            >
                <div class="p-accordion-content" [ngClass]="contentStyleClass" [ngStyle]="contentStyle">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("tabContent", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "visible"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"]
    }]
  }], () => [{
    type: Accordion,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Accordion)]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    id: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    headerStyle: [{
      type: Input
    }],
    tabStyle: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    tabStyleClass: [{
      type: Input
    }],
    headerStyleClass: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cache: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    headerAriaLevel: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedChange: [{
      type: Output
    }],
    headerFacet: [{
      type: ContentChildren,
      args: [Header]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var Accordion = class _Accordion {
  el;
  changeDetector;
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @group Props
   */
  multiple = false;
  /**
   * Inline style of the tab header and content.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * Index of the active tab or an array of indexes in multiple mode.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(val) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }
    this.updateSelectionState();
  }
  /**
   * When enabled, the focused tab is activated.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
   * @group Props
   */
  get headerAriaLevel() {
    return this._headerAriaLevel;
  }
  set headerAriaLevel(val) {
    if (typeof val === "number" && val > 0) {
      this._headerAriaLevel = val;
    } else if (this._headerAriaLevel !== 2) {
      this._headerAriaLevel = 2;
    }
  }
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  /**
   * Returns the active index.
   * @param {number | number[]} value - New index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  tabList;
  tabListSubscription = null;
  _activeIndex;
  _headerAriaLevel = 2;
  preventActiveIndexPropagation = false;
  tabs = [];
  constructor(el, changeDetector) {
    this.el = el;
    this.changeDetector = changeDetector;
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  focusedElementIsAccordionHeader() {
    return document.activeElement.tagName.toLowerCase() === "a" && document.activeElement.classList.contains("p-accordion-header-link");
  }
  onTabArrowDownKey(event) {
    if (this.focusedElementIsAccordionHeader()) {
      const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement.parentElement.parentElement);
      nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
      event.preventDefault();
    }
  }
  onTabArrowUpKey(event) {
    if (this.focusedElementIsAccordionHeader()) {
      const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement.parentElement.parentElement);
      prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
      event.preventDefault();
    }
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      DomHandler.focus(element);
      if (this.selectOnFocus) {
        this.tabs.forEach((tab, i) => {
          let selected = this.multiple ? this._activeIndex.includes(i) : i === this._activeIndex;
          if (this.multiple) {
            if (!this._activeIndex) {
              this._activeIndex = [];
            }
            if (tab.id == element.id) {
              tab.selected = !tab.selected;
              if (!this._activeIndex.includes(i)) {
                this._activeIndex.push(i);
              } else {
                this._activeIndex = this._activeIndex.filter((ind) => ind !== i);
              }
            }
          } else {
            if (tab.id == element.id) {
              tab.selected = !tab.selected;
              this._activeIndex = i;
            } else {
              tab.selected = false;
            }
          }
          tab.selectedChange.emit(selected);
          this.activeIndexChange.emit(this._activeIndex);
          tab.changeDetector.markForCheck();
        });
      }
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = DomHandler.findSingle(nextTabElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = DomHandler.findSingle(prevTabElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild.childNodes[0];
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const childNodes = this.el.nativeElement.firstElementChild.childNodes;
    const lastEl = childNodes[childNodes.length - 1];
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  resetActiveTab() {
    this.tabs?.forEach((tab) => {
      tab.selected = false;
      tab.changeDetector.markForCheck();
    });
    this.activeIndex = null;
  }
  ngAfterContentInit() {
    this.initTabs();
    this.tabListSubscription = this.tabList.changes.subscribe((_) => {
      this.initTabs();
    });
  }
  initTabs() {
    this.tabs = this.tabList.toArray();
    this.tabs.forEach((tab) => {
      tab.headerAriaLevel = this._headerAriaLevel;
    });
    this.updateSelectionState();
    this.changeDetector.markForCheck();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateSelectionState() {
    if (this.tabs && this.tabs.length && this._activeIndex != null) {
      for (let i = 0; i < this.tabs.length; i++) {
        let selected = this.multiple ? this._activeIndex.includes(i) : i === this._activeIndex;
        let changed = selected !== this.tabs[i].selected;
        if (changed) {
          this.tabs[i].selected = selected;
          this.tabs[i].selectedChange.emit(selected);
          this.tabs[i].changeDetector.markForCheck();
        }
      }
    }
  }
  isTabActive(index) {
    return this.multiple ? this._activeIndex && this._activeIndex.includes(index) : this._activeIndex === index;
  }
  getTabProp(tab, name) {
    return tab.props ? tab.props[name] : void 0;
  }
  updateActiveIndex() {
    let index = this.multiple ? [] : null;
    this.tabs.forEach((tab, i) => {
      if (tab.selected) {
        if (this.multiple) {
          index.push(i);
        } else {
          index = i;
          return;
        }
      }
    });
    this.preventActiveIndexPropagation = true;
    this._activeIndex = index;
    this.activeIndexChange.emit(index);
  }
  ngOnDestroy() {
    if (this.tabListSubscription) {
      this.tabListSubscription.unsubscribe();
    }
  }
  static ɵfac = function Accordion_Factory(t) {
    return new (t || _Accordion)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Accordion,
    selectors: [["p-accordion"]],
    contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, AccordionTab, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabList = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    hostBindings: function Accordion_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function Accordion_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
    },
    inputs: {
      multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      activeIndex: "activeIndex",
      selectOnFocus: [InputFlags.HasDecoratorInputTransform, "selectOnFocus", "selectOnFocus", booleanAttribute],
      headerAriaLevel: "headerAriaLevel"
    },
    outputs: {
      onClose: "onClose",
      onOpen: "onOpen",
      activeIndexChange: "activeIndexChange"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c6,
    decls: 2,
    vars: 4,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function Accordion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      template: `
        <div [ngClass]="'p-accordion p-component'" [ngStyle]="style" [class]="styleClass">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    multiple: [{
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
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerAriaLevel: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    activeIndexChange: [{
      type: Output
    }],
    tabList: [{
      type: ContentChildren,
      args: [AccordionTab, {
        descendants: true
      }]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static ɵfac = function AccordionModule_Factory(t) {
    return new (t || _AccordionModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AccordionModule,
    declarations: [Accordion, AccordionTab],
    imports: [CommonModule, ChevronRightIcon, ChevronDownIcon],
    exports: [Accordion, AccordionTab, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ChevronRightIcon, ChevronDownIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ChevronRightIcon, ChevronDownIcon],
      exports: [Accordion, AccordionTab, SharedModule],
      declarations: [Accordion, AccordionTab]
    }]
  }], null, null);
})();
export {
  Accordion,
  AccordionModule,
  AccordionTab
};
//# sourceMappingURL=primeng_accordion.js.map
