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
let ButtonComponent = class ButtonComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.label = "Click Me";
    }
    render() {
        return html `<button @click=${this._handleClick}>${this.label}</button>`;
    }
    _handleClick() {
        console.log("Button clicked!");
    }
};
ButtonComponent.styles = css `
    button {
      padding: 8px 16px;
      font-size: 1em;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
    }
  `;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "label", void 0);
ButtonComponent = __decorate([
    customElement("button-component")
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button-component.js.map