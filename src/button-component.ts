import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("button-component")
export class ButtonComponent extends LitElement {
  @property({ type: String }) label = "Click Me";

  static styles = css`
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

  render() {
    return html`<button @click=${this._handleClick}>${this.label}</button>`;
  }

  private _handleClick() {
    console.log("Button clicked!");
  }
}
