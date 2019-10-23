import { AppElement, html } from './app-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './stock-element';
import store from '../store/store';
import { property } from 'lit-element';

class NewsPage extends connect(store)(AppElement) {
  stateChanged(state) {
    this.news = {name: state.context.params.stockId};
  }

  //@property()
  news = {
    'company': 'Noticia A',
    'name': 'AAAA'
  };

  render () {
    return html`${this.news.name}`
  }
}

customElements.define('news-page', NewsPage);