import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import "./chunk-FPSJESYG.js";
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
  ViewEncapsulation$1,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-timeline.mjs
var _c0 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "p-timeline p-component": true,
  "p-timeline-left": a0,
  "p-timeline-right": a1,
  "p-timeline-top": a2,
  "p-timeline-bottom": a3,
  "p-timeline-alternate": a4,
  "p-timeline-vertical": a5,
  "p-timeline-horizontal": a6
});
var _c1 = (a0) => ({
  $implicit: a0
});
function Timeline_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Timeline_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.markerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, event_r1));
  }
}
function Timeline_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "marker");
  }
}
function Timeline_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
}
function Timeline_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtemplate(2, Timeline_div_1_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 6);
    ɵɵtemplate(4, Timeline_div_1_ng_container_4_Template, 2, 4, "ng-container", 7)(5, Timeline_div_1_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, Timeline_div_1_div_7_Template, 1, 0, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9);
    ɵɵtemplate(9, Timeline_div_1_ng_container_9_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "event");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "opposite");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.oppositeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c1, event_r1));
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.markerTemplate)("ngIfElse", marker_r4);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !last_r3);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c1, event_r1));
  }
}
var Timeline = class _Timeline {
  el;
  /**
   * An array of events to display.
   * @group Props
   */
  value;
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
   * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
   * @group Props
   */
  align = "left";
  /**
   * Orientation of the timeline.
   * @group Props
   */
  layout = "vertical";
  templates;
  contentTemplate;
  oppositeTemplate;
  markerTemplate;
  constructor(el) {
    this.el = el;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "opposite":
          this.oppositeTemplate = item.template;
          break;
        case "marker":
          this.markerTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = function Timeline_Factory(t) {
    return new (t || _Timeline)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Timeline,
    selectors: [["p-timeline"]],
    contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
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
      value: "value",
      style: "style",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    decls: 2,
    vars: 15,
    consts: [["marker", ""], [3, "ngStyle", "ngClass"], ["class", "p-timeline-event", 4, "ngFor", "ngForOf"], [1, "p-timeline-event"], [1, "p-timeline-event-opposite"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-timeline-event-separator"], [4, "ngIf", "ngIfElse"], ["class", "p-timeline-event-connector", 4, "ngIf"], [1, "p-timeline-event-content"], [1, "p-timeline-event-marker"], [1, "p-timeline-event-connector"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1);
        ɵɵtemplate(1, Timeline_div_1_Template, 10, 15, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction7(7, _c0, ctx.align === "left", ctx.align === "right", ctx.align === "top", ctx.align === "bottom", ctx.align === "alternate", ctx.layout === "vertical", ctx.layout === "horizontal"));
        ɵɵattribute("data-pc-name", "timeline")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.value);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      template: `
        <div
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                'p-timeline p-component': true,
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'
            }"
            [attr.data-pc-name]="'timeline'"
            [attr.data-pc-section]="'root'"
        >
            <div *ngFor="let event of value; let last = last" class="p-timeline-event" [attr.data-pc-section]="'event'">
                <div class="p-timeline-event-opposite" [attr.data-pc-section]="'opposite'">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: { $implicit: event }"></ng-container>
                </div>
                <div class="p-timeline-event-separator" [attr.data-pc-section]="'separator'">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: { $implicit: event }"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker" [attr.data-pc-section]="'marker'"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content" [attr.data-pc-section]="'content'">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: event }"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    value: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static ɵfac = function TimelineModule_Factory(t) {
    return new (t || _TimelineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TimelineModule,
    declarations: [Timeline],
    imports: [CommonModule],
    exports: [Timeline, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Timeline, SharedModule],
      declarations: [Timeline]
    }]
  }], null, null);
})();
export {
  Timeline,
  TimelineModule
};
//# sourceMappingURL=primeng_timeline.js.map
