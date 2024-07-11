import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dropdown-component")
export class DropdownComponent extends LitElement {
  @property({ type: Array }) items = ["Item 1", "Item 2", "Item 3"];

  static styles = css`
    select {
      padding: 8px;
      font-size: 1em;
    }
  `;

  render() {
    return html`
      <select>
        ${this.items.map((item) => html`<option>${item}</option>`)}
      </select>
    `;
  }
}
