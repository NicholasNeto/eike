import { AppElement, html } from './app-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './stock-element';
import store from '../store/store';

class StocksPage extends connect(store)(AppElement) {

  render () {
    const stock = {
      'company': 'Banco Inter',
      'name': 'BIDI4'
    };

    return html`<stock-element .stock=${stock} />`
  }
}

customElements.define('stocks-page', StocksPage);
