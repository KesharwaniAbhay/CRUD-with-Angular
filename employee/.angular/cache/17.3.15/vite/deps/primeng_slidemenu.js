import {
  Tooltip,
  TooltipModule
} from "./chunk-MQHORFN6.js";
import {
  AngleRightIcon
} from "./chunk-C4GXG3M2.js";
import {
  Ripple,
  RippleModule
} from "./chunk-2OCB5YNS.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-DN72CV5U.js";
import "./chunk-YJEWT77P.js";
import "./chunk-MB3FLFHM.js";
import {
  BaseIcon
} from "./chunk-KJHM36LJ.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-5SF6BQZ2.js";
import {
  ObjectUtils,
  UniqueComponentId,
  zindexutils
} from "./chunk-FPSJESYG.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-E3RKQ3P6.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
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
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  effect,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PTQGSKSK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-icons-caretleft.mjs
var CaretLeftIcon = class _CaretLeftIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCaretLeftIcon_BaseFactory;
    return function CaretLeftIcon_Factory(t) {
      return (ɵCaretLeftIcon_BaseFactory || (ɵCaretLeftIcon_BaseFactory = ɵɵgetInheritedFactory(_CaretLeftIcon)))(t || _CaretLeftIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CaretLeftIcon,
    selectors: [["CaretLeftIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5553 13C10.411 13.0006 10.2704 12.9538 10.1554 12.8667L3.04473 7.53369C2.96193 7.4716 2.89474 7.39108 2.84845 7.29852C2.80217 7.20595 2.77808 7.10388 2.77808 7.00039C2.77808 6.8969 2.80217 6.79484 2.84845 6.70227C2.89474 6.60971 2.96193 6.52919 3.04473 6.4671L10.1554 1.13412C10.2549 1.05916 10.3734 1.0136 10.4976 1.0026C10.6217 0.991605 10.7464 1.01561 10.8575 1.0719C10.9668 1.12856 11.0584 1.21398 11.1226 1.31893C11.1869 1.42388 11.2212 1.54438 11.222 1.66742V12.3334C11.2212 12.4564 11.1869 12.5769 11.1226 12.6819C11.0584 12.7868 10.9668 12.8722 10.8575 12.9289C10.7629 12.9735 10.6599 12.9977 10.5553 13ZM4.55574 7.00039L9.88871 11.0001V3.00066L4.55574 7.00039Z", "fill", "currentColor"]],
    template: function CaretLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaretLeftIcon, [{
    type: Component,
    args: [{
      selector: "CaretLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.5553 13C10.411 13.0006 10.2704 12.9538 10.1554 12.8667L3.04473 7.53369C2.96193 7.4716 2.89474 7.39108 2.84845 7.29852C2.80217 7.20595 2.77808 7.10388 2.77808 7.00039C2.77808 6.8969 2.80217 6.79484 2.84845 6.70227C2.89474 6.60971 2.96193 6.52919 3.04473 6.4671L10.1554 1.13412C10.2549 1.05916 10.3734 1.0136 10.4976 1.0026C10.6217 0.991605 10.7464 1.01561 10.8575 1.0719C10.9668 1.12856 11.0584 1.21398 11.1226 1.31893C11.1869 1.42388 11.2212 1.54438 11.222 1.66742V12.3334C11.2212 12.4564 11.1869 12.5769 11.1226 12.6819C11.0584 12.7868 10.9668 12.8722 10.8575 12.9289C10.7629 12.9735 10.6599 12.9977 10.5553 13ZM4.55574 7.00039L9.88871 11.0001V3.00066L4.55574 7.00039Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-slidemenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0, a1, a2) => ({
  "p-submenu-list": a0,
  "p-slidemenu-root-list": a1,
  "p-active-submenu": a2
});
var _c2 = (a0, a1, a2, a3, a4) => ({
  "width.px": a0,
  "left.px": a1,
  "transition-property": a2,
  "transition-duration": a3,
  "transition-timing-function": a4
});
var _c3 = (a0) => ({
  "p-menuitem-link": true,
  "p-disabled": a0
});
var _c4 = () => ({
  exact: false
});
function SlideMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.getItemId(processedItem_r2))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getSeparatorItemClass(processedItem_r2));
    ɵɵattribute("data-pc-section", "separator");
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.slideMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.slideMenu.submenuIconTemplate);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, SlideMenuSub_ng_template_2_li_1_a_3_span_1_Template, 1, 5, "span", 14)(2, SlideMenuSub_ng_template_2_li_1_a_3_span_2_Template, 2, 2, "span", 15)(3, SlideMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, SlideMenuSub_ng_template_2_li_1_a_3_span_5_Template, 2, 2, "span", 16)(6, SlideMenuSub_ng_template_2_li_1_a_3_ng_container_6_Template, 3, 2, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(12, _c3, ctx_r2.getItemProp(processedItem_r2, "disabled")));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("aria-hidden", true)("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.slideMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.slideMenu.submenuIconTemplate);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, SlideMenuSub_ng_template_2_li_1_a_4_span_1_Template, 1, 5, "span", 14)(2, SlideMenuSub_ng_template_2_li_1_a_4_span_2_Template, 2, 2, "span", 15)(3, SlideMenuSub_ng_template_2_li_1_a_4_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, SlideMenuSub_ng_template_2_li_1_a_4_span_5_Template, 2, 2, "span", 16)(6, SlideMenuSub_ng_template_2_li_1_a_4_ng_container_6_Template, 3, 2, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c4))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(22, _c3, ctx_r2.getItemProp(processedItem_r2, "disabled")))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"));
    ɵɵattribute("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1)("aria-hidden", true)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-slideMenuSub", 27);
    ɵɵlistener("itemClick", function SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_5_Template_p_slideMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_5_Template_p_slideMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemMouseEnter.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", processedItem_r2.items)("autoDisplay", ctx_r2.autoDisplay)("menuId", ctx_r2.menuId)("activeItemPath", ctx_r2.activeItemPath)("focusedItemId", ctx_r2.focusedItemId)("level", ctx_r2.level + 1)("menuWidth", ctx_r2.menuWidth);
  }
}
function SlideMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 1)(2, "div", 9);
    ɵɵlistener("click", function SlideMenuSub_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r2));
    })("mouseenter", function SlideMenuSub_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemMouseEnter.emit({
        originalEvent: $event,
        processedItem: processedItem_r2
      }));
    });
    ɵɵtemplate(3, SlideMenuSub_ng_template_2_li_1_a_3_Template, 7, 14, "a", 10)(4, SlideMenuSub_ng_template_2_li_1_a_4_Template, 7, 24, "a", 11);
    ɵɵelementEnd();
    ɵɵtemplate(5, SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_5_Template, 1, 7, "p-slideMenuSub", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const processedItem_r2 = ctx_r7.$implicit;
    const index_r9 = ctx_r7.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.getItemProp(processedItem_r2, "styleClass"));
    ɵɵproperty("id", ctx_r2.getItemId(processedItem_r2))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getItemClass(processedItem_r2))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("data-pc-section", "menuitem")("data-p-highlight", ctx_r2.isItemActive(processedItem_r2))("data-p-focused", ctx_r2.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2))("aria-label", ctx_r2.getItemLabel(processedItem_r2))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r2) || void 0)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "to") ? "menu" : void 0)("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : void 0)("aria-level", ctx_r2.level + 1)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r9));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2));
  }
}
function SlideMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SlideMenuSub_ng_template_2_li_0_Template, 1, 4, "li", 5)(1, SlideMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.getItemProp(processedItem_r2, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "separator"));
  }
}
var _c5 = ["rootmenu"];
var _c6 = ["container"];
var _c7 = ["backward"];
var _c8 = ["slideMenuContent"];
var _c9 = (a0) => ({
  "p-slidemenu p-component": true,
  "p-slidemenu-overlay": a0
});
var _c10 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c11 = (a0) => ({
  value: "visible",
  params: a0
});
var _c12 = (a0, a1) => ({
  height: a0,
  width: a1
});
var _c13 = (a0) => ({
  display: a0
});
var _c14 = () => ({
  "vertical-align": "middle"
});
function SlideMenu_div_0_CaretLeftIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CaretLeftIcon", 12);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-slidemenu-backward-icon")("ngStyle", ɵɵpureFunction0(2, _c14));
  }
}
function SlideMenu_div_0_10_ng_template_0_Template(rf, ctx) {
}
function SlideMenu_div_0_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SlideMenu_div_0_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SlideMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5, 0);
    ɵɵlistener("click", function SlideMenu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function SlideMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function SlideMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "div", 6)(3, "div", 7, 1);
    ɵɵlistener("focus", function SlideMenu_div_0_Template_div_focus_3_listener($event) {
      ɵɵrestoreView(_r1);
      const slideMenuContent_r3 = ɵɵreference(4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.logFocus($event, slideMenuContent_r3));
    });
    ɵɵelementStart(5, "p-slideMenuSub", 8, 2);
    ɵɵlistener("itemClick", function SlideMenu_div_0_Template_p_slideMenuSub_itemClick_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("menuFocus", function SlideMenu_div_0_Template_p_slideMenuSub_menuFocus_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuFocus($event));
    })("menuKeydown", function SlideMenu_div_0_Template_p_slideMenuSub_menuKeydown_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function SlideMenu_div_0_Template_p_slideMenuSub_itemMouseEnter_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(7, "a", 9, 3);
    ɵɵlistener("click", function SlideMenu_div_0_Template_a_click_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goBack($event));
    })("keydown", function SlideMenu_div_0_Template_a_keydown_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationKeyDown($event));
    });
    ɵɵtemplate(9, SlideMenu_div_0_CaretLeftIcon_9_Template, 1, 3, "CaretLeftIcon", 10)(10, SlideMenu_div_0_10_Template, 1, 0, null, 11);
    ɵɵelementStart(11, "span");
    ɵɵtext(12);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("id", ctx_r1.id)("ngClass", ɵɵpureFunction1(30, _c9, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction1(35, _c11, ɵɵpureFunction2(32, _c10, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵattribute("data-pc-section", "root")("data-pc-name", "slidemenu");
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(37, _c12, ctx_r1.left ? ctx_r1.viewportHeight + "px" : "auto", ctx_r1.menuWidth + "px"));
    ɵɵadvance(3);
    ɵɵproperty("root", true)("items", ctx_r1.processedItems)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("autoDisplay", ctx_r1.autoDisplay)("menuWidth", ctx_r1.menuWidth)("popup", ctx_r1.popup)("effectDuration", ctx_r1.effectDuration)("easing", ctx_r1.easing)("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath());
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(40, _c13, ctx_r1.left ? "block" : "none"));
    ɵɵattribute("data-pc-section", "navigation");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.backIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.backIconTemplate);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.backLabel);
  }
}
var SlideMenuSub = class _SlideMenuSub {
  document;
  el;
  renderer;
  cd;
  slideMenu;
  items;
  menuWidth;
  root = false;
  easing = "ease-out";
  effectDuration;
  autoDisplay;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath;
  tabindex = 0;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  get isActive() {
    return -this.slideMenu.left == this.level * this.menuWidth;
  }
  constructor(document, el, renderer, cd, slideMenu) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.slideMenu = slideMenu;
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem": true,
      "p-menuitem-active": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem-separator": true
    });
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    }
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
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
    event.preventDefault();
  }
  onMenuKeyDown(event) {
    this.menuKeydown.emit(event);
  }
  static ɵfac = function SlideMenuSub_Factory(t) {
    return new (t || _SlideMenuSub)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(forwardRef(() => SlideMenu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SlideMenuSub,
    selectors: [["p-slideMenuSub"]],
    viewQuery: function SlideMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      items: "items",
      menuWidth: [InputFlags.HasDecoratorInputTransform, "menuWidth", "menuWidth", numberAttribute],
      root: [InputFlags.HasDecoratorInputTransform, "root", "root", booleanAttribute],
      easing: "easing",
      effectDuration: [InputFlags.HasDecoratorInputTransform, "effectDuration", "effectDuration", numberAttribute],
      autoDisplay: [InputFlags.HasDecoratorInputTransform, "autoDisplay", "autoDisplay", booleanAttribute],
      autoZIndex: [InputFlags.HasDecoratorInputTransform, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [InputFlags.HasDecoratorInputTransform, "baseZIndex", "baseZIndex", numberAttribute],
      popup: [InputFlags.HasDecoratorInputTransform, "popup", "popup", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [InputFlags.HasDecoratorInputTransform, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: "activeItemPath",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 3,
    vars: 21,
    consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "keydown", "focusin", "ngClass", "id", "ngStyle", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "id", "ngStyle", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "id", "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "id", "ngStyle", "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "id", "ngStyle", "ngClass", "tooltipOptions"], [1, "p-menuitem-content", 3, "click", "mouseenter"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-submenu", 3, "items", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "menuWidth", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [3, "data-pc-section", "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-submenu", 3, "itemClick", "itemMouseEnter", "items", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "menuWidth"]],
    template: function SlideMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 3, 0);
        ɵɵlistener("keydown", function SlideMenuSub_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuKeydown.emit($event));
        })("focusin", function SlideMenuSub_Template_ul_focusin_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuFocus.emit($event));
        });
        ɵɵtemplate(2, SlideMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction3(11, _c1, !ctx.root, ctx.root, ctx.isActive))("id", ctx.menuId + "_list")("ngStyle", ɵɵpureFunction5(15, _c2, ctx.menuWidth, ctx.root ? ctx.slideMenu.left : ctx.slideMenu.menuWidth, ctx.root ? "left" : "none", ctx.effectDuration + "ms", ctx.easing))("tabindex", ctx.tabindex);
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-aria-activedescendant", ctx.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu")("data-pc-state", ctx.isActive ? "active" : "inactive");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleRightIcon, _SlideMenuSub],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlideMenuSub, [{
    type: Component,
    args: [{
      selector: "p-slideMenuSub",
      template: `
        <ul
            #sublist
            role="menu"
            [ngClass]="{ 'p-submenu-list': !root, 'p-slidemenu-root-list': root, 'p-active-submenu': isActive }"
            [id]="menuId + '_list'"
            [ngStyle]="{
                'width.px': menuWidth,
                'left.px': root ? slideMenu.left : slideMenu.menuWidth,
                'transition-property': root ? 'left' : 'none',
                'transition-duration': effectDuration + 'ms',
                'transition-timing-function': easing
            }"
            [tabindex]="tabindex"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
            [attr.aria-aria-activedescendant]="focusedItemId"
            [attr.aria-orientation]="'vertical'"
            [attr.data-pc-section]="'menu'"
            (keydown)="menuKeydown.emit($event)"
            (focusin)="menuFocus.emit($event)"
            [attr.data-pc-state]="isActive ? 'active' : 'inactive'"
        >
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [id]="getItemId(processedItem)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getSeparatorItemClass(processedItem)"
                    role="separator"
                    [attr.data-pc-section]="'separator'"
                ></li>
                <li
                    #listItem
                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                    role="menuitem"
                    [id]="getItemId(processedItem)"
                    [attr.data-pc-section]="'menuitem'"
                    [attr.data-p-highlight]="isItemActive(processedItem)"
                    [attr.data-p-focused]="isItemFocused(processedItem)"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [attr.aria-label]="getItemLabel(processedItem)"
                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getItemClass(processedItem)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    pTooltip
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div [attr.data-pc-section]="'content'" class="p-menuitem-content" (click)="onItemClick($event, processedItem)" (mouseenter)="itemMouseEnter.emit({ originalEvent: $event, processedItem })">
                        <a
                            *ngIf="!getItemProp(processedItem, 'routerLink')"
                            [attr.href]="getItemProp(processedItem, 'url')"
                            [attr.aria-hidden]="true"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [attr.data-pc-section]="'action'"
                            [target]="getItemProp(processedItem, 'target')"
                            [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                            [attr.tabindex]="-1"
                            pRipple
                        >
                            <span
                                *ngIf="getItemProp(processedItem, 'icon')"
                                class="p-menuitem-icon"
                                [ngClass]="getItemProp(processedItem, 'icon')"
                                [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                [attr.data-pc-section]="'icon'"
                                [attr.aria-hidden]="true"
                                [attr.tabindex]="-1"
                            >
                            </span>
                            <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="'label'">
                                {{ getItemLabel(processedItem) }}
                            </span>
                            <ng-template #htmlLabel>
                                <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                            </ng-template>
                            <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>

                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <AngleRightIcon *ngIf="!slideMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true" />
                                <ng-template *ngTemplateOutlet="slideMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="getItemProp(processedItem, 'routerLink')"
                            [routerLink]="getItemProp(processedItem, 'routerLink')"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [attr.tabindex]="-1"
                            [attr.aria-hidden]="true"
                            [attr.data-pc-section]="'action'"
                            [queryParams]="getItemProp(processedItem, 'queryParams')"
                            [routerLinkActive]="'p-menuitem-link-active'"
                            [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                            [target]="getItemProp(processedItem, 'target')"
                            [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                            [fragment]="getItemProp(processedItem, 'fragment')"
                            [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                            [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                            [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                            [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                            [state]="getItemProp(processedItem, 'state')"
                            pRipple
                        >
                            <span
                                *ngIf="getItemProp(processedItem, 'icon')"
                                class="p-menuitem-icon"
                                [ngClass]="getItemProp(processedItem, 'icon')"
                                [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                [attr.data-pc-section]="'icon'"
                                [attr.aria-hidden]="true"
                                [attr.tabindex]="-1"
                            >
                            </span>
                            <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="'label'">
                                {{ getItemLabel(processedItem) }}
                            </span>
                            <ng-template #htmlLabel>
                                <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                            </ng-template>
                            <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>

                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <AngleRightIcon *ngIf="!slideMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true" />
                                <ng-template *ngTemplateOutlet="slideMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                            </ng-container>
                        </a>
                    </div>

                    <p-slideMenuSub
                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        class="p-submenu"
                        [items]="processedItem.items"
                        [autoDisplay]="autoDisplay"
                        [menuId]="menuId"
                        [activeItemPath]="activeItemPath"
                        [focusedItemId]="focusedItemId"
                        [level]="level + 1"
                        [menuWidth]="menuWidth"
                        (itemClick)="itemClick.emit($event)"
                        (itemMouseEnter)="itemMouseEnter.emit($event)"
                    ></p-slideMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: SlideMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => SlideMenu)]
    }]
  }], {
    items: [{
      type: Input
    }],
    menuWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    easing: [{
      type: Input
    }],
    effectDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist", {
        static: true
      }]
    }]
  });
})();
var SlideMenu = class _SlideMenu {
  document;
  platformId;
  el;
  renderer;
  cd;
  config;
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Width of the submenus.
   * @group Props
   */
  menuWidth = 190;
  /**
   * Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.
   * @group Props
   */
  viewportHeight = 180;
  /**
   * Duration of the sliding animation in milliseconds.
   * @group Props
   */
  effectDuration = 250;
  /**
   * Easing animation to use for sliding.
   * @group Props
   */
  easing = "ease-out";
  /**
   * Label of element to navigate back.
   * @group Props
   */
  backLabel = "Back";
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
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
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
   * @group Props
   */
  appendTo;
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
   * Whether to show a root submenu on mouse over.
   * @defaultValue true
   * @group Props
   */
  autoDisplay = true;
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
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  templates;
  rootmenu;
  containerViewChild;
  set backward(element) {
    this.backwardViewChild = element;
  }
  slideMenuContentViewChild;
  submenuIconTemplate;
  backIconTemplate;
  outsideClickListener;
  resizeListener;
  transitionEndListener;
  transitionStartListener;
  backwardViewChild;
  transition = false;
  left = 0;
  animating = false;
  target;
  visible;
  relativeAlign;
  window;
  focused = false;
  activeItemPath = signal([]);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: ""
  });
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  container;
  itemClick = false;
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(focusedItem.parentKey) ? "_" + focusedItem.parentKey : ""}_${focusedItem.index}` : null;
  }
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
    effect(() => {
      const path = this.activeItemPath();
      if (this.popup) {
        if (ObjectUtils.isNotEmpty(path)) {
          this.bindOutsideClickListener();
          this.bindResizeListener();
        } else {
          this.unbindOutsideClickListener();
          this.unbindResizeListener();
        }
      }
    });
  }
  documentFocusListener;
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "backicon":
          this.backIconTemplate = item.template;
          break;
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
      }
    });
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
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
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
  }
  goBack(event) {
    this.animate("left");
    event.stopPropagation();
    event.preventDefault();
  }
  onItemClick(event) {
    if (this.transition) {
      return;
    } else {
      if (!this.itemClick) {
        this.itemClick = true;
        this.onMenuFocus();
      }
      const {
        originalEvent,
        processedItem
      } = event;
      const grouped = this.isProcessedItemGroup(processedItem);
      const focusedItemInfo = this.focusedItemInfo();
      if (grouped) {
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: -1,
          level: focusedItemInfo.level + 1,
          parentKey: processedItem.key,
          item: processedItem.item
        }));
        this.animate("right");
      } else {
        this.onItemChange(event);
        this.popup && this.hide();
      }
    }
  }
  onItemMouseEnter(event) {
    this.onItemChange(event);
  }
  onKeyDown(event) {
    if (!this.transition) {
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
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
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
  }
  onNavigationKeyDown(event) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.onArrowLeftKey(event);
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: -1,
          item: null
        }));
        break;
      default:
        break;
    }
  }
  animate(to) {
    switch (to) {
      case "right":
        this.left -= this.menuWidth;
        break;
      case "left":
        this.left += this.menuWidth;
        break;
      default:
        break;
    }
    this.animating = true;
    setTimeout(() => this.animating = false, this.effectDuration);
  }
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const focusedItemInfo = this.focusedItemInfo();
    if (focusedItemInfo.index === -1) {
      focusedItemInfo.index = 0;
    }
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      let {
        index,
        level,
        key,
        item
      } = processedItem;
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: 0,
        level,
        parentKey: key
      });
      this.searchValue = "";
      this.animate("right");
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.popup && this.hide(event, true);
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const focusedItemInfo = this.focusedItemInfo();
    if (focusedItemInfo.index === -1) {
      focusedItemInfo.index = 0;
    }
    const processedItem = this.visibleItems[focusedItemInfo.index];
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    if (!root) {
      let {
        level,
        index,
        parentKey
      } = parentItem;
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item: parentItem.item
      });
      this.searchValue = "";
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== focusedItemInfo.parentKey);
    this.activeItemPath.set(activeItemPath);
    parentItem && this.animate("left");
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    if (this.popup) {
      this.hide(event, true);
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        index: this.findLastFocusedItemIndex(),
        item: null
      }));
      event.preventDefault();
    }
  }
  onTabKey(event) {
    if (this.backwardViewChild.nativeElement.style.display !== "none") {
      this.backwardViewChild.nativeElement.focus();
    }
    if (this.popup && !this.containerViewChild.nativeElement.contains(event.target)) {
      this.hide();
    }
    event.preventDefault();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onArrowRightKey(event);
      } else {
        const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
        anchorElement ? anchorElement.click() : element && element.click();
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: processedItem.index,
          item: processedItem.item
        }));
      }
    }
    event.preventDefault();
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    grouped && activeItemPath.push(processedItem);
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item
    });
    this.activeItemPath.set(activeItemPath);
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
  }
  onMenuFocus() {
    this.focused = true;
    this.bindOutsideClickListener();
    this.bindTransitionListeners();
    if (!this.left && this.focusedItemInfo().level > 0) {
      this.focusedItemInfo.set({
        index: 0,
        level: 0,
        parentKey: "",
        item: this.findVisibleItem(0).item
      });
    }
    if (this.focusedItemInfo().index === -1 && this.left < 0) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, this.focusedItemInfo()), {
        index: 0
      }));
    }
    if (this.focusedItemInfo().index === -1 && !this.left) {
      this.focusedItemInfo.set({
        index: 0,
        level: 0,
        parentKey: "",
        item: this.findVisibleItem(0).item
      });
    }
  }
  onMenuBlur() {
    this.focused = false;
    this.popup && this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    if (!this.popup) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, this.focusedItemInfo()), {
        index: -1,
        item: null
      }));
    }
    this.searchValue = "";
    !this.popup && this.unbindOutsideClickListener();
  }
  activeLevel = signal(0);
  bindTransitionListeners() {
    if (!this.transitionStartListener) {
      this.transitionStartListener = this.renderer.listen(this.rootmenu.sublistViewChild.nativeElement, "transitionstart", (event) => {
        this.transition = true;
        event.preventDefault();
      });
    }
    if (!this.transitionEndListener) {
      this.transitionEndListener = this.renderer.listen(this.rootmenu.sublistViewChild.nativeElement, "transitionend", (event) => {
        const activeMenu = DomHandler.findSingle(this.rootmenu.el.nativeElement, `ul[data-pc-state="active"]`);
        const activeLevel = DomHandler.getAttribute(activeMenu.firstElementChild, "aria-level") - 1;
        this.activeLevel.set(activeLevel);
        if (!this.left) {
          this.rootmenu.sublistViewChild.nativeElement.focus();
        } else {
          const activeLevel2 = DomHandler.getAttribute(activeMenu.firstElementChild, "aria-level") - 1;
          this.activeLevel.set(activeLevel2);
          if (this.focusedItemInfo().level > this.activeLevel()) {
            let newActiveItemPath = this.activeItemPath().slice(0, this.activeItemPath().length - 1);
            let lastActiveParent = newActiveItemPath[newActiveItemPath.length - 1];
            this.focusedItemInfo.set({
              index: -1,
              level: this.activeLevel(),
              parentKey: lastActiveParent.key
            });
            this.activeItemPath.set(newActiveItemPath);
          }
        }
        this.transition = false;
        event.preventDefault();
      });
    }
  }
  unbindTransitionListeners() {
    if (this.transitionEndListener) {
      this.transitionEndListener();
      this.transitionEndListener = null;
    }
    if (this.transitionStartListener) {
      this.transitionStartListener();
      this.transitionStartListener = null;
    }
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindOutsideClickListener();
          this.bindResizeListener();
          DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
          this.scrollInView();
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) DomHandler.relativePosition(this.container, this.target);
    else DomHandler.absolutePosition(this.container, this.target);
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.containerViewChild.nativeElement);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.containerViewChild && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide(event, isFocus) {
    if (this.popup) {
      this.onHide.emit({});
      this.visible = false;
    }
    isFocus && DomHandler.focus(this.target || this.rootmenu.sublistViewChild.nativeElement);
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    this.visible ? this.hide(event, true) : this.show(event);
  }
  /**
   * Displays the popup menu.
   * @param {Event} even - Browser event.
   * @group Method
   */
  show(event, isFocus) {
    if (this.popup) {
      this.visible = true;
      this.target = event.currentTarget;
    }
    this.focusedItemInfo.set({
      index: this.findFirstFocusedItemIndex(),
      level: 0,
      parentKey: ""
    });
    if (!this.popup) {
      isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    }
    this.cd.markForCheck();
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
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
  findVisibleItem(index) {
    return ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  changeFocusedItemIndex(event, index) {
    if (this.focusedItemInfo().index !== index) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, this.focusedItemInfo()), {
        index
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!DomHandler.isTouchDevice()) {
            this.hide(event, true);
          }
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.containerViewChild && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;
          if (this.popup) {
            if (isOutsideContainer && isOutsideTarget) {
              this.onMenuBlur();
              this.hide();
            }
          } else {
            if (isOutsideContainer && isOutsideTarget && this.focused) {
              this.onMenuBlur();
            }
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onOverlayHide() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.left = 0;
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container) {
      this.container = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    this.unbindTransitionListeners();
  }
  static ɵfac = function SlideMenu_Factory(t) {
    return new (t || _SlideMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SlideMenu,
    selectors: [["p-slideMenu"]],
    contentQueries: function SlideMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SlideMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
        ɵɵviewQuery(_c7, 5);
        ɵɵviewQuery(_c8, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.backward = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slideMenuContentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      menuWidth: [InputFlags.HasDecoratorInputTransform, "menuWidth", "menuWidth", numberAttribute],
      viewportHeight: [InputFlags.HasDecoratorInputTransform, "viewportHeight", "viewportHeight", numberAttribute],
      effectDuration: [InputFlags.HasDecoratorInputTransform, "effectDuration", "effectDuration", numberAttribute],
      easing: "easing",
      backLabel: "backLabel",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      popup: [InputFlags.HasDecoratorInputTransform, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [InputFlags.HasDecoratorInputTransform, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [InputFlags.HasDecoratorInputTransform, "baseZIndex", "baseZIndex", numberAttribute],
      autoDisplay: [InputFlags.HasDecoratorInputTransform, "autoDisplay", "autoDisplay", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["slideMenuContent", ""], ["rootmenu", ""], ["backward", ""], [3, "id", "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "id", "ngClass", "ngStyle"], [1, "p-slidemenu-wrapper", 3, "ngStyle"], [1, "p-slidemenu-content", 3, "focus"], [3, "itemClick", "menuFocus", "menuKeydown", "itemMouseEnter", "root", "items", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "autoDisplay", "menuWidth", "popup", "effectDuration", "easing", "focusedItemId", "activeItemPath"], ["tabindex", "0", 1, "p-slidemenu-backward", "p-menuitem-link", 3, "click", "keydown", "ngStyle"], [3, "styleClass", "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle"]],
    template: function SlideMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SlideMenu_div_0_Template, 13, 42, "div", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, CaretLeftIcon, SlideMenuSub],
    styles: ["@layer primeng{.p-slidemenu .p-slidemenu-root-list{position:relative;top:0}.p-slidemenu-overlay{position:absolute;top:0;left:0}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu ul{margin:0;padding:0;list-style:none}.p-slidemenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative;height:100%}.p-slidemenu .p-menuitem-link:not(.p-slidemenu-backward){cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-slidemenu .p-menuitem-text{line-height:1}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-slidemenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-slidemenu .p-menuitem-active>p-slidemenusub>.p-submenu-list{display:block;left:100%;top:0}.p-slidemenu .p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:block}.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active),.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}.p-slidemenu-backward{position:absolute;bottom:0;width:100%;cursor:pointer;display:none}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}}\n"],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlideMenu, [{
    type: Component,
    args: [{
      selector: "p-slideMenu",
      template: `
        <div
            #container
            [attr.data-pc-section]="'root'"
            [attr.data-pc-name]="'slidemenu'"
            [id]="id"
            [ngClass]="{ 'p-slidemenu p-component': true, 'p-slidemenu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            *ngIf="!popup || visible"
        >
            <div
                class="p-slidemenu-wrapper"
                [ngStyle]="{
                    height: left ? viewportHeight + 'px' : 'auto',
                    width: menuWidth + 'px'
                }"
            >
                <div #slideMenuContent class="p-slidemenu-content" (focus)="logFocus($event, slideMenuContent)">
                    <p-slideMenuSub
                        #rootmenu
                        [root]="true"
                        [items]="processedItems"
                        [menuId]="id"
                        [tabindex]="!disabled ? tabindex : -1"
                        [ariaLabel]="ariaLabel"
                        [ariaLabelledBy]="ariaLabelledBy"
                        [baseZIndex]="baseZIndex"
                        [autoZIndex]="autoZIndex"
                        [autoDisplay]="autoDisplay"
                        [menuWidth]="menuWidth"
                        [popup]="popup"
                        [effectDuration]="effectDuration"
                        [easing]="easing"
                        [focusedItemId]="focused ? focusedItemId : undefined"
                        [activeItemPath]="activeItemPath()"
                        (itemClick)="onItemClick($event)"
                        (menuFocus)="onMenuFocus($event)"
                        (menuKeydown)="onKeyDown($event)"
                        (itemMouseEnter)="onItemMouseEnter($event)"
                    ></p-slideMenuSub>
                </div>
                <a
                    #backward
                    class="p-slidemenu-backward p-menuitem-link"
                    tabindex="0"
                    [ngStyle]="{
                        display: left ? 'block' : 'none'
                    }"
                    (click)="goBack($event)"
                    (keydown)="onNavigationKeyDown($event)"
                    [attr.data-pc-section]="'navigation'"
                >
                    <CaretLeftIcon *ngIf="!backIconTemplate" [styleClass]="'p-slidemenu-backward-icon'" [ngStyle]="{ 'vertical-align': 'middle' }" />
                    <ng-template *ngTemplateOutlet="backIconTemplate"></ng-template>
                    <span>{{ backLabel }}</span>
                </a>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-slidemenu .p-slidemenu-root-list{position:relative;top:0}.p-slidemenu-overlay{position:absolute;top:0;left:0}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu ul{margin:0;padding:0;list-style:none}.p-slidemenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative;height:100%}.p-slidemenu .p-menuitem-link:not(.p-slidemenu-backward){cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-slidemenu .p-menuitem-text{line-height:1}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-slidemenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-slidemenu .p-menuitem-active>p-slidemenusub>.p-submenu-list{display:block;left:100%;top:0}.p-slidemenu .p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:block}.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active),.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}.p-slidemenu-backward{position:absolute;bottom:0;width:100%;cursor:pointer;display:none}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}}\n"]
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
    model: [{
      type: Input
    }],
    menuWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    viewportHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    effectDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    easing: [{
      type: Input
    }],
    backLabel: [{
      type: Input
    }],
    disabled: [{
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
    popup: [{
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
    appendTo: [{
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
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    backward: [{
      type: ViewChild,
      args: ["backward"]
    }],
    slideMenuContentViewChild: [{
      type: ViewChild,
      args: ["slideMenuContent"]
    }]
  });
})();
var SlideMenuModule = class _SlideMenuModule {
  static ɵfac = function SlideMenuModule_Factory(t) {
    return new (t || _SlideMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SlideMenuModule,
    declarations: [SlideMenu, SlideMenuSub],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, CaretLeftIcon],
    exports: [SlideMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, CaretLeftIcon, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlideMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, CaretLeftIcon],
      exports: [SlideMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [SlideMenu, SlideMenuSub]
    }]
  }], null, null);
})();
export {
  SlideMenu,
  SlideMenuModule,
  SlideMenuSub
};
//# sourceMappingURL=primeng_slidemenu.js.map
