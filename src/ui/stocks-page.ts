import { AppElement, html } from './app-element';
import './stock-element';

class StocksPage extends AppElement {
  render () {
    return html`<stock-element stock-company='Maçã'/>`
  }
}

customElements.define('stocks-page', StocksPage);