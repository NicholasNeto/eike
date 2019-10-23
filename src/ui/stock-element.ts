
import { AppElement, html } from './app-element';

class StockElement extends AppElement {

  static get properties() {
    return {
      stock: { type: Object }
    }
  }

  render() {
    const stock = this.stock

    return html`
      <a href='/${stock.name}' style="display: flex; justify-content: space-between;" class="sf-clickable sf-body m-normal">

        <div class="p-normal">
          <div>
            <span class="ts-title">${stock.company}</span>
            <span class="ts-footnote">${stock.name}</span>
          </div>
          <div>
            <span> 0.5% </span>
          </div>
        </div>

        <div style="width:100px;" class="sf-secondary p-normal">
          Gráfico
        </div>

      </a>
    `
  }
  disconnectedCallback() { }

}

customElements.define('stock-element', StockElement);