import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3WZWM3WO.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-2FPE2ERJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Subject,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PTQGSKSK.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-terminal.mjs
function Terminal_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.welcomeMessage);
  }
}
function Terminal_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 9);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 10);
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const command_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.prompt);
    ɵɵadvance(2);
    ɵɵtextInterpolate(command_r4.text);
    ɵɵadvance();
    ɵɵattribute("aria-live", "polite");
    ɵɵadvance();
    ɵɵtextInterpolate(command_r4.response);
  }
}
var TerminalService = class _TerminalService {
  commandSource = new Subject();
  responseSource = new Subject();
  commandHandler = this.commandSource.asObservable();
  responseHandler = this.responseSource.asObservable();
  sendCommand(command) {
    if (command) {
      this.commandSource.next(command);
    }
  }
  sendResponse(response) {
    if (response) {
      this.responseSource.next(response);
    }
  }
  static ɵfac = function TerminalService_Factory(t) {
    return new (t || _TerminalService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TerminalService,
    factory: _TerminalService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminalService, [{
    type: Injectable
  }], null, null);
})();
var Terminal = class _Terminal {
  el;
  terminalService;
  cd;
  /**
   * Initial text to display on terminal.
   * @group Props
   */
  welcomeMessage;
  /**
   * Prompt text for each command.
   * @group Props
   */
  prompt;
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
  commands = [];
  command;
  container;
  commandProcessed;
  subscription;
  constructor(el, terminalService, cd) {
    this.el = el;
    this.terminalService = terminalService;
    this.cd = cd;
    this.subscription = terminalService.responseHandler.subscribe((response) => {
      this.commands[this.commands.length - 1].response = response;
      this.commandProcessed = true;
    });
  }
  ngAfterViewInit() {
    this.container = DomHandler.find(this.el.nativeElement, ".p-terminal")[0];
  }
  ngAfterViewChecked() {
    if (this.commandProcessed) {
      this.container.scrollTop = this.container.scrollHeight;
      this.commandProcessed = false;
    }
  }
  set response(value) {
    if (value) {
      this.commands[this.commands.length - 1].response = value;
      this.commandProcessed = true;
    }
  }
  handleCommand(event) {
    if (event.keyCode == 13) {
      this.commands.push({
        text: this.command
      });
      this.terminalService.sendCommand(this.command);
      this.command = "";
    }
  }
  focus(element) {
    element.focus();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function Terminal_Factory(t) {
    return new (t || _Terminal)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TerminalService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Terminal,
    selectors: [["p-terminal"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      welcomeMessage: "welcomeMessage",
      prompt: "prompt",
      style: "style",
      styleClass: "styleClass",
      response: "response"
    },
    decls: 9,
    vars: 8,
    consts: [["in", ""], [3, "click", "ngClass", "ngStyle"], [4, "ngIf"], [1, "p-terminal-content"], [4, "ngFor", "ngForOf"], [1, "p-terminal-prompt-container"], [1, "p-terminal-content-prompt"], ["type", "text", "autocomplete", "off", "autofocus", "", 1, "p-terminal-input", 3, "ngModelChange", "keydown", "ngModel"], [1, "p-terminal-prompt"], [1, "p-terminal-command"], [1, "p-terminal-response"]],
    template: function Terminal_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("click", function Terminal_Template_div_click_0_listener() {
          ɵɵrestoreView(_r1);
          const in_r2 = ɵɵreference(8);
          return ɵɵresetView(ctx.focus(in_r2));
        });
        ɵɵtemplate(1, Terminal_div_1_Template, 2, 1, "div", 2);
        ɵɵelementStart(2, "div", 3);
        ɵɵtemplate(3, Terminal_div_3_Template, 7, 4, "div", 4);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 5)(5, "span", 6);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "input", 7, 0);
        ɵɵtwoWayListener("ngModelChange", function Terminal_Template_input_ngModelChange_7_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.command, $event) || (ctx.command = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("keydown", function Terminal_Template_input_keydown_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleCommand($event));
        });
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-terminal p-component")("ngStyle", ctx.style);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.welcomeMessage);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.commands);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.prompt);
        ɵɵadvance();
        ɵɵtwoWayProperty("ngModel", ctx.command);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgStyle, DefaultValueAccessor, NgControlStatus, NgModel],
    styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Terminal, [{
    type: Component,
    args: [{
      selector: "p-terminal",
      template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">
            <div *ngIf="welcomeMessage">{{ welcomeMessage }}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{ prompt }}</span>
                    <span class="p-terminal-command">{{ command.text }}</span>
                    <div class="p-terminal-response" [attr.aria-live]="'polite'">{{ command.response }}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{ prompt }}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus />
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TerminalService
  }, {
    type: ChangeDetectorRef
  }], {
    welcomeMessage: [{
      type: Input
    }],
    prompt: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    response: [{
      type: Input
    }]
  });
})();
var TerminalModule = class _TerminalModule {
  static ɵfac = function TerminalModule_Factory(t) {
    return new (t || _TerminalModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TerminalModule,
    declarations: [Terminal],
    imports: [CommonModule, FormsModule],
    exports: [Terminal]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminalModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      exports: [Terminal],
      declarations: [Terminal]
    }]
  }], null, null);
})();
export {
  Terminal,
  TerminalModule,
  TerminalService
};
//# sourceMappingURL=primeng_terminal.js.map
