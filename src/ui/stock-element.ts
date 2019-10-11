
import { AppElement, html } from './app-element';

class StockElement extends AppElement {
  render() {
    const stockCompany = this.getAttribute('stock-company');
    return html`
      <div>
        <span>${stockCompany}</span>
        <span> ACÃO </span>
      </div>
      <span> 1st Headline </span>
    `
  }
  disconnectedCallback() { }

}

customElements.define('stock-element', StockElement);