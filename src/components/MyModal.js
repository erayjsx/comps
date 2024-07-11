import { LitElement, html, css } from 'lit';

export class ModalComponent extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
    modalId: { type: String },
    toggleClass: { type: String },
    speedOpen: { type: Number },
    speedClose: { type: Number },
  };

  static styles = css`
    :host {
      display: contents;
    }
    .hidden {
      display: none;
    }
  `;

  constructor() {
    super();
    this.isOpen = false;
    this.modalId = '';
    this.toggleClass = 'hidden';
    this.speedOpen = 50;
    this.speedClose = 250;
  }

  firstUpdated() {
    this.modalElement = this.shadowRoot.getElementById(this.modalId);
    this.overlayElement = this.shadowRoot.querySelector('[data-modal-overlay]');
    this.wrapperElement = this.shadowRoot.querySelector('[data-modal-wrapper]');
    this.inputElement = this.shadowRoot.querySelector('[data-modal-input-focus]');
    
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  render() {
    return html`
      <div id="${this.modalId}" class="${this.isOpen ? '' : this.toggleClass}">
        <div data-modal-overlay>
          <div data-modal-wrapper>
            <slot></slot>
            <button @click="${this.close}" data-modal-close>Close</button>
          </div>
        </div>
      </div>
    `;
  }

  open() {
    this.isOpen = true;
    document.documentElement.style.overflow = 'hidden';
    
    setTimeout(() => {
      if (this.overlayElement) {
        this.toggleClasses(this.overlayElement, true);
      }
      if (this.wrapperElement) {
        this.toggleClasses(this.wrapperElement, true);
      }
      if (this.inputElement) {
        this.inputElement.focus();
      }
      this.trapFocus();
    }, this.speedOpen);
  }

  close() {
    if (this.overlayElement) {
      this.toggleClasses(this.overlayElement, false);
    }
    if (this.wrapperElement) {
      this.toggleClasses(this.wrapperElement, false);
    }

    document.documentElement.style.overflow = '';

    setTimeout(() => {
      this.isOpen = false;
    }, this.speedClose);
  }

  toggleClasses(element, isOpening) {
    const inClasses = element.getAttribute('data-class-in').split(' ');
    const outClasses = element.getAttribute('data-class-out').split(' ');
    
    if (isOpening) {
      element.classList.remove(...outClasses);
      element.classList.add(...inClasses);
    } else {
      element.classList.remove(...inClasses);
      element.classList.add(...outClasses);
    }
  }

  trapFocus() {
    const focusableEls = this.modalElement.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    this.modalElement.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

  handleKeydown(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.close();
    }
  }
}

customElements.define('modal-component', ModalComponent);