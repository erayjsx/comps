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
let DropdownComponent = class DropdownComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.items = ["Item 1", "Item 2", "Item 3"];
    }
    render() {
        return html `
      <select>
        ${this.items.map((item) => html `<option>${item}</option>`)}
      </select>
    `;
    }
};
DropdownComponent.styles = css `
    select {
      padding: 8px;
      font-size: 1em;
    }
  `;
__decorate([
    property({ type: Array }),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "items", void 0);
DropdownComponent = __decorate([
    customElement("dropdown-component")
], DropdownComponent);
export { DropdownComponent };
//# sourceMappingURL=dropdown-component.js.map