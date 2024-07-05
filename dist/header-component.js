var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let HeaderComponent = class HeaderComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = "Default Title";
    }
    render() {
        return html `<header>${this.title}</header>`;
    }
};
HeaderComponent.styles = css `
    :host {
      display: block;
      background-color: #f8f8f8;
      padding: 16px;
      font-size: 1.5em;
      text-align: center;
    }
  `;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = __decorate([
    customElement("header-component")
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header-component.js.map