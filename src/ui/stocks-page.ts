import { AppElement, html } from './app-element';
import './stock-element';

class StocksPage extends AppElement {

  render () {
    const stock = {
      'company': 'Apple',
      'name': 'APPL'
    };

    return html`<stock-element .stock=${stock} />`
  }
}

customElements.define('stocks-page', StocksPage);