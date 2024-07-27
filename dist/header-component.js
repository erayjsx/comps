import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
class HeaderComponent extends LitElement {
    constructor() {
        super();
        this.logo = 'Logo';
        this.menuItems = [];
        this.rightSectionItems = [];
        this.menuOpen = false;
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    connectedCallback() {
        super.connectedCallback();
        const menuItemsAttr = this.getAttribute('data-menu-items');
        const rightSectionItemsAttr = this.getAttribute('data-right-section-items');
        if (menuItemsAttr) {
            this.menuItems = JSON.parse(menuItemsAttr);
        }
        if (rightSectionItemsAttr) {
            this.rightSectionItems = JSON.parse(rightSectionItemsAttr);
        }
    }
    render() {
        return html `
      <header>
        <div class="logo">${this.logo}</div>
        <nav class=${classMap({ open: this.menuOpen })}>
          ${this.menuItems.map(item => html `<a href="${item.link}">${item.name}</a>`)}
        </nav>
        <div class="right-section">
          ${this.rightSectionItems.map(item => html `<a href="${item.link}">${item.name}</a>`)}
          <div class="menu-icon" @click=${this.toggleMenu}>☰</div>
        </div>
      </header>
    `;
    }
}
HeaderComponent.styles = css `
    :host {
      display: block;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background: #333;
      color: white;
    }
    .logo {
      font-size: 1.5em;
    }
    nav {
      display: flex;
      gap: 20px;
    }
    nav a {
      color: white;
      text-decoration: none;
    }
    .right-section {
      display: flex;
      gap: 20px;
    }
    .menu-icon {
      display: none;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      nav {
        display: none;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        background: #333;
        padding: 10px 20px;
      }
      nav.open {
        display: flex;
      }
      .menu-icon {
        display: block;
      }
    }
  `;
HeaderComponent.properties = {
    logo: { type: String },
    menuItems: { type: Array },
    rightSectionItems: { type: Array },
    menuOpen: { type: Boolean }
};
customElements.define('header-component', HeaderComponent);
//# sourceMappingURL=header-component.js.map