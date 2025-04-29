import {
  AngleDownIcon
} from "./chunk-CQCBVFAN.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-MQHORFN6.js";
import {
  AngleRightIcon
} from "./chunk-C4GXG3M2.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-DN72CV5U.js";
import "./chunk-YJEWT77P.js";
import "./chunk-MB3FLFHM.js";
import {
  ChevronRightIcon
} from "./chunk-KJN6I6DN.js";
import {
  ChevronDownIcon
} from "./chunk-72V3NIFQ.js";
import "./chunk-KJHM36LJ.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import {
  ObjectUtils,
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
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-panelmenu.mjs
var _c0 = ["list"];
var _c1 = (a0) => ({
  "p-submenu-list": true,
  "p-panelmenu-root-list": a0
});
var _c2 = (a0) => ({
  "p-disabled": a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  $implicit: a0
});
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(6).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(6).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 20)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(5).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemActive(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.isItemActive(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.panelMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", processedItem_r3.icon)("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.getItemProp(processedItem_r3, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r3.getItemProp(processedItem_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("ngClass", processedItem_r3.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 2, "span", 16)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 1, "span", 17)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template, 2, 2, "span", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(5);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c2, ctx_r3.getItemProp(processedItem_r3, "disabled")))("target", ctx_r3.getItemProp(processedItem_r3, "target"));
    ɵɵattribute("href", ctx_r3.getItemProp(processedItem_r3, "url"), ɵɵsanitizeUrl)("data-pc-section", "action")("tabindex", !!ctx_r3.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemGroup(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", (processedItem_r3.item == null ? null : processedItem_r3.item.escape) !== false)("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(6).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(6).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 20)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(5).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemActive(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.isItemActive(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.panelMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", processedItem_r3.icon)("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.getItemProp(processedItem_r3, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r3.getItemProp(processedItem_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.getItemProp(processedItem_r3, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.getItemProp(processedItem_r3, "badge"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 2, "span", 16)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 2, 1, "span", 17)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template, 2, 2, "span", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r6 = ɵɵreference(5);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r3.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r3.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r3.getItemProp(processedItem_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c3))("ngClass", ɵɵpureFunction1(21, _c2, ctx_r3.getItemProp(processedItem_r3, "disabled")))("target", ctx_r3.getItemProp(processedItem_r3, "target"))("fragment", ctx_r3.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r3.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r3.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r3.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r3.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r3.getItemProp(processedItem_r3, "state"));
    ɵɵattribute("title", ctx_r3.getItemProp(processedItem_r3, "title"))("data-pc-section", "action")("tabindex", !!ctx_r3.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemGroup(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getItemProp(processedItem_r3, "escape") !== false)("ngIfElse", htmlRouteLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 7, 12, "a", 13)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 7, 23, "a", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.getItemProp(processedItem_r3, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getItemProp(processedItem_r3, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, processedItem_r3.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-panelMenuSub", 28);
    ɵɵlistener("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template_p_panelMenuSub_itemToggle_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onItemToggle($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r3.getItemId(processedItem_r3) + "_list")("panelId", ctx_r3.panelId)("items", processedItem_r3 == null ? null : processedItem_r3.items)("itemTemplate", ctx_r3.itemTemplate)("transitionOptions", ctx_r3.transitionOptions)("focusedItemId", ctx_r3.focusedItemId)("activeItemPath", ctx_r3.activeItemPath)("level", ctx_r3.level + 1)("parentExpanded", !!ctx_r3.parentExpanded && ctx_r3.isItemExpanded(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8)(1, "div", 9);
    ɵɵlistener("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemClick($event, processedItem_r3));
    });
    ɵɵtemplate(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 10)(3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 11);
    ɵɵlistener("@submenu.done", function PanelMenuSub_ng_template_2_li_1_Template_div_animation_submenu_done_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onToggleDone());
    });
    ɵɵtemplate(5, PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template, 1, 9, "p-panelMenuSub", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const processedItem_r3 = ctx_r7.$implicit;
    const index_r9 = ctx_r7.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.getItemProp(processedItem_r3, "styleClass"));
    ɵɵclassProp("p-hidden", processedItem_r3.visible === false)("p-focus", ctx_r3.isItemFocused(processedItem_r3) && !ctx_r3.isItemDisabled(processedItem_r3));
    ɵɵproperty("ngClass", ctx_r3.getItemClass(processedItem_r3))("ngStyle", ctx_r3.getItemProp(processedItem_r3, "style"))("pTooltip", ctx_r3.getItemProp(processedItem_r3, "tooltip"))("tooltipOptions", ctx_r3.getItemProp(processedItem_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r3.getItemId(processedItem_r3))("aria-label", ctx_r3.getItemProp(processedItem_r3, "label"))("aria-expanded", ctx_r3.isItemGroup(processedItem_r3) ? ctx_r3.isItemActive(processedItem_r3) : void 0)("aria-level", ctx_r3.level + 1)("aria-setsize", ctx_r3.getAriaSetSize())("aria-posinset", ctx_r3.getAriaPosInset(index_r9))("data-p-disabled", ctx_r3.isItemDisabled(processedItem_r3));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("@submenu", ctx_r3.getAnimation(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemVisible(processedItem_r3) && ctx_r3.isItemGroup(processedItem_r3) && (ctx_r3.isItemExpanded(processedItem_r3) || ctx_r3.animating));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_0_Template, 1, 0, "li", 5)(1, PanelMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", processedItem_r3.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !processedItem_r3.separator && ctx_r3.isItemVisible(processedItem_r3));
  }
}
var _c5 = ["submenu"];
var _c6 = ["container"];
var _c7 = (a0, a1) => ({
  "p-component p-panelmenu-header": true,
  "p-highlight": a0,
  "p-disabled": a1
});
var _c8 = (a0) => ({
  "p-panelmenu-expanded": a0
});
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 20);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 20);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 19)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(5).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemActive(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_Template, 1, 0, null, 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r4.getItemProp(item_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.getItemProp(item_r3, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_2_Template, 1, 2, "span", 15)(3, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_3_Template, 2, 1, "span", 16)(4, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_6_Template, 2, 2, "span", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(5);
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r4.getItemProp(item_r3, "target"));
    ɵɵattribute("href", ctx_r4.getItemProp(item_r3, "url"), ɵɵsanitizeUrl)("tabindex", -1)("title", ctx_r4.getItemProp(item_r3, "title"))("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_Template, 7, 10, "a", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.getItemProp(item_r3, "routerLink"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 20);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 20);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 19)(2, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemActive(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_Template, 1, 0, null, 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r4.getItemProp(item_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.getItemProp(item_r3, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 25);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_a_5_span_2_Template, 1, 2, "span", 15)(3, PanelMenu_ng_container_2_div_1_a_5_span_3_Template, 2, 1, "span", 16)(4, PanelMenu_ng_container_2_div_1_a_5_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_2_div_1_a_5_span_6_Template, 2, 2, "span", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = ɵɵreference(5);
    const item_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r4.getItemProp(item_r3, "routerLink"))("queryParams", ctx_r4.getItemProp(item_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.getItemProp(item_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(18, _c3))("target", ctx_r4.getItemProp(item_r3, "target"))("fragment", ctx_r4.getItemProp(item_r3, "fragment"))("queryParamsHandling", ctx_r4.getItemProp(item_r3, "queryParamsHandling"))("preserveFragment", ctx_r4.getItemProp(item_r3, "preserveFragment"))("skipLocationChange", ctx_r4.getItemProp(item_r3, "skipLocationChange"))("replaceUrl", ctx_r4.getItemProp(item_r3, "replaceUrl"))("state", ctx_r4.getItemProp(item_r3, "state"));
    ɵɵattribute("tabindex", -1)("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlRouteLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_2_div_1_div_6_Template_div_animation_rootItem_done_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.onToggleDone());
    });
    ɵɵelementStart(1, "div", 27)(2, "p-panelMenuList", 28);
    ɵɵlistener("headerFocus", function PanelMenu_ng_container_2_div_1_div_6_Template_p_panelMenuList_headerFocus_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.updateFocusedHeader($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(14, _c8, ctx_r4.isItemActive(item_r3)))("@rootItem", ctx_r4.getAnimation(item_r3));
    ɵɵattribute("id", ctx_r4.getContentId(item_r3, i_r4))("aria-labelledby", ctx_r4.getHeaderId(item_r3, i_r4))("data-pc-section", "toggleablecontent");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "menucontent");
    ɵɵadvance();
    ɵɵproperty("panelId", ctx_r4.getPanelId(i_r4, item_r3))("items", ctx_r4.getItemProp(item_r3, "items"))("itemTemplate", ctx_r4.itemTemplate)("transitionOptions", ctx_r4.transitionOptions)("root", true)("activeItem", ctx_r4.activeItem())("tabindex", ctx_r4.tabindex)("parentExpanded", ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵlistener("click", function PanelMenu_ng_container_2_div_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onHeaderClick($event, item_r3, i_r4));
    })("keydown", function PanelMenu_ng_container_2_div_1_Template_div_keydown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onHeaderKeyDown($event, item_r3, i_r4));
    });
    ɵɵelementStart(2, "div", 8);
    ɵɵtemplate(3, PanelMenu_ng_container_2_div_1_ng_container_3_Template, 2, 1, "ng-container", 9)(4, PanelMenu_ng_container_2_div_1_ng_container_4_Template, 1, 0, "ng-container", 10)(5, PanelMenu_ng_container_2_div_1_a_5_Template, 7, 19, "a", 11);
    ɵɵelementEnd()();
    ɵɵtemplate(6, PanelMenu_ng_container_2_div_1_div_6_Template, 3, 16, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.getItemProp(item_r3, "headerClass"))("ngStyle", ctx_r4.getItemProp(item_r3, "style"));
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵclassMap(ctx_r4.getItemProp(item_r3, "styleClass"));
    ɵɵproperty("ngClass", ɵɵpureFunction2(23, _c7, ctx_r4.isItemActive(item_r3), ctx_r4.isItemDisabled(item_r3)))("ngStyle", ctx_r4.getItemProp(item_r3, "style"))("pTooltip", ctx_r4.getItemProp(item_r3, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r4.getItemProp(item_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r4.getHeaderId(item_r3, i_r4))("aria-expanded", ctx_r4.isItemActive(item_r3))("aria-label", ctx_r4.getItemProp(item_r3, "label"))("aria-controls", ctx_r4.getContentId(item_r3, i_r4))("aria-disabled", ctx_r4.isItemDisabled(item_r3))("data-p-highlight", ctx_r4.isItemActive(item_r3))("data-p-disabled", ctx_r4.isItemDisabled(item_r3))("data-pc-section", "header");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r4.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(26, _c4, item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
  }
}
function PanelMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_Template, 7, 28, "div", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemVisible(item_r3));
  }
}
var _c9 = "@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n";
var PanelMenuSub = class _PanelMenuSub {
  panelMenu;
  el;
  panelId;
  focusedItemId;
  items;
  itemTemplate;
  level = 0;
  activeItemPath;
  root;
  tabindex;
  transitionOptions;
  parentExpanded;
  itemToggle = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeyDown = new EventEmitter();
  listViewChild;
  animating;
  constructor(panelMenu, el) {
    this.panelMenu = panelMenu;
    this.el = el;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return {
      "p-menuitem": true,
      "p-disabled": this.isItemDisabled(processedItem)
    };
  }
  getItemProp(processedItem, name, params) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemExpanded(processedItem) {
    return processedItem.expanded;
  }
  isItemActive(processedItem) {
    return this.isItemExpanded(processedItem) || this.activeItemPath.some((path) => path && path.key === processedItem.key);
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  getAnimation(processedItem) {
    return this.isItemActive(processedItem) ? {
      value: "visible",
      params: {
        transitionParams: this.transitionOptions,
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemClick(event, processedItem) {
    if (!this.isItemDisabled(processedItem)) {
      this.animating = true;
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemToggle.emit({
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    }
  }
  onItemToggle(event) {
    this.itemToggle.emit(event);
  }
  onToggleDone() {
    this.animating = false;
  }
  static ɵfac = function PanelMenuSub_Factory(t) {
    return new (t || _PanelMenuSub)(ɵɵdirectiveInject(forwardRef(() => PanelMenu)), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuSub,
    selectors: [["p-panelMenuSub"]],
    viewQuery: function PanelMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      focusedItemId: "focusedItemId",
      items: "items",
      itemTemplate: "itemTemplate",
      level: [InputFlags.HasDecoratorInputTransform, "level", "level", numberAttribute],
      activeItemPath: "activeItemPath",
      root: [InputFlags.HasDecoratorInputTransform, "root", "root", booleanAttribute],
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      transitionOptions: "transitionOptions",
      parentExpanded: [InputFlags.HasDecoratorInputTransform, "parentExpanded", "parentExpanded", booleanAttribute]
    },
    outputs: {
      itemToggle: "itemToggle",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeyDown: "menuKeyDown"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 3,
    vars: 8,
    consts: [["list", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["role", "tree", 3, "focusin", "focusout", "keydown", "ngClass", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "class", "p-hidden", "p-focus", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator"], ["role", "treeitem", 3, "ngClass", "ngStyle", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], [1, "p-toggleable-content"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], ["class", "p-menuitem-link", 3, "ngClass", "target", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemToggle", "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded"]],
    template: function PanelMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 3, 0);
        ɵɵlistener("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuFocus.emit($event));
        })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuBlur.emit($event));
        })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuKeyDown.emit($event));
        });
        ɵɵtemplate(2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c1, ctx.root))("tabindex", -1);
        ɵɵattribute("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, AngleDownIcon, AngleRightIcon, _PanelMenuSub],
    encapsulation: 2,
    data: {
      animation: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuSub, [{
    type: Component,
    args: [{
      selector: "p-panelMenuSub",
      template: `
        <ul
            #list
            [ngClass]="{ 'p-submenu-list': true, 'p-panelmenu-root-list': root }"
            role="tree"
            [tabindex]="-1"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="'menu'"
            [attr.aria-hidden]="!parentExpanded"
            (focusin)="menuFocus.emit($event)"
            (focusout)="menuBlur.emit($event)"
            (keydown)="menuKeyDown.emit($event)"
        >
            <ng-template ngFor let-processedItem let-index="index" [ngForOf]="items">
                <li *ngIf="processedItem.separator" class="p-menuitem-separator" role="separator"></li>
                <li
                    *ngIf="!processedItem.separator && isItemVisible(processedItem)"
                    [ngClass]="getItemClass(processedItem)"
                    role="treeitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.aria-label]="getItemProp(processedItem, 'label')"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    [class.p-hidden]="processedItem.visible === false"
                    [class.p-focus]="isItemFocused(processedItem) && !isItemDisabled(processedItem)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [pTooltip]="getItemProp(processedItem, 'tooltip')"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div class="p-menuitem-content" (click)="onItemClick($event, processedItem)">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="processedItem.item?.escape !== false; else htmlLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="processedItem.badgeStyleClass">{{ processedItem.badge }}</span>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.title]="getItemProp(processedItem, 'title')"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon *ngIf="isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon *ngIf="!isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(processedItem, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div class="p-toggleable-content" [@submenu]="getAnimation(processedItem)" (@submenu.done)="onToggleDone()">
                        <p-panelMenuSub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem) && (isItemExpanded(processedItem) || animating)"
                            [id]="getItemId(processedItem) + '_list'"
                            [panelId]="panelId"
                            [items]="processedItem?.items"
                            [itemTemplate]="itemTemplate"
                            [transitionOptions]="transitionOptions"
                            [focusedItemId]="focusedItemId"
                            [activeItemPath]="activeItemPath"
                            [level]="level + 1"
                            [parentExpanded]="!!parentExpanded && isItemExpanded(processedItem)"
                            (itemToggle)="onItemToggle($event)"
                        ></p-panelMenuSub>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: PanelMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => PanelMenu)]
    }]
  }, {
    type: ElementRef
  }], {
    panelId: [{
      type: Input
    }],
    focusedItemId: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    activeItemPath: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemToggle: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeyDown: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }]
  });
})();
var PanelMenuList = class _PanelMenuList {
  el;
  panelId;
  id;
  items;
  itemTemplate;
  parentExpanded;
  expanded;
  transitionOptions;
  root;
  tabindex;
  activeItem;
  itemToggle = new EventEmitter();
  headerFocus = new EventEmitter();
  subMenuViewChild;
  searchTimeout;
  searchValue;
  focused;
  focusedItem = signal(null);
  activeItemPath = signal([]);
  processedItems = signal([]);
  visibleItems = computed(() => {
    const processedItems = this.processedItems();
    return this.flatItems(processedItems);
  });
  get focusedItemId() {
    const focusedItem = this.focusedItem();
    return focusedItem && focusedItem.item?.id ? focusedItem.item.id : ObjectUtils.isNotEmpty(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : void 0;
  }
  constructor(el) {
    this.el = el;
  }
  ngOnChanges(changes) {
    const hasItems = !!changes?.items?.currentValue;
    if (hasItems) {
      this.processedItems.set(this.createProcessedItems(changes?.items?.currentValue || this.items || []));
      return;
    } else {
      this.processedItems.update((prev) => prev.map((i) => __spreadProps(__spreadValues({}, i), {
        expanded: i.expanded
      })));
    }
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemActive(processedItem) {
    return this.activeItemPath().some((path) => path.key === processedItem.parentKey);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  isElementInPanel(event, element) {
    const panel = event.currentTarget.closest('[data-pc-section="panel"]');
    return panel && panel.contains(element);
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isVisibleItem(processedItem) {
    return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
  }
  findFirstItem() {
    return this.visibleItems().find((processedItem) => this.isValidItem(processedItem));
  }
  findLastItem() {
    return ObjectUtils.findLast(this.visibleItems(), (processedItem) => this.isValidItem(processedItem));
  }
  findItemByEventTarget(target) {
    let parentNode = target;
    while (parentNode && parentNode.tagName?.toLowerCase() !== "li") {
      parentNode = parentNode?.parentNode;
    }
    return parentNode?.id && this.visibleItems().find((processedItem) => this.isValidItem(processedItem) && `${this.panelId}_${processedItem.key}` === parentNode.id);
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        icon: item.icon,
        expanded: item.expanded,
        separator: item.separator,
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  findProcessedItemByItemKey(key, processedItems, level = 0) {
    processedItems = processedItems || this.processedItems();
    if (processedItems && processedItems.length) {
      for (let i = 0; i < processedItems.length; i++) {
        const processedItem = processedItems[i];
        if (this.getItemProp(processedItem, "key") === key) return processedItem;
        const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem) return matchedItem;
      }
    }
  }
  flatItems(processedItems, processedFlattenItems = []) {
    processedItems && processedItems.forEach((processedItem) => {
      if (this.isVisibleItem(processedItem)) {
        processedFlattenItems.push(processedItem);
        this.flatItems(processedItem.items, processedFlattenItems);
      }
    });
    return processedFlattenItems;
  }
  changeFocusedItem(event) {
    const {
      originalEvent,
      processedItem,
      focusOnNext,
      selfCheck,
      allowHeaderFocus = true
    } = event;
    if (ObjectUtils.isNotEmpty(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
      this.focusedItem.set(processedItem);
      this.scrollInView();
    } else if (allowHeaderFocus) {
      this.headerFocus.emit({
        originalEvent,
        focusOnNext,
        selfCheck
      });
    }
  }
  scrollInView() {
    const element = DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onFocus(event) {
    if (!this.focused) {
      this.focused = true;
      const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findItemByEventTarget(event.target) || this.findFirstItem() : this.findLastItem());
      if (event.relatedTarget !== null) this.focusedItem.set(focusedItem);
    }
  }
  onBlur(event) {
    const target = event.relatedTarget;
    if (this.focused && !this.el.nativeElement.contains(target)) {
      this.focused = false;
      this.focusedItem.set(null);
      this.searchValue = "";
    }
  }
  onItemToggle(event) {
    const {
      processedItem,
      expanded
    } = event;
    processedItem.expanded = !processedItem.expanded;
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== processedItem.parentKey);
    expanded && activeItemPath.push(processedItem);
    this.activeItemPath.set(activeItemPath);
    this.processedItems.update((value) => value.map((i) => i === processedItem ? processedItem : i));
    this.focusedItem.set(processedItem);
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
      case "Tab":
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const processedItem = ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const processedItem = ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      selfCheck: true
    });
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
      if (matched) {
        const activeItemPath = this.activeItemPath().filter((p) => p.key !== this.focusedItem().key);
        this.activeItemPath.set(activeItemPath);
      } else {
        const focusedItem = ObjectUtils.isNotEmpty(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
        this.focusedItem.set(focusedItem);
      }
      event.preventDefault();
    }
  }
  onArrowRightKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const grouped = this.isItemGroup(this.focusedItem());
      if (grouped) {
        const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
        if (matched) {
          this.onArrowDownKey(event);
        } else {
          const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItem().parentKey);
          activeItemPath.push(this.focusedItem());
          this.activeItemPath.set(activeItemPath);
        }
      }
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findFirstItem(),
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findLastItem(),
      focusOnNext: true,
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEnterKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const element = DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find((pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  findPrevItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index > 0 ? ObjectUtils.findLast(this.visibleItems().slice(0, index), (pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let matchedItem = null;
    let matched = false;
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const focusedItemIndex = this.visibleItems().findIndex((processedItem) => processedItem.key === this.focusedItem().key);
      matchedItem = this.visibleItems().slice(focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem));
      matchedItem = ObjectUtils.isEmpty(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem)) : matchedItem;
    } else {
      matchedItem = this.visibleItems().find((processedItem) => this.isItemMatched(processedItem));
    }
    if (ObjectUtils.isNotEmpty(matchedItem)) {
      matched = true;
    }
    if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(this.focusedItem())) {
      matchedItem = this.findFirstItem();
    }
    if (ObjectUtils.isNotEmpty(matchedItem)) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: matchedItem,
        allowHeaderFocus: false
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  static ɵfac = function PanelMenuList_Factory(t) {
    return new (t || _PanelMenuList)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuList,
    selectors: [["p-panelMenuList"]],
    viewQuery: function PanelMenuList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subMenuViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      parentExpanded: [InputFlags.HasDecoratorInputTransform, "parentExpanded", "parentExpanded", booleanAttribute],
      expanded: [InputFlags.HasDecoratorInputTransform, "expanded", "expanded", booleanAttribute],
      transitionOptions: "transitionOptions",
      root: [InputFlags.HasDecoratorInputTransform, "root", "root", booleanAttribute],
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      activeItem: "activeItem"
    },
    outputs: {
      itemToggle: "itemToggle",
      headerFocus: "headerFocus"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 10,
    consts: [["submenu", ""], [3, "itemToggle", "keydown", "menuFocus", "menuBlur", "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded"]],
    template: function PanelMenuList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "p-panelMenuSub", 1, 0);
        ɵɵlistener("itemToggle", function PanelMenuList_Template_p_panelMenuSub_itemToggle_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemToggle($event));
        })("keydown", function PanelMenuList_Template_p_panelMenuSub_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("menuFocus", function PanelMenuList_Template_p_panelMenuSub_menuFocus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus($event));
        })("menuBlur", function PanelMenuList_Template_p_panelMenuSub_menuBlur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur($event));
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
      }
    },
    dependencies: [PanelMenuSub],
    styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuList, [{
    type: Component,
    args: [{
      selector: "p-panelMenuList",
      template: `
        <p-panelMenuSub
            #submenu
            [root]="true"
            [id]="panelId + '_list'"
            [panelId]="panelId"
            [tabindex]="tabindex"
            [itemTemplate]="itemTemplate"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [activeItemPath]="activeItemPath()"
            [transitionOptions]="transitionOptions"
            [items]="processedItems()"
            [parentExpanded]="parentExpanded"
            (itemToggle)="onItemToggle($event)"
            (keydown)="onKeyDown($event)"
            (menuFocus)="onFocus($event)"
            (menuBlur)="onBlur($event)"
        ></p-panelMenuSub>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    panelId: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    activeItem: [{
      type: Input
    }],
    itemToggle: [{
      type: Output
    }],
    headerFocus: [{
      type: Output
    }],
    subMenuViewChild: [{
      type: ViewChild,
      args: ["submenu"]
    }]
  });
})();
var PanelMenu = class _PanelMenu {
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
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
   * Whether multiple tabs can be activated at the same time or not.
   * @group Props
   */
  multiple = false;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  templates;
  containerViewChild;
  submenuIconTemplate;
  itemTemplate;
  animating;
  activeItem = signal(null);
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  /**
   * Collapses open panels.
   * @group Method
   */
  collapseAll() {
    for (let item of this.model) {
      if (item.expanded) {
        item.expanded = false;
      }
    }
    this.cd.detectChanges();
  }
  onToggleDone() {
    this.animating = false;
    this.cd.markForCheck();
  }
  changeActiveItem(event, item, index, selfActive = false) {
    if (!this.isItemDisabled(item)) {
      const activeItem = selfActive ? item : this.activeItem && ObjectUtils.equals(item, this.activeItem) ? null : item;
      this.activeItem.set(activeItem);
    }
  }
  getAnimation(item) {
    return item.expanded ? {
      value: "visible",
      params: {
        transitionParams: this.animating ? this.transitionOptions : "0ms",
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isItemActive(item) {
    return item.expanded;
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemGroup(item) {
    return ObjectUtils.isNotEmpty(item.items);
  }
  getPanelId(index, item) {
    return item && item.id ? item.id : `${this.id}_${index}`;
  }
  getHeaderId(item, index) {
    return item.id ? item.id + "_header" : `${this.getPanelId(index)}_header`;
  }
  getContentId(item, index) {
    return item.id ? item.id + "_content" : `${this.getPanelId(index)}_content`;
  }
  updateFocusedHeader(event) {
    const {
      originalEvent,
      focusOnNext,
      selfCheck
    } = event;
    const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
    const header = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
    header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
  }
  changeFocusedHeader(event, element) {
    element && DomHandler.focus(element);
  }
  findNextHeader(panelElement, selfCheck = false) {
    const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
    const headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
  }
  findPrevHeader(panelElement, selfCheck = false) {
    const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
    const headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
  }
  findFirstHeader() {
    return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
  }
  findLastHeader() {
    return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
  }
  onHeaderClick(event, item, index) {
    if (this.isItemDisabled(item)) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (!this.multiple) {
      for (let modelItem of this.model) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    this.changeActiveItem(event, item, index);
    this.animating = true;
    DomHandler.focus(event.currentTarget);
  }
  onHeaderKeyDown(event, item, index) {
    switch (event.code) {
      case "ArrowDown":
        this.onHeaderArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onHeaderArrowUpKey(event);
        break;
      case "Home":
        this.onHeaderHomeKey(event);
        break;
      case "End":
        this.onHeaderEndKey(event);
        break;
      case "Enter":
      case "Space":
        this.onHeaderEnterKey(event, item, index);
        break;
      default:
        break;
    }
  }
  onHeaderArrowDownKey(event) {
    const rootList = DomHandler.getAttribute(event.currentTarget, "data-p-highlight") === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onHeaderArrowUpKey(event) {
    const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
    const rootList = DomHandler.getAttribute(prevHeader, "data-p-highlight") === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: false
    });
    event.preventDefault();
  }
  onHeaderHomeKey(event) {
    this.changeFocusedHeader(event, this.findFirstHeader());
    event.preventDefault();
  }
  onHeaderEndKey(event) {
    this.changeFocusedHeader(event, this.findLastHeader());
    event.preventDefault();
  }
  onHeaderEnterKey(event, item, index) {
    const headerAction = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
    headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
    event.preventDefault();
  }
  static ɵfac = function PanelMenu_Factory(t) {
    return new (t || _PanelMenu)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenu,
    selectors: [["p-panelMenu"]],
    contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function PanelMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
      transitionOptions: "transitionOptions",
      id: "id",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute]
    },
    features: [ɵɵInputTransformsFeature],
    decls: 3,
    vars: 5,
    consts: [["container", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "p-panelmenu-panel", 3, "ngClass", "ngStyle"], ["role", "button", 3, "click", "keydown", "ngClass", "ngStyle", "pTooltip", "tabindex", "tooltipOptions"], [1, "p-panelmenu-header-content"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-toggleable-content", "role", "region", 3, "ngClass", 4, "ngIf"], ["class", "p-panelmenu-header-action", 3, "target", 4, "ngIf"], [1, "p-panelmenu-header-action", 3, "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["role", "region", 1, "p-toggleable-content", 3, "ngClass"], [1, "p-panelmenu-content"], [3, "headerFocus", "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded"]],
    template: function PanelMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 3, 0);
        ɵɵtemplate(2, PanelMenu_ng_container_2_Template, 2, 1, "ng-container", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, ChevronDownIcon, ChevronRightIcon, PanelMenuList],
    styles: [_c9],
    encapsulation: 2,
    data: {
      animation: [trigger("rootItem", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenu, [{
    type: Component,
    args: [{
      selector: "p-panelMenu",
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'" #container>
            <ng-container *ngFor="let item of model; let f = first; let l = last; let i = index">
                <div *ngIf="isItemVisible(item)" class="p-panelmenu-panel" [ngClass]="getItemProp(item, 'headerClass')" [ngStyle]="getItemProp(item, 'style')" [attr.data-pc-section]="'panel'">
                    <div
                        [ngClass]="{ 'p-component p-panelmenu-header': true, 'p-highlight': isItemActive(item), 'p-disabled': isItemDisabled(item) }"
                        [class]="getItemProp(item, 'styleClass')"
                        [ngStyle]="getItemProp(item, 'style')"
                        [pTooltip]="getItemProp(item, 'tooltip')"
                        [attr.id]="getHeaderId(item, i)"
                        [tabindex]="0"
                        role="button"
                        [tooltipOptions]="getItemProp(item, 'tooltipOptions')"
                        [attr.aria-expanded]="isItemActive(item)"
                        [attr.aria-label]="getItemProp(item, 'label')"
                        [attr.aria-controls]="getContentId(item, i)"
                        [attr.aria-disabled]="isItemDisabled(item)"
                        [attr.data-p-highlight]="isItemActive(item)"
                        [attr.data-p-disabled]="isItemDisabled(item)"
                        [attr.data-pc-section]="'header'"
                        (click)="onHeaderClick($event, item, i)"
                        (keydown)="onHeaderKeyDown($event, item, i)"
                    >
                        <div class="p-panelmenu-header-content">
                            <ng-container *ngIf="!itemTemplate">
                                <a
                                    *ngIf="!getItemProp(item, 'routerLink')"
                                    [attr.href]="getItemProp(item, 'url')"
                                    [attr.tabindex]="-1"
                                    [target]="getItemProp(item, 'target')"
                                    [attr.title]="getItemProp(item, 'title')"
                                    class="p-panelmenu-header-action"
                                    [attr.data-pc-section]="'headeraction'"
                                >
                                    <ng-container *ngIf="isItemGroup(item)">
                                        <ng-container *ngIf="!submenuIconTemplate">
                                            <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                            <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                        </ng-container>
                                        <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                    </ng-container>
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                    <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                                </a>
                            </ng-container>
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            <a
                                *ngIf="getItemProp(item, 'routerLink')"
                                [routerLink]="getItemProp(item, 'routerLink')"
                                [queryParams]="getItemProp(item, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(item, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(item, 'target')"
                                class="p-panelmenu-header-action"
                                [attr.tabindex]="-1"
                                [fragment]="getItemProp(item, 'fragment')"
                                [queryParamsHandling]="getItemProp(item, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(item, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(item, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(item, 'replaceUrl')"
                                [state]="getItemProp(item, 'state')"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!submenuIconTemplate">
                                        <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                        <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                        </div>
                    </div>
                    <div
                        *ngIf="isItemGroup(item)"
                        class="p-toggleable-content"
                        [ngClass]="{ 'p-panelmenu-expanded': isItemActive(item) }"
                        [@rootItem]="getAnimation(item)"
                        (@rootItem.done)="onToggleDone()"
                        role="region"
                        [attr.id]="getContentId(item, i)"
                        [attr.aria-labelledby]="getHeaderId(item, i)"
                        [attr.data-pc-section]="'toggleablecontent'"
                    >
                        <div class="p-panelmenu-content" [attr.data-pc-section]="'menucontent'">
                            <p-panelMenuList
                                [panelId]="getPanelId(i, item)"
                                [items]="getItemProp(item, 'items')"
                                [itemTemplate]="itemTemplate"
                                [transitionOptions]="transitionOptions"
                                [root]="true"
                                [activeItem]="activeItem()"
                                [tabindex]="tabindex"
                                [parentExpanded]="isItemActive(item)"
                                (headerFocus)="updateFocusedHeader($event)"
                            ></p-panelMenuList>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
      animations: [trigger("rootItem", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var PanelMenuModule = class _PanelMenuModule {
  static ɵfac = function PanelMenuModule_Factory(t) {
    return new (t || _PanelMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PanelMenuModule,
    declarations: [PanelMenu, PanelMenuSub, PanelMenuList],
    imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
    exports: [PanelMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
      exports: [PanelMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [PanelMenu, PanelMenuSub, PanelMenuList]
    }]
  }], null, null);
})();
export {
  PanelMenu,
  PanelMenuList,
  PanelMenuModule,
  PanelMenuSub
};
//# sourceMappingURL=primeng_panelmenu.js.map
