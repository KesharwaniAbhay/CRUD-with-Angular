import {
  ChevronUpIcon
} from "./chunk-ITIM3OIJ.js";
import {
  ChevronDownIcon
} from "./chunk-72V3NIFQ.js";
import "./chunk-KJHM36LJ.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import "./chunk-FPSJESYG.js";
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
  NgForOf,
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
  Inject,
  Input,
  InputFlags,
  NgModule,
  Output,
  Subject,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-organizationchart.mjs
var _c0 = ["pOrganizationChartNode", ""];
var _c1 = (a0, a1) => ({
  "p-organizationchart-node-content": true,
  "p-organizationchart-selectable-node": a0,
  "p-highlight": a1
});
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = (a0) => ({
  "p-organizationchart-line-top": a0
});
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.node.label);
  }
}
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chart.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.node));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-node-toggler-icon");
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-node-toggler-icon");
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronDownIcon_1_Template, 1, 2, "ChevronDownIcon", 10)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronUpIcon_2_Template, 1, 2, "ChevronUpIcon", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.node.expanded);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chart.togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c2, ctx_r1.node.expanded));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.enter", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.space", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_space_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    });
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template, 3, 2, "ng-container", 0)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template, 2, 5, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "nodeToggler");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chart.togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.chart.togglerIconTemplate);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_Template, 3, 3, "a", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.leaf);
  }
}
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "div", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineCell")("colspan", ctx_r1.colspan);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineDown");
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1, " ");
    ɵɵelementEnd();
    ɵɵelementStart(2, "td", 15);
    ɵɵtext(3, " ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c3, !first_r4));
    ɵɵattribute("data-pc-section", "lineLeft");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c3, !last_r5));
    ɵɵattribute("data-pc-section", "lineRight");
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 8, "ng-template", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.node.children);
  }
}
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵelement(1, "table", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "nodeCell");
    ɵɵadvance();
    ɵɵproperty("node", child_r6)("collapsible", ctx_r1.collapsible && ctx_r1.node.children && ctx_r1.node.children.length > 0);
  }
}
function OrganizationChartNode_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody")(1, "tr")(2, "td")(3, "div", 1);
    ɵɵlistener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeClick($event, ctx_r1.node));
    });
    ɵɵtemplate(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 0)(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 0)(6, OrganizationChartNode_tbody_0_ng_container_6_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "tr", 2)(8, "td");
    ɵɵelement(9, "div", 3);
    ɵɵelementEnd()();
    ɵɵelementStart(10, "tr", 2);
    ɵɵtemplate(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 3, "ng-container", 0)(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelementStart(13, "tr", 4);
    ɵɵtemplate(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 3, "td", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "body");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "row");
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.colspan)("data-pc-section", "cell");
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.node.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(26, _c1, ctx_r1.chart.selectionMode && ctx_r1.node.selectable !== false, ctx_r1.isSelected()));
    ɵɵattribute("data-pc-section", "node");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.collapsible);
    ɵɵadvance();
    ɵɵproperty("ngClass", !ctx_r1.leaf && ctx_r1.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵɵattribute("data-pc-section", "lines");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineCell")("colspan", ctx_r1.colspan);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineDown");
    ɵɵadvance();
    ɵɵproperty("ngClass", !ctx_r1.leaf && ctx_r1.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵɵattribute("data-pc-section", "lines");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.children && ctx_r1.node.children.length === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.children && ctx_r1.node.children.length > 1);
    ɵɵadvance();
    ɵɵproperty("ngClass", !ctx_r1.leaf && ctx_r1.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵɵattribute("data-pc-section", "nodes");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.node.children);
  }
}
var _c4 = (a0) => ({
  "p-organizationchart p-component": true,
  "p-organizationchart-preservespace": a0
});
function OrganizationChart_table_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "table", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("collapsible", ctx_r0.collapsible)("node", ctx_r0.root);
  }
}
var OrganizationChartNode = class _OrganizationChartNode {
  cd;
  node;
  root;
  first;
  last;
  collapsible;
  chart;
  subscription;
  constructor(chart, cd) {
    this.cd = cd;
    this.chart = chart;
    this.subscription = this.chart.selectionSource$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  get leaf() {
    if (this.node) {
      return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
  }
  get colspan() {
    if (this.node) {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }
  onNodeClick(event, node) {
    this.chart.onNodeClick(event, node);
  }
  toggleNode(event, node) {
    node.expanded = !node.expanded;
    if (node.expanded) this.chart.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
    else this.chart.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
    event.preventDefault();
  }
  isSelected() {
    return this.chart.isSelected(this.node);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static ɵfac = function OrganizationChartNode_Factory(t) {
    return new (t || _OrganizationChartNode)(ɵɵdirectiveInject(forwardRef(() => OrganizationChart)), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OrganizationChartNode,
    selectors: [["", "pOrganizationChartNode", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      node: "node",
      root: [InputFlags.HasDecoratorInputTransform, "root", "root", booleanAttribute],
      first: [InputFlags.HasDecoratorInputTransform, "first", "first", booleanAttribute],
      last: [InputFlags.HasDecoratorInputTransform, "last", "last", booleanAttribute],
      collapsible: [InputFlags.HasDecoratorInputTransform, "collapsible", "collapsible", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature],
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "click", "ngClass"], [1, "p-organizationchart-lines", 3, "ngClass"], [1, "p-organizationchart-line-down"], [1, "p-organizationchart-nodes", 3, "ngClass"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "class", "p-node-toggler", 3, "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tabindex", "0", 1, "p-node-toggler", 3, "click", "keydown.enter", "keydown.space"], ["class", "p-node-toggler-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-node-toggler-icon"], ["ngFor", "", 3, "ngForOf"], [1, "p-organizationchart-line-left", 3, "ngClass"], [1, "p-organizationchart-line-right", 3, "ngClass"], ["colspan", "2"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node", "collapsible"]],
    template: function OrganizationChartNode_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, OrganizationChartNode_tbody_0_Template, 15, 29, "tbody", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.node);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon, _OrganizationChartNode],
    styles: ["@layer primeng{.p-organizationchart-table{border-spacing:0;border-collapse:separate;margin:0 auto}.p-organizationchart-table>tbody>tr>td{text-align:center;vertical-align:top;padding:0 .75rem}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{position:absolute;bottom:-.75rem;margin-left:-.75rem;z-index:2;left:50%;-webkit-user-select:none;user-select:none;cursor:pointer;width:1.5rem;height:1.5rem}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{margin:0 auto;height:20px;width:1px}.p-organizationchart-line-right,.p-organizationchart-line-left{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{visibility:hidden;display:inherit}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("childState", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0
      }), animate(150)]), transition("* => void", [animate(150, style({
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartNode, [{
    type: Component,
    args: [{
      selector: "[pOrganizationChartNode]",
      template: `
        <tbody *ngIf="node" [attr.data-pc-section]="'body'">
            <tr [attr.data-pc-section]="'row'">
                <td [attr.colspan]="colspan" [attr.data-pc-section]="'cell'">
                    <div
                        [class]="node.styleClass"
                        [ngClass]="{ 'p-organizationchart-node-content': true, 'p-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false, 'p-highlight': isSelected() }"
                        (click)="onNodeClick($event, node)"
                        [attr.data-pc-section]="'node'"
                    >
                        <div *ngIf="!chart.getTemplateForNode(node)">{{ node.label }}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </div>
                        <ng-container *ngIf="collapsible">
                            <a *ngIf="!leaf" tabindex="0" class="p-node-toggler" (click)="toggleNode($event, node)" (keydown.enter)="toggleNode($event, node)" (keydown.space)="toggleNode($event, node)" [attr.data-pc-section]="'nodeToggler'">
                                <ng-container *ngIf="!chart.togglerIconTemplate">
                                    <ChevronDownIcon *ngIf="node.expanded" [styleClass]="'p-node-toggler-icon'" [attr.data-pc-section]="'nodeTogglerIcon'" />
                                    <ChevronUpIcon *ngIf="!node.expanded" [styleClass]="'p-node-toggler-icon'" [attr.data-pc-section]="'nodeTogglerIcon'" />
                                </ng-container>
                                <span class="p-node-toggler-icon" *ngIf="chart.togglerIconTemplate" [attr.data-pc-section]="'nodeTogglerIcon'">
                                    <ng-template *ngTemplateOutlet="chart.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                </span>
                            </a>
                        </ng-container>
                    </div>
                </td>
            </tr>
            <tr [ngClass]="!leaf && node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'" [attr.data-pc-section]="'lines'">
                <td [attr.data-pc-section]="'lineCell'" [attr.colspan]="colspan">
                    <div [attr.data-pc-section]="'lineDown'" class="p-organizationchart-line-down"></div>
                </td>
            </tr>
            <tr [ngClass]="!leaf && node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'" [attr.data-pc-section]="'lines'">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [attr.data-pc-section]="'lineCell'" [attr.colspan]="colspan">
                        <div [attr.data-pc-section]="'lineDown'" class="p-organizationchart-line-down"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                        <td [attr.data-pc-section]="'lineLeft'" class="p-organizationchart-line-left" [ngClass]="{ 'p-organizationchart-line-top': !first }">&nbsp;</td>
                        <td [attr.data-pc-section]="'lineRight'" class="p-organizationchart-line-right" [ngClass]="{ 'p-organizationchart-line-top': !last }">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngClass]="!leaf && node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-nodes" [@childState]="'in'" [attr.data-pc-section]="'nodes'">
                <td *ngFor="let child of node.children" colspan="2" [attr.data-pc-section]="'nodeCell'">
                    <table class="p-organizationchart-table" pOrganizationChartNode [node]="child" [collapsible]="collapsible && node.children && node.children.length > 0"></table>
                </td>
            </tr>
        </tbody>
    `,
      animations: [trigger("childState", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0
      }), animate(150)]), transition("* => void", [animate(150, style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-organizationchart-table{border-spacing:0;border-collapse:separate;margin:0 auto}.p-organizationchart-table>tbody>tr>td{text-align:center;vertical-align:top;padding:0 .75rem}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{position:absolute;bottom:-.75rem;margin-left:-.75rem;z-index:2;left:50%;-webkit-user-select:none;user-select:none;cursor:pointer;width:1.5rem;height:1.5rem}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{margin:0 auto;height:20px;width:1px}.p-organizationchart-line-right,.p-organizationchart-line-left{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{visibility:hidden;display:inherit}}\n"]
    }]
  }], () => [{
    type: OrganizationChart,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => OrganizationChart)]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    node: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    first: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    last: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var OrganizationChart = class _OrganizationChart {
  el;
  cd;
  /**
   * An array of nested TreeNodes.
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
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Whether the nodes can be expanded or toggled.
   * @group Props
   */
  collapsible;
  /**
   * Whether the space allocated by a node is preserved when hidden.
   * @group Props
   */
  preserveSpace = true;
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
    if (this.initialized) this.selectionSource.next(null);
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selected value.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {OrganizationChartNodeSelectEvent} event - custom node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {OrganizationChartNodeUnSelectEvent} event - custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {OrganizationChartNodeExpandEvent} event - custom node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {OrganizationChartNodeCollapseEvent} event - custom node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  templates;
  templateMap;
  togglerIconTemplate;
  selectionSource = new Subject();
  _selection;
  initialized;
  selectionSource$ = this.selectionSource.asObservable();
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
  }
  get root() {
    return this.value && this.value.length ? this.value[0] : null;
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      if (item.getType() === "togglericon") {
        this.togglerIconTemplate = item.template;
      } else {
        this.templateMap[item.getType()] = item.template;
      }
    });
    this.initialized = true;
  }
  getTemplateForNode(node) {
    if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap["default"];
    else return null;
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (eventTarget.className && (DomHandler.hasClass(eventTarget, "p-node-toggler") || DomHandler.hasClass(eventTarget, "p-node-toggler-icon"))) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.selectionMode === "single") {
        if (selected) {
          this.selection = null;
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = node;
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else if (this.selectionMode === "multiple") {
        if (selected) {
          this.selection = this.selection.filter((val, i) => i != index);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = [...this.selection || [], node];
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      }
      this.selectionChange.emit(this.selection);
      this.selectionSource.next(null);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.selectionMode === "single") {
        index = this.selection == node ? 0 : -1;
      } else if (this.selectionMode === "multiple") {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.selection[i] == node) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  static ɵfac = function OrganizationChart_Factory(t) {
    return new (t || _OrganizationChart)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OrganizationChart,
    selectors: [["p-organizationChart"]],
    contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) {
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
      selectionMode: "selectionMode",
      collapsible: [InputFlags.HasDecoratorInputTransform, "collapsible", "collapsible", booleanAttribute],
      preserveSpace: [InputFlags.HasDecoratorInputTransform, "preserveSpace", "preserveSpace", booleanAttribute],
      selection: "selection"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 2,
    vars: 8,
    consts: [[3, "ngStyle", "ngClass"], ["class", "p-organizationchart-table", "pOrganizationChartNode", "", 3, "collapsible", "node", 4, "ngIf"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "collapsible", "node"]],
    template: function OrganizationChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, OrganizationChart_table_1_Template, 1, 2, "table", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction1(6, _c4, ctx.preserveSpace));
        ɵɵattribute("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.root);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, OrganizationChartNode],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChart, [{
    type: Component,
    args: [{
      selector: "p-organizationChart",
      template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{ 'p-organizationchart p-component': true, 'p-organizationchart-preservespace': preserveSpace }" [attr.data-pc-section]="'root'">
            <table class="p-organizationchart-table" [collapsible]="collapsible" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
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
    selectionMode: [{
      type: Input
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveSpace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selection: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var OrganizationChartModule = class _OrganizationChartModule {
  static ɵfac = function OrganizationChartModule_Factory(t) {
    return new (t || _OrganizationChartModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OrganizationChartModule,
    declarations: [OrganizationChart, OrganizationChartNode],
    imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule],
    exports: [OrganizationChart, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule],
      exports: [OrganizationChart, SharedModule],
      declarations: [OrganizationChart, OrganizationChartNode]
    }]
  }], null, null);
})();
export {
  OrganizationChart,
  OrganizationChartModule,
  OrganizationChartNode
};
//# sourceMappingURL=primeng_organizationchart.js.map
