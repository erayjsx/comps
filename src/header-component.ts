import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("header-component")
export class HeaderComponent extends LitElement {
  @property({ type: String }) title = "Default Title";

  static styles = css`
    :host {
      display: block;
      background-color: #f8f8f8;
      padding: 16px;
      font-size: 1.5em;
      text-align: center;
    }
  `;

  render() {
    return html`<header>${this.title}</header>`;
  }
}
